import { MESSAGE_SEND, DELETE_MESSAGES } from "./types"

const initialState = {
    room1:[
        {author:"User", message:"hi bot", date: new Date()},
        {author:"bot", message:"hi, i'm bot", date: new Date()},
    ],
  }

 // const removeProperty = prop => ({ [prop]: _, ...rest }) => rest

//  function removeProperty(obj, prop) {
//   if(prop in obj){
//     delete obj[prop];
//     return true;
//   }else{
//     return false;
//    }
//   }

// const removeProperty = prop => ({ [prop]: _, ...rest }) => rest

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
      case DELETE_MESSAGES:
        return _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
      default:
        return state
    }
  }