import { ADD_CONVERSATION, CHANGE_VALUE, DELETE_VALUE } from "./types"

const initialState = [
    { title: "room1", value: "" },
    // { title: "room2", value: "" },
]

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
        case DELETE_VALUE:
            return [...state.splice(payload.id, 1)]
        default:
            return state
        
    }
}