import React, { useEffect } from 'react';
import { fetchUserData } from '../../Api.js';
import { useParams } from 'react-router-dom';

const UserDataLoader = ({ setUserData }) => {
    const { userId } = useParams(); // Récupère l'id depuis l'URL

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetchUserData(userId);
                setUserData(response.data); // Utiliser response.data ici
                // console.log(response.data); // Log de la réponse pour déboguer
            } catch (err) {
                    console.log('error User Data')
            }   
        }
        getUserData();
    }, [userId, setUserData]);

    return null; // Ce composant n'affiche rien directement
};

export default UserDataLoader;
