import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_CHAT } from "./types"

const initialState = []

export const conversationsReducer = ( state = initialState, {type, payload},
    ) => {
    switch(type) {
        case ADD_CONVERSATION:
            return [...state, {id:payload.id, title: payload.tittle, value: "" }]
        case CHANGE_VALUE:
            return state.map((room) =>
                room.id === payload.id ? {...room, value: payload.value}:room,
            )
        case DELETE_CHAT:
            return [...state.filter(chat => chat.id !== payload)]
        default:
            return state
        
    }
}