import React from 'react';
import LoginForm from './LoginForm';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/login">
            <LoginForm />
          </Route>

          <Route path="/">
            <Redirect to="/login" />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
