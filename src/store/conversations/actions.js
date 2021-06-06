import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_VALUE } from "./types"

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

export const deleteConversation = (id) => {
    return {
      type: DELETE_VALUE,
      payload: id,
    }
  }