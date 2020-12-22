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
            <div id="intro_bg">
                <div id="intro_content" className={"vertical-center horizontal-center"} >
                    <div id="intro_text1">Digital & spatial<br/>
                    visual experience designer</div>
                    <div id="intro_text2">Eunbi Kim portfolio</div>
                    <Link to="/app" style={{ textDecoration: 'none' }}>
                        <div id="intro_white_box">
                            <span>Enter</span>
                            <img src={require('../images/arrow.svg')}/>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}