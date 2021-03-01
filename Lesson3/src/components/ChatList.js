import { List } from "@material-ui/core";
import React from "react";

export default function ChatList({ chats }) {
  return chats.map((chat, i) => <List key={i}>{chat}</List>);
}
