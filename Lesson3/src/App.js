import React, { useState, useCallback, useEffect } from "react";
import MessageBase from "./components/messageBase";
import Input from "./components/input";
import ChatList from "./components/ChatList";
import { BASE } from "./base";

export default function App() {
  const [chats, setChats] = useState(["chat1", "chat2", "chat3"]);

  const [base, setBase] = useState([
    {
      text: "Hi",
      author: BASE.ME,
      class: BASE.CLASSME,
    },
  ]);

  const addMessage = useCallback(
    (text, author) => {
      setBase([...base, { text, author }]);
    },
    [base]
  );

  useEffect(() => {
    let timeout;
    if (base[base.length - 1]?.author !== BASE.BOT)
      timeout = setTimeout(() => addMessage("Hello", BASE.BOT), 1000);

    return () => clearTimeout(timeout);
  }, [base, addMessage]);

  return (
    <>
      <header className="header">header</header>
      <div className="chatbox">
        <div className="chatlist">
          <ChatList chats={chats} />
        </div>
        <div className="chat">
          <MessageBase message={base} />
          <Input onAddMessage={addMessage} />
        </div>
      </div>
    </>
  );
}
