import { MESSAGE_SEND, DELETE_ROOM } from "./types"


export const sendMessage = (params) => {
  return {
    type: MESSAGE_SEND,
    payload: params,
  }
}
// @TODO сделать екшен удаления комнаты