import React from "react";
import chodae from "../assets/Chodae-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
    <div className="footerContainer">
      <hr />
      <div className="footerTop">
        <Link to="company">
          <p>회사소개</p>
        </Link>
        <Link to="/tos">
          <p>이용약관</p>
        </Link>
        <p>개인정보처리방침</p>
        <Link to="/customer/faq">
          <p>고객센터</p>
        </Link>
      </div>
      <div className="footerBottom">
        <p className="companyDetail">
          상호명: (주)초대 | 대표명: 이도현 | 사업자등록번호: 123-12-12345
        </p>
        <p>
          문의: chodae@chodae.kr | 전화번호: 1588-1234 | 주소: 서울 강남구
          봉은사로 303 초대빌딩 1001호 (60103)
        </p>
        <p className="companyRights">
          ⓒ 2022 Chodae Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
