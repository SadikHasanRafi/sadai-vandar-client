/* eslint-disable react/prop-types */
import React from "react";
import img from "../../../assets/114524.jpg";
import { useTimer } from "react-timer-hook";

const Update = ( { expiryTimestamp}) => {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div
      className="flex justify-center items-center min-h-[50vh] hero flex-col"
      style={{ backgroundImage: `url(${img})` }}>
      <p className="text-center font-bold text-3xl mb-10 text-white">
        Big Update Coming After:
      </p>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-white">
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={{ "--value": days }}></span>:
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={{ "--value": hours }}></span>:
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={{ "--value": minutes }}></span>:
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-8xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Update;
