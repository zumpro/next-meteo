import moment from "moment";
import "moment/locale/ru";
import React from "react";
import s from "./ForecastCard.module.css";

const ForecastCard = ({ forecast }) => {
  const { main, city, weather, dt_txt } = forecast.list[0];
  console.log(city);

  return (
    <div className={s.root}>
      <div className={s.cardTitle}>
        <div>
          <h1 className="font-semibold text-lg">{forecast.city.name}</h1>
        </div>
        <div>
          <time className={s.time} dateTime={dt_txt}>
            Обновлено {moment(dt_txt).fromNow()}
          </time>
        </div>
      </div>

      <div>
        <span className={s.tempVelue}>{Math.round(main.temp)}&deg;C</span>
      </div>
      <div>{weather[0].description}</div>
    </div>
  );
};

export default ForecastCard;
