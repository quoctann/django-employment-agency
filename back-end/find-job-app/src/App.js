import React, { useState, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./layouts/Default";
import { PublicRoutes, RoutePaths } from "./routes/public-route";
// import "./App.css";
import cookies from 'react-cookies';


function App() {
  const loggedIn = false;
  // const [user, setUser] = useState(null);
  



  /**
   * renders
   */
  function BasicLayout(props) {
    return (
      <Layout {...props}>
        <Switch>
          {Object.values(PublicRoutes).map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            );
          })}
          <Redirect to={RoutePaths.Home} />
        </Switch>
      </Layout>
    );
  }
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          {!loggedIn ? (
            <Route path="/" render={(props) => <BasicLayout {...props} />} />
          ) : (
            <Route path="/" render={(props) => <BasicLayout {...props} />} />
          )}

          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
