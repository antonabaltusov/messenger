import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_CHAT } from "./types"

export const addChat = (param) => {
    console.log(param);
    return {
        type: ADD_CONVERSATION,
        payload: param,
    }
}

export const changeValue = (id, value) => {
    console.log({id, value});
    return {
        
        type: CHANGE_VALUE,
        payload: {id, value},
    }
}

export const deleteChat = (id) => {
    return {
      type: DELETE_CHAT,
      payload: id,
    }
  }