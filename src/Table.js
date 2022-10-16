import React from "react";
import MobData from "./TableData";

export default function MobTable() {
  return (
    <div className="mobTable">
      <table>
        <thead>
          <tr
            style={{
              backgroundColor: "#ccc",
              fontSize: "5px",
            }}
          >
            <th>Name</th>
            <th>Size</th>
            <th>Location</th>
            <th>Weather</th>
            <th>Spawn Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {MobData.map((mob) => {
            return (
              <tr key={mob.id}>
                <td>{mob.name}</td>
                <td>{mob.size}</td>
                <td>{mob.location}</td>
                <td>{mob.weather}</td>
                <td>{mob.time[0]}</td>
                <td>{mob.time[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
