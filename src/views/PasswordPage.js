import React, { useEffect, useState } from "react";
import { init, send } from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

import { Button, Box, Typography } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

import { Textfield as TextField } from "./../components/Textfield";

// * 비밀번호 찾기 페이지
const PasswordPage = () => {
  const navigate = useNavigate();

  // 반응형 웹
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  // 반응형 모바일
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  /** 비밀번호 정규식 */
  const regExp =
    // eslint-disable-next-line
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  // * 비밀번호 초기화 및 초기화된 비밀번호 메일로 전송
  const resetPassword = async () => {
    if (regExp.test(email)) {
      axios.get("/account/resetPassword", { params: { email: email } }).then((response) => {
        let data = response.data;

        if (data.success) {
          send("service_b31q3bd", "template_xgucl0l", {
            to_email: email,
            password: data.password,
          }).then((response) => {
            if (response.status === 200) {
              alert("입력된 이메일로 임시 비밀번호가 전송되었습니다.");
              navigate("/login");
            } else {
              alert("이메일 전송에 실패했습니다.");
            }
          });
        } else {
          alert(data.message);
        }
      });
    } else {
      setError(true);
      setHelperText("이메일 형식에 맞게 입력해주세요.");
    }
  };

  // * Email value Change Event
  const handleEmail = (e) => {
    if (error) {
      setError(false);
      setHelperText("");
    }
    setEmail(e.target.value);
  };

  // * EmailJS init
  useEffect(() => {
    init("9SiX5buHejWEjFEfx");
  }, []);
  return (
    <>
      {/* pc화면 */}
      {isPc && (
        <Box sx={{ pt: "80px" }}>
          {/* Body */}
          <Box
            sx={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Box sx={{ minWidth: "768px" }}>
              <Typography sx={{ fontSize: "30px" }}>비밀번호 찾기</Typography>
              {/* 이메일 Textfield */}
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: <PersonIcon sx={{ color: "#00000050", mr: 1 }} />,
                }}
                placeholder="이메일 (ex: emailID@email.com)"
                value={email}
                onChange={handleEmail}
                error={error}
                helperText={helperText}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: "30px", fontSize: "20px", mb: "15px" }}
                onClick={resetPassword}
              >
                확인
              </Button>
              <Typography sx={{ color: "#00000070" }}>
                * 해당 이메일로 임시 비밀번호가 전송됩니다.
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      {/* 모바일 화면 */}
      {isMobile && (
        <Box className="mobile-password-container">
          {/* Body */}
          <Box sx={{ width: "90%" }}>
            <Typography
              sx={{ fontSize: "1.5rem", fontFamily: "NotoSansKR-Medium", marginBottom: "5%" }}
            >
              비밀번호 찾기
            </Typography>
            {/* 이메일 Textfield */}
            <TextField
              fullWidth
              InputProps={{
                startAdornment: <PersonIcon sx={{ color: "#00000050", mr: 1 }} />,
              }}
              placeholder="이메일 (ex: emailID@email.com)"
              value={email}
              onChange={handleEmail}
              error={error}
              helperText={helperText}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: "30px", fontSize: "20px", mb: "15px" }}
              onClick={resetPassword}
            >
              확인
            </Button>
            <Typography sx={{ color: "#00000070" }}>
              * 해당 이메일로 임시 비밀번호가 전송됩니다.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PasswordPage;
