import React from "react";
import mobileImg from "../assets/images/mobile_img.png";

function MobileAccessRestricted(props) {
  return (
    <div className="MobileAccessRestricted">
      <div
        style={{
          height: "auto",
          width: "auto",
          fontFamily: "NotoSansKR-Medium",
          fontSize: "1.1rem",
          color: "#191919",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "60%" }}>
          <img src={mobileImg} />
        </div>
        <p>현재 페이지는 모바일 지원을 하지 않습니다.</p>
        <p>PC 화면으로 접속해주세요!</p>
      </div>
    </div>
  );
}

export default MobileAccessRestricted;
