import { MESSAGE_SEND, DELETE_ROOM } from "./types"

const initialState = {
    room1:[
        {author:"User", message:"hi bot", date: new Date()},
        {author:"bot", message:"hi, i'm bot", date: new Date()},
    ],
  }

  //const removeProperty = prop => ({ [prop]: _, ...rest }) => rest

  export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case MESSAGE_SEND:
        return {
          ...state,
          [payload.roomId]: [
            ...(state[payload.id] || []),
            {
              author: payload.author,
              message: payload.message,
              date: new Date(),
            },
          ],
        }
    //   case DELETE_ROOM:
    //     return payload.roomId => ({ [payload.roomId]: _, ...state }) => state
      default:
        return state
    }
  }