import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import { fetchUserActivity } from '../../Api';

const CaloriePoidsChart = () => {
    const { userId } = useParams(); // Récupère l'id depuis l'URL
    const [userData, setUserData] = useState(null);

    // Fonction pour convertir le format de date
    const convertUserData = (data) => {
        return data.map((item, index) => ({
            day: index + 1, // Conversion de la date en un nombre de jour
            calories: item.calories,
            kilogram: item.kilogram
        }));
    };

    const CustomLegend = () => (
        <>
            <div className="CustomLegend" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h3 >Activité quotidienne</h3>
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
        </>
    );

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetchUserActivity(userId);
                const convertedData = convertUserData(response.data.sessions);
                setUserData(convertedData); // Utiliser les données converties ici
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        }
        getUserData();
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={320}>
            <BarChart data={userData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3 3 3" vertical={false} fill='#FBFBFB' />
                <XAxis dataKey="day" />
                <YAxis hide={true}  yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Legend content={<CustomLegend />} verticalAlign="top" align="center" />
                <Tooltip />
                <Bar  yAxisId="right" dataKey="calories" fill="#282d30" barSize={6} />
                <Bar yAxisId="left" dataKey="kilogram" fill="#e60003" barSize={6} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CaloriePoidsChart;
