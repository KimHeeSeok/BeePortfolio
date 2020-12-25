import React, { useEffect, useState, ComponentType } from "react";
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

  
  const [scrollbarWidth, setScrollbarWidth] = useState(0);


  var showTimeout: NodeJS.Timeout;
  const handleScroll = (event: Event) => {

    if(event.target instanceof Element) {

      if (event.target?.classList?.contains("on-scrollbar") === false) {
          event.target.classList.add("on-scrollbar");

          clearTimeout(showTimeout);

          showTimeout = setTimeout(()=>{
            if(event.target instanceof Element) {
              event.target.classList.remove("on-scrollbar");
            }

          }, 1000);
      }
    }
  };

  useEffect(() => {
    // Anything in here is fired on component mount.
    window.addEventListener('scroll', handleScroll, true);

    // Create the measurement node
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    setScrollbarWidth(scrollDiv.offsetWidth - scrollDiv.clientWidth);
    console.warn("[0] " + (scrollDiv.offsetWidth - scrollDiv.clientWidth)); // Mac:  15

    // Delete the DIV 
    document.body.removeChild(scrollDiv);

    return () => {
        // Anything in here is fired on component unmount.
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);
   

  useEffect(() => {
    const pageMain = document.getElementById('page-main');
    const pageMainInner = document.getElementById('page-main-inner');

    if(pageMain && pageMainInner) {
      console.log(3);
    }

    return () => {

      const pageMain = document.getElementById('page-main');
      const pageMainInner = document.getElementById('page-main-inner');
  
      if(pageMain && pageMainInner) {
        console.log(4);
      }
    }
  });


  return (
    <div className="app">

      <TopNavi />

      { /* Route components are rendered if the path prop matches the current URL */ }
      <TransitionGroup className="page-main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade" >

          <section id="page-main-inner">
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