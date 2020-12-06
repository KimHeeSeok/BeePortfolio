import { CSSProperties } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Bio.css';

const divStyle: CSSProperties = {
    overflowY: 'scroll',
    height: '100%'
};

export default function Bio() {
    return (
        <div style={divStyle} >
            <div id="e121_0" >
                <span id="e35_96">Bio</span><span id="e35_97">As an integrated designer based in Seoul
                    and London, Eunbi Kim is specialised in creating digital and spatial design based on user experiences and
                    emotions. She worked for Samsung Electronics, European Space Agency, Marshmallow Laser Feast and several IT
                    Startups regarding UX insights, web/app prototypes, exhibition and spatial design strategy.</span>
                <div id="e120_1"></div><span id="e119_64">She has a belief that critical thinking and constant questionings
                    could bring positive impacts on chronic societal issues such as environmental crisis, gender equity,
                    disabled rights and slow democracy.</span>
            </div>
        </div>
    );
  }