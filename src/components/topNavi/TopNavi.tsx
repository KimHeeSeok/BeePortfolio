import React from 'react'
import { RouteComponentProps, Link, NavLink, withRouter } from 'react-router-dom'
import './TopNavi.css';

const TopNavi = ({ match }: RouteComponentProps) => {

    return (
        <div className="top-navi-container">
            <header className="top-navi">
            <nav>
                <Link to="/"><img className="top-navi-logo" src={require('images/bee.svg')}/></Link>
                <ul>
                    <li><NavLink activeClassName="active-link" className="normal-link" to={`${match.path}/bio`} >Bio</NavLink></li>
                    <li><NavLink activeClassName="active-link" className="normal-link" to={`${match.path}/cv`} >Cv</NavLink></li>
                    <li><NavLink activeClassName="active-link" className="normal-link" to={`${match.path}/expertise`} >Experise</NavLink></li>
                    <li><NavLink activeClassName="active-link" className="normal-link" to={`${match.path}/projects`} >Projects</NavLink></li>
                </ul>
            </nav>
            </header>
        </div>
    );
};


export default withRouter(TopNavi);