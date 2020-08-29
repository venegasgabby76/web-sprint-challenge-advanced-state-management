import { 
    FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAILED} from "../actions/actions"




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
        default:
            return state
    }
}



