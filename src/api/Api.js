    const API_BASE_URL = 'http://localhost:3000';
    const { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } = require('../data');

    // Fonction utilitaire pour fetcher avec gestion des erreurs
    async function fetchWithMock(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return await response.json();
        } catch (error) {

            
            return error; // Retourne null en cas d'erreur
        }
    }

    // API
    export async function fetchUserData(userId) {
        const url = `${API_BASE_URL}/user/${userId}`;
        const userData = await fetch(url);
        return await userData.json();
        console.log(userData);
        
        return userData || null; // Si l'appel échoue, retourne null
    }
    export async function fetchUserActivity(userId) {   
        const url = `${API_BASE_URL}/user/${userId}/activity`;
        const userActivity = await fetch(url);
        return await userActivity.json();
        return userActivity || null; // Si l'appel échoue, retourne null
    }

    export async function fetchUserAverageSessions(userId) {
        const url = `${API_BASE_URL}/user/${userId}/average-sessions`;
        const userAverageSessions = await fetch(url);
        return await userAverageSessions.json();
        return userAverageSessions || null; // Si l'appel échoue, retourne null
    }
    export async function fetchUserPerformance(userId) {
        const url = `${API_BASE_URL}/user/${userId}/performance`;
        const userPerformance = await fetch(url);
        return await userPerformance.json();
        return userPerformance || null; // Si l'appel échoue, retourne null
    }



    // LOCAL
    export async function fetchUserDataLocal(userId) {
        const localUserData = USER_MAIN_DATA.find(user => user.id === Number(userId));
        console.log(localUserData);
        return localUserData || null; // Si pas trouvé, retourne null

    }

    export async function fetchUserActivityLocal(userId) {
        const localUserActivity = USER_ACTIVITY.find(activity => activity.userId === Number(userId));
        return localUserActivity || null; // Si pas trouvé, retourne null
    }

    export async function fetchUserAverageSessionsLocal(userId) {
        const localUserAverageSessions = USER_AVERAGE_SESSIONS.find(sessions => sessions.userId === Number(userId));
        return localUserAverageSessions || null; // Si pas trouvé, retourne null
    }

    export async function fetchUserPerformanceLocal(userId) {
        const localUserPerformance = USER_PERFORMANCE.find(performance => performance.userId === Number(userId));
        return localUserPerformance || null; // Si pas trouvé, retourne null
    }
