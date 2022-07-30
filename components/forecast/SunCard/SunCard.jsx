import React from "react";
import s from "./SunCard.module.css";
import moment from "moment";
import { Land, SunriseSunset } from "../../icon";

const SunCard = ({ city }) => {
  const { sunset, sunrise } = city;

  const daylightHours = sunset - sunrise;
  const data = Math.floor(daylightHours / (60 * 60));
  const divisor_for_minutes = daylightHours % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  console.log("hour", data, "min", minutes);

  return (
    <div className={s.root}>
      <div className="relative flex flex-col items-center mt-8 w-full">
        <Land className="z-10 absolute mx-auto mt-16" />
        <SunriseSunset className="z-30" />
        <div className="absolute z-20">
          <h2 className="text-base">Световой день</h2>
          <div className="text-lg font-bold">
            {data}&nbsp;ч {minutes}&nbsp;мин
          </div>
        </div>
        <div className="relative flex justify-between w-[300px]">
          <div> {moment.unix(sunrise).format("LT")}</div>
          <div>{moment.unix(sunset).format("LT")}</div>
        </div>
      </div>
    </div>
  );
};

export default SunCard;
