import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  //## CookiesProvider
  //쿠키를 읽고 쓰기 위한 기능을 제공하는 컴포넌트
  //애플리케이션 최상위 컴포넌트로 감싸면, 하위 컴포넌튼에서 쿠키 사용 가능
  
  <CookiesProvider>
    <App/>
  </CookiesProvider>
);

// 쿠키는 정확히 무엇일까? 왜 사용하는 것 일까?
// 쿠키는 사용자가 방문한 웹사이트에서 사용자의 브라우저에 전송하는 작은 텍스트 조각
// 사용자의 방문에 관한 정보를 기억하여 다음번에 사이트에 방문했을 때 번거로운 작업을 피하고 더 유용하게 사이트를 활용

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
