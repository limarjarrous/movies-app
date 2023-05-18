import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  const [darkMode] = useState(true);

  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={4}
      toastOptions={{
        // Define default options
        duration: 5000,
        style: {
          background: darkMode ? "#40404022" : "#ffffff33",
          color: darkMode ? "#fff" : "#000",
          backdropFilter: "blur(50px)",
          maxWidth: "60%",
        },
        custom: {
          style: {
            background: darkMode ? "#40404022" : "#ffffff33",
            color: darkMode ? "#fff" : "#000",
            backdropFilter: "blur(50px)",
          },
        },
      }}
    />
  );
};

export default Toast;
