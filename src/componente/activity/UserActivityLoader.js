import { useParams } from "react-router-dom";
import React , {useEffect} from "react";
import { fetchUserActivity } from "../../Api";

const UserActivityLoader = ({setUserData}) => {
    const {userId} = useParams(); 


    const convertUserData = (data) => {
        return data.map((item, index) => ({
            day: index + 1, // Conversion de la date en un nombre de jour
            calories: item.calories,
            kilogram: item.kilogram
        }));
    };

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetchUserActivity(userId);
                const sessions = response.data?.sessions || response.sessions; // Vérifiez les deux structures
                if (sessions) {
                    const convertedData = convertUserData(sessions);
                    setUserData(convertedData); // Utiliser les données converties ici
                } else {
                    console.error('Pas de sessions disponibles pour cet utilisateur.');
                }
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        }
        getUserData();
    }, [userId, setUserData]);

}
export default UserActivityLoader;