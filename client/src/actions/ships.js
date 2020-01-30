import Ships from "../api/ShipsFetch";

export const FETCH_SHIPS = "FETCH_SHIPS";
export const FETCH_SHIP_WEAPONS = "FETCH_SHIP_WEAPONS";
export const SET_SHIP_WEAPON = "SET_SHIP_WEAPON";

export const fetchShips = () => async dispatch => {
  const response = await Ships.get();
  dispatch({ type: FETCH_SHIPS, payload: response.data });
};

export const fetchShipWeapons = data => async dispatch => {
  const ship = await data;
  console.log("Ship", ship);
  if (ship.type === "Battleship") {
    await dispatch(setBattleShip(ship));
  }
  if (ship.type === "AirCarrier") {
    await dispatch(setAirCarrier(ship));
  }
};

export const setBattleShip = ship => async dispatch => {
  let weapons = await [ship.default_profile].map(weapon => {
    return {
      ...Object.values(weapon.anti_aircraft.slots).map((item, index) => {
        return {
          ["weapon_" + index + "_" + "anti_aircraft_gun"]: item.name
        };
      }),
      ...Object.values(weapon.atbas.slots).map((item, index) => {
        return {
          ["weapon_" + index + "_" + "Secondary Armament"]: item.name
        };
      }),
      ...Object.values(weapon.artillery.slots).map((item, index) => {
        return {
          ["weapon_" + index + "_" + "artillery_gun"]: item.name
        };
      }),
      ...Object.values(weapon.artillery.shells).map((item, index) => {
        return {
          ["weapon_" + index + "_" + "artillery_shell"]: item.name
        };
      })
    };
  });

  const weapon = await Object.values(weapons[0]).reduce((result, current) => {
    return Object.assign(result, current);
  }, {});
  await dispatch(setShipWeapon(weapon));
};

export const setAirCarrier = ship => async dispatch => {
  let weapons = await [
    ...Object.values(ship.default_profile.anti_aircraft.slots).map(
      (weapon, index) => {
        let num = index + 1;
        return { name: weapon.name, ["distance_" + num]: weapon.distance };
      }
    ),
    ship.default_profile.torpedo_bomber,
    ship.default_profile.dive_bomber,
    ship.default_profile.fighters
  ].map((weapon, index) => {
    let num = index + 1;
    return { ["weapon_" + num]: weapon.name, ...weapon };
  });

  let weapon = await weapons.reduce((result, current) => {
    return Object.assign(result, current);
  }, {});

  const allowed = [
    "name",
    "accuracy",
    "count_in_squadron",
    "fighters_id",
    "torpedo_bomber_id_str",
    "torpedo_bomber_id",
    "dive_bomber_id",
    "fighters_id_str",
    "dive_bomber_id_str"
  ];

  const filtered = await Object.keys(weapon)
    .filter(key => !allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = weapon[key];
      return obj;
    }, {});

  // console.log("weapon ", filtered);
  await dispatch(setShipWeapon(filtered));
};

export const setShipWeapon = data => async dispatch => {
  // console.log("Data", data);

  dispatch({
    type: SET_SHIP_WEAPON,
    payload: data
  });
};
