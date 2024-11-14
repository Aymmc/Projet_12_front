import React from 'react';
import './App.css';
import Header from '../src/componente/header/header.jsx'
import AppRouter from './AppRouter.jsx'
import SideBarre from './componente/sidebarre/sidebarre.jsx';
import { AppProvider } from './AppContext.js';

function App() {

  return (
    <>
      <AppProvider>
        <Header />
        <SideBarre />
        <main>
          <AppRouter />
        </main>
    </AppProvider>
    </>
  );
}

export default App;
