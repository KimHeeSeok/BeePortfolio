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
                <br/>
                <p>
                    <span>University of the Arts London (CSM)</span><br/>
                    MA Narrative Environment, 2019-2020<br/>
                    <span>Ewha Womans University</span><br/>
                    BA Visual Communication Design, 2007-2011<br/>
                </p>
                
                <br/><br/>
                <h2>languages</h2>
                <p>
                    <span>Korean, </span>Mother tongue<br/>
                    <span>English, </span>Advanced<br/>
                </p>

                <br/><br/>
                <h2>experiences</h2>
                <p>
                    <span>Samsung Electronics Co., Ltd./ Seoul</span><br/>
                    UX&GUI Designer, Full-time, 2012-present<br/>
                    <span>European Space Agency, Noordwijk, NL</span><br/>
                    Spatial Experience designer, Part-time, 2019<br/>
                    <span>Marshmallow laser feast, London</span><br/>
                    Visual designer, Part-time, 2019<br/>
                    <span>MamAcademy, Seoul</span><br/>
                    Cofounder, 2017, Parenting service Startup<br/>
                </p>

                <br/><br/>
                <h2>Awards/Exhibition</h2>
                <p>
                    <span>Climate Care prize @UAL, </span>UK, 2020<br/>
                    <span>NOVA awards @UAL, </span>nominate, UK, 2020<br/>
                    <span>Good Design Award, </span>Minister of Industry and Commerce winner, KR, 2017<br/>
                    <span>Samsung Strategy Competition, </span>KR, 2012-2017<br/>
                    <span>CES 2017, </span>Samsung Mobile Printer, US<br/>
                    <span>CES 2017, </span>Fashionology View Pouch, US<br/>
                    <span>Samsung technology exhibition, </span>Flexible display, 2014, KR<br/>
                    <span>Samsung technology exhibition, </span>Interactive Drive Experience, 2012, KR<br/>
                    <span>Nissan Techday, Interactive Drive Experience, </span>2012, JP<br/>
                    <span>Tent London, </span>1/2 Project, 2010, UK<br/>
                    <span>Reddot Design Award, </span>Communication design winner, 2010<br/>
                </p>
            </div>

            <div className="cv-body content-body-width3">
                <h2>Projects</h2>
                <br/>
                <h3>2020</h3>
                <p>
                    Samsung Care Robot, <span>UX support</span><br/>
                    Dystopian Flight, <span>Exhibition design</span><br/>
                </p>

                <br/>
                <h3>2019</h3>
                <p>
                    European Space Agency, <span>Spatial design</span><br/>
                    Sellosse Dinner Event, <span>Event design</span><br/>
                    Sarajevo Womans Right, <span>Event design</span><br/>
                </p>

                <br/>
                <h3>2018</h3>
                <p>
                    UCLH children’s A&E,  <span>Interior design</span><br/>
                </p>

                <br/>
                <h3>2017</h3>
                <p>
                    Samsung Wearable Device Accessibility, <span>UX foresight, GUI, Film, Prototype</span><br/>
                    Samsung Inside Kitchen, <span>UX foresight</span><br/>
                    Samsung PSSD T5, <span>Software Design Renewal</span><br/>
                    Fashionology, <span>Prototype (Samsung C&T)</span><br/>
                    Medibloc, Blockchain based ICO, <span>Creative direction</span><br/>
                    Mamacademy, Parenting Service, <span>Service design</span><br/>
                </p>

                <br/>
                <h3>2016</h3>
                <p>
                    Samsung mobile printer, <span>GUI</span><br/>
                    Samsung gear S4 foresight, <span>UX foresight, GUI, Prototype</span><br/>
                    ‘Kao Gopchang’ Korean Restaurant, <span>Branding</span><br/>
                    ‘Amanda’ Korean Dating Platform, <span>Branding</span><br/>
                </p>

                <br/><br/>
                <h2>patents</h2>
                <p>
                    <span>Display Apparatus and Method for displaying, </span>US KR EP CN WO<br/>
                    <span>A method of searching the menu by recognizing the user’s gesture on a screen, </span>KR<br/>
                    <span>A method of using multiple applications on a screen of wearable device, </span>KR<br/>
                    <span>How to create and control the cooking timeline through the smart cooking manager cloud, </span>KR<br/>
                    <span>A method of message deformation through the shuttle button operation in watch type wearable device, </span>US KR WO<br/>
                    <span>Method of saving TV channels currently watching and managing saved channels, </span>US KR IN EP CN WO<br/>
                </p>
            </div>

            <div className="cv-body content-body-width3">
                <h2>&nbsp;</h2>
                <br/>
                <h3>2015</h3>
                <p>
                    Next TV, <span>UX / GUI</span><br/>
                    ON Bag(mobile charging pouch), <span>UX, Branding</span><br/>
                    ‘Wantreez’ Music Company, <span>Branding</span><br/>
                    ‘Rymeduck’ Shop Music Rental Platform, <span>Branding</span><br/>
                </p>

                <br/>
                <h3>2014</h3>
                <p>
                    Flexible display, <span>UX / GUI</span><br/>
                    Samsung Collective Intelligence Platform ‘Mosaic’, <span>Web design</span><br/>
                    Next Sound(AV), <span>UX / GUI</span><br/>
                </p>

                <br/>
                <h3>2013</h3>
                <p>
                    Mammography, <span>UI / GUI Renovation (Co-work with Samsung Medicine)</span><br/>
                    Next Vacuum, <span>UX / GUI, User Scenario Film</span><br/>
                </p>

                <br/>
                <h3>2012</h3>
                <p>
                    Interactive Drive, Smart Infotainment System, <span>UX / GUI, Prototype</span><br/>
                    Next Wearable Devices, <span>UX / GUI, User Scenario Film</span><br/>
                </p>
            </div>

        </div>


    );
}