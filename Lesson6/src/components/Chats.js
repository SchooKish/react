import React, { useState, useCallback, useMemo } from "react";
import MessageBase from "./messageBase";
import Input from "./input";
import ChatsList from "./ChatsList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/chats/actions";
import AddChatDialog from "./AddChatDialog";
import { addMessageThunk } from "../store/messages/actions";

export default function Chats() {
  const params = useParams();

  const chats = useSelector((state) => state.chats.chatList);
  // debugger;
  const messages = useSelector((state) => state.messages.messageBase);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const addNewChat = useCallback(
    (name) => {
      dispatch(addChat(name));
      setVisible(false);
    },
    [dispatch]
  );

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);
  const handleOpen = useCallback(() => {
    setVisible(true);
  }, []);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageThunk(selectedChat?.id, { text, author }));
    },
    [selectedChat, dispatch]
  );

  const messageBase = useMemo(() => messages?.[selectedChat?.id] || [], [
    messages,
    selectedChat,
  ]);

  if (!params.chatId) {
    return (
      <>
        <ChatsList
          chats={chats}
          chatId={params.chatId}
          onAddChat={handleOpen}
        />
        <AddChatDialog
          visible={visible}
          onClose={handleClose}
          onSubmit={addNewChat}
        />
      </>
    );
  }

  if (!selectedChat) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <header>Header</header>
      <div className="wrapper">
        <div>
          <ChatsList
            chats={chats}
            chatId={params.chatId}
            onAddChat={handleOpen}
          />
        </div>
        <div>
          <MessageBase messages={messageBase} />
          <Input onAddMessage={sendMessage} />
        </div>
      </div>
      <AddChatDialog
        visible={visible}
        onClose={handleClose}
        onSubmit={addNewChat}
      />
    </>
  );
}
