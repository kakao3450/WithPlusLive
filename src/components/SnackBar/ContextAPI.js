import React, { createContext, useState } from "react";

import { Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

//context를 이용하면 단계마다 일일이 props를 넘겨주지 않고 넘포넌트 트리 전체에 데이터 제공_ 이정욱
const SnackBarContext = createContext({
  open: false,
  severity: "success",
  text: "",

  handleSnackBar: () => {},
  setOpen: () => {},
  setSeverity: () => {},
  setText: () => {},
});

const SnackBarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [text, setText] = useState("");

  const handleSnackBar = () => {
    setOpen(!open);
  };

  const value = {
    open,
    severity,
    text,

    handleSnackBar,
    setOpen,
    setSeverity,
    setText,
  };

  return (
    // createContext.Provider를 이용하여 value값을 넘기면 App.js에서 value값 공유 _ 이정욱
    // Snackbar는 사용자에게 간단한 정보, 경고, 성공 메세지 등 표시 가능 * open이 true면  Snackbar 열림  false면 닫힘 * severity Snackbar의 중요도를 나타내는 문자열 'Success','error'등 사용가능
    // a
    <SnackBarContext.Provider value={value}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleSnackBar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert elevation={8} variant="filled" severity={severity}>
          <Typography sx={{ fontFamily: "NotoSansKR-Medium" }}>{text}</Typography>
        </MuiAlert>
      </Snackbar>
    </SnackBarContext.Provider>
  );
};

export { SnackBarContext, SnackBarProvider };
