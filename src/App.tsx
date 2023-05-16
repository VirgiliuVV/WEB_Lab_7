import React from "react";
import {Home} from "./Home";
import './App.css';
import {Gallery} from "./Gallery";
import {SocialMedia} from "./SocialMedia";
import {Link, Route, Routes} from "react-router-dom";


export default function App() {
    return (
        <>
            <nav className="page">
                <ul className="navbar">
                    <div className="navbar_cont">
                        <li className="navbar_item">
                            <Link className="navbar_links" to="/">Home</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_links" to="/Gallery">Gallery</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_links" to="/SocialMedia">SocialMedia</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="https://www.youtube.com/watch?v=s9oQRKsROF8"><div className="YouTubeButton"></div></Link>

                        </li>
                    </div>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Gallery" element={<Gallery/>}/>
                <Route path="/SocialMedia" element={<SocialMedia/>}/>
            </Routes>
        </>
    );
}