import React, { useEffect, useState } from "react";
import fetchData from "../../AdapteurService"; // Import de la fonction fetchData
import { useParams } from "react-router-dom";
import { useAppContext } from "../../AppContext"; // Contexte pour `mock`

const useUserData = () => {
  const { userId } = useParams();  // Récupère l'ID de l'utilisateur depuis les params de la route
  const { mock } = useAppContext();  // Récupère `mock` depuis le contexte
  const [userData, setUserData] = useState(null);  // Stocke les données utilisateur
  const [loading, setLoading] = useState(true);  // Gère l'état de chargement

  useEffect(() => {
    async function getUserData() {
      try {
        console.log(mock ? "Fetching data from local source" : "Fetching data from API");
        const response = await fetchData(userId, mock);  // Appel à fetchData pour récupérer les données
        setUserData(response);  // Stocke les données dans l'état
      } catch (error) {
        console.error("Error fetching user data:", error);  // Gestion des erreurs
      } finally {
        setLoading(false);  // Met à jour l'état de chargement une fois les données chargées
      }
    }

    getUserData();  // Appelle la fonction pour récupérer les données
  }, [userId, mock ]);  // Re-lance l'effet quand `userId` ou `mock` change

  return [userData, loading];  // Retourne un tableau avec userData et loading
};

export default useUserData;
