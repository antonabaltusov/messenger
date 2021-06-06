import { MESSAGE_SEND } from "./types"

const initialState = {
    room1:[
        {author:"User", message:"hi bot", date: new Date()},
        {author:"bot", message:"hi, i'm bot", date: new Date()},
    ],
  }

  //const removeProperty = prop => ({ [prop]: _, ...rest }) => rest

  export const messagesReducer = (state = initialState, { type, payload }
    ) => {
    switch (type) {
      case MESSAGE_SEND:
        console.log(payload);
        return {
          ...state,
          [payload.room]: [
            ...(state[payload.room] || []),
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