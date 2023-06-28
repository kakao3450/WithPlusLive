import React, { useEffect } from "react";
// import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import { KAKAO_getAccessToken, KAKAO_getAccount, API_CheckUser } from "./../../utils/api";

const KakaoOauth = (props) => {
  const [, setCookie] = useCookies();
  const navigate = useNavigate();
  const now = new Date();

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분

    KAKAO_getAccessToken(code)
      .then((ACCESS_TOKEN) => {
        // ? 쿠키 이름 난독화 시킬것
        let expire = new Date();
        expire.setTime(now.getTime() + 1000 * 60 * 60 * 5);
        setCookie("ACCESS_TOKEN", ACCESS_TOKEN, { path: "/", expires: expire });
        // ?

        KAKAO_getAccount(ACCESS_TOKEN).then((KAKAO_ACCOUNT) => {
          API_CheckUser(KAKAO_ACCOUNT.email, KAKAO_ACCOUNT.name, KAKAO_ACCOUNT.profile).then(
            (res) => {
              let { /*isExisted,*/ auth } = res;
              let expires = new Date();

              expires.setTime(now.getTime() + 1000 * 60 * 60 * 5);
              setCookie("auth", auth, { path: "/", expires: expires });

              // if (!isExisted) {
              //   let oneMonthLater = new Date(now.setMonth(now.getMonth() + 1));
              //   socket.emit("applyGame", {
              //     gameId: 11,
              //     expireDate: oneMonthLater,
              //     people: 30,
              //     token: auth,
              //   });
              // }

              navigate(`/dashboard`);
            }
          );
        });
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ pt: "80px" }}>
      {/* 사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면 된다. */}
    </Box>
  );
};

export default KakaoOauth;
