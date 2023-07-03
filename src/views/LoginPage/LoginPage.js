import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "./LoginPage.css";
import Login from "./Login";
import RegisterPage from "../RegisterPage/RegisterPage";

import { Button } from "@mui/material";
import { CheckBoxOutlineBlankSharp } from "@mui/icons-material";

const LoginPage = (props) => {
  // useLocation은 현재 경로 정보를 사용하게 해줌 _ 이정욱
  const location = useLocation();
  // location.state?.state은 이전 페이지에서 전달된 state가 null이나 undefind면 오류를 발생 시키지 않고 그냥 undefind로 반환
  const [isSignUp, setIsSignUp] = useState(location.state?.state);



  // 반응형 웹
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  // 반응형 모바일
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {/* PC 화면 */}
      {isPc && (
        <div
          style={{
            backgroundColor: "#F5F5F5",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <div className="container">
            <div className="login-background" data-issignup={isSignUp}>
              <motion.div
                layout
                transition={{
                  opacity: { ease: "linear" },
                  layout: { duration: 0.5 },
                }}
                className="wide"
              >
                {isSignUp ? <RegisterPage /> : <Login />}
              </motion.div>
              <motion.div
                className="create-account-background"
                data-issignup={isSignUp}
                layout
                transition={{
                  opacity: { ease: "linear" },
                  layout: { duration: 0.5 },
                }}
              >
                <div style={{ width: "100%" }}>
                  <motion.div
                    style={{
                      fontFamily: "Roboto-Bold",
                      fontSize: "35px",
                      color: "white",
                    }}
                  >
                    {isSignUp ? "Login" : "Create Account"}
                  </motion.div>
                  <p style={{ color: "white", marginBottom: "10%" }}>
                    {isSignUp ? "계정이 있으신가요?" : "아직 회원이 아니신가요?"}
                  </p>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      width: "40%",
                      hight: "60px",
                      display: "block",
                      margin: "auto",
                      mt: 3,
                      mb: 2,
                      p: 1.5,
                      fontFamily: "Noto Sans",
                      fontWeight: "bold",
                      fontSize: "17px",
                      borderRadius: 30,
                      borderColor: "white",
                      border: 1,
                      background: "transparent",
                      boxShadow: 0,
                      "&:hover": { backgroundColor: "#df9191" },
                    }}
                    onClick={() => setIsSignUp((prev) => !prev)}
                  >
                    {isSignUp ? "로그인하기" : "회원가입하기"}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
      {/* 모바일 화면 */}
      {isMobile && (
        <div className="mobile-login">
          <div className="mobile-container">
            {/* 로그인 / 회원가입 컴포넌트 */}
            {isSignUp ? <RegisterPage /> : <Login />}

            {/* 아래부분 로그인, 회원가입 버튼 */}
            <div style={{ width: "100%", marginTop: "5%" }}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#797979",
                  fontFamily: "NotoSansKR-Medium",
                  fontSize: "1rem",
                }}
                onClick={() => setIsSignUp((prev) => !prev)}
              >
                {isSignUp ? "로그인하기" : "회원가입하기"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;

// 기존 코드

//  <div
//       style={{
//         backgroundColor: "#F5F5F5",
//         height: "100vh",
//         textAlign: "center",
//       }}
//     >
//       <Box sx={{ boxSizing: "border-box" }}>
//         <LandingHeader />
//         <div className="container">
//           <Box
//             className="box"
//             onSubmit={handleSubmit}
//             component="form"
//             sx={{
//               mt: 1,
//               alignItems: "center",
//               flexDirection: "column",
//               display: "flex",
//             }}
//           >
//             {/* 로그인 아이콘 */}
//             <Avatar
//               sx={{ m: 1, bgcolor: deepPurple[500], width: 56, height: 56 }}
//             >
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5" sx={{ py: 1 }}>
//               로그인
//             </Typography>
//             {/* 로그인 방식 체크박스 컨테이너 */}
//             <Box
//               sx={{
//                 width: "100%",
//                 borderRadius: "10px",
//                 border: 1,
//                 borderColor: "rgba(0,0,0,0.2)",
//               }}
//             >
//               <FormHelperText error={helperStyle} sx={{ textAlign: "center" }}>
//                 {"로그인 방식을 선택해주세요."}
//               </FormHelperText>
//               <Grid container sx={{ px: 1 }}>
//                 <Grid item xs sx={{ px: 4 }}>
//                   <FormControlLabel
//                     label="SuperAdmin"
//                     control={
//                       <Checkbox
//                         checked={checkBox[0]}
//                         onChange={handleChangeSuperAdmin}
//                       />
//                     }
//                   />
//                 </Grid>
//                 <Grid item xs sx={{ px: 4 }}>
//                   <FormControlLabel
//                     label="Admin"
//                     control={
//                       <Checkbox
//                         checked={checkBox[1]}
//                         onChange={handleChangeAdmin}
//                       />
//                     }
//                   />
//                 </Grid>
//               </Grid>
//             </Box>
//             {/* 이메일 Textfield */}
//             <TextField
//               type="text"
//               margin="normal"
//               fullWidth
//               label="이메일"
//               required
//               onChange={(e) => handleEmail(e)}
//               autoComplete="off"
//             />
//             {/* 패스워드 Textfield */}
//             <TextField
//               type="password"
//               margin="normal"
//               fullWidth
//               label="패스워드"
//               required
//               onChange={(e) => handlePassword(e)}
//             />
//             {/* 로그인 버튼 */}
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               로그인
//             </Button>
//             {/* 비밀번호 찾기 및 변경, 회원가입 버튼 컨테이너 */}
//             <Grid container>
//               <Grid item xs>
//                 <Link
//                   className="test"
//                   onClick={goToPasswordPage}
//                   sx={{ cursor: "pointer" }}
//                 >
//                   비밀번호 찾기 및 변경
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link className="test" href="/signup">
//                   회원가입
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </div>
//       </Box>
//     </div>
