import './service.css'

function Services() {
    return(
        <div className="service" id="Services">
            <h1>My <span id="me">Services</span></h1>
            <div className="services-item">
                <div className="item1">
                <img src={require('../assests/pc.png')} alt="Image description"/>
                <h3>Web Application</h3>
                <p>Front-end Development</p>
                <p>Responsive & Mobile Websites</p>
                <p>Back-end Development</p>
                <p>JWT</p>
                <p>MVC</p>
                <p>Rest APIs</p>

                </div>
                <div className="item1">
                <img src={require('../assests/mb.png')} alt="Image description"/>
                <h3>Mobile Application</h3>
                <p>Responsive</p>
                <p>Back-end Development</p>
                <p>Google APIs</p>
                <p>Firebase Auth/Cloud</p>

                </div>
            </div>
        </div>
    )
}

export default Services;