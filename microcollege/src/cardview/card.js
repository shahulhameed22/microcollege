import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './card.css';
import img5 from './img5.png'
import img6 from './img6.jpeg'
import img7 from './img7.jpg'


export function Card(){
    return(
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-1">&nbsp;</div>
            <div className="col-lg-2 mt-4 ">
             <h2>Our Courses</h2>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
        <div className="col-lg-1">&nbsp;</div>
        <div className="col-lg-3 d-flex l1">
             <h6>For working professinoals</h6>
        </div>
        <div className="col-lg-2 l1">
            <h6>Master's</h6>
        </div>
        <div className="col-lg-2 l1">
            <h6>Doctorate</h6>
        </div>
        <div className="col-lg-2 l1">
            <h6>Study Abroad</h6>
        </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card cd1">
                        <div className="card-header">
                            <h4>Full stack development</h4>
                         </div>
                        <div className="card-body">
                        <img src={img5} className="img-fluid"/>
                        </div>
                        <div className="card-footer">
                        <p>Understand the technical foundations, as well as the non-programming skills needed to be a successful full stack web developer.</p>
                        </div>
                        </div>
                     </div>
                     <div className="col-lg-4">
                    <div className="card cd1">
                        <div className="card-header">
                            <h4>Systems,Applications & Products</h4>
                        </div>
                        <div className="card-body">
                        <img src={img6} className="img-fluid"/>
                        </div>
                        <div className="card-footer">
                        <p>SAP SE is a German multinational software company based in Walldorf, Baden-Württemberg.</p>
                        </div>
                    </div>
                  </div>
                   <div className="col-lg-4">
                    <div className="card cd1">
                        <div className="card-header">
                            <h4>Information Management System</h4>
                        </div>
                        <div className="card-body">
                        <img src={img7} className="img-fluid"/>
                        </div>
                        <div className="card-footer">
                        <p>IMS is a database and transaction management system that was first introduced by IBM in 1968.</p>
                        </div>

                    </div>
                  </div>
                     </div>
                     </div>
                     

                     </div>
    </>
    );
}

