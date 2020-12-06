import React, { ComponentType } from "react";
import { withRouter, Link, Route, BrowserRouter , Switch, RouteComponentProps, useLocation, RouteProps } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TopNavi from 'components/topNavi/TopNavi';
import Bio from "containers/bio/Bio";
import Cv from "containers/cv/Cv";
import Projects from "containers/projects/Projects";

const Home = ({ match }: RouteComponentProps) => {
  console.log(match);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Experise = () => (
  <div>
    <h2>Experise</h2>
  </div>
);

function App({ location }: RouteComponentProps) {

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
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/bio"><Bio /></Route>
              <Route path="/cv"><Cv /></Route>
              <Route path="/expertise"><Experise /></Route>
              <Route path="/projects"><Projects /></Route>
              <Route path="/:id">
                <p>This text will render for any route other than those defined above</p>
              </Route>
            </Switch>
          </section>

        </CSSTransition>
      </TransitionGroup>
      
    </div>
  );
}

export default withRouter(App);