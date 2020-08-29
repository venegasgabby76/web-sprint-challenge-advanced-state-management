import axios from 'axios';


export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";
export const ADD_NEW_START = "ADD_NEW_START";
export const ADD_NEW_SUCCESS = "ADD_NEW_SUCCESS";
export const ADD_NEW_FAILED = "ADD_NEW_FAILED";

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

export const addSmurfs = (newSmurfs) => (dispatch) => {
    dispatch({type: ADD_NEW_START})
    axios 
    .post("http://localhost:3333/smurfs", newSmurfs)
    .then ((response) => {
        dispatch({type: ADD_NEW_SUCCESS, payload: response.data })
        console.log("we are going to be adding some smurfs here")
    })
    
    .catch(error => {
        console.log("your getting an error",error)
        dispatch({type: ADD_NEW_FAILED})
    })
}