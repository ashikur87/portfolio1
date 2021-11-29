import React from "react";
import "./Project.css";
import Project1 from './img/slider.jpg.gif';
import Project2 from './img/mangrove forest.jpg';
import Project3 from './img/3.jpg';


function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                {/* <h1 className="heading ">My Latest Project</h1> */}
                <h1 class="d-flex justify-content-center fs-3 mt-5 fw-bold text-danger">My Awesome Services</h1>
              
            </div>
            <div className="container">
                <div className="row ">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Mercedes-Benz</h5>
                                <h4 className="project__text"> React JS, Node JS, Express JS, Mongo DB, Bootstrap has been used in this project.Clients can order car as well as monitor and cancel their orders.Admin can approve orders, add product, delete a product and make another admin.Client and admin must log in/register on this site.
                                </h4>
                                <a href="#" className="project__btn"><a href="https://mercedes-benz-ashikurrahman.netlify.app/">View Details</a></a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Tour Plan</h5>
                                <h4 className="project__text">React JS, Node JS, Express JS, Mongo DB, Bootstrap has been used in this project
                                    • You must have a Google account to get full access to this site
                                    • Users can book a package, cancel bookings, manage all bookings with approval and rejection</h4>
                                <a href="#" className="project__btn"><a href="https://tourplan-assignment-11.netlify.app/" target="_blank" rel="noopener noreferrer"> View Details</a></a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Medical Care</h5>
                                <h4 className="project__text">• React JS and Bootstrap has been used in this project
                                    • This is just a UI
                                    • User can log in and register</h4>
                                <a href="#" className="project__btn"><a href="https://medical-care-ashikur-rahman.netlify.app/" target="_blank" rel="noopener noreferrer"> View Details</a></a>
                            </div>
                        </div>
                    </div>


               

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <button className=" pointer btn">
                            <a href="#ViewMore">
                                ViewMore
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
