import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_CHAT } from "./types"

export const addChat = (name) => {
    console.log(name);
    return {
        type: ADD_CONVERSATION,
        payload: name,
    }
}

export const changeValue = (id, value) => {
    console.log({id, value});
    return {
        
        type: CHANGE_VALUE,
        payload: {id, value},
    }
}

export const deleteChat = (title) => {
    return {
      type: DELETE_CHAT,
      payload: title,
    }
  }