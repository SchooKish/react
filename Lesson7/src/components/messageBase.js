import React, { useCallback } from "react";

export default function MessageBase({ messages }) {
  const renderMessage = useCallback(
    (message, i) => (
      <div
        key={i}
        className={"message class" + (message.author == "me" ? "me" : "bot")}
      >
        <span>{message.author}: </span>
        <span>{message.text}</span>
      </div>
    ),
    []
  );

  return messages.map(renderMessage);
}
