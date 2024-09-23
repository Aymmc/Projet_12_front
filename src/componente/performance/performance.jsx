import React, { useState } from "react";
import UserPerformanceLoader from "./UserPerformanceLoader";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceCharts = () => {
  const [userData, setUserData] = useState(null);

  const handleSetUserData = (data) => {
    setUserData(data);
  };

  // Transformation des données pour le RadarChart
  const chartData =
    userData && userData.data
      ? userData.data.map((item) => ({
          subject: userData.kind[item.kind], // Correspondance des kinds
          A: item.value, // Valeur à tracer
        }))
      : [];
      
  return (
    <>
      <UserPerformanceLoader setUserData={handleSetUserData} />
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart outerRadius={60} data={chartData} width={180} height={180}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject" // Utiliser le champ 'subject' pour les angles
            tick={{ fontSize: "12px", fill: "#FFFFFF" }}
            axisLine={false}
          />
          <PolarRadiusAxis angle={30} domain={[0, 250]} tick={false} />
          <Radar
            name="Performance"
            dataKey="A" // Utiliser 'A' pour les valeurs
            stroke="#BE0f0f"
            fill="#BE0f0f"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default PerformanceCharts;
