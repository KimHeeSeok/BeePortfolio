import React from "react";
import { Link, NavLink, Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import ProjectItem from './ProjectItem';
import {items as projectListDigital} from './ProjectListDigital.json';
import {items as projectListSpatial} from './ProjectListSpatial.json';
import './Projects.css';
interface ParamTypes {
  name: string
}

const ProjectCategory = () => {
  const { url, path } = useRouteMatch();
  const { name } = useParams<ParamTypes>();

  // console.log(`ProjectCategory. url=${url} path=${path} `);

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

  // console.log(`Projects. url=${url} path=${path} `);

  return (
    <div id="project-container" >
        <nav className="sub-navi">
            <ul>
                <li><NavLink activeClassName="active-link" className="normal-link" to={`${url}/digital`} >Digital UX/GUI</NavLink></li>
                <li><NavLink activeClassName="active-link" className="normal-link" to={`${url}/spatial`} >Spatial UX</NavLink></li>
            </ul>
        </nav>

      <Route path={`${url}/:name`}>
        <ProjectCategory />
      </Route>

      <Route exact path={`${url}/`} >
        <Redirect to={`${url}/digital`} />
      </Route>
    </div>
  );
};

export default Projects;