import "./App.css";
import AvatarMarkWeber from "./assets/images/avatar-mark-webber.webp";
import AvatarAngelaGray from "./assets/images/avatar-angela-gray.webp";
import AvatarJacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import AvatarAnnaKim from "./assets/images/avatar-anna-kim.webp";
import AvatarKimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import AvatarNathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import AvatarRizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import ImageChess from "./assets/images/image-chess.webp";
import { useState, useEffect } from "react";


export default function App() {
  const [newNotify, setNewNotify] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleCheckNotify = () => {
    setNewNotify(false);
    setCounter(0);
  };

  const componentDidMount = () => {
    let element = document.querySelectorAll(".ref");
    let count = 0;
    for (let i = 0; i < element.length; i++) {
      let thisElement = element[i];
      if (thisElement.style.display === "inline-flex") {
        count++;
      }
    }
    setCounter(count);
  };

  const notification = (
    avatar,
    nick,
    type,
    time,
    post,
    group,
    message,
    picture,
    isMessage,
    isImageMessage,
    isNewNotify = newNotify
  ) => {
    return (
      <div
        className="notification"
        style={{
          backgroundColor: isNewNotify ? "hsl(210, 60%, 98%)" : ""
        }}
      >
        <picture>
          <img src={avatar} alt="avatar" />
        </picture>
        <div style={{ width: "100%" }}>
          <span id="nick">{nick} </span>
          <span id="type">{type} </span>
          <span id="post">{post} </span>
          <span id="group-info">{group}</span>
          <div
            id="dot"
            className="ref"
            style={{ display: isNewNotify ? "inline-flex" : "none" }}
          ></div>
          <div className="time">{time}</div>
          <div
            className="message-section"
            style={{ display: isMessage ? "flex" : "none" }}
          >
            {message}
          </div>
        </div>
        <picture
          className="image-comment"
          style={{ display: isImageMessage ? "flex" : "none" }}
        >
          <img src={picture} alt="pic" />
        </picture>
      </div>
    );
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="notification-counter">
          <h2>
            Notifications <span id="count">{counter}</span>
          </h2>
          <span className="read-all" onClick={handleCheckNotify}>
            Mark all as read
          </span>
        </div>
        {notification(
          AvatarMarkWeber,
          "Mark Webber",
          "reacted to your recent post",
          "1m ago",
          "My first tournament today!",
          "",
          "",
          "",
          false,
          false
        )}
        {notification(
          AvatarAngelaGray,
          "Angela Gray",
          "followed you",
          "5m ago",
          "",
          "",
          "",
          "",
          false,
          false
        )}
        {notification(
          AvatarJacobThompson,
          "Jacob Thompson",
          "has joined your group",
          "1 day ago",
          "",
          "Chess Club",
          "",
          "",
          false,
          false
        )}
        {notification(
          AvatarRizkyHasanuddin,
          "Rizky Hasanuddin",
          "sent you a private message",
          "5 days ago",
          "",
          "",
          "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
          "",
          true,
          false,
          false
        )}
        {notification(
          AvatarKimberlySmith,
          "Kimberly Smith",
          "commented on your picture",
          "1 week ago",
          "",
          "",
          "",
          ImageChess,
          false,
          true,
          false
        )}
        {notification(
          AvatarNathanPeterson,
          "Nathan Peterson",
          "reacted to your recent post",
          "2 weeks ago",
          "5 end-game stategies to increase your win rate",
          "",
          "",
          "",
          false,
          false,
          false
        )}
        {notification(
          AvatarAnnaKim,
          "Anna Kim",
          "left the group",
          "2 weeks ago",
          "",
          "Chess Club",
          "",
          "",
          false,
          false,
          false
        )}
      </div>
    </div>
  );
}