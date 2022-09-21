import React, { useState } from "react";
import ChatSideBar from "../../components/chatsidebar/ChatSideBar";
import "./SideBar.css";
const SideBar = () => {
  const [chatList, setChatList] = useState([
    {
      shortname: "CS",
      username: "Carleton Stehr",
      time: "12:45",
      para: "Prespiciatis Unde Omnis iste...",
      user100: "100 User",
      urgent: "Urgent",
      customer: "Customer",
    },
    {
      shortname: "Ak",
      username: "Alek Kovacek",
      time: "12:45",
      para: "Prespiciatis Unde Omnis iste...",
      user100: "100 User",
      urgent: "Urgent",
      customer: "Customer",
    },
    {
      shortname: "MY",
      username: "Marlin Yost",
      time: "12:45",
      para: "Prespiciatis Unde Omnis iste...",
      user100: "100 User",
      urgent: "Urgent",
      customer: "Customer",
    },
    {
      shortname: "NM",
      username: "Nella McLaughlin",
      time: "12:45",
      para: "Prespiciatis Unde Omnis iste...",
      user100: "100 User",
      urgent: "Urgent",
      customer: "Customer",
    },
    {
      shortname: "LR",
      username: "Litzy Reichel",
      time: "12:45",
      para: "Prespiciatis Unde Omnis iste...",
      user100: "100 User",
      urgent: "Urgent",
      customer: "Customer",
    },
    {
      shortname: "BS",
      username: "Boris Smitham",
      time: "12:45",
      para: "Prespiciatis Unde Omnis iste...",
      user100: "100 User",
      urgent: "Urgent",
      customer: "Customer",
    },
  ]);
  return (
    <>
      <section className="chat_side_bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0">
              <div className="chat_heading border-bottom border-end">
                <h4>Chat</h4>
              </div>
            </div>
          </div>
          <div className="row border-bottom">
            <div className="col p-0">
              {/* <div className="input_area position-relative border-end">
              <input
                type="text"
                className="form-control"
                placeholder="Search Conversation..."
              />
            <i className="fa-solid fa-magnifying-glass"></i>
              </div> */}
            </div>
          </div>
          <div className="row border-end">
            <ul
              className="nav nav-pills border-bottom"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Conversation
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Contacts
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="input_area position-relative  border-bottom">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Conversation..."
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="list">
                  {chatList.map((e, idx) => (
                    <ChatSideBar
                      key={idx}
                      shortname={e.shortname}
                      username={e.username}
                      time={e.time}
                      para={e.para}
                      user100={e.user100}
                      urgent={e.urgent}
                      customer={e.customer}
                    />
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="input_area position-relative  border-bottom">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Conversation..."
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="list">
                  {chatList.map((e, idx) => (
                    <ChatSideBar
                      key={idx}
                      shortname={e.shortname}
                      username={e.username}
                      time={e.time}
                      para={e.para}
                      user100={e.user100}
                      urgent={e.urgent}
                      customer={e.customer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
