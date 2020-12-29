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

  // console.log(`App location=${location.pathname} match=${match.path}`);

  // const currentKey = location.pathname.split('/')[1] || '/';
  const currentKey = location.key
  const timeout = { enter: 300, exit: 300 };

  var scrollbarCover:HTMLElement|null|undefined;
  var showTimeout: NodeJS.Timeout;
  const handleScroll = (event: Event) => {

    if(scrollbarCover) {
      if(scrollbarCover.classList.contains("on-scroll") === false) {
        showScroll();
      }
    }
  };

  function showScroll() {
    if(scrollbarCover) {
      scrollbarCover.classList.add("on-scroll");
    
      clearTimeout(showTimeout);
      showTimeout = setTimeout(()=>{
        scrollbarCover?.classList.remove("on-scroll");
      }, 1000);
    }
  }

  useEffect(() => {
    // Anything in here is fired on component mount.

    const appDiv = document.getElementById('app');
    scrollbarCover = appDiv?.querySelector('.scrollbar-cover');
    
    window.addEventListener('scroll', handleScroll, true);

    // Create the measurement node
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    const scrollBarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    if(scrollbarCover) {
      scrollbarCover.style.width = `${scrollBarWidth}px`;
      showScroll();
    }
    console.warn("[0] " + (scrollBarWidth)); // Mac:  15

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
    <div id="app">

      <TopNavi />

      { /* Route components are rendered if the path prop matches the current URL */ }
      <TransitionGroup id="page-main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade" >

          <section className="page-main-content">
              <Switch location={location}>
                <Route path={`${match.path}/bio`}><Bio /></Route>
                <Route path={`${match.path}/cv`} ><Cv /></Route>
                <Route path={`${match.path}/expertise`} ><Expertise /></Route>
                <Route path={`${match.path}/projects`} ><Projects /></Route>
                <Redirect to={`${match.path}/bio`} />
              </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>

      <div className="scrollbar-cover" />
    </div>
  );
}

export default withRouter(App);