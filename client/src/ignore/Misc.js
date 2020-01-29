// export const setPlaneTwo = data => async dispatch => {
//   const details = await data;

//   // console.log("details", data);
//   const planeOneObj = {
//     combat: [details[1]],
//     profile: [details[1]],
//     guns: details[6].map((items, index) => {
//       return {
//         ["Gun" + " " + index + 1]: items.name_i18n,
//         ["Gun Type" + " " + index + 1]: items.type_i18n,
//         ["Gun Level" + " " + index + 1]: items.level
//       };
//     }),
//     bombs: details[3].map((items, index) => {
//       // console.log(items);
//       return {
//         ["Bomb" + " " + index + 1]: items.name_i18n,
//         ["explosion_radius" + " " + index + 1]: items.explosion_radius,
//         ["explosion_damage_max" + " " + index + 1]: items.explosion_damage_max,
//         ["Bomb Level" + " " + index + 1]: items.level
//       };
//     })
//   };
//   dispatch({
//     type: SET_PLANE_TWO,
//     payload: planeOneObj
//   });
// };

// export const fetchAllWeapons = () => async dispatch => {
//   const requestOne = axios.get("http://localhost:5000/api/planes");
//   const requestTwo = axios.get("http://localhost:5000/api/tanks");
//   const requestThree = axios.get("http://localhost:5000/api/warships");

//   axios.all([requestOne, requestTwo, requestThree]).then(
//     axios.spread((...responses) => {
//       const responseOne = [responses[0].data];

//       // console.log("responseOne", responseOne);
//       const responseTwo = [responses[1].data];
//       const responseThree = [responses[2].data];

//       dispatch({
//         type: FETCH_ALL_WEAPONS,
//         payload: [...responseOne, ...responseTwo, ...responseThree]
//       });
//     })
//   );
// };

// export const fetchWeapons = () => async dispatch => {
//   const requestOne = axios.get("http://localhost:5000/api/planes");
//   const requestTwo = axios.get("http://localhost:5000/api/tanks");
//   const requestThree = axios.get("http://localhost:5000/api/warships");

//   axios.all([requestOne, requestTwo, requestThree]).then(
//     axios.spread((...responses) => {
//       // const responseOne = [responses[0].data];
//       // console.log("responseOne", responseOne);
//       // const responseTwo = [responses[1].data];
//       // const responseThree = [responses[2].data];
//       // const weapons = [...responseOne, ...responseTwo, ...responseThree];

//       const responseOne = responses[0].data;
//       const responseTwo = responses[1].data;
//       const responseThree = responses[2].data;

//       const weapons = [
//         { planes: responseOne, tanks: responseTwo, ships: responseThree }
//       ];
//       // console.log("Weapons", weapons);
//       dispatch(setWeaponsDetails(weapons));
//     })
//   );
// };

// export const setWeaponsDetails = data => async dispatch => {
//   // console.log("Weapons Data", data);
//   const weapons = await data.map(item => {
//     const objPlane = Object.values(item.planes).map(item => {
//       return {
//         id: item.plane_id,
//         ...item,
//         name: item.name_i18n,
//         nation: item.nation_i18n,
//         card: item.images.large,
//         description:
//           "World War II witnessed tremendous growth in the size of American military aviation, from about 2,500 airplanes to nearly 300,000 by the war’s end.",
//         icon: "plane",
//         weapon: "Warplane",
//         weaponType: "plane"
//       };
//     });
//     const objTank = Object.values(item.tanks).map(item => {
//       return {
//         ...item,
//         id: item.tank_id,
//         name: item.name,
//         card: item.images.normal,
//         profile: [item.default_profile].map((item, index) => {
//           return {
//             Weight: item.weight,
//             Firepower: item.firepower,
//             shot_efficiency: item.shot_efficiency,
//             signal_range: item.signal_range,
//             speed_forward: item.speed_forward,
//             battle_level_range_min: item.battle_level_range_min,
//             speed_backward: item.speed_backward,
//             engine: item.engine.name,
//             max_ammo: item.max_ammo,
//             battle_level_range_max: item.battle_level_range_max,
//             Horsepower: item.hp,
//             protection: item.protection,
//             max_weight: item.max_weight,
//             maneuverability: item.maneuverability
//           };
//         }),
//         combat: [item.default_profile].map((item, index) => {
//           return {
//             Firepower: item.firepower,
//             shot_efficiency: item.shot_efficiency,
//             signal_range: item.signal_range,
//             speed_forward: item.speed_forward,
//             battle_level_range_min: item.battle_level_range_min,
//             max_ammo: item.max_ammo,
//             battle_level_range_max: item.battle_level_range_max,
//             protection: item.protection,
//             maneuverability: item.maneuverability
//           };
//         }),
//         gun: [item.default_profile.gun],
//         shells: [item.default_profile.shells].map((items, index) => {
//           return items.map((item, index) => {
//             const shellType = item.type
//               .toLowerCase()
//               .split("_")
//               .map(item => {
//                 return item.charAt(0).toUpperCase() + item.slice(1);
//               });

//             const num = index + 1;
//             return {
//               ["Shell Type" + " " + num]: shellType[0] + " " + shellType[1]
//             };
//           });
//         }),
//         armor: [item.default_profile.armor.hull],
//         icon: "chess knight",
//         weapon: "Armored Vehicle",
//         weaponType: "tank"
//       };
//     });
//     const objShip = Object.values(item.ships).map(item => {
//       return {
//         ...item,
//         id: item.ship_id,
//         name: item.name.slice(1, -1),
//         card: item.images.large,
//         combat: [item.default_profile].map((items, index) => {
//           // console.log(items);
//           const obj = {
//             battle_level_range_min: items.battle_level_range_min,
//             battle_level_range_max: items.battle_level_range_max,
//             turning_radius: items.mobility.turning_radius,
//             max_speed: items.mobility.max_speed,
//             max_range: items.hull.range.max,
//             armour: items.armour.health,
//             detect_distance_by_plane:
//               items.concealment.detect_distance_by_plane,
//             detect_distance_by_ship: items.concealment.detect_distance_by_ship,
//             anti_aircraft: items.weaponry.anti_aircraft,
//             aircraft: items.weaponry.aircraft,
//             artillery: items.weaponry.artillery,
//             torpedoes: items.weaponry.torpedoes
//           };
//           console.log(obj);
//           return obj;
//         }),
//         profile: [item.default_profile].map((items, index) => {
//           // console.log(items);
//           const obj = {
//             battle_level_range_min: items.battle_level_range_min,
//             engine: items.engine.engine_id_str,
//             battle_level_range_max: items.battle_level_range_max,
//             rudder_time: items.mobility.rudder_time,
//             turning_radius: items.mobility.turning_radius,
//             max_speed: items.mobility.max_speed,
//             max_range: items.hull.range.max,
//             armour: items.armour.health,
//             hull_health: items.hull.health,
//             detect_distance_by_plane:
//               items.concealment.detect_distance_by_plane,
//             detect_distance_by_ship: items.concealment.detect_distance_by_ship
//           };
//           return obj;
//         }),
//         antiaircraft: [item.default_profile].map((items, index) => {
//           if (items.anti_aircraft === null) {
//             return "N/A";
//           } else {
//             return Object.values(items.anti_aircraft.slots).map(
//               (item, index) => {
//                 // console.log(item);
//                 const num = index + 1;
//                 return {
//                   ["Antiaircraft" + " " + num]:
//                     item.name +
//                     " " +
//                     "Damage:" +
//                     " " +
//                     item.avg_damage +
//                     " " +
//                     "at distance of" +
//                     " " +
//                     item.distance +
//                     " " +
//                     "miles"
//                   // damage: item.avg_damage,
//                   // distance: item.distance
//                 };
//               }
//             );
//           }
//         }),
//         artillery: [item.default_profile].map((items, index) => {
//           if (items.artillery === null) {
//             return "N/A";
//           } else {
//             if (items.artillery.shells === null) {
//               return "N/A";
//             } else {
//               return Object.values(items.artillery.shells).map(
//                 (item, index) => {
//                   const num = index + 1;
//                   return {
//                     ["Artillery" + " " + num]:
//                       item.name + " " + "Damage:" + " " + item.damage
//                   };
//                 }
//               );
//             }
//           }
//         }),
//         torpedoes: [item.default_profile].map((items, index) => {
//           // console.log(items.torpedoes);
//           if (items.torpedoes === null) {
//             return [];
//           } else {
//             return [items.torpedoes].map((item, index) => {
//               // console.log(item);
//               const num = index + 1;
//               return {
//                 ["Torpedo" + " " + num]:
//                   item.torpedo_name +
//                   " " +
//                   "w/ visibility of" +
//                   " " +
//                   item.visibility_dist +
//                   " " +
//                   "and distance of" +
//                   " " +
//                   item.distance +
//                   " " +
//                   "miles"
//                 // visibility: item.visibility_dist,
//                 // distance: item.distance
//               };
//             });
//           }
//         }),
//         // armor: [item.default_profile.concealment].map(items =>
//         //   console.log(items)
//         // ),
//         icon: "ship",
//         weapon: "Warship",
//         weaponType: "ship"
//       };
//     });
//     return [...objPlane, ...objTank, ...objShip];
//   });
//   // console.log("Weapons Details", weapons);
//   dispatch({
//     type: SET_WEAPONS_DETAILS,
//     payload: weapons
//   });
// };

// addItemToDetails = async itemId => {
//   // console.log("firing", )

//   const foundWeapon = this.props.weapons.find(item => {
//     return item.id === itemId;
//   });
//   // console.log("foundWeapon", foundWeapon);

//   if (foundWeapon) {
//     fetch(`http://localhost:5000/api/weapons/${foundWeapon.id}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(weapon => {
//         console.log("weaponResponse", weapon);
//         if (weapon === null) {
//           this.setState({
//             detailsWeapon: [],
//             detailsWeapon: [foundWeapon],
//             showBattlePage: false,
//             compareItems: []
//             // showDetails: !this.state.showDetails
//           });
//         } else {
//           const reformatedWeapon = [weapon]
//             .concat([foundWeapon])
//             .map(item => {
//               return item;
//             });
//           return this.setState({
//             detailsWeapon: [],
//             detailsWeapon: [
//               { ...reformatedWeapon[0], ...reformatedWeapon[1] }
//             ],
//             showBattlePage: false,
//             compareItems: []
//             // showDetails: !this.state.showDetails
//           });
//         }
//       });
//   } else {
//     alert("No Weapon Found");
//   }
// };

// export function fetchUserFavorites(id) {
//   console.log("User id", id);
//   return dispatch => {
//     return fetch("http://localhost:5000/api/favorites", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ id })
//     }).then(response => {
//       let data = response.json();
//       console.log("Data One", data);
//       dispatch(setUserFavorites(data));
//     });
//   };
// }

// import React, { Component } from "react";
// import {
//   Card,
//   Image,
//   Segment,
//   Grid,
//   Table,
//   Icon,
//   Header
// } from "semantic-ui-react";
// import { connect } from "react-redux";

// class BattleCont extends Component {
//   state = { battleWinner: [], battleLoser: [] };

//   componentWillMount() {
//     if (this.props.compareItems.length === 2) {
//       if (this.props.scoreOne > this.props.scoreTwo) {
//         return this.setState({
//           battleWinner: this.props.compareItems[0],
//           battleLoser: this.props.compareItems[1]
//         });

//         //    alert(this.state.compareItems[0].name + " " + "Wins")
//       } else if (this.props.scoreOne < this.props.scoreTwo) {
//         return this.setState({
//           battleWinner: this.props.compareItems[1],
//           battleLoser: this.props.compareItems[0]
//         });
//       } else {
//         alert("The Battle has Resulted in a Tie");
//       }
//     }
//   }

//   render() {
//     console.log(
//       "Battle Cont Props",
//       Object.values(this.state.battleWinner.profile)
//     );

//     const winnerProfile = this.state.battleWinner.profile[0];

//     const loserProfile = this.state.battleLoser.profile[0];

//     return (
//       <Segment
//         style={{
//           "background-color": "#F5F5F5"
//         }}
//       >
//         <Grid
//           columns={3}
//           style={{
//             "background-color": "#F5F5F5"
//           }}
//         >
//           <Grid.Column width={4} centered>
//             <Card fluid>
//               <Image src={this.state.battleWinner.card} wrapped ui={false} />
//               <Card.Content>
//                 <Card.Header>{this.state.battleWinner.name}</Card.Header>

//                 <Card.Description>
//                   {this.state.battleWinner.name + " is the Winner"}
//                 </Card.Description>
//               </Card.Content>
//             </Card>
//           </Grid.Column>

//           <Grid.Column
//             width={6}
//             style={{
//               overflow: "auto",
//               maxHeight: 400,
//               minHeight: 400
//             }}
//           >
//             <Header as="h3">
//               <Icon name="settings" />
//               <Header.Content>
//                 Winner - {this.state.battleWinner.name}
//               </Header.Content>
//             </Header>
//             <Table celled striped>
//               <Table.Body>
//                 {Object.entries(winnerProfile).map(([key, value]) => {
//                   let label = key
//                     .split("_")
//                     .map(word => {
//                       return word.charAt(0).toUpperCase() + word.slice(1);
//                     })
//                     .join();

//                   return (
//                     <Table.Row>
//                       <Table.Cell collapsing>
//                         <Icon name="folder" />
//                       </Table.Cell>
//                       <Table.Cell>{label.replace(/,/g, " ")}</Table.Cell>
//                       <Table.Cell collapsing textAlign="right">
//                         {value}
//                       </Table.Cell>
//                     </Table.Row>
//                   );
//                 })}
//               </Table.Body>
//             </Table>
//           </Grid.Column>

//           <Grid.Column
//             width={6}
//             style={{
//               overflow: "auto",
//               maxHeight: 400,
//               minHeight: 400
//             }}
//           >
//             <Header as="h3">
//               <Icon name="settings" />
//               <Header.Content>
//                 Loser - {this.state.battleLoser.name}
//               </Header.Content>
//             </Header>
//             <Table celled striped>
//               <Table.Body>
//                 {Object.entries(loserProfile).map(([key, value]) => {
//                   let label = key
//                     .split("_")
//                     .map(word => {
//                       return word.charAt(0).toUpperCase() + word.slice(1);
//                     })
//                     .join();

//                   return (
//                     <Table.Row>
//                       <Table.Cell collapsing>
//                         <Icon name="folder" />
//                       </Table.Cell>
//                       <Table.Cell>{label.replace(/,/g, " ")}</Table.Cell>
//                       <Table.Cell collapsing textAlign="right">
//                         {value}
//                       </Table.Cell>
//                     </Table.Row>
//                   );
//                 })}
//               </Table.Body>
//             </Table>
//           </Grid.Column>
//         </Grid>
//       </Segment>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   scoreOne: state.weapon.scoreOne,
//   scoreTwo: state.weapon.scoreTwo
// });
// export default connect(mapStateToProps)(BattleCont);

weapons: [state.weapons.foundWeapon.default_profile].map(item => {
  const weapons = {
    torpedo_bomber: item.torpedo_bomber,
    fighters: item.fighters,
    dive_bomber: item.dive_bomber,
    anti_aircraft: item.anti_aircraft,
    secondary_weapon: item.atbas,
    artillery: item.artillery,
    torpedoes: item.torpedoes
  };
  return Object.entries(weapons)
    .map(([key, value], index) => {
      if (value !== null) {
        return { [key]: value };
      }
    })
    .filter(weapon => weapon !== undefined);
});

// weapons: [state.weapons.foundWeapon.default_profile]
//   .map(weapon => {
//     return {
//       ...Object.values(weapon.anti_aircraft.slots).map((item, index) => {
//         return { ["anti_aircraft_gun"]: item.name };
//       }),
//       ...Object.values(weapon.atbas.slots).map((item, index) => {
//         return { ["Secondary Armament"]: item.name };
//       }),
//       ...Object.values(weapon.artillery.slots).map((item, index) => {
//         return { ["artillery_gun"]: item.name };
//       }),
//       ...Object.values(weapon.artillery.shells).map((item, index) => {
//         return { ["artillery_shell"]: item.name };
//       }),
//       torpedoes: weapon.torpedoes,
//       fighters: weapon.fighters
//     };
//   })
//   .reduce((result, current) => {
//     return Object.assign(result, current);
//   }, {})
