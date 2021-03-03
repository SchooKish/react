import React, { useState, useCallback, useEffect, useMemo } from "react";
import MessageBase from "./messageBase";
import Input from "./input";
import ChatList from "./ChatList";
import { BASE } from "../base";
import { useParams } from "react-router-dom";

export default function Chats() {
  const params = useParams();

  const [chats, setChats] = useState([
    {
      id: "id1",
      name: "chat1",
      messageList: [{ text: "Hi", author: BASE.ME, class: BASE.CLASSME }],
    },

    {
      id: "id2",
      name: "chat2",
      messageList: [{ text: "Hi", author: BASE.ME, class: BASE.CLASSME }],
    },
    {
      id: "id3",
      name: "chat3",
      messageList: [
        { text: "Hi", author: BASE.ME, class: BASE.CLASSME },
        { text: "Hi", author: BASE.BOT, class: BASE.CLASSME },
      ],
    },
  ]);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const selectedChatIndex = useMemo(
    () => chats.findIndex((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const addMessage = useCallback(
    (text, author) => {
      const newChats = [...chats];
      newChats[selectedChatIndex] = {
        ...selectedChat,
        messageList: [...selectedChat.messageList, { text, author }],
      };
      setChats(newChats);
    },
    [chats, selectedChat, selectedChatIndex]
  );

  useEffect(() => {
    let timeout;
    if (
      selectedChat.messageList[selectedChat.messageList.length - 1]?.author !==
      BASE.BOT
    )
      timeout = setTimeout(() => addMessage("hi", BASE.BOT), 1000);
    return () => clearTimeout(timeout);
  }, [chats, addMessage]);

  if (!params.chatId || !selectedChat) {
    return <ChatList chats={chats} chatId={null} />;
  }
  return (
    <>
      <div className="chatbox">
        <div className="chatlist">
          <ChatList chats={chats} chatId={params.chatId} />
        </div>
        <div className="chat">
          <MessageBase message={selectedChat?.messageList || []} />
          <Input onAddMessage={addMessage} />
        </div>
      </div>
    </>
  );
}
