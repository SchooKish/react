import { Link } from "react-router-dom";
import React from "react";

export default function ChatList({ chats }) {
  return chats.map((chat, i) => console.log(chat, i));

  // return chats.map((chat, i) => (
  //   <div key={i}>
  //     <Link to={`/chats/${chat.id}`}>
  //       <b style={{ color: chat.id === chatId ? "black" : "grey" }}>
  //         {chat.name}
  //       </b>
  //     </Link>
  //   </div>
  // ));
}
