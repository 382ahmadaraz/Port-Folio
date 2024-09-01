import Button from '../button/Button';
import '../about/about.css';

function About(props) {
    return(
        <div className="about" id="About">
            <div className="about-img">
                 <img src={require('../assests/img.webp')} alt="Image description"/>
            </div>
            <div className="about-me">
                <h1 id='heading'>
                About <span id='me'>Me</span>
                </h1>
                <p>
                    I'm Ahmad Raza, a Front-hand developer from Faisalabad, pakistan.
                    I'm study in GC University faisalabad.<br/><br/>
                    I aim to pursue further studies in the United States to advance in technology research and innovation.
                </p>
                <Button title='Hire Me'/>
                <Button title='Download CV'/>
            </div>
        </div> 
    )
}

export default About;