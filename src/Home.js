
import "./Home.css";
import img from './img/as.jpg'

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu

  return (
    <div className="home" id="Home">
      <div className="homeBg">
        <div className="header d__flex align__items__center pxy__30">

          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="Navitems mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="Navitems mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="Navitems mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="Navitems mx__15">Portfolio</li>
              </a>
             
              <a href="#ContactMe">
                <li className="Navitems mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className="container">

          <div className="homecontent">
            <div className="home__meta">
              <h1 className="homeText fontSize">WELCOME TO MY WORLD</h1>
              <h2 className="homeText fontSize">Hi, I’m Md. Ashikur Rahman</h2>
              <h3 className="homeText sweet fontSize">Junior front end web Developer.</h3>
              <h4 className="homeText fontSize">from Bangladesh.</h4>
            </div>
            <div>
              <img className='img' src={img} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
