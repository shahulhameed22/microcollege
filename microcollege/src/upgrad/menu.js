import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from './micro-logo.png';
import './menu.css';

export function Menu(){

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                {/* <div className="col-lg-1">&nbsp;</div> */}
                <div className="col-lg-2">
                    {/* <h3 className="text-danger he1"></h3> */}
                    <img src={img} className="col-lg-12 mt-3"/>
                </div>
                <div className="col-lg-2 mt-4">
                    <select className="drop_down text-light">
                    <option value="courses" className="opt1">COURSES</option>

                    <option value="Software & Tech" className="opt1">Software & Tech</option>

                    <option value="AI & ML" className="opt1">AI & ML</option> 
                    </select>
                </div>
                {/* <div className="col-lg-1">&nbsp;</div> */}
                <div className="col-lg-2 mt-4">
                    <h5>BOOTCAMP</h5>
                </div>
                <div className="col-lg-2 mt-4">
                    <h5>STUDY ABROAD</h5>
                </div>
                <div className="col-lg-2 mt-4">
                    <h5>FORBUSINESS</h5>
                </div>
                <div className="col-lg-1 mt-4">
                    <select className="blue1 text-light ">
                        <option value="MENU">MENU</option>
                        <option value="Careers at Elucidate" className="opt1">careers at elucidate</option>
                        <option value="Hire from Elucidate" className="opt1">Hire from Elucidate</option>
                        <option value="Refer and Earn" className="opt1">Refer and Earn</option>
                    </select>
                </div>
                <div className="col-lg-1 mt-4">
                    <input type="button" value="Sign UP" className="blue text-light"/>

                </div>
                
                </div>

        </div>
        </>
    )

}
