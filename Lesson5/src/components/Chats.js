import React, { useState, useCallback, useEffect, useMemo } from "react";
import MessageBase from "./messageBase";
import Input from "./input";
import ChatList from "./ChatList";
import { BASE } from "../base";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/chats/actions";
import AddChatDialog from "./AddChatDialog";

export default function Chats() {
  const chats = useSelector((state) => state.chats.chatList);
  const dispatch = useDispatch();

  const addNewChat = useCallback(() => {}, [dispatch]);

  return (
    <>
      <div>{chats}</div>
      <ChatList chats={[chats]} />
    </>
  );

  // const params = useParams();
  // const chats = useSelector((state) => state.chats.chatList);
  // const dispatch = useDispatch;
  // const [visible, setVisible] = useState(false);
  // const addNewChat = useCallback(
  //   (name) => {
  //     dispatch(addChat(name));
  //     setVisible(false);
  //   },
  //   [dispatch]
  // );
  // const handleClose = useCallback(() => {
  //   setVisible(false);
  // }, []);
  // const handleOpen = useCallback(() => {
  //   console.log("-0-0-0-0-0--0");
  //   setVisible(true);
  // }, []);
  // const selectedChat = useMemo(
  //   () => chats?.find((chat) => chat.id === params.chatId),
  //   [params, chats]
  // );
  // const selectedChatIndex = useMemo(
  //   () => chats?.findIndex((chat) => chat.id === params.chatId),
  //   [params, chats]
  // );
  // const onAddChatPress = useCallback(() => {}, []);
  // if (!params.chatId || !selectedChat) {
  //   return (
  //     <>
  //       <span>Please select a chat</span>
  //       <ChatList chats={chats} chatId={null} onAddChat={handleOpen} />
  //       <AddChatDialog
  //         onClose={handleClose}
  //         onSubmit={addNewChat}
  //         visible={visible}
  //       />
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <header>Header</header>
  //     <ChatList chats={chats} chatId={params.chatId} onAddChat={handleOpen} />
  //     <MessagesList messages={selectedChat?.messageList || []} />
  //     {/* <Input onAddMessage={addMessage} /> */}
  //     <AddChatDialog
  //       visible={visible}
  //       onClose={handleClose}
  //       onSubmit={addNewChat}
  //     />
  //   </>
  // );
}

// const addMessage = useCallback((text, author) => {
//   const newChats = [...chats];
//   newChats[]
// });

// const [chats, setChats] = useState([
//   {
//     id: "id1",
//     name: "chat1",
//     messageList: [{ text: "Hi", author: BASE.ME, class: BASE.CLASSME }],
//   },

//   {
//     id: "id2",
//     name: "chat2",
//     messageList: [{ text: "Hi", author: BASE.ME, class: BASE.CLASSME }],
//   },
//   {
//     id: "id3",
//     name: "chat3",
//     messageList: [
//       { text: "Hi", author: BASE.ME, class: BASE.CLASSME },
//       { text: "Hi", author: BASE.BOT, class: BASE.CLASSME },
//     ],
//   },
// ]);

// const addMessage = useCallback(
//   (text, author) => {
//     const newChats = [...chats];
//     newChats[selectedChatIndex] = {
//       ...selectedChat,
//       messageList: [...selectedChat.messageList, { text, author }],
//     };
//     setChats(newChats);
//   },
//   [chats, selectedChat, selectedChatIndex]
// );

// const selectedChat = useMemo(
//   () => chats.find((chat) => chat.id === params.chatId),
//   [params, chats]
// );

// const selectedChatIndex = useMemo(
//   () => chats.findIndex((chat) => chat.id === params.chatId),
//   [params, chats]
// );

// useEffect(() => {
//   let timeout;
//   if (
//     selectedChat.messageList[selectedChat.messageList.length - 1]?.author !==
//     BASE.BOT
//   )
//     timeout = setTimeout(() => addMessage("hi", BASE.BOT), 1000);
//   return () => clearTimeout(timeout);
// }, [chats, addMessage]);

// if (!params.chatId || !selectedChat) {
//   return <ChatList chats={chats} chatId={null} />;
// }
// return (
//   <>
//     <div className="chatbox">
//       <div className="chatlist">
//         <ChatList chats={chats} /*chatId={params.chatId}*/></ChatList>
//       </div>
//       <div className="chat">
//         <MessageBase /*message={selectedChat?.messageList || []}*/
//         ></MessageBase>
//         <Input /*onAddMessage={addMessage}*/></Input>
//       </div>
//     </div>
//   </>
// );
// }
