import moment from "moment";
import React from "react";
import s from "./ForecastSummary.module.css";

const ForecastSummary = ({ day }) => {
  const { weather } = day;
  return (
    <div className={s.root}>
      <span className="pr-6">
        <div>
          <time className={s.time} dateTime={day.dt_txt}>
            {moment(day.dt_txt).fromNow()}
          </time>
          <div className={s.tempVelue}>{Math.round(day.main.temp)}&deg;C</div>
        </div>
      </span>
      <div className="pr-6">
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
      <div className="pr-6 min-w-[116px] w-1/4">{weather[0].description}</div>
      <div className="pr-6">
        {Math.round(day.main.grnd_level * 0.00750061682 * 100)}
        <span className={s.grandLevel}> мм рт. ст.</span>
      </div>
      <div>
        {day.main.humidity}% <span className={s.humidity}>Влажности</span>
      </div>
    </div>
  );
};

export default ForecastSummary;
