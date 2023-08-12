import React from "react";
import Node from "./Node";

const OrganizationalChart = ({ data, zoom, employeeCounts }) => (
  <table className="organizational-chart" style={{ transform: `scale(${zoom})` }}>
    <thead>
      <tr className="node thead">
        <th className="name">Name</th>
        <th className="designation">Designation</th>
        <th className="email">Email</th>
        <th className="toggle-btn">Toggle</th>
        <th className="count-head">EC</th>
        <th className="sub-chart">SC</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <Node
          key={index}
          data={item}
          employeeCount={employeeCounts.find((ec) => ec.manager === item.fullName)?.count}
          employeeCounts={employeeCounts}
        />
      ))}
    </tbody>
  </table>
);

export default OrganizationalChart;