import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// import { motion } from "framer-motion";
// import axios from "axios";

// import { socket } from "../../utils/socket";
// import logo from "../../assets/images/withplus Logo.png";
import kakao from "../../assets/images/kakao_login_medium_wide.png";
import KAKAO from "../../config/kakao";


import {
  Button,
  Grid,
  TextField,
  FormHelperText,
  Container,
  Avatar,
  Typography,
  Box,
  Checkbox,
  Link,
  FormControlLabel,
} from "@mui/material";

// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LOGIN_USER } from "utils/api";
import  Google  from "views/oAuth/Google";
import Naver from "views/oAuth/Naver";



function Login(props) {
  const navigate = useNavigate();
  const date = new Date();
  const [, setCookie] = useCookies();
  const [loginType, setloginType] = useState("Admin");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // 기본 admin으로 사용
  const [checkBox, setCheckBox] = useState([false, true]);
  const [helperStyle, setHelperStyle] = useState(false);

  // 반응형 웹
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  // 반응형 모바일
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  // * 로그인 정보 서버 전달
  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginType === "") {
      setHelperStyle(true);
      return;
    }

    if (loginType !== "") {
      LOGIN_USER({ loginType, email, password }, (res) => {
        let data = res.data;

        if (data.success) {
          let expires = new Date();
          expires.setTime(date.getTime() + 1000 * 60 * 60 * 5);

          setCookie("auth", data.auth, { path: "/", expires: expires });

          navigate("/dashboard");
        } else {
          if (data.error === "Not Certificated")
            navigate("/certification", { state: { userId: data.user._id } });
          else alert("로그인에 실패하였습니다.");
        }
      });
    }
  };

  // * Email value Change Event
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  // * Password value Change Event
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };
  // *  Super Admin value Change Event
  const handleChangeSuperAdmin = (e) => {
    if (!e.target.checked) {
      let newArr = [...checkBox];
      newArr[0] = false;
      setCheckBox(newArr);
    } else {
      setCheckBox([e.target.checked, !e.target.checked]);
    }
  };
  // *  Admin value Change Event
  const handleChangeAdmin = (e) => {
    if (!e.target.checked) {
      let newArr = [...checkBox];
      newArr[1] = false;
      setCheckBox(newArr);
    } else {
      setCheckBox([!e.target.checked, e.target.checked]);
    }
  };
  // * 비밀번호 찾기 페이지 이동 함수
  const goToPasswordPage = () => {
    navigate("/password");
  };
  // * 카카오 로그인
  const KakaoLogin = () => {
    window.Kakao.Auth.authorize({
      // redirectUri:
      //   process.env.NODE_ENV === "development"
      //     ? "http://localhost:3000/oauth/kakao"
      //     : "https://www.withplus.live/oauth/kakao",
      redirectUri: KAKAO.REDIRECT_PAGE,
    });
  };


  // // * 체크박스 변경시 로그인 타입명 변경
  // useEffect(() => {
  //   if (checkBox[0]) setloginType("SuperAdmin");
  //   else if (checkBox[1]) setloginType("Admin");
  //   else setloginType("");
  // }, [checkBox]);

  // useEffect(() => {
  //   socket.on("login", (data) => {
  //     if (data.success) {
  //       let expires = new Date();
  //       expires.setTime(date.getTime() + 1000 * 60 * 60 * 5);
  //       setCookie("auth", data.auth, { path: "/", expires: expires });
  //       navigate(`/dashboard`);
  //     } else {
  //       if (data.error === "Not Certificated") {
  //         navigate("/certification", { state: { userId: data.user._id } });
  //       } else {
  //         alert("로그인에 실패하였습니다.");
  //       }
  //     }
  //   });

  //   return () => {
  //     socket.off("login");
  //   };
  // }, []);
  return (
    <>
      {/* pc 화면 */}
      {isPc && (
        <div className="login-container">
          <Container
            maxWidth="md"
            sx={{
              height: "100%",
              // textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box onSubmit={handleSubmit} component="form" sx={{ width: "100%" }}>
              <div className="login-text-title">Login</div>
              {/* SuperAdmin, Admin 선택박스 */}
              {/* 사용안하고 기본은 admin으로 */}
              {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container sx={{ width: "50%" }}>
              <Grid item xs sx={{ px: 0, display: "flex", justifyContent: "center" }}>
                <FormControlLabel
                  label="Super Admin"
                  control={<Checkbox checked={checkBox[0]} onChange={handleChangeSuperAdmin} />}
                />
              </Grid>
              <Grid item xs sx={{ px: 0, display: "flex", justifyContent: "center" }}>
                <FormControlLabel
                  label="Admin"
                  control={<Checkbox checked={checkBox[1]} onChange={handleChangeAdmin} />}
                />
              </Grid>
            </Grid>
          </div> */}
              {/* 이메일, 비밀번호 입력 필드 */}
              <div
                style={{
                  display: "block",
                  justifyContent: "center",
                  marginTop: "3%",
                }}
              >
                <TextField
                  sx={{
                    width: "60%",
                    // height: "70px",
                    backgroundColor: "#F5F5F5",
                    border: "none",
                  }}
                  type="text"
                  margin="normal"
                  label="이메일"
                  required
                  onChange={(e) => handleEmail(e)}
                  autoComplete="off"
                />
                {/* 패스워드 Textfield */}
                <TextField
                  sx={{
                    width: "60%",
                    // height: "70px",
                    backgroundColor: "#F5F5F5",
                    border: "none",
                  }}
                  type="password"
                  margin="normal"
                  label="패스워드"
                  required
                  onChange={(e) => handlePassword(e)}
                />

                {/* 비밀번호 찾기 */}
                <div>
                  <Link
                    className="test"
                    onClick={goToPasswordPage}
                    sx={{
                      cursor: "pointer",
                      fontFamily: "Noto Sans",
                      fontSize: "15px",
                      color: "#191919",
                    }}
                  >
                    비밀번호를 잊으셨나요? →
                  </Link>
                </div>
                {/* 로그인 버튼 */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    width: "60%",
                    display: "block",
                    margin: "auto",
                    mt: 3,
                    mb: 2,
                    fontFamily: "Noto Sans",
                    fontWeight: "bold",
                    fontSize: "17px",
                    borderRadius: "5px",
                  }}
                >
                  로그인
                </Button>

                {/* 카카오 로그인  */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <button className="kakao-button">
                    <img src={kakao} alt="카카오 아이콘" onClick={KakaoLogin} />
                  </button>
                </Box>
                {/*구글 로그인*/}
                <Box sx={{ display: "flex", justifyContent: "space-around",marginTop:"1em",width:"135px",marginLeft:"18rem"}}>
                  <Google/>
                  <Naver/>
                </Box>
                {/* 네이버 로그인
                <Box sx={{ display: "flex", justifyContent: "center",marginTop:"1em", backgroundColor:"green",width:"20px"}}>
                  <Naver/>
                </Box> */}
              </div>
            </Box>
          </Container> 
        </div>
      )}
    </>
  );
}

export default Login;
