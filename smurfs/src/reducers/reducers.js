import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILED,
    ADD_NEW_START,
    ADD_NEW_SUCCESS,
    ADD_NEW_FAILED
} from "../actions/actions"




export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case FETCH_SMURF_FAILED:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case ADD_NEW_START:
            return {
                ...state,
                smurfs: [...state.smurfs],
                isFetching: true
            }
        case ADD_NEW_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case ADD_NEW_FAILED:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        default:
            return state
    }
}



