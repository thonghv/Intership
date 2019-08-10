import React from 'react';
import './../App.css'

const HomePage = () => {
  return (
      <div>
        <div>
         	<nav id="menu" className="panel" role="navigation">
		        <ul>
		            <li>
		                <a href="true">
		                     <div className="visibleThin"> <span className="glyphicon glyphicon-home"></span> </div>
		                     <div className="hiddenThin"/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Home</span>
		                </a>
		            </li>
		            <li>
		                <a href="true">
		                    <div className="visibleThin"><span className="glyphicon glyphicon-user"></span></div>
		                    <div className="hiddenThin"/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Interships Management </span>
		                </a>		               
		            </li>
		            <li>
		                <a href="true">
		                    <div className="visibleThin"><span className="glyphicon glyphicon-user custom"></span></div>
		                    <div className="hiddenThin"/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feature A </span>
		                </a>		               
		            </li>
		            <li>
		                <a href="true">
		                    <div className="visibleThin"><span className="glyphicon glyphicon-user custom"></span></div>
		                    <div className="hiddenThin"/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feature B </span>
		                </a>		               
		            </li>
		            <li>
		                <a href="true">
		                    <div className="visibleThin"><span className="glyphicon glyphicon-fire"></span></div>
		                    <div className="hiddenThin"/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Courses</span>
		                </a>
		            </li>
		            <li>
		                <a href="true">
		                    <div className="visibleThin"><span className="glyphicon glyphicon-leaf"></span></div>
		                    <div className="hiddenThin"/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Settings</span>
		                </a>
		            </li>
		        </ul>
		    </nav>
        </div>
        <div className="wrap push shrink">

	        <a href="#menu" className="menu-link">&#9776;</a>

	        <h1>Big Slide</h1>
	        <h3>Hello</h3>
	    </div>

      </div>
  );                                  
};
   
export default HomePage;
          