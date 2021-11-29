import React from "react";
import "./About.css";
import aboutImg from "./img/a.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className="about component__space  " id="About">
      <div className="container ">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text color">
                Assalamualaikum,
                - 👋-Hello everyone,
                - 🌱-I am Md. Ashikur Rahman, from Daffodil International University, Dept. of Software Engineering under the Faculty of Science and Information Technology (FSIT).</p><br/>
              <p className="about__text color">
                I have completed my HSC from Nageswari Govt. College and got GPA 3.58 out of 5. I passed my SSC from Kachakata M/L Hign School and the result was GPA 5 out of 5. My passion is coding, biking and visiting new places. Travelling is my favourite hobby. I speak Bengali and English fluently. I am hard working , creative, punctual and ambitious person.I have enough skill at Web development, HTML,CSS,Bootstrap,Tailwind,React,Node Js,Mongodb,Express js,javascript  .I did some academic projects in different courses likes Java, C Programming, Web Engineering , Artificial Intelligence , compiler design etc. Now I am working on Data Science,Research paper and some thesis paper which is good at my upcoming life.
              </p><br/>
              <p className="about__text color">
                - 👀-My vision is to be a good Web Developer in IT company.
                - 📫 How to reach me: https://www.facebook.com/ashikurrahman.ashik.71619533 and my github account is:https://github.com/ashikur87
                - 📫-My contact number:+8801717693872/+8801776800087
                That’s all about me.
                Thank you.
                Assalamualaikum.
              </p><br/>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about_btn btn pointer"><a href="https://drive.google.com/file/d/1rU46a9sKxjuyYUISwr10cEhbkcelAWKq/view?usp=sharing">Resume</a> </button>


                </a>
                <a href="#">
                  <button className="about_btn btn pointer"><a href="https://www.linkedin.com/in/md-ashikur-rahman-392a09216/">hire me</a></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
