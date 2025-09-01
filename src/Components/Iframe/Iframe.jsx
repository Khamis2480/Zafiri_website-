import React from "react";
import Frame from "react-frame-component";
import "./Iframe.css";

const IframeLayout = ({ children }) => {
  return (
    <Frame
      style={{
        width: "100%",
        height: "calc(100vh - 80px)", // adjust for header height
        border: "none",
      }}
    >
      {children} {/* React pages/components will render here */}
    </Frame>
  );
};

export default IframeLayout;
