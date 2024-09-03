import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../../Api.js';
import { useParams } from 'react-router-dom';
import "./home.css"
function Home() {
    const { userId } = useParams(); // Récupère l'id depuis l'URL
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetchUserData(userId);
                // Assure-toi de récupérer correctement les données
                setUserData(response.data); // Utiliser response.data ici
                console.log(response.data); // Log de la réponse pour déboguer
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        getUserData();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Vérifie si userData est disponible avant d'accéder aux propriétés
    if (!userData) return <div>No user data available.</div>;

    // Accède aux propriétés de l'objet imbriqué
    const { userInfos, todayScore, keyData } = userData; // Déstructure les données

    return (
        <div>
            <h1>{userInfos.firstName} {userInfos.lastName}</h1>
            <p>Age: {userInfos.age}</p>
            <p>Today's Score: {todayScore * 100}%</p>
            <div>
                <h2>Key Data:</h2>
                <ul>
                    <li>Calories: {keyData.calorieCount} kcal</li>
                    <li>Proteins: {keyData.proteinCount} g</li>
                    <li>Carbohydrates: {keyData.carbohydrateCount} g</li>
                    <li>Lipids: {keyData.lipidCount} g</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
