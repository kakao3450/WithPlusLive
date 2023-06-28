import React from "react";
import TermOfUse from "template/TermOfUse";

import { CustomButton as _Button } from "./Button";

import { Box, Modal } from "@mui/material";

import livePollingGuideIMG from "../assets/images/livepolling_guide.png";

export const GuideModal = (props) => {
  const { open, handleModal } = props;

  return (
    <Modal
      open={open}
      onClose={handleModal}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "auto" }}
    >
      <Box sx={{ p: 4, backgroundColor: "white", borderRadius: "10px" }}>
        <div
          style={{
            width: "70vw",
            height: "80vh",
            overflow: "auto",
            position: "relative",
          }}
        >
          <img
            src={livePollingGuideIMG}
            style={{
              position: "absolute",
              width: "100%",
              objectFit: "cover",
            }}
            alt="livePollingGuide"
          />
        </div>
        <Box sx={{ display: "flex", justifyContent: "center", width: "auto" }}>
          {/* eslint-disable-next-line */}
          <_Button
            sx={{
              backgroundColor: "#909090",
              mx: "3px",
              "&:hover": { backgroundColor: "#707070" },
            }}
            onClick={handleModal}
          >
            확인
          </_Button>
        </Box>
      </Box>
    </Modal>
  );
};

export const TermOfUseModal = (props) => {
  const { open, handleModal } = props;

  return (
    <Modal
      open={open}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "auto" }}
    >
      <Box sx={{ p: 4, backgroundColor: "white", borderRadius: "10px" }}>
        <div
          style={{
            width: "70vw",
            height: "80vh",
            overflow: "auto",
            position: "relative",
          }}
        >
          <TermOfUse />
        </div>
        <Box sx={{ display: "flex", justifyContent: "center", width: "auto" }}>
          {/* eslint-disable-next-line */}
          <_Button
            sx={{
              backgroundColor: "#909090",
              mx: "3px",
              "&:hover": { backgroundColor: "#707070" },
            }}
            onClick={handleModal}
          >
            확인
          </_Button>
        </Box>
      </Box>
    </Modal>
  );
};
