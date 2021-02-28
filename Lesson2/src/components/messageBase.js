import React from "react";
import { BASE } from "../base";

export default function MessageBase({ message }) {
  let arr = message.map((msg) => (
    <div className={"message class" + (msg.author == "me" ? "me" : "bot")}>
      <span>{msg.author}:</span>
      <span>{msg.text}</span>
    </div>
  ));

  return arr;
}
