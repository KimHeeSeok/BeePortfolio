import { CSSProperties } from 'react';
import './Cv.css';

const divStyle: CSSProperties = {
    
};

export default function Cv() {
    return (
        <div className="content" style={divStyle}  >
            <div className="content-header content-body-width1"><span>CV</span></div>
            <div className="content-body-width1" />
            <div className="cv-body content-body-width3">

                <h2>Educations</h2>
                <p>
                    <span>University of the Arts London (CSM)</span><br/>
                    MA Narrative Environment, 2019-2020<br/>
                    <span>Ewha Womans University</span><br/>
                    BA Visual Communication Design, 2007-2011                    
                </p>
                
                <h2>languages</h2>
                <p>
                    <span>Korean, </span>Mother tongue<br/>
                    <span>English, </span>Advanced<br/>
                </p>

                <h2>experiences</h2>

                <h2>Awards/Exhibition</h2>

            </div>

            <div className="cv-body content-body-width3">
                <h2>Projects</h2>
                <h3>2020</h3>
                <p>
                    Samsung Care Robot, <span>UX support</span><br/>
                    Dystopian Flight, <span>Exhibition design</span>
                </p>

                <h3>2019</h3>
                <p>
                    European Space Agency, <span>Spatial design</span><br/>
                    Sellosse Dinner Event, <span>Event design</span><br/>
                    Sarajevo Womans Right, <span>Event design</span>
                </p>

                <h3>2018</h3>
                <p>
                    UCLH children’s A&E,  <span>Interior design</span><br/>
                </p>

                <h2>patents</h2>
            </div>

            <div className="cv-body content-body-width3">
                <h2>&nbsp;</h2>
                <h3>2015</h3>
                <p>
                    Next TV, <span>UX / GUI</span><br/>
                    ON Bag(mobile charging pouch), <span>UX, Branding</span><br/>
                    ‘Wantreez’ Music Company, <span>Branding</span><br/>
                    ‘Rymeduck’ Shop Music Rental Platform, <span>Branding</span>
                </p>

                <h3>2014</h3>
                <p>
                    Flexible display, <span>UX / GUI</span><br/>
                    Samsung Collective Intelligence Platform ‘Mosaic’, <span>Web design</span><br/>
                    Next Sound(AV), <span>UX / GUI</span><br/>
                </p>
            </div>


        </div>


    );
}