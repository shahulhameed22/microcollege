import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./awsome.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCheck, faHatHard, faHatWizard, faHiking, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export function Awsome(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mt-4 d-flex" >
                    <FontAwesomeIcon icon={faBriefcase} className="bag1"/>
                    <p><span className="bag2">JOB IS IN  1000+</span>Top companies</p>
                </div>
                <div className="col-lg-4 mt-4 d-flex" >
                    <FontAwesomeIcon icon={faCheck} className="bag3"/>
                    <p><span className="bag2">50+</span>average hike</p>
                </div>
                <div className="col-lg-4 mt-4 d-flex" >
                    <FontAwesomeIcon icon={faStar} className="bag4"/>
                    <p><span className="bag2">Top 1 %</span>global Universities</p>
                </div>
            </div>
            <div className="row  ">
                <button className="ml-auto mr-auto bag5 text-light">Explore Our Courses</button>

            </div>


        </div>
        </>
    )
}