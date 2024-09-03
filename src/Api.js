const API_BASE_URL = 'http://localhost:3000';

export async function fetchUserData(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    return response.json();
}

export async function fetchUserActivity(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`);
    if (!response.ok) {
        throw new Error('Failed to fetch user activity');
    }
    return response.json();
}

export async function fetchUserAverageSessions(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`);
    if (!response.ok) {
        throw new Error('Failed to fetch user average sessions');
    }
    return response.json();
}

export async function fetchUserPerformance(userId) {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`);
    if (!response.ok) {
        throw new Error('Failed to fetch user performance');
    }
    return response.json();
}