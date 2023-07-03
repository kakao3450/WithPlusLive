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
import { NaverOAuth } from "views/oAuth/Naver";



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
    //vh 버그 해결을 위해 커스텀 vh를 만들어서 사용? _ 이정욱
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  //viewport의 높이가 변경될 때마다 --vh의 값을 업데이트 _ 이정욱
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
                {/*exact는  '/' 경로가 정확히 일치하는 경우에만 컴포넌트 렌더링 됨_이정욱*/}
                {/* 모두 접근 가능한 Page */}
                {/*element와 compoent의 차이점   element는 컴포넌트 전체를 랜더딩 하기 때문에 해당 인스턴스도 같이 실행이된다. element는 JSX요소를 직접 전달해 해당 컴포넌트의 인스턴스는 실행되지 않는다 _ 이정욱*/}
                {/**/}
                <Route exact path='/' element={<LandingPage/>} /> {/* 랜딩페이지 */} 
                <Route exact path='/password' element={<PasswordPage/>} /> {/* 비밀번호 찾기 페이지 */}

                {/* 로그인한 유저는 접근 불가능한 Page */}
                {/* element 안에 compoent를 쓴 이유... JSX 요소인 Auth만 사용하여 로그인 여부, 쿠키 여부를 판단하고, LoginPage 전체를 랜더링한다. 하고 부모 컴포넌트인 Authdml Props인 isAuthReqired를 불린 타입으로 받아 초기값을 false로 주고 해당 Props가 참, 거짓이냐에 따라 라우팅 하는 루트를 정해준다   _ 이정욱 */}
                <Route exact path='/login' element={<Auth Component={LoginPage} isAuthRequired={false}/>} /> {/* 로그인 페이지 */}
                <Route exact path='/certification' element={<Auth Component={CertificationPage} isAuthRequired={false}/>} /> {/* 인증코드 입력 페이지 */}
                
                {/* 로그인 못한 유저는 접근 불가능한 Page */}
                <Route exact path='/dashboard' element={<Auth Component={DashBoardPage} isAuthRequired={true}/> } /> {/* 대시보드 페이지 */}
                
                {/* OAuth Redirect 페이지 */}
                <Route exact path="/oauth/kakao" element={<KakaoOauth/>}/>
                <Route exact path="/oauth/naver" element={<NaverOAuth/>}/>                            
              </Routes>
            </Layout>
          </SnackBarProvider>
        </CookiesProvider>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
