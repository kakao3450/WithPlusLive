import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

export const CustomButton = styled(Button)({
  backgroundColor: "#B43F3F",
  fontFamily: "NotoSansKR-Medium",
  color: "white",
  boxShadow: "2px 2px 6px #797979",
  "&:hover": {
    backgroundColor: "#A42F2F",
  },
  "&:disabled": {
    backgroundColor: "#cdcdcd",
    boxShadow: "none",
  },
});

export const CustomLoadingButton = styled(LoadingButton)({
  backgroundColor: "#B43F3F",
  fontFamily: "NotoSansKR-Medium",
  color: "white",
  "&:hover": {
    backgroundColor: "#A42F2F",
  },
  "&.Mui-disabled": {
    backgroundColor: "#cdcdcd",
  },
});
