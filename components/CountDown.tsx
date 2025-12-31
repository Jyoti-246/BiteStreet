"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2026-02-25T23:59:59");

const CountDown = () => {
  return (
    <div>
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={endingDate}
      />
    </div>
  );
};

export default CountDown;
