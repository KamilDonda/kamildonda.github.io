import "./Timeline.css";
import { useState, useEffect } from "react";

export function Timeline() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const items = [
    { year: 2015, isDot: true },
    { year: 2016 },
    { year: 2017 },
    { year: 2018, isDot: true },
    { year: 2019 },
    { year: 2020 },
    { year: 2021 },
    { year: 2022, isDot: true },
    { year: 2023 },
    { year: 2024, isDot: true, isEmpty: true },
  ];

  const descriptions = [
    {
      title: "High School",
      text: "Stefan Żeromski High School in Dąbrowa Górnicza",
    },
    {
      title: "Bachelor's degree",
      text: "Silesian University of Technology",
    },
    {
      title: "Master's degree",
      text: "Silesian University of Technology",
    },
  ];

  const itemList = items.map((item) => (
    <div className="timeline-item">
      <span
        className={
          item.isDot
            ? "gold timeline-big timeline-text"
            : "timeline-small timeline-text"
        }
      >
        {item.year}
      </span>
      {item.isDot ? (
        <span class={`dot bg-gold ${item.isEmpty ? "isEmpty" : null}`}></span>
      ) : (
        <div className="no-dot"></div>
      )}
    </div>
  ));

  function dashedLine() {
    return (
      <div className="dashed-container">
        {[...Array(10)].map((_, __) => (
          <div className="dashed-line"></div>
        ))}
      </div>
    );
  }

  const descriptionList = descriptions.map((item) => (
    <div className="description-item">
      <span className="description-title">{item.title}</span>
      <span className="description-text gray">{item.text}</span>
    </div>
  ));

  var vertical = width < 1000;

  return (
    <div className="timeline">
      <div className="timeline-container">
        {vertical ? itemList.reverse() : itemList}
      </div>
      <div className="timeline-container">
        {vertical ? (
          <>
            {dashedLine()}
            <div className="line"></div>
          </>
        ) : (
          <>
            <div className="line"></div>
            {dashedLine()}
          </>
        )}
      </div>
      <div className="timeline-container">
        {vertical ? descriptionList.reverse() : descriptionList}
      </div>
    </div>
  );
}
