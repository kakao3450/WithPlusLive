import React, { useState } from "react";
import { TermOfUseModal } from "./Modal";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import "./Layout.css";

export const Footer = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleModal = () => {
    setModalOpened(!modalOpened);
  };

  return (
    <div className="Footer">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: "10px" }}>
            <Link
              href="https://gamedu.co.kr/"
              color="inherit"
              underline="hover"
              fontWeight="800"
              style={{ textDecoration: "none" }}
            >
              Withplus Inc.
            </Link>
          </div>
          <Link
            m="10px"
            color="inherit"
            style={{ textDecoration: "none" }}
            href="mailto:withplus@gamedu.co.kr"
          >
            Support
          </Link>
          <button
            m="10px"
            className="btn"
            color="inherit"
            onClick={() => {
              handleModal();
            }}
          >
            Terms of Use
          </button>
          <div style={{ margin: "20px" }}>
            (주) 위드플러스 <br />
            경기도 안양시 시민대로 327번길 11-41 604호
          </div>
          <div style={{ fontSize: "0.8rem", margin: "20px" }}>
            Copyright ⓒ Withplus. All Right Reserved
          </div>
        </div>
      </div>
      <TermOfUseModal open={modalOpened} handleModal={handleModal} />
    </div>
  );
};

export const MobileFooter = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleModal = () => {
    setModalOpened(!modalOpened);
  };

  return (
    <div className="MobileFooter">
      <div className="footer-container">
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: "10px" }}>
            <Link
              href="https://gamedu.co.kr/"
              color="inherit"
              underline="hover"
              fontWeight="800"
              style={{ textDecoration: "none" }}
            >
              Withplus Inc.
            </Link>
          </div>
          <Link
            m="10px"
            color="inherit"
            style={{ textDecoration: "none", fontSize: "0.9rem" }}
            href="mailto:withplus@gamedu.co.kr"
          >
            Support
          </Link>
          <button
            m="10px"
            className="btn"
            color="inherit"
            style={{ fontSize: "0.9rem" }}
            onClick={() => {
              handleModal();
            }}
          >
            Terms of Use
          </button>
          <div style={{ margin: "20px", fontSize: "0.9rem" }}>
            (주) 위드플러스 <br />
            경기도 안양시 시민대로 327번길 11-41 604호
          </div>
          <div style={{ fontSize: "0.7rem", margin: "20px" }}>
            Copyright ⓒ Withplus. All Right Reserved
          </div>
        </div>
      </div>
      <TermOfUseModal open={modalOpened} handleModal={handleModal} />
    </div>
  );
};
