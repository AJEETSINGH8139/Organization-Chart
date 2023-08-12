import React, { useState } from "react";
import OrganizationalChart from "./OrganizationalChart";

const Node = ({ data, employeeCount, employeeCounts }) => {
  const [branchVisible, setBranchVisible] = useState(false);

  const handleToggleBranch = () => {
    setBranchVisible(!branchVisible);
  };

  return (
    <tr className="node">
      <td className="name">{data.fullName}</td>
      <td className="designation">{data.designation}</td>
      <td className="email">{data.email}</td>
      <td className="manager">
        {data.manager ? (
          <button className="toggle-button" onClick={handleToggleBranch}>
            {branchVisible ? "Hide Branch" : "Show Branch"}
          </button>
        ) : null}
      </td>
      <td className="count">
        {employeeCount !== undefined ? employeeCount : ""}
      </td>
      <td className="sub-chart">
        {branchVisible && data.manager && (
          <div>
            <OrganizationalChart
              data={employeeCounts.filter(
                (item) => item.manager === data.fullName
              )}
              zoom={1}
              employeeCounts={employeeCounts}
            />
          </div>
        )}
      </td>
    </tr>
  );
};

export default Node;