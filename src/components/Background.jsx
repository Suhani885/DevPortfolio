const Background = ({ mousePosition }) => (
  <div className="fixed inset-0">
    <div
      className="absolute w-[800px] h-[600px] dark:opacity-40 opacity-25 blur-3xl"
      style={{
        background: `radial-gradient(ellipse at center, 
            rgba(255, 183, 77, 0.4) 0%,
            rgba(255, 138, 101, 0.3) 25%,
            rgba(220, 144, 194, 0.3) 50%,
            rgba(168, 162, 255, 0.2) 75%,
            transparent 100%)`,
        left: mousePosition.x / 8 + "px",
        top: mousePosition.y / 8 + "px",
        transform: "translate(-50%, -50%)",
      }}
    />
    <div
      className="absolute w-[600px] h-[400px] dark:opacity-30 opacity-20 blur-3xl"
      style={{
        background: `radial-gradient(ellipse at center,
            rgba(255, 206, 84, 0.3) 0%,
            rgba(255, 154, 158, 0.25) 40%,
            rgba(162, 155, 254, 0.2) 70%,
            transparent 100%)`,
        right: mousePosition.x / 12 + "px",
        bottom: mousePosition.y / 12 + "px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-[#eef7ff] to-[#dcecff] dark:from-transparent dark:via-black/20 dark:to-black/40" />
  </div>
);

export default Background;
