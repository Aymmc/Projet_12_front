import React, { useEffect } from 'react';
import { fetchUserData } from '../../Api.js';
import { useParams } from 'react-router-dom';

const UserDataLoader = ({ setUserData }) => {
    const { userId } = useParams();
    const userIdNumber = Number(userId); // Convertit en nombre

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetchUserData(userIdNumber);
                // console.log('Fetched data:', response); // Log la réponse
                
                // Vérifie si la réponse contient les données au bon format
                if (response && response.userInfos) {
                    setUserData(response);
                } else if (response && response.data) {
                    setUserData(response.data); // Utilise response.data si c'est une réponse d'API
                } else {
                    console.error('Invalid data format:', response); // Log une erreur si le format est incorrect
                }
            } catch (err) {
                console.error('Error fetching user data:', err); // Log l'erreur
                // Ici tu peux ajouter un fallback pour utiliser des données locales
                // const localData = {}; // Remplace par tes données locales
                // setUserData(localData);
            }   
        }
        getUserData();
    }, [userId, setUserData]);

    return null; // Ce composant n'affiche rien directement
};

export default UserDataLoader;
