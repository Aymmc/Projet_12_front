const API_BASE_URL = 'http://localhost:3000';
const { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } = require('./data');

async function fetchWithMock(url) {
    try {
        // console.log(`Attempting to fetch from: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return await response.json();
    } catch (error) {
        // console.warn(`Error fetching data from ${url}: ${error.message}`);
        return null; // Retourne null si le fetch échoue
    }
}

export async function fetchUserData(userId) {
    // console.log("fetchUserData called with userId:", userId);
    const url = `${API_BASE_URL}/user/${userId}`;

    // Tente de récupérer les données du serveur
    const userData = await fetchWithMock(url);

    if (!userData) {
        // console.log("Using local data for userId:", userId);
        const localUserData = USER_MAIN_DATA.find(user => user.id === Number(userId));
        if (localUserData) {
            // console.log("Local User Data Found:", localUserData);
            return localUserData; // Retourne les données locales
        } else {
            // console.error("No local user data found for userId:", userId);
            return null; // Aucun utilisateur trouvé, retourne null
        }
    }

    console.log("User Data Found from server:", userData);
    return userData; // Retourne les données de l'utilisateur
}

export async function fetchUserActivity(userId) {
    const url = `${API_BASE_URL}/user/${userId}/activity`;
    const userActivity = await fetchWithMock(url);

    if (!userActivity) {
        console.log("Using local activity data for userId:", userId);
        const localUserActivity = USER_ACTIVITY.find(activity => activity.userId === Number(userId));
        if (localUserActivity) {
            // console.log("Local User Activity Found:", localUserActivity);
            return localUserActivity; // Retourne les données locales
        } else {
            // console.error("No local activity data found for userId:", userId);
            return null; // Aucun utilisateur trouvé, retourne null
        }
    }

    console.log("User Activity Found from server:", userActivity);
    return userActivity; // Retourne les données d'activité
}

export async function fetchUserAverageSessions(userId) {
    const url = `${API_BASE_URL}/user/${userId}/average-sessions`;
    const userAverageSessions = await fetchWithMock(url);

    if (!userAverageSessions) {
        // console.log("Using local average sessions data for userId:", userId);
        const localUserAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === Number(userId));
        if (localUserAverageSessions) {
            // console.log("Local User Average Sessions Found:", localUserAverageSessions);
            return localUserAverageSessions; // Retourne les données locales
        } else {
            // console.error("No local average sessions data found for userId:", userId);
            return null; // Aucun utilisateur trouvé, retourne null
        }
    }

    console.log("User Average Sessions Found from server:", userAverageSessions);
    return userAverageSessions; // Retourne les données des sessions moyennes
}

export async function fetchUserPerformance(userId) {
    const url = `${API_BASE_URL}/user/${userId}/performance`;
    const userPerformance = await fetchWithMock(url);

    if (!userPerformance) {
        console.log("Using local performance data for userId:", userId);
        const localUserPerformance = USER_PERFORMANCE.find(performance => performance.userId === Number(userId));
        if (localUserPerformance) {
            // console.log("Local User Performance Found:", localUserPerformance);
            return localUserPerformance; // Retourne les données locales
        } else {
            // console.error("No local performance data found for userId:", userId);
            return null; // Aucun utilisateur trouvé, retourne null
        }
    }

    // console.log("User Performance Found from server:", userPerformance);
    return userPerformance; // Retourne les données de performance
}
