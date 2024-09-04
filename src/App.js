import React from 'react';
import './App.css';
import Header from '../src/componente/header/header.jsx'
import AppRouter from './AppRouter.jsx'
function App() {
  return (
    <>
    
    <Header />
    <main>
    <AppRouter />
    </main>
    </>
  );
}

export default App;
