import "./MessageDetail.css";
import user1 from "../../assets/images/user-4.png";
import user2 from "../../assets/images/user-5.png";
import user3 from "../../assets/images/user-6.png";
import { useContext } from "react";
import { contentCreate } from "../../content/RedcuerFun";
const MessageDetail = () => {
  const data = useContext(contentCreate);

  const hanldeFunction = () => {
    data.dispatch({ type: "TOGGLE" });
    console.log(data.state.mobileMenuToggle);
  };
  return (
    <div className="message--details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="m--details--profile d-flex justify-content-between align-items-center">
              <div className="m--detail--left d-flex align-items-center">
                <div className="user--img">
                  my
                  <span className="user--active"></span>
                </div>
                <div className="user--detail">
                  <h3 onClick={hanldeFunction}>Marlin Yost</h3>
                  <div className="user--tags">
                    <span className="tag">100 user</span>
                    <span className="tag">Urgent</span>
                    <span className="tag">Customer</span>
                    <span className="tag"> + Add Tag</span>
                  </div>
                </div>
              </div>
              <div className="m--detail--right">
                <h3>Agent </h3>
                <div className="agent--images">
                  <img src={user1} alt="" />
                  <img src={user2} alt="" />
                  <img src={user3} alt="" />
                </div>
              </div>
              <div className="menu--bar--mobile">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <div className="both--user--chatting">
              {/* <div className="user--recived--message">
                <div className="user--r-img">
                  MY
                  <span className="recived--active"></span>
                </div>
                <div className="user--r-detilssss">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="user--r--time"> 1 sec ago..</span>
                </div>
              </div> */}

              <div className="user--recived--message">
                <div className="user--r-img">
                  MY
                  <span className="recived--active"></span>
                </div>
                <div className="user--r-detilssss">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="user--r--time"> 1 sec ago..</span>
                </div>
              </div>

              <div className="user--sent--message">
                <div className="user--s-detilssss">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="user--r--time"> 1 sec ago..</span>
                </div>
                <div className="user--s-img">
                  CL
                  <span className="recived--active"></span>
                </div>
              </div>

              <div className="user--recived--message">
                <div className="user--r-img">
                  MY
                  <span className="recived--active"></span>
                </div>
                <div className="user--r-detilssss">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam quod illo quibusdam hic soluta! Itaque qui, magnam
                    ipsam voluptatibus id, eius ratione minus quis quasi fugit,
                    modi eligendi provident vitae!{" "}
                  </p>
                  <span className="user--r--time"> 1 sec ago..</span>
                </div>
              </div>
              <div className="user--sent--message">
                <div className="user--s-detilssss">
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <span className="user--r--time"> 1 sec ago..</span>
                </div>
                <div className="user--s-img">
                  CL
                  <span className="recived--active"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <div className="sent---boxss">
              <div className="sent--message--from">
                <div className="by--default">
                  <span className="by--d--message">How are you?</span>
                  <span className="by--d--message">Can we talk</span>
                  <span className="by--d--message">Are you available now</span>
                  <span className="by--d--message">
                    {" "}
                    + Add new quick answer
                  </span>
                </div>
                <div className="messag--form--box">
                  <div className="message--form">
                    <input type="text" className="" placeholder="White Here" />
                  </div>
                  <div className="message--butttonss">
                    <span className="send--icon">
                      <i className="fa-regular fa-face-smile"></i>
                    </span>
                    <span className="send--icon">
                      <i className="fa-solid fa-paperclip"></i>
                    </span>
                    <span className="send--icon">
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
