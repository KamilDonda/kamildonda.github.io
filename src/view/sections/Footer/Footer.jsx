import "./Footer.css";
import React, { useEffect, useState } from "react";

export function Footer() {
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);

  return (
    <footer>
      Copyright &copy; 2023 Kamil Donda. All Rights Reserved
      <img
        id="footer-icon"
        src={`https://frog01-21353.wykr.es/portfolio-icon?ipAddress=${ipAddress}`}
        alt="Goodbye!"
      />
    </footer>
  );
}
