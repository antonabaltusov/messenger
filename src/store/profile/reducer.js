import { CHANGE_STATUS_PROFILE } from "./types"

const initialState = {
    name: "Anton",
    status: true,
}

export const profileReducer = ( state = initialState, action) => {
    console.log(1);
    switch(action.type) {
        case CHANGE_STATUS_PROFILE:
            console.log(2);
            return {...state, status: action.payload.param  } 
        default:
            return state
    }
}