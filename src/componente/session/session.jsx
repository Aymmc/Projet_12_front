import React, { useState } from "react";
import UserSessionLoader from "./UserSessionLoader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "./session.css";
const SessionCharts = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSetUserData = (data) => {
    setUserData(data);
    setLoading(false);
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="intro"> {payload[0].value} min</p>
        </div>
      );
    }

    return null;
  };
  const CustomCursor = (props) => {
    const { points, width, height, stroke } = props;
    const { x, y } = points[0];
    const { x1, y1 } = points[1];

    return (
      <Rectangle
        fill="rgba(0, 0, 0, 0.1)" // Remplissage semi-transparent
        stroke="none" // Pas de contour
        x={x} // Position du curseur sur l'axe X
        y={0} // Commence en haut du graphique
        width={width} // Largeur du curseur pour remplir la partie droite
        height={263} // Couvre toute la hauteur du graphique
        opacity="1"
      />
    );
  };
  const CustomLegend = () => (
    <>
      <div
        className="CustomLegendSession"
        style={{
          marginLeft: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: "0.5",
        }}
      >
        <div>
          <h3>Durée moyenne des sessions</h3>
        </div>
      </div>
    </>
  );
  // Tableau des abréviations des jours de la semaine (L = Lundi, M = Mardi, etc.)

  return (
    <>
      <UserSessionLoader setUserData={handleSetUserData} />

      {userData && (
        <ResponsiveContainer width="100%" height={263}>
          <LineChart
            width={258}
            height={263}
            data={userData}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            opacity="0.5"
          >
            <CartesianGrid stroke="transparent" />
            <XAxis dataKey="day" stroke="#FFF" />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
            <Legend
              content={<CustomLegend />}
              verticalAlign="top"
              align="center"
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFF"
              strokeWidth="2"
              dot={false}
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default SessionCharts;
