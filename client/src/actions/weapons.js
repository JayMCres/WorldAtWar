import Tanks from "../api/TanksFetch";
import Planes from "../api/PlanesFetch";
import Ships from "../api/ShipsFetch";

export const FETCH_TANKS = "FETCH_TANKS";
export const FETCH_SHIPS = "FETCH_SHIPS";
export const FETCH_PLANES = "FETCH_PLANES";

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
