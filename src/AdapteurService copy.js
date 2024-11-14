import { UserDataModel } from './userDataModel'; // Import du modèle de données
import {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
  fetchUserDataLocal,
  fetchUserActivityLocal,
  fetchUserAverageSessionsLocal,
  fetchUserPerformanceLocal
} from './api/Api';

const fetchData = async (userId, mock) => {
  // Création d'une instance du modèle
  const userDataModel = new UserDataModel(null, null, null, null);

  try {
    if (mock) {
      // Appels aux données locales
      userDataModel.setUserData(await fetchUserDataLocal(userId));
      userDataModel.setUserActivity(await fetchUserActivityLocal(userId));
      userDataModel.setUserAverageSessions(await fetchUserAverageSessionsLocal(userId));
      userDataModel.setUserPerformance(await fetchUserPerformanceLocal(userId));
    } else {
      // Appels API
      const userData = await fetchUserData(userId);
      const userActivity = await fetchUserActivity(userId);
      const userAverageSessions = await fetchUserAverageSessions(userId);
      const userPerformance = await fetchUserPerformance(userId);

      userDataModel.setUserData(userData.data); // Assure-toi de récupérer userData.data si nécessaire
      userDataModel.setUserActivity(userActivity.data);
      userDataModel.setUserAverageSessions(userAverageSessions.data);
      userDataModel.setUserPerformance(userPerformance.data);
    }

    // Retourne l'instance mise à jour avec les données
    return userDataModel;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export default fetchData;
