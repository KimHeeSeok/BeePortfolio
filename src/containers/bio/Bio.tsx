import { CSSProperties } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Bio.css';

const divStyle: CSSProperties = {

    height:"2000px"
};

export default function Bio() {
    return (
        <div className="content" style={divStyle}  >
            <div className="content-header content-body-width1">Bio</div>
            <div className="content-body-width2" />
            <div className="content-body-width9">
                <span id="bio_text_1">As an integrated designer based in Seoul and London, Eunbi Kim is specialised in digital and spatial design based on user experiences and emotions.
                She worked for Samsung Electronics, European Space Agency, Marshmallow Laser Feast and several IT Startups regarding </span>
                <span id="bio_text_2">UX insights, web/app prototypes, exhibition and spatial design strategy.</span>
                <br/><br/>
                <span id="bio_text_1">She has a belief that critical thinking and constant questionings could bring </span>
                <span id="bio_text_2">positive impacts on chronic societal issues such as environmental crisis, gender equity, disabled rights and slow democracy.</span>

            </div>
        </div>
    );
  }