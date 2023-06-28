import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect} from "react";
import { CookiesProvider } from 'react-cookie';

import Layout from "./components/Layout";
import LoginPage from "./views/LoginPage/LoginPage";
import DashBoardPage from "./views/DashBoardPage";
import Auth from "./auth/auth";
import LandingPage from "./views/LandingPage";
import PasswordPage from "./views/PasswordPage";
import CertificationPage from "./views/CertificationPage";
import KakaoOauth from './views/oAuth/Kakao';

import KAKAO from './config/kakao'

import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackBarProvider } from "components/SnackBar/ContextAPI";

/** 테마 설정 */
const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans", "NotoSansKR-Medium", "Roboto-Bold"],
    button: {
      textTransform: "none",
    },
  },
  input:{
    fontFamily:"NotoSansKR-Medium"
  },
  palette: {
    primary: {
      light: "#ff7961",
      main: "#c33c3c",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

function App(props) {
  /** 스크린 사이즈 맞춤 설정 */
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', setScreenSize);

  useEffect(() => {
    setScreenSize();
    try{
      window.Kakao.init(KAKAO.JAVASCRIPT_KEY);
    }catch(e){
    }

  }, []);

  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CookiesProvider>
          <SnackBarProvider>
            <Layout>
              <Routes>
                {/* 모두 접근 가능한 Page */}
                <Route exact path='/' element={<LandingPage/>} /> {/* 랜딩페이지 */} 
                <Route exact path='/password' element={<PasswordPage/>} /> {/* 비밀번호 찾기 페이지 */}

                {/* 로그인한 유저는 접근 불가능한 Page */}
                <Route exact path='/login' element={<Auth Component={LoginPage} isAuthRequired={false}/>} /> {/* 로그인 페이지 */}
                <Route exact path='/certification' element={<Auth Component={CertificationPage} isAuthRequired={false}/>} /> {/* 인증코드 입력 페이지 */}
                
                {/* 로그인 못한 유저는 접근 불가능한 Page */}
                <Route exact path='/dashboard' element={<Auth Component={DashBoardPage} isAuthRequired={true}/> } /> {/* 대시보드 페이지 */}
                
                {/* OAuth Redirect 페이지 */}
                <Route exact path="/oauth/kakao" element={<KakaoOauth/>}/>
              </Routes>
            </Layout>
          </SnackBarProvider>
        </CookiesProvider>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
