import {useState, useEffect} from 'react'
import axios from 'axios'
import "./ChatOnline.scss";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat-online">
      {onlineFriends.map((o) => (
        <div className="chat-online-friend" onClick={() => handleClick(o)}>
          <div className="online-img-container">
            <img
              className="chat-online-img"
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + "person/default-photo.jpg"
              }
              alt=""
            />
            <div className="chat-online-badge"></div>
          </div>
          <span className="chat-online-username">{o?.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
