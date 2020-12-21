import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Intro.css';

const divStyle: CSSProperties = {
    width: '100%',
    height: '100%'
};

export default function Intro() {
    return (
        <div style={divStyle} >
            <div id="e529_3">
                <div id="e529_4" className={"vertical-center horizontal-center"} >
                    <div id="e529_5"><span id="e529_6">Eunbi Kim portfolio</span><span id="e529_7">Digital & spatial 
                    visual experience designer</span></div>
                    <Link to="/app" >
                        <div id="e529_8">
                            <div id="e529_9"></div>
                            <div id="e529_10"><span id="e529_11" >Enter</span>
                            <div id="e529_12"><img src={require('../images/arrow.svg')}/></div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}