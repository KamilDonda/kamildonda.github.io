import "./CurrencyRateApp.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
import React, { useState } from "react";
import { DemoPopup } from "../../components/demo_popup/DemoPopup";
import { useTranslation } from "react-i18next";

export function CurrencyRateApp() {
  const { t } = useTranslation();
  const [vertical, setVertical] = useState(true);
  const [demo, setDemo] = useState(false);

  const rotateDemo = () => {
    setVertical(!vertical);
  };

  function seeDemo() {
    setDemo(!demo);
    console.log(demo);
  }

  const id = "currency-rate-app";
  const src = "https://flutter-currency-rate-app.web.app/#/";
  const title = "Currency Rate App";

  return (
    <>
      <DemoPopup
        id={id}
        src={src}
        title={title}
        demo={demo}
        onClick={seeDemo}
      />
      <div className="project-container">
        <div className="project-content">
          <div className="project-title tiny-space">
            <div className="project-title-row">
              <h3 className="gold">Currency Rate App</h3>
              <Button
                variant="outlined"
                onClick={seeDemo}
                className="outlined-button"
              >
                {t("see_a_demo")}
              </Button>
            </div>
            <Button
              className="button gray"
              href="https://github.com/KamilDonda/CurrencyRateApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("source_code")}
            </Button>
          </div>
          <p className="small-space">{t("currency_rate_app_text")}</p>
          <div className="project-section">
            <h4 className="gray tiny-space">{t("views")}</h4>
            <p>{t("currency_rate_app_views")}</p>
            <ul className="small-space">
              <li>{t("currency_rate_app_view1")}</li>
              <li>
                {t("currency_rate_app_view2")}
                <ul>
                  <li>{t("currency_rate_app_view2_1")}</li>
                  <li>{t("currency_rate_app_view2_2")}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="features" className="project-section">
            <h4 className="gray tiny-space">{t("features")}</h4>
            <ul className="tiny-space">
              <li>
                {t("currency_rate_app_features1a")}
                <sup>1</sup>
                {t("currency_rate_app_features1b")}
              </li>
              <li>
                {t("currency_rate_app_features2a")}
                <sup>2</sup>
                {t("currency_rate_app_features2b")}
                <ul>
                  <li>{t("currency_rate_app_features2_1")}</li>
                  <li>{t("currency_rate_app_features2_2")}</li>
                  <li>{t("currency_rate_app_features2_3")}</li>
                  <li>{t("currency_rate_app_features2_4")}</li>
                </ul>
              </li>
              <li>
                {t("currency_rate_app_features3")}
                <sup>2</sup>.
              </li>
              <li>{t("currency_rate_app_features4")}</li>
              <li>{t("currency_rate_app_features5")}</li>
              <li>{t("currency_rate_app_features6")}</li>
              <li>{t("currency_rate_app_features7")}</li>
            </ul>
            <ul className="gray tiny-text">
              <p>
                <sup>1</sup> {t("currency_rate_app_features_text1")}
              </p>
              <p>
                <sup>2</sup> {t("currency_rate_app_features_text2")}
              </p>
            </ul>
          </div>
        </div>
        <div className="demo">
          <IconButton onClick={rotateDemo} className="icon-button">
            <ScreenRotationIcon />
          </IconButton>
          <div>
            <iframe
              id={id}
              className={vertical ? "vertical" : "horizontal"}
              src={src}
              title={title}
            ></iframe>
            <h4>{t("working_demo")}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
