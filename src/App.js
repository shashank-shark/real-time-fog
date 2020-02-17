import React from 'react';

import Navbar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

import PrivateRoute from "./components/PrivateRoute";

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
      <div className="App">
          <BrowserRouter>

              <header>
                  <Navbar/>
              </header>

              <Switch>

                  <Route path="/home" excat />
                  <PrivateRoute path="/profile" component={Profile} />

              </Switch>

          </BrowserRouter>
      </div>

  );
}

export default App;
