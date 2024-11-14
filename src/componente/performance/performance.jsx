import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import useUserData from "../../pages/home/UserDataLoader";
const PerformanceCharts = () => {
  const [userData, loading] = useUserData("performance"); // Utilisation du hook pour récupérer les données et l'état de chargement

  // Si le chargement est en cours, afficher "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }

  const userPerf = userData.userPerformance; // Récupération des données de performance utilisateur

  // Transformation des données pour le RadarChart
  const chartData = userPerf.data.map((item) => ({
    subject: userPerf.kind[item.kind], // Correspondance des kinds
    A: item.value, // Valeur à tracer
  }));

  return (
    <>
      {userData ? (
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart outerRadius={60} data={chartData} width={180} height={180}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fontSize: "12px", fill: "#FFFFFF" }}
              axisLine={false}
            />
            <Radar
              name="Performance"
              dataKey="A"
              stroke="#BE0f0f"
              fill="#BE0f0f"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <div className="no-user-data">
          <p>Les données de l'utilisateur sont en cours de chargement ou non disponibles.</p>
          <p>Veuillez patienter ou vérifier votre connexion.</p>
        </div>
      )}
    </>
  );
}  

export default PerformanceCharts;
