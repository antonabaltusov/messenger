import { CHANGE_STATUS_PROFILE, CHANGE_NAME } from "./types"

export const changeStatus = (bool) => {
    console.log(bool);
    return {
        type: CHANGE_STATUS_PROFILE,
        payload: bool,
    }
}

export const changeName = (name) => {
    console.log(name);
    return {
        type: CHANGE_NAME,
        payload: name,
    }
}
