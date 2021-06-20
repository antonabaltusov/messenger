import { MESSAGE_SEND, DELETE_MESSAGES } from "./types"

const initialState = {}

 // const removeProperty = prop => ({ [prop]: _, ...rest }) => rest

//  function removeProperty(obj, prop) {
//   if(prop in obj){
//     delete obj[prop];
//     return true;
//   }else{
//     return false;
//    }
//   }

// const removeProperty = (prop, state) => { 
//   const { prop, ...withoutFirst } = state;
//   console.log(prop, withoutFirst)
//   return withoutFirst
// }



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
        return {...state,
        [payload]:undefined}
      default:
        return state
    }
  }