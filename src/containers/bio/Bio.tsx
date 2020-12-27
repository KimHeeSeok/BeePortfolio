import { CSSProperties } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Bio.css';

const divStyle: CSSProperties = {
    // height:"2000px"
};

export default function Bio() {
    return (
        <div id="main-container"  style={divStyle}  >
            <div id="main-header">Bio</div>
            <div id="bio-margin" />
            <div id="bio-content" >
                <span className="bio_text_1">As an integrated designer based in Seoul and London, Eunbi Kim is specialised in digital and spatial design based on user experiences and emotions.
                She worked for Samsung Electronics, European Space Agency, Marshmallow Laser Feast and several IT Startups regarding </span>
                <span className="bio_text_2">UX insights, web/app prototypes, exhibition and spatial design strategy.</span>
                <br/><br/><br/>
                <span className="bio_text_1">She has a belief that critical thinking and constant questionings could bring </span>
                <span className="bio_text_2">positive impacts on chronic societal issues such as environmental crisis, gender equity, disabled rights and slow democracy.</span>

            </div>
        </div>
    );
  }