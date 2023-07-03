import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'

const Naver = () =>{

  //'window'객체 속성 중 index.js에 포함시킨 script를 통해 window.naver 접근
  const { naver } = window
  // 저의 Client_ID 입니다_ 회사껄로 수정 필요
  const NAVER_CLIENT_ID = "MyyEdBGBo5at1A6J_yao"
  //callback url
  const NAVER_CALLBACK_URL = "http://localhost:3000/oauth/naver"

  const NaverLogin = () =>{
      //네이버 API 수정을 위한 초기값 설정
      let naverLogin = new naver.LoginWithNaverId({
        clientId: NAVER_CLIENT_ID,
        callbackUrl: NAVER_CALLBACK_URL,    
        isPopup: false,
        loginButton: { color: 'green', type: 1, height: 40,},
      })
    naverLogin.init();
  };

  useEffect(() => {
    NaverLogin();
  }, [])

return (
  <div>
    <div className="grid-naver" id='naverIdLogin'></div>
  </div>
)
}

export const NaverOAuth = () => {
    // useLocation 이용
    const location = useLocation();

    let params = new URL(window.location.href).searchParams;
    let code = params.get("code");
    console.log(params);
    console.log(code);

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0]; //token 출력

    console.log(token)

    axios.get("/naver/token", {params:{token:token}}).then(res => {
      console.log(res.data)
    })  
  };
  
  // const fetchData = async () => {
  //   console.log("fechData는 들어옴?")
  //   if (code) {
  //       try {
  //         const response = await axios.post('http://localhost:3000/oauth/naver', { code });
  //         console.log(response.data);
  //         window.location.replace('/login');
  //         console.log("test2123");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //   }
  // };

  useEffect(() => {
    // fetchData();
    getNaverToken();
  }, []);

  return (
    <div>
      <button>{/* 콜백 URL에서 함수 호출용 이라 리턴은 필요없음 */}</button>
    </div>
  )
}

export default Naver;