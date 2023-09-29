import "./CurrencyRateApp.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
import React, { useState } from "react";
import { DemoPopup } from "../../components/demo_popup/DemoPopup";

export function CurrencyRateApp() {
  const [vertical, setVertical] = useState(true);
  const [demo, setDemo] = useState(false);

  const rotateDemo = () => {
    setVertical(!vertical);
  };

  function seeDemo() {
    setDemo(!demo);
    console.log(demo);
  };

  const id = "currency-rate-app";
  const src = "https://flutter-currency-rate-app.web.app/#/";
  const title = "Currency Rate App";

  return (
    <>
      <DemoPopup id={id} src={src} title={title} demo={demo} onClick={seeDemo}/>
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
                See a Demo
              </Button>
            </div>
            <Button
              className="button gray"
              href="https://github.com/KamilDonda/CurrencyRateApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code
            </Button>
          </div>
          <p className="small-space">
            Flutter Android application which shows currency exchange rates.
          </p>
          <div className="project-section">
            <h4 className="gray tiny-space">Views</h4>
            <p>There are 2 main views in the application:</p>
            <ul className="small-space">
              <li>
                The main view displaying available currencies (USD, EUR, GBP,
                CHF)
              </li>
              <li>
                Detailed view divided into two sub-views containing data on the
                last 30 exchange rates:
                <ul>
                  <li>List view</li>
                  <li>Chart view</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="features" className="project-section">
            <h4 className="gray tiny-space">Features</h4>
            <ul className="tiny-space">
              <li>
                Displaying current<sup>1</sup> exchange rate for 4 currencies.
              </li>
              <li>
                Displaying data for the last 30 days<sup>2</sup>, including:
                <ul>
                  <li>Date.</li>
                  <li>Buying rate.</li>
                  <li>Selling rate.</li>
                  <li>Daily average rate.</li>
                </ul>
              </li>
              <li>
                A chart showing the average daily rate for the last 30 days
                <sup>2</sup>.
              </li>
              <li>
                Highlighting the highest exchange rate in green and the lowest
                in red.
              </li>
              <li>Support for both portrait and landscape orientations.</li>
              <li>
                On every application startup, data is fetched and then stored
                locally. If the device does not have internet connection upon
                restarting the application, the saved data is displayed and an
                appropriate message (snackbar) is shown.
              </li>
              <li>
                After reconnection to the internet, data is fetched from the
                API.
              </li>
            </ul>
            <ul className="gray tiny-text">
              <p>
                <sup>1</sup> Data comes from api.nbp.pl. The currently available
                data is retrieved from the API.
              </p>
              <p>
                <sup>2</sup> The data in the API is not updated daily, but only
                from Monday to Friday. The application retrieves the last 30
                available data.
              </p>
            </ul>
          </div>
        </div>
        <div className="demo">
          <IconButton onClick={rotateDemo} className="rotate-button">
            <ScreenRotationIcon />
          </IconButton>
          <div>
            <iframe
              id={id}
              className={vertical ? "vertical" : "horizontal"}
              src={src}
              title={title}
            ></iframe>
            <h4>Working demo</h4>
          </div>
        </div>
      </div>
    </>
  );
}
