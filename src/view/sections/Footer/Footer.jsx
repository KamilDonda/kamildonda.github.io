import "./Footer.css";
import React, { useEffect, useState } from "react";

export function Footer() {
  const [date, setDate] = useState(2023);

  const fetchData = () => {
    fetch("https://worldtimeapi.org/api/timezone/Etc/UTC")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDate(data.datetime.slice(0, 4));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <footer>Copyright &copy; {date} Kamil Donda. All Rights Reserved</footer>
  );
}
