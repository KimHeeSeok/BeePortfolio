import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

interface ParamTypes {
  name: string
}

const Item = () => {
  const { url, path } = useRouteMatch();
  console.log(`Item. url=${url} path=${path} `);

  const { name } = useParams<ParamTypes>();

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

const Projects = () => {
  const { url, path } = useRouteMatch();

  console.log(`Projects. url=${url} path=${path} `);

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/digital`}>Digital UX/GUI</Link>
        </li>
        <li>
          <Link to={`${url}/spatial`}>Spatial UX</Link>
        </li>
      </ul>
      <Route path={`${url}/:name`}>
        <Item />
      </Route>
    </div>
  );
};

export default Projects;