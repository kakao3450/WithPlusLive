import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { init, send } from "emailjs-com";
import axios from "axios";

import { socket } from "../../utils/socket";
import TermOfUse from "./../../template/TermOfUse";
import TermOfPrivateInfo from "./../../template/TermOfPrivateInfo";

import "./RegisterPage.css";

import {
  Button,
  Grid,
  TextField,
  FormHelperText,
  Container,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Textfield } from "../../components/Textfield";

const RegisterPage = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [content, setContent] = useState("Terms");

  /** terms 인지 판단하는 함수 */
  const switchVisible = () => {
    setIsVisible(!isVisible);

    setTimeout(() => {
      setContent("Register");
    }, 500);

    setTimeout(() => {
      setRegisterVisible(true);
    }, 600);
  };

  return (
    <>
      {/* terms / register 에 따라서 다르게 랜더링 */}
      {content === "Terms" ? (
        <Terms visible={isVisible} switchVisible={switchVisible} />
      ) : (
        <Register visible={registerVisible} />
      )}
    </>
  );
};

/** Terms */
const Terms = ({ visible, switchVisible }) => {
  const [useTermChecked, setUseTermChecked] = useState(false);
  const [privateChecked, setPrivateChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");

  /** 이용약관 동의 체크 */
  const handleUseTermChecked = () => {
    setUseTermChecked(!useTermChecked);
  };
  /** 개인정보이용 동의 체크 */
  const handlePrivateChecked = () => {
    setPrivateChecked(!privateChecked);
  };

  /** 전부 체크 */
  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    if (allChecked) {
      setUseTermChecked(false);
      setPrivateChecked(false);
    }
  };

  /** 이용약관에 모두 동의 안했을 때 띄우는 스낵바 */
  const handleSnackbar = () => {
    setSnackBarOpen(false);
  };

  /** 다음 버튼 눌렀을 때 전부 동의했는지 체크 후 이동 */
  const nextStep = () => {
    if (!allChecked) {
      setSnackBarOpen(true);
      setSnackBarText("이용약관에 모두 동의 해야합니다");
      return;
    }
    switchVisible();
  };

  useEffect(() => {
    if (useTermChecked && privateChecked) setAllChecked(true);
    else {
      setAllChecked(false);
    }
  }, [useTermChecked, privateChecked]);

  useEffect(() => {
    if (allChecked) {
      setUseTermChecked(true);
      setPrivateChecked(true);
    }
  }, [allChecked]);

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ color: "#c33c3c", font: "bold 32px Noto Sans" }}>이용약관</Typography>
        <Box sx={{ textAlign: "left", mb: "10px" }} className="terms_of_use">
          <FormControlLabel
            label={<Typography sx={{ font: "16px NotoSansKR-Medium" }}>이용약관에 동의</Typography>}
            control={<Checkbox checked={useTermChecked} onChange={handleUseTermChecked} />}
          />
          <Box
            className="content"
            sx={{
              border: "1px solid #00000050",
              borderRadius: "3px",
              overflow: "auto",
              maxHeight: "100px",
            }}
          >
            <TermOfUse />
          </Box>
        </Box>
        <Box sx={{ textAlign: "left", mb: "10px" }} className="terms_of_use">
          <FormControlLabel
            label={
              <Typography sx={{ font: "16px NotoSansKR-Medium" }}>
                개인정보 취급 방침 동의
              </Typography>
            }
            control={<Checkbox checked={privateChecked} onChange={handlePrivateChecked} />}
          />
          <Box
            className="content"
            sx={{
              border: "1px solid #00000050",
              borderRadius: "3px",
              overflow: "auto",
              maxHeight: "100px",
            }}
          >
            <TermOfPrivateInfo />
          </Box>
        </Box>

        <Box sx={{ textAlign: "left", mb: "10px" }} className="terms_of_use">
          <FormControlLabel
            label={
              <Typography sx={{ font: "16px NotoSansKR-Medium" }}>
                이용약관, 개인정보 취급방침에 모두 동의합니다.​
              </Typography>
            }
            control={<Checkbox checked={allChecked} onChange={handleAllChecked} />}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            width: "50%",
            display: "block",
            // mt: 3,
            // mb: 2,
            mx: "auto",
            p: 1,
            fontFamily: "Noto Sans",
            fontWeight: "bold",
            fontSize: "17px",
            borderRadius: "25px",
          }}
          onClick={nextStep}
        >
          다음
        </Button>
      </Container>
      {/* 이용약관 모두 동의 안했을 때 띄우는 스낵바 */}
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert elevation={6} variant="filled" severity={"warning"}>
          <Typography sx={{ fontFamily: "NotoSansKR-Medium" }}>{snackBarText}</Typography>
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

/** 회원가입 */
const Register = (props) => {
  const navigate = useNavigate();
  /** 비밀번호 정규식 */
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z0-9!@#$%^&*()]{8,20}$/;
  const { visible } = props;

  const [loginType, setloginType] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [emailCheckStyle, setEmailCheckStyle] = useState({ display: "none" });
  const [password, setpassword] = useState("");
  const [checkPassword, setcheckPassword] = useState("");
  const [company, setCompany] = useState("");
  const [style, setstyle] = useState({ display: "none" });
  // 기본 admin으로 사용
  const [checkBox, setCheckBox] = useState([false, true]);

  /**제출 시 함수 */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginType === "" || emailCheck === "사용중입니다.") {
      alert("회원가입에 실패하였습니다.");
      return;
    }

    if (password.match(passwordRegex) === null) {
      alert(
        " 패스워드 형식에 맞게 입력해주세요.\n (영어 소문자, 숫자를 포함한 8자 이상)\n (사용가능한 특수기호 : !@#$%^&*() )"
      );
      return;
    }

    // * 회원가입 http 요청
    axios
      .post("/account/register", null, {
        params: {
          loginType: loginType,
          name: name,
          email: email,
          password: password,
          company: company,
        },
      })
      .then((response) => {
        let data = response.data;
        if (data.success) {
          alert("회원가입에 성공하였습니다.");
          send("service_b31q3bd", "template_ojdrteq", {
            to_email: email,
            certificationKey: data.certificationKey,
          }).then((res) => {
            navigate("/certification", {
              state: {
                userId: data.userId,
                email: email,
                certificationKey: data.certificationKey,
              },
            });
          });
        }
      })
      .catch((error) => {
        alert("회원가입에 실패하였습니다.");
        window.location.reload();
      });
  };
  // * 이름 텍스트 필드 onChange함수
  const handleName = (e) => {
    setname(e.target.value);
  };
  // * 이메일 텍스트 필드 onChange함수
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  // * 패스워드 텍스트 필드 onChange함수
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };
  // * 패스워드 확인 텍스트 필드 onChange함수
  const handleCheckPassword = (e) => {
    setcheckPassword(e.target.value);
  };

  // * 회사 텍스트 필드 onChange 함수
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  // * 슈퍼어드민 체크박스 클릭 함수
  const handleChangeSuperAdmin = (e) => {
    if (!e.target.checked) {
      let newArr = [...checkBox];
      newArr[0] = false;
      setCheckBox(newArr);
    } else {
      setCheckBox([e.target.checked, !e.target.checked]);
    }
  };

  // * 어드민 체크박스 클릭 함수
  const handleChangeAdmin = (e) => {
    if (!e.target.checked) {
      let newArr = [...checkBox];
      newArr[1] = false;
      setCheckBox(newArr);
    } else {
      setCheckBox([!e.target.checked, e.target.checked]);
    }
  };

  // * 이메일 중복 확인 함수
  const checkEmail = () => {
    if (email === "") return;
    socket.emit("checkEmail", { email: email });
  };

  // * 랜딩페이지 이동 함수
  // const goToLandingPage = () => {
  //   navigate("/");
  // };

  // * 패스워드, 패스워드 확인 일치 불일치 여부 확인
  useEffect(() => {
    if (password === checkPassword || checkPassword === "") {
      setstyle({ display: "none", color: "red" });
    } else {
      setstyle({ display: "block", color: "red" });
    }
  }, [password, checkPassword]);

  // useEffect(() => {
  //   console.log(password.match(passwordRegex));
  // }, [password]);
  // * 체크박스 바꿀 때 적용 함수
  useEffect(() => {
    if (checkBox[0]) setloginType("SuperAdmin");
    else if (checkBox[1]) setloginType("Admin");
    else setloginType("");
  }, [checkBox]);

  // * 이메일 중복 확인 소켓 전송
  useEffect(() => {
    socket.on("checkEmail", (data) => {
      setEmailCheck(data.message);
      if (data.success) {
        setEmailCheckStyle({
          width: "100%",
          fontSize: "14px",
          color: "#00d084",
        });
      } else {
        setEmailCheckStyle({
          width: "100%",
          fontSize: "14px",
          color: "#cf2e2e",
        });
      }
    });

    // * EmailJS initialize
    init("9SiX5buHejWEjFEfx");

    return () => {
      socket.off("checkEmail");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease-in",
        // alignItems: "center",
        // overflow: "auto",
      }}
    >
      <Box className="box" onSubmit={handleSubmit} component="form">
        {/* 회원가입 아이콘 */}
        {/* <Avatar
              sx={{ m: 1, bgcolor: deepPurple[500], width: 56, height: 56 }}
            >
              <HowToRegIcon></HowToRegIcon>
            </Avatar> */}
        <Typography sx={{ color: "#c33c3c", fontSize: "35px" }}>Create Account</Typography>
        {/* 회원가입 유형 선택 체크박스 컨테이너 */}
        {/* <Box
              sx={{
                width: "100%",
                borderRadius: "10px",
                border: 1,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            >
              <FormHelperText
                error={false}
                sx={{ textAlign: "center", fontSize: "14px", color: "black" }}
              >
                {"회원가입 유형을 선택해주세요."}
              </FormHelperText> */}
        {/* 회원가입 유형 선택 -> 사용 안함 (기본 admin) */}
        {/* <Grid container sx={{ px: 1 }}>
          <Grid item xs sx={{ px: 4 }}>
            <FormControlLabel
              label="SuperAdmin"
              control={<Checkbox checked={checkBox[0]} onChange={handleChangeSuperAdmin} />}
            />
          </Grid>
          <Grid item xs sx={{ px: 4 }}>
            <FormControlLabel
              label="Admin"
              control={<Checkbox checked={checkBox[1]} onChange={handleChangeAdmin} />}
            />
          </Grid>
        </Grid> */}
        {/* </Box> */}
        {/* 이름 TextField */}
        <TextField
          sx={{ backgroundColor: "#F5F5F5" }}
          type="text"
          margin="dense"
          fullWidth
          label="이름"
          required
          onChange={(e) => handleName(e)}
        />
        {/* 이메일 TextField */}
        <Grid container spacing={1} alignItems="center">
          <Grid item xs>
            <TextField
              sx={{ backgroundColor: "#F5F5F5" }}
              type="text"
              margin="dense"
              fullWidth
              label="이메일"
              required
              onChange={(e) => handleEmail(e)}
            />
          </Grid>
          <Grid item sx={{ px: 1 }}>
            <Button variant="contained" onClick={checkEmail}>
              check
            </Button>
          </Grid>
        </Grid>
        {/* 패스워드 TextField */}
        <FormHelperText sx={emailCheckStyle}>{emailCheck}</FormHelperText>
        <TextField
          sx={{ backgroundColor: "#F5F5F5" }}
          type="password"
          margin="dense"
          fullWidth
          label="패스워드 (영어 소문자, 숫자를 포함한 8자 이상)"
          required
          onChange={(e) => handlePassword(e)}
        />
        {/* 패스워드 확인 TextField */}
        <TextField
          sx={{ backgroundColor: "#F5F5F5" }}
          type="password"
          margin="normal"
          fullWidth
          label="패스워드 확인"
          required
          onChange={(e) => handleCheckPassword(e)}
        ></TextField>

        <div style={style}>비밀번호가 틀립니다.</div>
        {/* 회사 입력 TextField */}
        <TextField
          sx={{ backgroundColor: "#F5F5F5" }}
          type="text"
          margin="dense"
          fullWidth
          label="회사"
          required
          onChange={(e) => handleCompany(e)}
        />
        {/* 제출버튼 */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              width: "50%",
              display: "block",
              mt: 3,
              mb: 2,
              p: 1,
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              fontSize: "17px",
              borderRadius: "25px",
            }}
          >
            회원가입
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
