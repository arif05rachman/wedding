import React from "react";

const Envelope = ({ setIsOpen, playAudio }) => {
  const handleClick = () => {
    setIsOpen(true);
    playAudio();
  };
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div>
        <div class="envelope">
          <div class="envelope__tab"></div>
          <div class="envelope__letter" onClick={handleClick}>
            <p style={{ color: "#666" }}>Open Invitation</p>
          </div>
          <div class="envelope--base"></div>
        </div>
        <div class="shadow"></div>
      </div>
    </div>
  );
};

export default Envelope;
