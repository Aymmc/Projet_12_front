import React from "react";
import { Route , Navigate , Link } from "react-router-dom";
const Lobby = () => {
    return ( 
        <>
                <Link to="/user/12">
      <button>
        Go Karl 
      </button>
    </Link>
    <Link to="/user/18">
      <button>
        Go Cecilia
      </button>
    </Link>
        </>
    )
}

export default Lobby