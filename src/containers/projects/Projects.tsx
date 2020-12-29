import React, { useEffect } from "react";
import { Link, NavLink, Redirect, Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import ProjectItem from './ProjectItem';
import ProjectDetail from './ProjectDetail';
import {items as projectListDigital} from './ProjectListDigital.json';
import {items as projectListSpatial} from './ProjectListSpatial.json';
import './Projects.css';
interface ParamTypes {
  name: string
}

function ProjectCategory() {
  const { url, path } = useRouteMatch();
  const { name } = useParams<ParamTypes>();

  useEffect(() => {
    console.log(`ProjectCategory. url=${url} path=${path} name=${name}`);
  }, []);
  
  return (
    <div id="project-category">
      <ul className="grid-list" >
        {
          (name === "digital") ? 
            projectListDigital.map((projectData, index) => {
              return <ProjectItem key={index} projectData={projectData} />
            }) 
          :
            projectListSpatial.map((projectData, index) => {
              return <ProjectItem key={index} projectData={projectData} />
            })
        }
      </ul>
    </div>
  );
}

const Projects = () => {
  const { url, path } = useRouteMatch();

  useEffect(() => {
    console.log(`Projects. url=${url} path=${path} `);
  }, []);

  return (

      <Switch>

        <Route exact path={`${url}/:name`} >
          <div id="project-category-container" >
            <nav className="sub-navi">
                <ul>
                    <li><NavLink activeClassName="active-link" className="normal-link" to={`${url}/digital`} >Digital UX/GUI</NavLink></li>
                    <li><NavLink activeClassName="active-link" className="normal-link" to={`${url}/spatial`} >Spatial UX</NavLink></li>
                </ul>
            </nav>
            <ProjectCategory />
          </div>
        </Route>

        <Route path={`${url}/:name/:id`}>
          <ProjectDetail />
        </Route>

        <Route exact path={`${url}/`} >
          <Redirect to={`${url}/digital`} />
        </Route>
      </Switch>

  );
};

export default Projects;