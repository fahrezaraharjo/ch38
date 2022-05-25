import React from "react";

import './Chat.css';
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";
import TextContainer from "./TextContainer"
function Chat() {

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar />
        <Input />
        <Messages />
      </div>
<TextContainer/>
    </div>
  );
}

export default Chat;
