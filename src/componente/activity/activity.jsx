import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useUserData from "../../pages/home/UserDataLoader";
import './activity.css';

const CaloriePoidsChart = () => {
    const [userData, loading] = useUserData('activity');  // Récupère les données des sessions d'activité

    // Convertir les données dans le bon format
    const convertUserData = (data) => {
        return data.map((item, index) => ({
            day: index + 1,  // Assigner le jour comme un nombre progressif
            calories: item.calories,  // Calories brûlées
            kilogram: item.kilogram  // Poids en kilogrammes
        }));
    };

    // Si les données sont en train de se charger, afficher "Loading..."
    if (loading) {
        return <div>Loading...</div>;
    }

    // Conversion des données utilisateur
    const formattedData = convertUserData(userData.userActivity.sessions);

    // Log des données converties (pour vérification)
    console.log(formattedData); 

    // Tooltip personnalisé
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-Activity">
                    <p className="label">{`${payload[0].payload.kilogram} Kg`}</p>
                    <p className="intro">{`${payload[0].payload.calories} Kcal`}</p>
                </div>
            );
        }
        return null;
    };

    // Légende personnalisée
    const CustomLegend = () => (
        <div className="CustomLegend" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <h3>Activité quotidienne</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", padding: '10px' }}>
                <div style={{ marginRight: '20px', display: 'flex' }}>
                    <span style={{ color: '#282d30' }}>• </span> Poids (kg)
                </div>
                <div style={{ display: 'flex' }}>
                    <span style={{ color: '#e60003' }}>• </span> Calories brûlées (kCal)
                </div>
            </div>
        </div>
    );

    return ( userData ? (
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} fill='#FBFBFB' />
            <XAxis dataKey="day" fill='#FFF' />
            <YAxis hide={true} yAxisId="left" dataKey="calories" />
            <YAxis yAxisId="right" tickFormatter={(tick) => `${tick}`} domain={['dataMin-2', 'dataMax+2']} orientation="right" dataKey="kilogram" />
            <Legend content={<CustomLegend />} verticalAlign="top" align="center" />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar yAxisId="left" dataKey="calories" fill="#282d30" barSize={7} radius={3} />
            <Bar yAxisId="right" dataKey="kilogram" fill="#e60003" barSize={7} radius={3} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="no-user-data">
          <p>Les données de l'utilisateur sont en cours de chargement ou non disponibles.</p>
          <p>Veuillez patienter ou vérifier votre connexion.</p>
        </div>
      )
    )
};
      

export default CaloriePoidsChart;
