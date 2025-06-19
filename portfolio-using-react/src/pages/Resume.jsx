// src/pages/Resume.jsx
export function Resume() {
  return (
    <>
    <link rel='icon' type='image' href='img/favicon.png'></link>
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
      }}
    >
      <iframe
        src="https://drive.google.com/file/d/1Q-dRpTem4rIul12Kz_prU4f7CNELeaBI/preview"
        width="70%"
        height="90%"
        style={{
          border: "none",
        }}
        allow="autoplay"
        title="My Resume"
      ></iframe>
    </div>
    
    </>
    
   
  );
}
