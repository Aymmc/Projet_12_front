import React, { useEffect } from 'react';
import { fetchUserPerformance } from '../../Api.js';
import { useParams } from 'react-router-dom';

const UserDataLoader = ({ setUserData }) => {
    const { userId } = useParams();
    const userIdNumber = Number(userId);

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetchUserPerformance(userIdNumber);
                
                // Fusionne les données de response et response.data
                const data = response && response.data ? { ...response, ...response.data } : response;

                setUserData(data);
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        }
        getUserData();
    }, [userId, setUserData]);

    return null; // Ce composant n'affiche rien directement
};

export default UserDataLoader;
