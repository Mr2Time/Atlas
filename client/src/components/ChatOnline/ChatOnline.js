import "./ChatOnline.scss";

const ChatOnline = () => {
  return (
    <div className="chat-online">
      <div className="chat-online-friend">
        <div className="online-img-container">
          <img className='chat-online-img' src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="" />
          <div className="chat-online-badge"></div>
        </div>
        <span className='chat-online-username'>
            John Doe
        </span>
      </div>
    </div>
  );
};

export default ChatOnline;
