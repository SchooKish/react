import { ADD_CHAT } from "./actions";
import { BASE } from "../../base";

const initialState = {
  chatlist: [{ text: "Hi", author: BASE.ME, class: BASE.CLASSME }],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatlist: [
          ...state.chatlist,
          {
            id: `id${state.chatlist.length}`,
            name: action.name,
            messageList: [],
          },
        ],
      };
    default:
      return state;
  }
};

export default chatsReducer;
