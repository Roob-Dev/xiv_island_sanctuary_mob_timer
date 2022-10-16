import { useState, useEffect } from "react";
import "./timer.css";

export default function EorzeaTime() {
  const [time, setTime] = useState("--:-- --"); //set initial time to "--:-- --"

  useEffect(() => {
    const timer = setInterval(() => {
      getEorzeaTime(); // get the current time
    }, [100]); // update every 100ms
    return () => clearInterval(timer); // clear the timer when the component unmounts
  });

  function getEorzeaTime() {
    const eorzeaTime = new Date(); // Create a new date object
    const unixTime = Math.floor(new Date().getTime() * (1440 / 70)); // Get the unix time of the current time and convert it to eorzea time
    eorzeaTime.setTime(unixTime); //set time to unix time

    let hours = eorzeaTime.getUTCHours(); // get the hours
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
