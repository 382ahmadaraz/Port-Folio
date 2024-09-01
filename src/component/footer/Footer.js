import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Copyright &copy; All Rights Reserved | Made By Ahmad Raza</p>
      <div className="links-item">
        <div className="items">
          <a href="https://www.linkedin.com/in/ahmad-raza-ba93aa311/">
            <img src={require("../assests/linked-in.png")} />
          </a>
        </div>
        <div className="items">
          <a href="https://www.instagram.com/">
            <img src={require("../assests/insta.png")} />
          </a>
        </div>
        <div className="items">
          <a href="https://github.com/382ahmadaraz">
            <img src={require("../assests/github.png")} />
          </a>
        </div>
        <div className="items">
          <a href="https://www.facebook.com/profile.php?id=100072218739140">
            <img src={require("../assests/facebook.png")} />
          </a>
        </div>
        <div className="items">
          <a href="https://www.twitter.com">
            <img src={require("../assests/twitter.png")} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
