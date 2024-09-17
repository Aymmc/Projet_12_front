import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserDataLoader from "../../pages/home/UserDataLoader"; // Importer le nouveau composant
import { PieChart, Pie, ResponsiveContainer, Legend } from "recharts";
import "./cercle.css";
const CercleCharts = () => {
  const [userData, setUserData] = useState(null);
  // Préparation des données pour le PieChart
  const data = [
    { name: "Score", value: userData ? userData.todayScore * 100 : 0 }, // Multiplier par 100 pour obtenir un pourcentage
    {
      name: "Restant",
      value: userData ? (1 - userData.todayScore) * 100 : 100,
    },
  ];
  const CustomLegend = () => (
    <>
      <div
        className="CustomLegendCercle"
        style={{
          marginLeft: "30px",
          display: "flex",
          
          alignItems: "center",
          justifyContent: "space-between",
          opacity: "1",
        }}
      >
        <div>
          <h3>Score</h3>
        </div>
      </div>
    </>
  );
  return (
    <>
      <UserDataLoader setUserData={setUserData} />
      {userData && (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
          <Legend
              content={<CustomLegend />}
              verticalAlign="top"
              align="center"
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              fill="#Ff0104"
              stroke="#Ff0104"
              dataKey="value"
              startAngle={90}
              endAngle={90 - 360 * userData.todayScore}
            />

            <Pie
              data={[{ name: "Remplissage intérieur", value: 1 }]}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={90}
              fill="#fff"
              stroke="none"
            />
              <text
              className="Score"
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fill="#000"
              >
                {`${userData.todayScore * 100}% `}
              </text>
              <text
              className="objectif" // Classe pour le texte supplémentaire
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fill="#000">
          De votre objectif
              </text>
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default CercleCharts;
