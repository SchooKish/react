import React, { useState, useCallback, useEffect } from "react";
import MessageBase from "./components/messageBase";
import Input from "./components/input";
import { BASE } from "./base";

export default function App() {
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
      <MessageBase message={base} />
      <Input onAddMessage={addMessage} />
    </>
  );
}
