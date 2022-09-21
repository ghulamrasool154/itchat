import React from "react";
import MessageDetail from "../../components/Chat/MessageDetail";
import SideBar from "../../layout/sidebar/SideBar";
import ProfileSideBar from "../../components/profilesidebar/ProfileSideBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <MessageDetail />
      <ProfileSideBar />
    </div>
  );
};

export default Home;
