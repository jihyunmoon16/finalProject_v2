import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bootCampImg from "../assets/home/static.svg";
import studyImg from "../assets/home/pairprogramming.svg";
import teaImg from "../assets/home/tea.svg";
import zoomImg from "../assets/home/zoom.svg";
import boardImg from "../assets/home/text.svg";

function Home() {
  let navigate = useNavigate();

  const moveToStudy = () => {
    navigate("/together/study");
  };

  return (
    <>
      <div className="sectionHero">
        <div className="hero">
          <div className="textBox">
            <h1 className="heading">국비교육</h1>
            <p className="description">
              국비과정 참여 전에 교육기관에 <br />
              대한 정보와 교육과정에 대한 리뷰를 <br />
              확인해보세요.
            </p>
            <Link to="/reviewmain">
              <button className="mainBtn">리뷰보기</button>
            </Link>
          </div>
          <div className="imgBox">
            <img className="bootCampImg" src={bootCampImg} alt=""></img>
          </div>
        </div>
      </div>
      <div className="sectionStudy">
        <div className="studyTextBox">
          <h1 className="heading">스터디모집</h1>
          <p className="description">
            코딩을 더 잘하고 싶다면, 스터디 그룹에 참여해보세요. <br />
            나와 같은 분야를 공부하고 있는 사람들과 <br />
            함께하면 어려운 프로그래밍도 즐겁지 않을까요?
          </p>
        </div>
        <div className="study">
          <div className="studyImgBox" onClick={moveToStudy}>
            <img className="studyImg" src={teaImg} alt=""></img>
            <p className="studyText">With a Cup of Tea</p>
          </div>
          <div className="studyImgBox" onClick={moveToStudy}>
            <img className="studyImg" src={studyImg} alt=""></img>
            <p className="studyText"> Let's Study Together</p>
          </div>
          <div className="studyImgBox" onClick={moveToStudy}>
            <img className="studyImg" src={zoomImg} alt=""></img>
            <p className="studyText">Online or Offline</p>
          </div>
        </div>
      </div>
      <div className="sectionBoard">
        <div className="board">
          <div className="imgBox">
            <img className="boardImg" src={boardImg} alt=""></img>
          </div>
          <div className="textBox">
            <h1 className="heading">게시판</h1>
            <p className="description">
              취업준비, 고민상담, 책/강의 리뷰 게시판을 통해서 <br /> 초대
              커뮤니티에 참여해보세요.
            </p>
            <Link to="/post">
              <button className="mainBtn">게시판 보기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
