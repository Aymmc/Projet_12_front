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

const fetchData = async (userId, type, mock) => {
  const userDataModel = new UserDataModel(null, null, null, null);  // Initialisation du modèle de données

  try {
    if (mock) {
      // En mode 'mock', on utilise les données locales
      if (type === 'sessions') {
        userDataModel.setUserAverageSessions(await fetchUserAverageSessionsLocal(userId));
      } else if (type === 'activity') {
        userDataModel.setUserActivity(await fetchUserActivityLocal(userId));
      } else if (type === 'performance') {
        userDataModel.setUserPerformance(await fetchUserPerformanceLocal(userId));
      } else {
        userDataModel.setUserData(await fetchUserDataLocal(userId));
      }
    } else {
      // En mode 'API', on utilise les données de l'API
      if (type === 'sessions') {
        const userAverageSessions = await fetchUserAverageSessions(userId);
        userDataModel.setUserAverageSessions(userAverageSessions.data);
      } else if (type === 'activity') {
        const userActivity = await fetchUserActivity(userId);
        userDataModel.setUserActivity(userActivity.data);
      } else if (type === 'performance') {
        const userPerformance = await fetchUserPerformance(userId);
        userDataModel.setUserPerformance(userPerformance.data);
      } else {
        const userData = await fetchUserData(userId);
        userDataModel.setUserData(userData.data);
      }
    }

    return userDataModel;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export default fetchData;
