import { MESSAGE_SEND, DELETE_MESSAGES } from "./types"


export const sendMessage = (params) => {
  return {
    type: MESSAGE_SEND,
    payload: params,
  }
}

export const deleteMessages = (id) => {
  return {
    type: DELETE_MESSAGES,
    payload: id,
  }
}
// @TODO сделать екшен удаления комнаты