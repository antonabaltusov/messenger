import { MESSAGE_SEND, DELETE_ROOM } from "./types"


export const sendMessage = (params) => {
  console.log(params);
  debugger
  return {
    type: MESSAGE_SEND,
    payload: params,
  }
}
// @TODO сделать екшен удаления комнаты