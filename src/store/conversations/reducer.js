import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_CHAT } from "./types"

const initialState = []

export const conversationsReducer = ( state = initialState, {type, payload},
    ) => {
    switch(type) {
        case ADD_CONVERSATION:
            console.log(payload);
            return [...state, { title: payload, value: "" }]
        case CHANGE_VALUE:
            return state.map((room) =>
                room.title === payload.id ? {...room, value: payload.value}:room,
            )
        case DELETE_CHAT:
            return [...state.filter(chat => chat.title !== payload)]
        default:
            return state
        
    }
}