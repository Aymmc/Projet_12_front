import React, { useState } from "react";
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
import useUserData from "../../pages/home/UserDataLoader";

const SessionCharts = () => {
  const [userData, loading] = useUserData('sessions');  // Récupère uniquement les données des sessions

  // Si le chargement est en cours, afficher "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }

  const sessions = userData.userAverageSessions.sessions
 
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
  );

  return (
    <>
      {/* Affichage du loader ou du graphique selon l'état de chargement */}
      {loading ? (
        <div className="loading">Chargement...</div> // Affiche un message de chargement
      ) : (
        userData ? ( // Vérifie que userData existe avant de rendre le graphique
          <ResponsiveContainer width="100%" height={263}>
            <LineChart
              data={sessions}
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
        ) : (
          <div className="no-user-data">
            <p>Les données de l'utilisateur sont indisponibles ou en cours de chargement.</p>
            <p>Veuillez vérifier votre connexion ou réessayer plus tard.</p>
          </div>
        )
      )}
    </>
  );
};  

export default SessionCharts;
