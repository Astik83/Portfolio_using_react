// src/pages/Resume.jsx
export function Resume() {
  return (
    <>
      <link rel="icon" type="image" href="img/favicon.png" />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          zIndex: 999,
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/1Q-dRpTem4rIul12Kz_prU4f7CNELeaBI/preview"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            maxWidth: "800px", // limit width on large screens
          }}
          allow="autoplay"
          title="My Resume"
        ></iframe>
      </div>
    </>
  );
}
