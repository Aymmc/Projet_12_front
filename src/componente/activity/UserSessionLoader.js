import React, { useEffect } from 'react';
import { fetchUserAverageSessions } from '../../Api.js';
import { useParams } from 'react-router-dom';

const UserSessionLoader = ({ setUserData }) => {
    const { userId } = useParams(); // Récupère l'id depuis l'URL
    const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

    const ConvertDay = (data) => {
        return data.map((item, index) => ({
            day: daysOfWeek[index], // Conversion de l'index en jour de la semaine
            sessionLength: item.sessionLength
        }));
    };

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetchUserAverageSessions(userId);
                
                // Vérifiez les deux options pour les sessions
                const sessions = response.data?.sessions || response.sessions;

                if (sessions) {
                    const ConvertUserDay = ConvertDay(sessions);
                    setUserData(ConvertUserDay);
                } else {
                    console.log('Pas de sessions disponibles pour cet utilisateur.');
                }
            } catch (err) {
                console.log('Erreur lors de la récupération des données utilisateur', err);
            }
        }
        getUserData();
    }, [userId, setUserData]);

    return null; // Ce composant n'affiche rien directement
};

export default UserSessionLoader;
