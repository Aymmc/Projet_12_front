import React, { useState, useRef } from 'react';
import './block.css'
function Block({chiffre, calorie, Img , unite}){
    return (
        <div className='block'>
        <div>
            <img src={Img} alt="" />
        </div>
        <div className='block_p'>
            <p className='chiffre'>{chiffre}{unite}</p>
            <p className='calorie'>{calorie}</p>
        </div>
    </div>
    );

}
export default Block