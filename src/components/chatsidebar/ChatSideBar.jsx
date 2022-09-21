import React from "react";
import "./ChatSideBar.css";
const ChatSideBar = (props) => {
  const { shortname, username, time, para, user100, urgent, customer } = props;
  return (
    <>
      <div className="main_wrapper_sidebar d-flex">
        <div>
          <div className="shortname">{shortname}</div>
          <span>
            <div className="dot"></div>
          </span>
        </div>
        <div className="detail_wrapper">
          <div className="name_time d-flex justify-content-between align-items-center">
            <h5>{username}</h5>
            <p>{time}</p>
          </div>
          <p className="para">{para}</p>
          <div className="three_tabs d-flex ">
            <div className="user100">{user100}</div>
            <div className="urgent">{urgent}</div>
            <div className="customer">{customer}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSideBar;
