export class UserDataModel {
    constructor(userData, userActivity, userAverageSessions, userPerformance) {
      this.userData = userData;
      this.userActivity = userActivity;
      this.userAverageSessions = userAverageSessions;
      this.userPerformance = userPerformance;
    }
  
    // Setter pour les données utilisateur
    setUserData(userData) {
      this.userData = userData;
    }
  
    setUserActivity(userActivity) {
      this.userActivity = userActivity;
    }
  
    setUserAverageSessions(userAverageSessions) {
      this.userAverageSessions = userAverageSessions;
    }
  
    setUserPerformance(userPerformance) {
      this.userPerformance = userPerformance;
    }
  }