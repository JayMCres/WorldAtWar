import Tanks from "../api/TanksFetch";

export const FETCH_TANKS = "FETCH_TANKS";

export const fetchTanks = () => async dispatch => {
  const response = await Tanks.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_TANKS, payload: response.data });
};
