import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./layouts";
import { PublicRoutes, RoutePaths } from "./routes/public-route";
// import { getAuthLS, LS_KEY } from '../src/helpers/localStorage';

function App() {
  // const loggedIn = true;
  // const loggedIn = getAuthLS(LS_KEY.AUTH_TOKEN) ? true : false;
  // const check = getAuthLS(LS_KEY.AUTH_TOKEN)

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

  function GuestLayout(props) {
    return (
      <Layout {...props}>
        <Switch>
          {Object.values(PublicRoutes).map((route, idx) => {
            if (route.id !== 'Profile') {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => <route.component {...props} />}
                />
              );
            }
          })}
          <Redirect to={RoutePaths.Home} />
        </Switch>
      </Layout>
    );
  }

  function CandidateLayout(props) {
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

  function RecruiterLayout(props) {
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

  const rolePaths = {
    GUEST: 'KHACH',
    CANDIDATE: 'NGUOI DUNG',
    RECRUITER: 'NHAN VIEN',
  }

  // function ManageRoute({ role }) {
  //   if (role === rolePaths.CANDIDATE) {
  //     return (
  //       <Route key={1} path="/" render={(props) => <CandidateLayout {...props} />} />
  //     );
  //   }
  //   if (role === rolePaths.RECRUITER) {
  //     return (
  //       <Route key={2} path="/" render={(props) => <RecruiterLayout {...props} />} />
  //     );
  //   }
  // }

  return (
    <Router>
      {/* {loggedIn ? (
        <Switch>
          <ManageRoute role={check} />
        </Switch>
      ) : (
        <Switch>
          <Route key={0} path="/" render={(props) => <GuestLayout {...props} />} />
        </Switch>
      )} */}
      <Switch>
        <Route key={0} path="/" render={(props) => <BasicLayout {...props} />} />
      </Switch>

    </Router>
  );
}
export default App;
