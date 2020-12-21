import React, { ComponentType } from "react";
import { withRouter, Link, Route, useRouteMatch , Switch, RouteComponentProps, useLocation, RouteProps, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import 'containers/Common.css';
import TopNavi from 'components/topNavi/TopNavi';
import Bio from "containers/bio/Bio";
import Cv from "containers/cv/Cv";
import Expertise from "containers/expertise/Expertise";
import Projects from "containers/projects/Projects";

function App({ location, match }: RouteComponentProps) {

  // const currentKey = location.pathname.split('/')[1] || '/';
  const currentKey = location.key
  const timeout = { enter: 300, exit: 300 };

  return (
    <div className="app">

      <TopNavi />

      { /* Route components are rendered if the path prop matches the current URL */}
      <TransitionGroup className="page-main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade" >

          <section className="page-main-inner">
            <div className="page-main-content">
              <Switch location={location}>
                <Route path={`${match.path}/bio`}><Bio /></Route>
                <Route path={`${match.path}/cv`} ><Cv /></Route>
                <Route path={`${match.path}/expertise`} ><Expertise /></Route>
                <Route path={`${match.path}/projects`} ><Projects /></Route>
                <Redirect to={`${match.path}/bio`} />
              </Switch>
            </div>
          </section>

        </CSSTransition>
      </TransitionGroup>
      
    </div>
  );
}

export default withRouter(App);