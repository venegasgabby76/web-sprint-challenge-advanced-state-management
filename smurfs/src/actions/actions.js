import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";

export const grabSmurfs = () => (dispatch) => {
    console.log("getSmurf action");
    dispatch({type: FETCH_SMURF_START});
    axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data});
        console.log("this is the api response", response);
    })
    .catch((error) => {
        dispatch ({ type: FETCH_SMURF_FAILED})
        console.log(error)
    })
}