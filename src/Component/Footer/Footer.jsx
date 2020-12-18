import React from 'react';
import './Footer.css';


const Footer = () =>{
    return(
        <div className="footer">
            <ul className="icon">
                <a href="/fc" target="_blank">
                    <li className="icon-b fa fa-facebook-official"></li>
                </a>
                <a href="/tw" target="_blank">
                    <li className="icon-b fa fa-twitter"></li>
                </a>
                <a href="/ins" target="_blank">
                    <li className="icon-b fa fa-instagram"></li>
                </a>
            </ul>
            <center><p style={{fontSize: "18px",position:"relative",top: "10px",color:"white"}}>&copy; Irvan Nugraha 18, December 2020</p></center>
        </div>
    );
}

export default Footer;