import React, { useState } from 'react';
import UserDataLoader from './UserDataLoader'; // Importer le nouveau composant
// import SideBar from '../../componente/sidebarre/sidebarre';
import Barreleft from '../../componente/barreleft/barreleft'
import CaloriePoidsChart from '../../componente/activity/activity';
import SessionCharts from '../../componente/session/session';
import PerformanceCharts from '../../componente/performance/performance';
import CercleCharts from '../../componente/cercle/cercle';
import "./home.css";

function Home() {
    const [userData, setUserData] = useState(null);

    
    return (
        <>
        {/* <SideBar/> */}
        <div className='home'>
            <UserDataLoader setUserData={setUserData} />
            
          
            {userData && (
                <>
                
                    <h1> Bonjour <span>{userData.userInfos.firstName}</span></h1>
                    <p className='felicitation'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    {/* <p>Today's Score: {userData.todayScore * 100}%</p> */}
                    <div className='block1'>
                        <div className='BarChart'>
                        <CaloriePoidsChart/>
                        <div className='block2'>
                        <div className='SessionChart'>
                    <SessionCharts/>
                    </div>
                  <div className='PerformanceCharts'>
                    <PerformanceCharts/>
                    </div>
                    <div className='CercleCharts'>
                    <CercleCharts/>
                    </div>
                    </div>
                 
                        </div>
                        <div className='Barreleft'>
                       <Barreleft/>
                       </div>
                    </div>
                    
                </>
            )}
        </div>
        </>
    );
}

export default Home;
