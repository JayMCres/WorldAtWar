import Tanks from "../api/TanksFetch";
import Planes from "../api/PlanesFetch";
import Ships from "../api/ShipsFetch";

import axios from "axios";

export const FETCH_TANKS = "FETCH_TANKS";
export const FETCH_SHIPS = "FETCH_SHIPS";
export const FETCH_PLANES = "FETCH_PLANES";
export const FETCH_PLANE = "FETCH_PLANE";
export const FETCH_ALL_WEAPONS = "FETCH_ALL_WEAPONS";
export const SET_PLANE_DETAILS = "SET_PLANE_DETAILS";
export const SET_WEAPONS_DETAILS = "SET_WEAPONS_DETAILS";

export const fetchTanks = () => async dispatch => {
  const response = await Tanks.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_TANKS, payload: response.data });
};

export const fetchShips = () => async dispatch => {
  const response = await Ships.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_SHIPS, payload: response.data });
};

export const fetchPlanes = () => async dispatch => {
  const response = await Planes.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_PLANES, payload: response.data });
};

export function fetchPlane(id) {
  return dispatch => {
    return fetch("http://localhost:5000/api/plane", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(response => {
      let data = response.json();
      dispatch(setPlaneDetails(data));
    });
  };
}

export const setPlaneDetails = data => async dispatch => {
  const details = await data;
  // console.log("Plane Details", details);
  dispatch({
    type: SET_PLANE_DETAILS,
    payload: details
  });
};

export const fetchAllWeapons = () => async dispatch => {
  const requestOne = axios.get("http://localhost:5000/api/planes");
  const requestTwo = axios.get("http://localhost:5000/api/tanks");
  const requestThree = axios.get("http://localhost:5000/api/warships");

  axios.all([requestOne, requestTwo, requestThree]).then(
    axios.spread((...responses) => {
      const responseOne = [responses[0].data];

      // console.log("responseOne", responseOne);
      const responseTwo = [responses[1].data];
      const responseThree = [responses[2].data];

      dispatch({
        type: FETCH_ALL_WEAPONS,
        payload: [...responseOne, ...responseTwo, ...responseThree]
      });
    })
  );
};

export const fetchWeapons = () => async dispatch => {
  const requestOne = axios.get("http://localhost:5000/api/planes");
  const requestTwo = axios.get("http://localhost:5000/api/tanks");
  const requestThree = axios.get("http://localhost:5000/api/warships");

  axios.all([requestOne, requestTwo, requestThree]).then(
    axios.spread((...responses) => {
      // const responseOne = [responses[0].data];
      // console.log("responseOne", responseOne);
      // const responseTwo = [responses[1].data];
      // const responseThree = [responses[2].data];
      // const weapons = [...responseOne, ...responseTwo, ...responseThree];

      const responseOne = responses[0].data;
      const responseTwo = responses[1].data;
      const responseThree = responses[2].data;

      const weapons = [
        { planes: responseOne, tanks: responseTwo, ships: responseThree }
      ];
      // console.log("Weapons", weapons);
      dispatch(setWeaponsDetails(weapons));
    })
  );
};

export const setWeaponsDetails = data => async dispatch => {
  // console.log("Weapons Data", data);
  const weapons = await data.map(item => {
    const objPlane = Object.values(item.planes).map(item => {
      return {
        id: item.plane_id,
        ...item,
        name: item.name_i18n,
        nation: item.nation_i18n,
        card: item.images.large,
        description:
          "World War II witnessed tremendous growth in the size of American military aviation, from about 2,500 airplanes to nearly 300,000 by the war’s end.",
        icon: "plane",
        weapon: "Warplane",
        weaponType: "plane"
      };
    });
    const objTank = Object.values(item.tanks).map(item => {
      return {
        ...item,
        id: item.tank_id,
        name: item.name,
        card: item.images.normal,
        profile: [item.default_profile].map((item, index) => {
          return {
            Weight: item.weight,
            Firepower: item.firepower,
            shot_efficiency: item.shot_efficiency,
            signal_range: item.signal_range,
            speed_forward: item.speed_forward,
            battle_level_range_min: item.battle_level_range_min,
            speed_backward: item.speed_backward,
            engine: item.engine.name,
            max_ammo: item.max_ammo,
            battle_level_range_max: item.battle_level_range_max,
            Horsepower: item.hp,
            protection: item.protection,
            max_weight: item.max_weight,
            maneuverability: item.maneuverability
          };
        }),

        gun: [item.default_profile.gun],
        shells: [item.default_profile.shells].map((items, index) => {
          return items.map((item, index) => {
            const shellType = item.type
              .toLowerCase()
              .split("_")
              .map(item => {
                return item.charAt(0).toUpperCase() + item.slice(1);
              });

            const num = index + 1;
            return {
              ["Shell Type" + " " + num]: shellType[0] + " " + shellType[1]
            };
          });
        }),
        armor: [item.default_profile.armor.hull],
        icon: "chess knight",
        weapon: "Armored Vehicle",
        weaponType: "tank"
      };
    });
    const objShip = Object.values(item.ships).map(item => {
      return {
        ...item,
        id: item.ship_id,
        name: item.name.slice(1, -1),
        card: item.images.large,
        profile: item.default_profile,
        weapons: {
          ...item.default_profile.anti_aircraft,
          ...item.default_profile.atbas,
          ...item.default_profile.artillery
        },
        armor: item.default_profile.concealment,
        icon: "ship",
        weapon: "Warship",
        weaponType: "ship"
      };
    });
    return [...objPlane, ...objTank, ...objShip];
  });
  // console.log("Weapons Details", weapons);
  dispatch({
    type: SET_WEAPONS_DETAILS,
    payload: weapons
  });
};
