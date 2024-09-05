import React from 'react';
import icone from './icon.png';
import icone_velo from './icon_velo.png';
import icone_nage from './icon_nage.png';
import icone_haltere from './icon_haltere.png'

import './sidebarre.css'
function SideBarre() {
  return (
<>
<div className="sidebar">
    <div className='icone'>
        <a href="#home" className="sidebar-icon"><img src={icone} alt="" /></a>
        <a href="#services"className="sidebar-icon"><img src={icone_nage} alt="" /></a>
        <a href="#contact" className="sidebar-icon"><img src={icone_velo} alt="" /></a>
        <a href="#about" className="sidebar-icon"><img src={icone_haltere} alt="" /></a>
        </div>
        <div className='copiryght'>
        <p>Copiryght, SportSee 2020</p>
        </div>
    </div>
</>
  );
}
export default SideBarre