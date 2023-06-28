import axios from "axios";

import KAKAO from "../config/kakao";

export const KAKAO_getAccessToken = async (code) => {
  const res = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO.REST_API_KEY}&redirect_uri=${KAKAO.REDIRECT_PAGE}&code=${code}`,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );

  return res.data.access_token;
};

export const KAKAO_getAccount = async (ACCESS_TOKEN) => {
  const res = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return res.data.kakao_account;
};

export const API_CheckUser = async (email, name, profile) => {
  const res = await axios.get("/account/checkUser", { params: { email: email, name: name } });

  return res.data;
};

export const LOGIN_USER = (params, callback) => {
  axios.get("/account/login", { params }).then((res) => callback(res));
};
