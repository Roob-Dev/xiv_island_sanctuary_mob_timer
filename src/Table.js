import React from "react";
import MobData from "./TableData";

export default function MobTable() {
  return (
    <div className="mobTable" style={{ margin: "2em" }}>
      <table className="table">
        <thead>
          <tr class="table-success">
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Location</th>
            <th scope="col">Weather</th>
            <th scope="col">Spawn Time</th>
            <th scope="col">End Time</th>
          </tr>
        </thead>
        <tbody>
          {MobData.map((mob) => {
            return (
              <tr className="table table-dark table-striped" key={mob.id}>
                <th scope="row">{mob.name}</th>
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
