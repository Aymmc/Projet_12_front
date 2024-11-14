import React, { useState } from "react";

// import SideBar from '../../componente/sidebarre/sidebarre';
import Barreleft from "../../componente/barreleft/barreleft";
import CaloriePoidsChart from "../../componente/activity/activity";
import SessionCharts from "../../componente/session/session";
import PerformanceCharts from "../../componente/performance/performance";
import CercleCharts from "../../componente/cercle/cercle";
import useUserData from "./UserDataLoader";
import { useAppContext } from "../../AppContext";
import "./home.css";
import Lobby from "../lobby/lobby";

function Home() {
  const [userData, loading] = useUserData();  // Récupère uniquement les données des sessions

  // Si le chargement est en cours, afficher "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <SideBar/> */}
      <div className="home">
        <Lobby />

        {/* Si userData est disponible */}
        {userData ? (
          <>
            <h1>
              Bonjour <span>{userData.userData.userInfos.firstName}</span>
            </h1>
            <p className="felicitation">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
            {/* <p>Today's Score: {userData.todayScore * 100}%</p> */}
            <div className="block1">
              <div className="BarChart">
                <CaloriePoidsChart />
                <div className="block2">
                  <div className="SessionChart">
                    <SessionCharts />
                    </div>
                  <div className="PerformanceCharts">
                    <PerformanceCharts />
                  </div>
                  <div className="CercleCharts"><CercleCharts /></div>
                </div>
              </div>
              <div className="Barreleft">
                <Barreleft />
              </div>
            </div>
          </>
        ) : (
          // Si userData est vide, afficher ce message
          <div className="no-user-data">
            <p>
              Les données de l'utilisateur sont en cours de chargement ou non
              disponibles.
            </p>
            <p>Veuillez patienter ou vérifier votre connexion.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
