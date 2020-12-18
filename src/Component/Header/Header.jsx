import React from 'react';
import './Header.css';
import Logo from '../../Img/ss-logo.png';




class Header extends React.Component{
    render(){
        function toggleHandler() {
            var x = document.getElementById("head");
            var y = document.getElementById("navi");
            if(x.className === "head-wrapper"){
                x.className += " res";
                y.className += " res";
            }else{
                x.className = "head-wrapper";
                y.className = "nav-bar";
            }
        }
        return(
            <div className="clonning">
                <div className="head-wrapper" id="head">
                    <div className="logo">
                        <a href="/Hm"><img src={Logo} alt="go"/></a>
                    </div>
                    <a href="/srch" className="searchBox">
                        <p>Search <span className="fa fa-search"></span></p>
                    </a>
                    <button className="handler fa fa-bars" onClick={toggleHandler}></button>
                    <ul className="nav-bar" id="navi">
                        <a href="/Hm" style={{textDecoration: "none", color: "black"}}>
                            <li className="nav">Home</li>
                        </a>
                        <a href="/Rroom" style={{textDecoration: "none", color: "black"}}>
                            <li className="nav two">Rent Room</li>
                        </a>
                        <a href="/As" style={{textDecoration: "none", color: "black"}}>
                            <li className="nav three">About Us</li>
                        </a>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;