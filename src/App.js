import { useState } from "react";
import jsonData from "./jsonData";
import OrganizationalChart from "./components/OrganizationalChart";

function App() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(0.1, zoomLevel - 0.1));
  };

  const employeeCounts = jsonData.map((item) => ({
    manager: item.manager,
    count: jsonData.filter((i) => i.manager === item.fullName).length,
  }));

  return (
    <div className="App">
      <div className="header">
        <h1>Organizational Chart</h1>
        <div className="zoom-controls">
          <button className="button" onClick={handleZoomIn}>Zoom In</button>
          <button className="button" onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </div>
      <OrganizationalChart
        data={jsonData}
        zoom={zoomLevel}
        employeeCounts={employeeCounts}
      />
    </div>
  );
}

export default App;
