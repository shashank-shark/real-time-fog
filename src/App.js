import React from 'react';

import Navbar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
      </div>

  );
}

export default App;
