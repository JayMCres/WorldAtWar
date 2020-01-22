import Tanks from "../api/TanksFetch";
import Planes from "../api/PlanesFetch";
import Ships from "../api/ShipsFetch";

export const FETCH_TANKS = "FETCH_TANKS";
export const FETCH_SHIPS = "FETCH_SHIPS";
export const FETCH_PLANES = "FETCH_PLANES";
export const FETCH_PLANE = "FETCH_PLANE";
export const SET_PLANE = "SET_PLANE";
export const FETCH_PLANE_DETAILS = "FETCH_PLANE_DETAILS";
export const SET_PLANE_DETAILS = "SET_PLANE_DETAILS";
export const FETCH_PLANE_COMPARE = "FETCH_PLANE_COMPARE";
export const FETCH_PLANE_ONE = "FETCH_PLANE_ONE";
export const FETCH_PLANE_TWO = "FETCH_PLANE_TWO";
export const SET_PLANE_ONE = "SET_PLANE_ONE";
export const SET_PLANE_TWO = "SET_PLANE_TWO";
export const SET_SCORE_ONE = "SET_SCORE_ONE";
export const SET_SCORE_TWO = "SET_SCORE_TWO";

export const fetchTanks = () => async dispatch => {
  const response = await Tanks.get();
  // console.log(" tank response", Object.values(response.data));
  dispatch({ type: FETCH_TANKS, payload: Object.values(response.data) });
};

export const fetchShips = () => async dispatch => {
  const response = await Ships.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_SHIPS, payload: Object.values(response.data) });
};

export const fetchPlanes = () => async dispatch => {
  const response = await Planes.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_PLANES, payload: Object.values(response.data) });
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
      dispatch(setPlane(data));
    });
  };
}

export const setPlane = data => async dispatch => {
  const details = await data;
  let reformatedData = await [
    ...Object.values(details[0]),
    ...Object.values(details[1])
  ];

  dispatch({
    type: SET_PLANE,
    payload: reformatedData
  });
};

export function fetchPlaneOne(id) {
  return dispatch => {
    return fetch("http://localhost:5000/api/plane", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(response => {
      let data = response.json();
      // console.log("Data One", data);
      dispatch(setPlaneOne(data));
    });
  };
}

export function fetchPlaneTwo(id) {
  return dispatch => {
    return fetch("http://localhost:5000/api/plane", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(response => {
      let data = response.json();
      // console.log("Data One", data);
      dispatch(setPlaneTwo(data));
    });
  };
}

export const setPlaneOne = data => async dispatch => {
  const details = await data;
  let reformatedData = await [
    ...Object.values(details[0]),
    ...Object.values(details[1])
  ];

  dispatch({
    type: SET_PLANE_ONE,
    payload: reformatedData
  });
};
export const setPlaneTwo = data => async dispatch => {
  const details = await data;
  let reformatedData = await [
    ...Object.values(details[0]),
    ...Object.values(details[1])
  ];

  dispatch({
    type: SET_PLANE_TWO,
    payload: reformatedData
  });
};

export const setWeaponScoreOne = data => async dispatch => {
  const details = await data.combat;
  const weight = await (1 / Object.values(details[0]).length);
  // console.log("weight", weight);
  // prettier-ignore
  const scoreSum = await Object.values(details[0]).reduce((acc, item) => {
    let num = item * weight;
    return acc + num;
  }, 0);
  let score = await (scoreSum / Object.values(details[0]).length);
  dispatch({
    type: SET_SCORE_ONE,
    payload: score
  });
};

export const setWeaponScoreTwo = data => async dispatch => {
  const details = await data.combat;

  const weight = await (1 / Object.values(details[0]).length);
  // console.log("weight", weight);

  // prettier-ignore

  const scoreSum = await Object.values(details[0]).reduce((acc, item) => {
    let num = item * weight;
    return acc + num;
  }, 0);

  let score = await (scoreSum / Object.values(details[0]).length);
  console.log("Total Score", score);

  dispatch({
    type: SET_SCORE_TWO,
    payload: score
  });
};

export function fetchPlaneDetails(id) {
  return dispatch => {
    return fetch("http://localhost:5000/api/plane", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(response => {
      let data = response.json();
      // console.log("Data One", data);
      dispatch(setPlaneDetails(data));
    });
  };
}

export const setPlaneDetails = data => async dispatch => {
  const details = await data;

  let reformatedData = await [
    details[0].specification,
    ...details[1].gun,
    ...details[1].bomb
  ];
  console.log("reformatedData ", reformatedData);
  dispatch({
    type: SET_PLANE_DETAILS,
    payload: reformatedData
  });
};
