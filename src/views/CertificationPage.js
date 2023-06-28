import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { init } from "emailjs-com";
import { socket } from "../utils/socket";

import { Box, Typography, Button } from "@mui/material";

import KeyIcon from "@mui/icons-material/Key";

import Logo from "../assets/images/withplus Logo.png";
import { Textfield as TextField } from "./../components/Textfield";
// import GAME from "../config/game";

// * 회원가입 인증코드 입력 페이지
const CertificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  const date = new Date();
  const userId = location.state?.userId;
  const [certKey, setCertKey] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  // * 인증 코드 입력 Change 함수
  const handleKey = (e) => {
    if (error) {
      setError(false);
      setHelperText("");
    }
    setCertKey(e.target.value);
  };
  // * 인증 코드 Check (서버 전송)
  const checkKey = () => {
    if (certKey.length !== 6) {
      setError(true);
      setHelperText("6자리 인증코드를 입력해주세요.");
    } else {
      axios
        .get("/account/certification", { params: { userId: userId, certificationKey: certKey } })
        .then((response) => {
          let data = response.data;

          if (data.success) {
            alert("인증이 완료되었습니다.");
            axios.get("/account/autoLogin", { params: { userId: userId } }).then((response) => {
              let data = response.data;

              if (data.success) {
                let expires = new Date();
                expires.setTime(date.getTime() + 1000 * 60 * 60);
                setCookie("auth", data.auth, { path: "/", expires: expires });

                // 회원가입 하면 자동으로 라이브폴링 추가되게
                // let now = new Date();
                // let oneMonthLater = new Date(now.setMonth(now.getMonth() + 1));
                // socket.emit("applyGame", {
                //   gameId: "641017556a96f5a7ca0e7e17",
                //   expireDate: oneMonthLater,
                //   people: 30,
                //   token: data.auth,
                // });
                navigate("/dashboard");
              }
            });
          } else {
            alert("인증에 실패하였습니다.");
          }
        })
        .catch((error) => {
          alert("인증에 실패하였습니다.");
        });
    }
  };
  // * 인증메일 다시 보내기 이벤트
  const resendMail = () => {
    alert("메일이 전송되었습니다.");

    // send('service_b31q3bd', 'template_ojdrteq', {to_email:email, certificationKey: certificationKey})
    // .then(response => {
    //     alert("메일이 전송되었습니다.")
    // })
  };

  useEffect(() => {
    if (!location.state) {
      alert("잘못된 접근입니다.");
      navigate("/login", { replace: true });
    }
    // * EmailJS init
    init("9SiX5buHejWEjFEfx");
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#efefef",
      }}
    >
      <Box sx={{ minWidth: "600px" }}>
        {/* Logo */}
        <Box sx={{ width: "600px", mb: "50px", display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="logo" style={{ width: "60%" }} />
        </Box>

        <Box sx={{ my: "10px" }}>
          <Typography sx={{ font: "30px NotoSansKR-Medium" }}>이메일 인증</Typography>
          <Typography sx={{ font: "18px NotoSansKR-Medium" }}>
            등록하신 이메일로 발송된 인증키를 아래 입력창에 입력해 주세요.
          </Typography>
        </Box>

        {/* 인증키 입력 TextField */}
        <Box sx={{ my: "10px" }}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: <KeyIcon sx={{ color: "#00000050", mr: 1 }} />,
            }}
            placeholder="인증키를 입력해주세요. (ex: 123456)"
            value={certKey}
            onChange={handleKey}
            error={error}
            helperText={helperText}
          />
        </Box>

        {/* Button Container */}
        <Box sx={{ my: "10px" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              my: "5px",
              height: "50px",
              backgroundColor: "#91010c",
              "&:hover": { backgroundColor: "#71010c" },
              fontFamily: "NotoSansKR-Medium",
            }}
            onClick={checkKey}
          >
            인증
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              my: "5px",
              height: "50px",
              backgroundColor: "#909090",
              "&:hover": { backgroundColor: "#707070" },
              fontFamily: "NotoSansKR-Medium",
            }}
            onClick={resendMail}
          >
            인증 메일 다시 보내기
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationPage;
