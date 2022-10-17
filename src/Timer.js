import { useState, useEffect } from "react";
import "./timer.css";

export default function EorzeaTime() {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      getEorzeaTime();
    }, [100]);
    return () => clearInterval(timer);
  });

  function getEorzeaTime() {
    const eorzeaTime = new Date();
    const unixTime = Math.floor(new Date().getTime() * (1440 / 70));
    eorzeaTime.setTime(unixTime);
    let hours = eorzeaTime.getUTCHours();
    let minutes = eorzeaTime.getUTCMinutes();
    let amorpm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let timeString = hours + ":" + minutes + " " + amorpm;

    setTime(timeString);
  }
  return (
    <div className="time" style={{ margin: "2em" }}>
      Eorzea Time: {time}
    </div>
  );
}
