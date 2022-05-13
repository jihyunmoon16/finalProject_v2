import React from "react";
import chodae from "../assets/Chodae-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <div>
            <Link to="/">
              <img className="chodaeLogo" src={chodae} alt="chodae logo"></img>
            </Link>
          </div>
          <div className="headerText">
            <span className="headerText">로그인</span>
            <span>&nbsp;|&nbsp;</span>
            <Link to="/account/create">
              <span className="headerText">회원가입</span>
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Header;
