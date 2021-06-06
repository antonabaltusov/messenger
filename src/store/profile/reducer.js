import { CHANGE_STATUS_PROFILE, CHANGE_NAME } from "./types"

const initialState = {
    name: "Anton",
    status: true,
}

export const profileReducer = ( state = initialState, {type, payload}) => {
    console.log(1);
    switch(type) {
        case CHANGE_STATUS_PROFILE:
            console.log(2);
            return {...state, status: payload  } 
        case CHANGE_NAME:
            console.log(2);
            return {...state, name: payload  } 
        default:
            return state
    }
}