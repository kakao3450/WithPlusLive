import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Box, Typography } from "@mui/material";

import { socket } from "utils/socket";

import wLogo from "../assets/images/wLogo(Black).png";

import "./Layout.css";

/** 일반헤더 */
export const LandingHeader = () => {
  const navigate = useNavigate();
  const depth = useLocation().pathname.split("/");
  const [cookies, , removeCookie] = useCookies();

  // * 페이지 이동
  const goTo = (e) => {
    if (depth[4]) {
      socket.emit("leaveRoom", { id: depth[4] });
      socket.emit("leaveRoom", { id: `LiveQuiz-${depth[4]}-admin` });
      socket.emit("leaveRoom", { id: `LiveQuiz-${depth[4]}` });
    }
    navigate(`/${e.currentTarget.id}`);
  };
  /** 로그아웃 */
  const logout = (e) => {
    alert("로그아웃 되었습니다.");
    removeCookie("auth", { path: "/" });
    removeCookie("ACCESS_TOKEN", { path: "/" });
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: "100",
        height: "80px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
        px: "50px",
        boxShadow: "0px 3px 6px #00000028",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          id=""
          sx={{
            display: "flex",
            alignItems: "center",
            mr: "100px",
            cursor: "pointer",
            "&:hover": { background: "#efefef" },
          }}
          onClick={goTo}
        >
          <Box sx={{ width: "30px", height: "30px", mr: "5px" }}>
            <img src={wLogo} alt="w-logo" style={{ width: "100%" }} />
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Roboto-Black",
              marginLeft: "3px",
            }}
          >
            WITHPLUS LIVE
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <button
            id=""
            className={"" === depth[1] ? "header-menu-onclick" : "header-menu"}
            onClick={goTo}
          >
            개요
          </button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* 로그인 시 마이페이지 뜸 */}
        {cookies.auth ? (
          <button
            id="dashboard"
            className={"dashboard" === depth[1] ? "header-menu-onclick" : "header-menu"}
            onClick={goTo}
          >
            마이페이지
          </button>
        ) : null}
        {/* 로그인일때 -> logout, 아니면 login  */}
        <button
          id="login"
          className={"login" === depth[1] ? "header-menu-onclick" : "header-menu"}
          onClick={cookies.auth ? logout : goTo}
        >
          {cookies.auth ? "로그아웃" : "로그인"}
        </button>
      </Box>
    </Box>
  );
};
