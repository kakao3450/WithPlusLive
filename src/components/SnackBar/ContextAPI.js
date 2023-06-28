import React, { createContext, useState } from "react";

import { Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
