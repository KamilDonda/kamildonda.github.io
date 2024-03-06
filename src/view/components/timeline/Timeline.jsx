import "./Timeline.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Timeline() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);

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
    { year: 2024, isDot: true, isEmpty: false },
  ];

  const descriptions = [
    {
      title: t("education_high_school"),
      text: t("education_high_school_text"),
    },
    {
      title: t("education_bachelor"),
      text: t("education_bachelor_text"),
    },
    {
      title: t("education_master"),
      text: t("education_master_text"),
    },
  ];

  const itemList = items.map((item, itemIndex) => (
    <div className="timeline-item" key={`timeline-item${itemIndex}`}>
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
        <span className={`dot bg-gold ${item.isEmpty ? "isEmpty" : null}`}></span>
      ) : (
        <div className="no-dot"></div>
      )}
    </div>
  ));

  function dashedLine() {
    return (
      <div className="dashed-container">
        {[...Array(10)].map((_, itemIndex) => (
          <div className="dashed-line" key={`dashed-container${itemIndex}`}></div>
        ))}
      </div>
    );
  }

  const descriptionList = descriptions.map((item, itemIndex) => (
    <div className="description-item" key={`description-item${itemIndex}`}>
      <span className="description-title">{item.title}</span>
      <span className="description-text gray">{item.text}</span>
    </div>
  ));

  var vertical = width <= 1000;

  return (
    <div className="timeline">
      <div className="timeline-container">
        {vertical ? itemList.reverse() : itemList}
      </div>
      <div className="timeline-container">
        {vertical ? (
          <>
            {/* {dashedLine()} */}
            <div className="line" style={{height: `calc(var(--height) * ${items.length - 1})`}}></div>
          </>
        ) : (
          <>
            <div className="line" style={{width: `calc(var(--width) * ${items.length - 1})`}}></div>
            {/* {dashedLine()} */}
          </>
        )}
      </div>
      <div className="timeline-container">
        {vertical ? descriptionList.reverse() : descriptionList}
      </div>
    </div>
  );
}
