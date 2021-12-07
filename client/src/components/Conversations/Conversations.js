import { useState, useEffect } from "react";
import axios from "axios";
import "./Conversation.scss";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="convo-img"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/default-photo.jpg"
        }
        alt=""
      />
      <span className="convo-name">{user?.username}</span>
    </div>
  );
};

export default Conversation;
