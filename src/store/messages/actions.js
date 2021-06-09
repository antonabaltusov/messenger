import { MESSAGE_SEND, DELETE_MESSAGES } from "./types"


export const sendMessage = (params) => {
  return {
    type: MESSAGE_SEND,
    payload: params,
  }
}

export const deleteMessages = (tittle) => {
  console.log(tittle)
  return {
    type: DELETE_MESSAGES,
    payload: tittle,
  }
}
// @TODO сделать екшен удаления комнаты