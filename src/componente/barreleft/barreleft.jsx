import React, { useState } from 'react';
import UserDataLoader from '../../pages/home/UserDataLoader'; // Importer le nouveau composant
import Block from '../block/block';
import CalorieIcone from './calories-icon.png'
import ProteinIcone from './protein-icon.png'
import CarbsIcone from './carbs-icon.png'
import FatIcone from './fat-icon.png'
import '../../componente/block/block.css'
function Barreleft() {
    const [userData, setUserData] = useState(null);
    return (
        <>
            <UserDataLoader setUserData={setUserData} />
            {userData && (
                <ul>
                <Block Img={CalorieIcone} chiffre={userData.keyData.calorieCount} unite='Kcal' calorie="Calories"/>
                <Block Img={ProteinIcone} chiffre={userData.keyData.proteinCount} unite='g' calorie="Proteines"/>
                <Block Img={CarbsIcone} chiffre={userData.keyData.carbohydrateCount} unite='g' calorie="Glucides"/>
                <Block Img={FatIcone} chiffre={userData.keyData.lipidCount} unite='g' calorie="Lipide"/>  
                </ul>
                
            )}
        
        </>
    )
}
export default Barreleft