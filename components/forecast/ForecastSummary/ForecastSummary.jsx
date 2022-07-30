import moment from "moment";
import React from "react";
import s from "./ForecastSummary.module.css";

const ForecastSummary = ({ day }) => {
  const { weather } = day;
  return (
    <li className={s.root}>
      <div className="p-2 block mt-1">
        <span>
          <div>
            <time className={s.time} dateTime={day.dt_txt}>
              {moment(day.dt_txt).format("LT")}
            </time>
          </div>
        </span>
        <div className="mt-0.5 mb-2">
          <img
            src={
              process.env.NEXT_PUBLIC_ICON_URL + weather[0]["icon"] + "@4x.png"
            }
            width={40}
            height={40}
            className="inline-block"
            alt="Иконка погоды"
          />
        </div>
        <div className={s.tempVelue}>{Math.round(day.main.temp)}&deg;C</div>
        {/* <div>
          {Math.round(day.main.grnd_level * 0.00750061682 * 100)}
          <span className={s.grandLevel}> мм рт. ст.</span>
        </div>
        <div>
          {day.main.humidity}% <span className={s.humidity}>Влажности</span>
        </div> */}
        <div className="text-sm text-gray-400 w-20">
          {weather[0].description}
        </div>
      </div>
    </li>
  );
};

export default ForecastSummary;
