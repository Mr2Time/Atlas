import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Conversations from "../../Components/Conversations/Conversations";
import Message from "./../../Components/Message/Message";
import ChatOnline from "../../Components/ChatOnline/ChatOnline";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import "./Messenger.scss";

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    try {
      const getConvos = async () => {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      };
      getConvos()
    } catch (e) {
      console.log(e);
    }
  },[user]);
  return (
    <>
      <Navbar />
      <div className="messenger">
        <div className="chat-menu">
          <div className="menu-wrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="menu-input"
            />
            {conversations.map(c => {

              return <Conversations convo={c} currentUser={user} key={c._id}/>
            })}

          </div>
        </div>
        <div className="chat-box">
          <div className="box-wrapper">
            <div className="chat-box-top">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
            </div>
            <div className="chat-box-bottom">
              <textarea
                placeholder="Send a message"
                className="chat-textarea"
              ></textarea>
              <button className="chat-submit-btn">Send</button>
            </div>
          </div>
        </div>
        <div className="chat-online-friends">
          <div className="online-wrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
