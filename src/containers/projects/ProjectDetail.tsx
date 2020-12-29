import React, { useEffect } from "react";
import * as _path from "path";
import { RouteComponentProps, Link, withRouter, Redirect, Route, useParams, useRouteMatch } from "react-router-dom";
import './ProjectDetail.css';

interface ParamTypes {
    id: string
    name: string
}

function loadImage(path:string): any {
    try {
        return require(`${path}`);
    } catch(e) {
        // console.error(e);
        return null;
    }
}

const ProjectDetail = ({ history }: RouteComponentProps) => {
    const { url, path } = useRouteMatch();
    const { id, name } = useParams<ParamTypes>();
    const parentUrl = url.substring(0, url.lastIndexOf("/"));

    useEffect(() => {
        console.log(`ProjectDetail. url=${url} path=${path} id=${id} name=${name} ${__dirname}`);

        console.log(`./detail/${name}/${id}.png`);
    }, []);
  
    return (
        <>
            <Link to={`${parentUrl}` }>
                <img className="back-arrow" src={require('../../images/back-arrow.svg')}/>
            </Link>

            <div className="main-layout-grid" id="project-detail-container" >
                <div id="project-summary">
                    <h2>Wearable Accessibility</h2>
                    <h3>What if a smartwatch acts as an assistant for visually impaired users?</h3>
                    <p>
                        <b>Date</b> Feb-Oct 2017<br/>
                        <b>Role</b> UX/Visual designer<br/>
                        <b>Output</b> Interactive media table/Scenario flim<br/>
                    </p>
                </div>

                <div id="project-detail-content" >
                    <img src={loadImage(`./detail/${name}/${id}.png`)}/>
                </div>
            </div>
        </>
    );
  }
  
  export default withRouter(ProjectDetail);