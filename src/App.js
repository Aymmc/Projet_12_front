import React from 'react';
import './App.css';
import Header from '../src/componente/header/header.jsx'
import AppRouter from './AppRouter.jsx'
import SideBarre from './componente/sidebarre/sidebarre.jsx';
function App() {
  return (
    <>
    
    <Header />
    <SideBarre/>
    <main>
    <AppRouter />
    </main>
    </>
  );
}

export default App;
