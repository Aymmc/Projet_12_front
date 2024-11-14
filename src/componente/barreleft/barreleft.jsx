import React, { useState } from "react";
import Block from "../block/block";
import CalorieIcone from "./calories-icon.png";
import ProteinIcone from "./protein-icon.png";
import CarbsIcone from "./carbs-icon.png";
import FatIcone from "./fat-icon.png";
import "../../componente/block/block.css";
import useUserData from "../../pages/home/UserDataLoader";

function Barreleft() {
  const [userData, loading] = useUserData(); // Utilisation du hook pour récupérer les données et l'état de chargement

  // Si le chargement est en cours, afficher "Loading..."
  if (loading) {
    return <div>Loading...</div>;
  }
  const keyData = userData.userData.keyData;
  console.log(keyData); // Log des données récupérée
  return (
    <>
      {userData && (
        <ul>
          <Block
            Img={CalorieIcone}
            chiffre={keyData.calorieCount}
            unite="Kcal"
            calorie="Calories"
          />
          <Block
            Img={ProteinIcone}
            chiffre={keyData.proteinCount}
            unite="g"
            calorie="Proteines"
          />
          <Block
            Img={CarbsIcone}
            chiffre={keyData.carbohydrateCount}
            unite="g"
            calorie="Glucides"
          />
          <Block
            Img={FatIcone}
            chiffre={keyData.lipidCount}
            unite="g"
            calorie="Lipide"
          />
        </ul>
      )}
    </>
  );
}
export default Barreleft;
