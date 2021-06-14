import { MESSAGE_SEND, sendMessage } from "../messages"

export const botSendMessage = (store) => (next) => (action) => {

    if(action.type ===MESSAGE_SEND && action.payload.author === "User") {
        console.log(action.payload)
        setTimeout(()=> {
            store.dispatch(
                sendMessage({ author: "Bot", message: "hi, i'm bot", room: action.payload.room }),)
        },500)
    }

    return next(action)
}