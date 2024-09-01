import './home.css'

function Home() {
    return(
        <div className="home" id="Home">

            <div className='intro'>
                <p id='home-content'>
                <span id='name1'>Hi ! <br/>
                I'm Ahmad Raza
                </span> <br/>
                I'm a  Front-hand developer who brings ideas to life.
                I'm a passionate developer dedicated to bringing creativity and functionality together.
                
                </p>
                 
            </div>
            <img src={require('../assests/img.webp')} alt="Image description" />
             
        </div>

    )
}

export default Home;