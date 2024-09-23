import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UserActivityLoader from './UserActivityLoader';
import './activity.css';

const CaloriePoidsChart = () => {
    const [userData, setUserData] = useState(null);

    const handleSetUserData = (data) => {
        setUserData(data)
    }
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
    return (
        <>
        <UserActivityLoader setUserData={handleSetUserData} />
        <ResponsiveContainer width="100%" height={320}>
            <BarChart data={userData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} fill='#FBFBFB' />
                <XAxis dataKey="day" fill='#FFF' />
                <YAxis hide={true} yAxisId="left" dataKey="calories" />
                <YAxis yAxisId="right"  tickFormatter= {(tick) => `${tick}kg`} domain={['dataMin-2', 'dataMax+2']} orientation="right" dataKey="kilogram" />
                <Legend content={<CustomLegend />} verticalAlign="top" align="center" />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Bar yAxisId="left" dataKey="calories"   fill="#282d30" barSize={7} radius={3}/>
                <Bar yAxisId="right" dataKey="kilogram" fill="#e60003" barSize={7} radius={3} />
            </BarChart>
        </ResponsiveContainer>
        </>
    );
}

export default CaloriePoidsChart;
