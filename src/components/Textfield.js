import React from "react";
import { TextField } from "@mui/material";
import "../styles/margin.css";
import "../styles/padding.css";

// import classes from "views/LiveQuiz/styles/LiveQuizStyles";

export const Textfield = (props) => {
  return (
    <TextField
      className={props.className}
      size={props.size}
      fullWidth={props.fullWidth}
      sx={{ ...props.sx, borderRadius: "10px" }}
      type={props.type}
      InputProps={{
        ...props.InputProps,
        style: {
          fontSize: "15px",
          fontFamily: "NotoSansKR-Medium",
          backgroundColor: "#F5F5F5",
          borderRadius: "10px",
          ...props.InputProps?.style,
        },
      }}
      onKeyPress={props.onKeyPress}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
      helperText={props.helperText}
      autoComplete="off"
      placeholder={props.placeholder}
      multiline={props.multiline}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      autoFocus={props.autoFocus}
      id={props.id}
    />
  );
};
