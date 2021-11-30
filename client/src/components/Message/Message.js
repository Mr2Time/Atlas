import "./Message.scss";

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img
          className="message-img"
          src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
          alt=""
        />
        <p className="message-text">First Message!</p>
      </div>
      <div className="message-bottom">1 hour ago</div>
    </div>
  );
};

export default Message;
