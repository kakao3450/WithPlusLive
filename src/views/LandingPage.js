import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Box } from "@mui/material";
import { Footer, MobileFooter } from "../components/Footer";

import mainImg from "../assets/images/main-img.png";
// import mainVdo from "../assets/videos/SmartB_v1_1025.mp4";

// 아래부분 아이콘
// import inspiration from "../assets/images/main-inspiration.png";
// import book from "../assets/images/main-book.png";
// import working from "../assets/images/main-working.png";

import "./style.css";

// * 랜딩페이지
const LandingPage = (props) => {
  const navigate = useNavigate();
  // 링크와 같은 역활을 하지만, 특정 조건을 충족할 경우 페이지를 이동 가능하게 함_이정욱
  // 질문 : 조건을 줄 때 타입이 any인 state 값을 state안에 true로 감싸는 이유? _ 감싸져 있을 때 버튼 클릭 시 이벤트가 안일어나고, 중괄호 벗기면 로그인 페이지로 감_ 이정욱
  const onClickBtn = () => {
    navigate("/login", { state: { state: true } });
  };

  // 반응형 웹
  // 디바이스 폭 기준이라, 창을 늘리거나 줄여도 반응 x
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  // 반응형 모바일
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {isPc && (
        <Box sx={{ boxSizing: "border-box" }}>
          <Box sx={{ boxSizing: "border-box" }}>
            <div className="main-img">
              {/* <div
            style={{
              width: "90vw",
              height: "70vh",
              backgroundColor: "#FFE6E6",
              borderRadius: "20px",
              marginTop: "80px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "-5vh",
            }}
          > */}
              {/* 메인화면 */}
              <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                <div>
                  <div style={{ height: "auto" }}>
                    <div
                      className="text-title"
                      style={{ fontSize: "60px", marginBlockStart: "1em", marginBlockEnd: "1em" }}
                    >
                      Withplus.
                      <div
                        style={{
                          fontSize: "2rem",
                          color: "white",
                          backgroundColor: "#c60f0f",
                          textAlign: "right",
                          paddingRight: "5%",
                        }}
                      >
                        live
                      </div>
                    </div>

                    <div
                      className="text"
                      style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.8rem",
                        fontFamily: "NotoSansKR-Medium",
                        marginBottom: "10px",
                      }}
                    >
                      지금 바로 <br />
                      <span
                        style={{ fontSize: "1.4rem", color: "#c60f0f", fontFamily: "Roboto-Bold" }}
                      >
                        Live Polling
                      </span>
                      <span>, </span>
                      <span
                        style={{ fontSize: "1.4rem", color: "#c60f0f", fontFamily: "Roboto-Bold" }}
                      >
                        Live Quiz
                      </span>
                      를 체험해보세요!
                    </div>
                    <button className="button" onClick={onClickBtn}>
                      체험하기
                    </button>
                  </div>
                </div>
                {/* </div> */}
              </div>
              {/* 타이틀 옆에 이미지로 하려면 */}
              <div className="image-container">
                <img src={mainImg} />
              </div>
            </div>
            {/* 비디오로 하려면 */}
            {/* </div> */}
            {/* <video className="background-video" muted autoPlay loop>
            <source src={mainVdo} type="video/mp4" /> */}
            {/* <div className="gradient-box"> */}
          </Box>
          {/* 일단은 안보이고 나중에 추가 */}
          {/*
      <div style={{ textAlign: "center", width: "80%", margin: "auto" }}>
        <div className="text-title" style={{ fontSize: "30px", marginTop: "100px" }}>
          Features
        </div>
        <div className="text" style={{ marginBottom: "30px", lineHeight: "40px" }}>
          Vivamus neque ipsum, cursus at dui quis, tincidunt pharetra ante.
        </div>
        <div style={{ height: "60vh" }}>
          <div className="main-box">
            <div className="box-img" />
            <Typography fontSize="1.5rem" mt={1}>
              First
            </Typography>
            <Typography color="#797979" fontFamily="Noto Sans" mt={1}>
              Vivamus neque ipsum, cursus at dui quis, tincidunt pharetra ante. Donec luctus neque
              id dapibus varius. Praesent purus justo, lobortis quis nunc eget, lacinia elementum
              mauris. Pellentesque ac ante a nisi dapibus aliquet at et libero. Vestibulum efficitur
              lorem ut varius pretium. Vestibulum placerat molestie bibendum.
            </Typography>
          </div>
          <div className="main-box">
            <div className="box-img" />
            <Typography fontSize="1.5rem" mt={1}>
              Second
            </Typography>
            <Typography color="#797979" fontFamily="Noto Sans" mt={1}>
              Vivamus neque ipsum, cursus at dui quis, tincidunt pharetra ante. Donec luctus neque
              id dapibus varius. Praesent purus justo, lobortis quis nunc eget, lacinia elementum
              mauris. Pellentesque ac ante a nisi dapibus aliquet at et libero. Vestibulum efficitur
              lorem ut varius pretium. Vestibulum placerat molestie bibendum.
            </Typography>
          </div>
          <div className="main-box">
            <div className="box-img" />
            <Typography fontSize="1.5rem" mt={1}>
              Third
            </Typography>
            <Typography color="#797979" fontFamily="Noto Sans" mt={1}>
              Vivamus neque ipsum, cursus at dui quis, tincidunt pharetra ante. Donec luctus neque
              id dapibus varius. Praesent purus justo, lobortis quis nunc eget, lacinia elementum
              mauris. Pellentesque ac ante a nisi dapibus aliquet at et libero. Vestibulum efficitur
              lorem ut varius pretium. Vestibulum placerat molestie bibendum.
            </Typography>
          </div>
        </div>
      </div>
      <div className="main-3-container">
        <div className="main-3">
          <div className="glass-box-container">
            <div className="glass-box" style={{ top: "0px", left: "1%", zIndex: "2" }}>
              <p
                className="text-title"
                style={{
                  fontSize: "30px",
                  color: "white",
                  marginLeft: "50px",
                  marginTop: "80px",
                }}
              >
                Lorem ipsum dolor sit amet,
              </p>
              <div style={{ textAlign: "center", margin: "5%" }}>
                <div
                  style={{
                    textAlign: "center",
                    width: "25%",
                    margin: "3%",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={inspiration}
                    alt="inspiration"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <span className="text-title" style={{ color: "white", fontSize: "30px" }}>
                    130K
                  </span>
                  <div className="text" style={{ color: "white", fontSize: "15px" }}>
                    Vivamus neque ipsum, cursus at dui quis, tincidunt pharetra ante. Donec luctus
                    neque id dapibus varius.
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    width: "25%",
                    margin: "3%",
                    display: "inline-block",
                  }}
                >
                  <img src={book} alt="inspiration" style={{ width: "150px", height: "150px" }} />
                  <span className="text-title" style={{ color: "white", fontSize: "30px" }}>
                    95%
                  </span>
                  <div className="text" style={{ color: "white", fontSize: "15px" }}>
                    Vivamus neque ipsum, cursus at dui quis, tincidunt pharetra ante. Donec luctus
                    neque id dapibus varius.
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    width: "25%",
                    margin: "3%",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={working}
                    alt="inspiration"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <span className="text-title" style={{ color: "white", fontSize: "30px" }}>
                    7.5K
                  </span>
                  <div className="text" style={{ color: "white", fontSize: "15px" }}>
                    Vivamus neque ipsum, cursus at dui quis, tincidunt pharetra ante. Donec luctus
                    neque id dapibus varius.
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-box" style={{ top: "150px", left: "-1%", textAlign: "center" }}>
              <p
                className="text-title"
                style={{
                  fontSize: "25px",
                  color: "white",
                  marginTop: "120px",
                }}
              >
                Lorem ipsum dolor sit amet,
              </p>
              <p
                className="text"
                style={{
                  color: "white",
                  margin: "25%",
                  marginTop: "50px",
                  fontSize: "18px",
                }}
              >
                Curabitur a mollis orci. Vivamus porttitor tortor vitae sapien pretium suscipit.
                Morbi ut velit ac elit imperdiet accumsan non vel magna. Donec dictum metus non
                blandit rhoncus. Maecenas posuere, metus et mollis tincidunt, nunc arcu dignissim
                lorem, nec aliquam magna augue sit amet ex. Suspendisse potenti. Etiam rhoncus
                semper enim a facilisis. Duis nisi odio, tempor quis tortor at, molestie tempus
                massa.
              </p>
            </div>
          </div>
        </div>
      </div>
              */}
          <Footer />
        </Box>
      )}
      {/* 모바일 뷰 */}
      {isMobile && (
        <>
          <div className="mobile">
            {/* 메인화면 */}
            <div className="mobile-container">
              <div style={{ height: "auto", width: "auto" }}>
                <div className="text-title" style={{ fontSize: "2.5rem", width: "auto" }}>
                  Withplus.
                  <span
                    style={{
                      fontSize: "1.8rem",
                      color: "white",
                      backgroundColor: "#c60f0f",
                      textAlign: "right",
                      paddingRight: "5%",
                      paddingLeft: "5%",
                      marginLeft: "5%",
                      boxSizing: "border-box",
                    }}
                  >
                    live
                  </span>
                </div>

                <p
                  className="text"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8rem",
                    fontFamily: "NotoSansKR-Medium",
                  }}
                >
                  지금 바로 <br />
                  <span style={{ fontSize: "1.2rem", color: "#c60f0f", fontFamily: "Roboto-Bold" }}>
                    Live Polling
                  </span>
                  을 체험해보세요!
                </p>
                {/* 체험버튼 */}
                <div style={{ textAlign: "center" }}>
                  <button className="mobile-button" onClick={onClickBtn}>
                    체험하기
                  </button>
                </div>
              </div>
              {/* 메인 화면 이미지 */}
              <div className="mobile-image-container">
                <img src={mainImg} />
              </div>
            </div>
          </div>
          {/* 푸터 */}
          <MobileFooter />
        </>
      )}
    </>
  );
};

export default LandingPage;
