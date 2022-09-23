import React from "react";
import "./ProfileSideBar.css";
import profile from "../../assets/images/profile2.png";
import { useContext } from "react";
import { contentCreate } from "../../content/RedcuerFun";

const ProfileSideBar = () => {
  const data = useContext(contentCreate);
  const value = data.state.mobileMenuToggle;

  const hanldeFunction = () => {
    data.dispatch({ type: "TOGGLE" });
    console.log(data.state.mobileMenuToggle);
  };
  return (
    <div
      className={value ? "showprofile" : " showprofile hidden"}
      onClick={hanldeFunction}
    >
      <section className="profile_sideBar">
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0">
              <div className="buttons border-bottom border-start">
                <div>
                  <button className="checkin">Check In</button>
                </div>
                <div>
                  <button className="checkout">Check Out</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col border-start profile---sidar--section">
              <div className="connected_tme_wrapper">
                <div className="connect--time--boox">
                  <div className="first_">
                    <p>Connected Time:6 Hrs 12 mins</p>
                  </div>
                  <div className="second_">
                    <img src={profile} alt="profile image" />
                  </div>
                  <div className="user_name">
                    <h5>Christeen Lee</h5>
                    <p>
                      <i className="fa-solid fa-phone-flip"></i>+1332 596 9965
                    </p>
                  </div>
                  <div className="options">
                    <div className="crm">
                      {" "}
                      <p>Open In CRM</p>
                    </div>
                    <div className="agent">
                      <p>Add Agent</p>
                    </div>
                    <div className="transfer">
                      <p>Transfer To Anonther Agent</p>
                    </div>
                  </div>
                </div>
                <div className="infos_tabs">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Info 1
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Info 2
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="creation_date_wrapper">
                        <div className="creation d-flex justify-content-between border">
                          <h4 className="crete">Creation date</h4>
                          <h4 className="date">12.12.2020</h4>
                        </div>
                        <div className="amount d-flex justify-content-between border">
                          <h4 className="amotn">Amount</h4>
                          <h4 className="ruppess">500</h4>
                        </div>
                        <div className="stage d-flex justify-content-between border">
                          <h4 className="staged">Stage</h4>
                          <h4 className="qualifiacations">Qualification</h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="creation_date_wrapper">
                        <div className="creation d-flex justify-content-between border">
                          <h4 className="crete">Creation date</h4>
                          <h4 className="date">12.12.2020</h4>
                        </div>
                        <div className="amount d-flex justify-content-between border">
                          <h4 className="amotn">Amount</h4>
                          <h4 className="ruppess">500</h4>
                        </div>
                        <div className="stage d-flex justify-content-between border">
                          <h4 className="staged">Stage</h4>
                          <h4 className="qualifiacations">Qualification</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSideBar;
