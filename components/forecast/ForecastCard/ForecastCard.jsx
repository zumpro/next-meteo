import moment from "moment";
import "moment/locale/ru";
import React from "react";
import { Pressure, Wind } from "../../icon";
import Drop from "../../icon/Drop";
import s from "./ForecastCard.module.css";

const ForecastCard = ({ forecast }) => {
  const { main, weather, dt_txt, wind } = forecast.list[0];

  return (
    <div className={s.root}>
      <div className="flex justify-between items-start">
        <div className={s.cardTitle}>
          <div>
            <h1 className="font-semibold text-lg text-white">
              {forecast.city.name}
            </h1>
          </div>
          <div>
            <time className={s.time} dateTime={dt_txt}>
              Обновлено {moment(dt_txt).fromNow()}
            </time>
          </div>
        </div>
        <div className={s.cardSubTitle}>
          <div className="">{Math.round(main.temp_max)}&deg;</div>/
          <div className="text-white/60">{Math.round(main.temp_min)}&deg;</div>
        </div>
      </div>
      <div>
        <div className={s.temp}>
          <span className={s.tempVelue}>{Math.round(main.temp)}&deg;C</span>
        </div>
        <img
          src={
            process.env.NEXT_PUBLIC_ICON_URL + weather[0]["icon"] + "@4x.png"
          }
          width={64}
          height={64}
          className="inline-block"
          alt="Иконка погоды"
        />
        <div className={s.feelings}>
          <div className={s.feelingsDay}>{weather[0].description}</div>
          <div className="inline-block relative">
            <div className="opacity-70 inline-block">Ощущается как</div>
            <div className="font-medium inline-block ml-1">
              <span className="inline-block">
                {Math.round(main.feels_like)}&deg;
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-t border-white/50 py-4">
        <div className="mr-6 flex">
          <Wind className="mr-1 opacity-50" />
          <span>{wind.speed}</span> <span>м/с</span>
        </div>
        <div className="mr-6 flex ">
          <Drop className="mr-1 opacity-50" /> {main.humidity} %
        </div>
        <div className="flex">
          <Pressure className="mr-1 opacity-50" />
          {/* Давление p в миллиметрах ртутного столба (мм рт. ст.) 
              равняется давлению p в паскалях (Па), умноженному на число
              0.00750061682
           */}
          {Math.round(main.grnd_level * 0.00750061682 * 100)} мм рт. ст.
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
