import './navbar.css'

function Navbar() {
    return (
      <nav className="navBar">
        <div className="logo" id="Home">
          <a href="Home" id='logo'>A R</a>
        </div>
        <div className="menu-bar">
          <img src={require("../assests/menu-bar.png") } onclick="handleClick();" />
        </div>
        <div className="nav-links">
          <ul className="nav-links">
            <li>
              <a href="#Home" >Home</a>
            </li>
            <li>
              <a href="#About" >About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          
           
        </div>
      </nav>
    )
  }
  // function Navbar( ) {
  //     return(
  //     alert("hello")
  
  //     )
        
  //     }
      export default Navbar;