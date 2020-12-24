import { CSSProperties } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Expertise.css';

export default function Expertise() {
    return (
        <div id="main-container" >
            <div id="main-header" >Expertise</div>

            <div id="circle-container">
                <span id="circle-tech" className="circle">Tech</span>
                <span id="circle-people" className="circle">People</span>
                <span id="circle-experience" className="circle">Experience</span>
                <span id="circle-space" className="circle">Space</span>
            </div>

            <div id="expertise-margin"></div>

            <div id="expertise-text">
                <p>
                <span>  People<br/>
                + Technology<br/>
                + Space<br/>
                + Experience</span><br/>
                =<br/>
                Multi-disciplinary<br/>
                Omnichannel experience<br/>
                Foresight researcher/designer<br/>
                </p>
            </div>
        </div>
    );
  }