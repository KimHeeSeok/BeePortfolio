import React from "react";
import * as _path from "path";
import { Link, NavLink, Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import './ProjectItem.css';

type ProjectData = {
    title: string,
    description: string,
    thumbnail: string
}

type ProjectItemProps = {
    projectData: ProjectData
}

function loadImage(path:string): any {
    try {
        return require(`${path}`);
    } catch(e) {
        // console.error(e);
        return null;
    }
}

const ProjectItem = ({projectData}: ProjectItemProps) => {
  const { url, path } = useRouteMatch();
  console.log(`Item. url=${url} path=${path} \n ${__dirname}`);

  return (
    <div className="list-item-container" >
        <img src={loadImage(projectData.thumbnail)}/>
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
    </div>
  );
}

export default ProjectItem;