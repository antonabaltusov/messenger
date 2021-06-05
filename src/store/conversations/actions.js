import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_VALUE } from "./types"

export const addConversation = (contact, hasConversation) => {
    return {
        type: hasConversation ? null : ADD_CONVERSATION,
        payload: contact,
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