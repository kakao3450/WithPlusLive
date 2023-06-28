import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useMediaQuery } from "react-responsive";

import { socket } from "../utils/socket";

import {
  Typography,
  Avatar,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

// * table components
import { BillingHistoryTable } from "../components/Table";

// * Icons
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

import "./style.css";
import "../components/Layout.css";
import MobileAccessRestricted from "./MobileAccessRestricted";

// * 대시보드 페이지
const DashBoardPage = (props) => {
  const [cookies, ,] = useCookies();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [plan, setPlan] = useState("");

  const [state, setState] = useState("DashBoard");
  const [sort, setSort] = useState("Date");

  // * user info object
  const [user, setUser] = useState({});

  const [subscribeData, setSubscribeData] = useState([]);

  useEffect(() => {
    /** 유저정보 받아옴 */
    socket.on("userInfo", (data) => {
      setName(data.name);
      setStatus(data.status);
      setUser(data);
      setPlan(data.plan);
    });

    socket.emit("userInfo", { auth: cookies.auth });

    return () => {
      socket.off("userInfo");
    };
    // eslint-disable-next-line
  }, []);

  /** set myprogram sorting value */
  const handleChange = (e) => {
    setSort(e.target.value);
  };

  // 이름 별 정렬
  const changeOrderByName = (e) => {
    setSubscribeData(
      [...subscribeData].sort(function (a, b) {
        return a.game.name < b.game.name ? -1 : a.game.name > b.game.name ? 1 : 0;
      })
    );
  };

  // 날짜별 정렬
  const changeOrderByDate = (e) => {
    setSubscribeData(
      [...subscribeData].sort(function (a, b) {
        return new Date(b.expireDate) - new Date(a.expireDate);
      })
    );
  };

  /**main dashboard content */
  const content = () => {
    return (
      <div className="DashBoard">
        {/* 상단 프로필 */}
        <div className="profile-box">
          <div className="profile">
            <Avatar
              sx={{ width: "100px", height: "100px", float: "left" }}
              // src={
              //   "http://k.kakaocdn.net/dn/bQ2GUU/btr16koVrPH/XW6VkvERGS8Yjd3kPWI4zk/img_110x110.jpg"
              // }
            />
            <div style={{ float: "left", padding: "20px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  color="#707070"
                  fontSize="1.5rem"
                  fontFamily="Noto Sans"
                  fontWeight="700"
                >
                  {name}
                </Typography>
                <SettingsIcon
                  sx={{
                    color: "#707070",
                    marginLeft: "20px",
                    fontSize: "28px",
                  }}
                  onClick={() => setState("Profile")}
                />
              </div>
              <Typography color="#878787">{status}</Typography>
            </div>
          </div>
          {/* 프로필 오른쪽 정보 */}
          <div className="info">
            <div className="text-box">
              <div>
                <Typography sx={{ color: "#878787" }}>subscribing</Typography>
                <Typography sx={{ fontSize: "30px", color: "#878787" }}>
                  {subscribeData.length}
                </Typography>
              </div>
            </div>
            <div className="text-box">
              <div>
                <Typography sx={{ color: "#878787" }}>plan</Typography>
                <Typography sx={{ fontSize: "30px", color: "#878787" }}>
                  {plan.toUpperCase()}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="MyProgram-container">
          <div
            style={{
              display: "flex",
              height: "20%",
              alignItems: "center",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <Typography color="primary" fontSize="1.5rem" width="20%">
              My Program
            </Typography>
            <TextField
              sx={{ backgroundColor: "white", width: "50%" }}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <div
              style={{
                width: "20%",
                marginLeft: "10%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography color="primary " sx={{ width: "40%" }}>
                Sort by :{" "}
              </Typography>
              <FormControl sx={{ width: "60%" }}>
                <InputLabel id="select-label">Sort</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  value={sort}
                  label="sort"
                  onChange={handleChange}
                >
                  <MenuItem value={"Date"} onClick={changeOrderByDate}>
                    Date
                  </MenuItem>
                  <MenuItem value={"Name"} onClick={changeOrderByName}>
                    Name
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="MyProgram"></div>
        </div>
      </div>
    );
  };

  /** profile content */
  const profile = () => {
    return (
      <div className="DashBoard">
        <div className="profile-box" style={{ height: "25%", justifyContent: "left" }}>
          <div className="profile" style={{ paddingLeft: "5%" }}>
            <Avatar sx={{ width: "20vmin", height: "20vmin", float: "left" }} />
            <div style={{ float: "left", padding: "50px", textAlign: "left" }}>
              <Typography
                sx={{ color: "#707070" }}
                fontSize="1.5rem"
                fontFamily="Noto Sans"
                fontWeight="700"
              >
                {name}
              </Typography>
              <Typography sx={{ color: "#878787", fontWeight: 300, fontFamily: "Noto Sans" }}>
                {status}
              </Typography>
            </div>
          </div>
        </div>

        {/* 유저 프로필 아래부분 그리드 */}
        <div className="profile-grid">
          {/* 유저 information */}
          <div className="cell1">
            <div className="item">
              <div
                style={{
                  height: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Typography sx={{ ml: "10%" }}>Information</Typography>
              </div>
              <div className="info-grid">
                {/* 유저이름 */}
                <div className="container">
                  <div className="box">
                    <div
                      style={{
                        width: "80%",
                        height: "auto",
                        textAlign: "left",
                        margin: "auto",
                      }}
                    >
                      <Typography fontFamily="Noto Sans" color="#797979" fontSize="0.9rem">
                        name
                      </Typography>

                      <div>{user.name}</div>
                    </div>
                  </div>
                </div>
                {/* 유저 이메일 */}
                <div className="container">
                  <div className="box">
                    <div
                      style={{
                        width: "80%",
                        height: "auto",
                        textAlign: "left",
                        margin: "auto",
                      }}
                    >
                      <Typography fontFamily="Noto Sans" color="#797979" fontSize="0.9rem">
                        email
                      </Typography>

                      <div>{user.email}</div>
                    </div>
                  </div>
                </div>
                {/* 유저 회사 */}
                <div className="container">
                  <div className="box">
                    <div
                      style={{
                        width: "80%",
                        height: "auto",
                        textAlign: "left",
                        margin: "auto",
                      }}
                    >
                      <Typography fontFamily="Noto Sans" color="#797979" fontSize="0.9rem">
                        company
                      </Typography>

                      <div>{user.company}</div>
                    </div>
                  </div>
                </div>
                {/* 유저.. 머 넣을지 생각 */}
                <div className="container">
                  <div className="box">
                    <div
                      style={{
                        width: "80%",
                        height: "auto",
                        textAlign: "left",
                        margin: "auto",
                      }}
                    >
                      <Typography fontFamily="Noto Sans" color="#797979" fontSize="0.9rem">
                        subscribe
                      </Typography>

                      <div>{user.plan.toUpperCase()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cell3">
            <div className="item">
              <div
                style={{
                  height: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ height: "15%" }}>Recent</Typography>
              </div>
              <div className="recent-container"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /** subscribe content */
  const subscribe = () => {
    return (
      <div className="DashBoard">
        <div className="plan-container">
          <Typography fontSize="2rem" textAlign="left" color="primary">
            My Plan
          </Typography>
          <div className="plan">
            <div className="plan-info">
              <Typography color="primary" fontSize="1.5rem" textAlign="left">
                {plan.toUpperCase()}
              </Typography>
              <Typography color="#797979" fontSize="1rem" fontFamily="Noto Sans" textAlign="left">
                {/* 기간 설정 함수로 */}
                2022 - 3 - 29 ~ 2023 - 12 - 25
              </Typography>
              <div style={{ width: "50%", marginTop: "2%" }}></div>
            </div>
            <div className="line" />
            <div className="plan-info">
              <Typography
                color="primary"
                textAlign="left"
                fontFamily="Noto Sans"
                fontWeight="600"
                fontSize="1.2rem"
              >
                Includes
              </Typography>
              <Typography textAlign="left" mt="2%" color="#878787" fontFamily="Noto Sans">
                {/* 여기도 역시 받아오는걸로 설정해서 다시 */}
                Live Polling {/*<br /> Egogram <br /> Great Series*/}
              </Typography>
            </div>
          </div>
          <div>
            <Typography
              sx={{
                height: "10%",
                fontSize: "1.3rem",
                color: "#191919",
                textAlign: "left",
                boxSizing: "border-box",
                mb: "10px",
              }}
              fontFamily="Noto Sans"
            >
              Billing History
            </Typography>
            <BillingHistoryTable />
          </div>
        </div>
      </div>
    );
  };

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
      {isPc && (
        <div className="DashBoardLayout">
          {/* 사이드바 */}
          <div className="side-bar">
            <div className="side-button-container">
              <div
                className={state === "DashBoard" ? "side-button-on" : "side-button"}
                onClick={() => setState("DashBoard")}
              >
                <p>DashBoard</p>
              </div>
              <div
                className={state === "Profile" ? "side-button-on" : "side-button"}
                onClick={() => setState("Profile")}
              >
                <p>Profile</p>
              </div>
              <div
                className={state === "Subscribe" ? "side-button-on" : "side-button"}
                onClick={() => setState("Subscribe")}
              >
                <p>Subscribe</p>
              </div>
            </div>
          </div>
          {/* 각 페이지 */}
          <div className="main-content">
            {state === "DashBoard" && content()}
            {state === "Profile" && profile()}
            {state === "Subscribe" && subscribe()}
          </div>
        </div>
      )}
      {isMobile && <MobileAccessRestricted />}
    </>
  );
};

export default DashBoardPage;
