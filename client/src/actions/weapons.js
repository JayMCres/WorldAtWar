import Tanks from "../api/TanksFetch";
import Planes from "../api/PlanesFetch";
import Ships from "../api/ShipsFetch";
// import Plane from "../api/PlaneFetch";

export const FETCH_TANKS = "FETCH_TANKS";
export const FETCH_SHIPS = "FETCH_SHIPS";
export const FETCH_PLANES = "FETCH_PLANES";
export const FETCH_PLANE = "FETCH_PLANE";
export const SET_PLANE_DETAILS = "SET_PLANE_DETAILS";

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
  dispatch({
    type: SET_PLANE_DETAILS,
    payload: details
  });
};
