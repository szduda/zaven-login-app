import React from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useCookies, CookiesProvider } from 'react-cookie';

function App() {
  const [cookies] = useCookies(['token'])

  return (
    <div className="App">
      <CookiesProvider>
        <Router>
          <Switch>

            <Route path="/login">
              {cookies.token
                ? <Redirect to="/dashboard" />
                : <LoginForm />}
            </Route>

            <Route path="/dashboard">
              {cookies.token
                ? <Dashboard />
                : <Redirect to="/login" />}
            </Route>

            <Route path="/">
              <Redirect to="/login" />
            </Route>

          </Switch>
        </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;
