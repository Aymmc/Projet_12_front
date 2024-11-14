import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../AppContext";

const Lobby = () => {
  const { mock, setMock } = useAppContext(); // Utilise l'état global directement

  const changeToDistant = () => {
    setMock(false);
  };

  const changeToLocal = () => {
    setMock(true);
  };
console.log();

  return (
    <>
      <Link to="/user/12">
        <button>Go Karl</button>
      </Link>
      <Link to="/user/18">
        <button>Go Cecilia</button>
      </Link>
      <button onClick={changeToDistant}>Distant</button>
      <button onClick={changeToLocal}>Local</button>
    </>
  );
};

export default Lobby;