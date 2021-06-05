import { CHANGE_STATUS_PROFILE } from "./types"

export const changeStatus = (param) => {
    console.log(param);
    return {
        type: CHANGE_STATUS_PROFILE,
        payload: param,
    }
}
