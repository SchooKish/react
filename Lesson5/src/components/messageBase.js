import React from "react";

export default function MessageBase({ message }) {
  let arr = message.map((msg, i) => (
    <div
      key={i}
      className={"message class" + (msg.author == "me" ? "me" : "bot")}
    >
      <span>{msg.author}:</span>
      <span>{msg.text}</span>
    </div>
  ));

  return arr;
}
