import { useState, useEffect } from "react";
import "./timer.css";

export default function EorzeaTime() {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      getEorzeaTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  function getEorzeaTime(date) {
    const eorzeaTime = new Date(); // Create a new date object
    const unixTime = Math.floor(date.getTime() * (1440 / 70));
    eorzeaTime.setTime(unixTime); //set time to unix time

    let hours = eorzeaTime.getUTCHours();
    let minutes = eorzeaTime.getUTCMinutes();
    let amorpm = hours >= 12 ? "PM" : "AM"; //set am or pm

    hours = hours % 12; //set 12 hour time
    hours = hours ? hours : 12; //if hours is 0, set to 12
    minutes = minutes < 10 ? "0" + minutes : minutes; //add 0 to minutes if less than 10

    let timeString = hours + ":" + minutes + " " + amorpm;

    setTime(timeString);
  }
  return <div className="time">Eorzea Time: {time}</div>;
}
