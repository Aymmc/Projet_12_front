import React, { useState } from 'react';
import UserDataLoader from './UserDataLoader'; // Importer le nouveau composant
import SideBar from '../../componente/sidebarre/sidebarre';
import Barreleft from '../../componente/barreleft/barreleft'
import CaloriePoidsChart from '../../componente/activity/activity';
import "./home.css";

function Home() {
    const [userData, setUserData] = useState(null);


    return (
        <>
        <SideBar/>
        <div className='home'>
            <UserDataLoader setUserData={setUserData} />
            
          
            {userData && (
                <>
                
                    <h1> Bonjour <span>{userData.userInfos.firstName} {userData.userInfos.lastName}</span></h1>
                    <p className='felicitation'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    {/* <p>Today's Score: {userData.todayScore * 100}%</p> */}
                    <div>
                        <div className='BarChart'>
                        <CaloriePoidsChart/>
                        </div>
                       <Barreleft/>
                    </div>
                </>
            )}
        </div>
        </>
    );
}

export default Home;
