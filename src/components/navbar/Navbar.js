import React from 'react'
import icon from '../../assets/icon.png';
import { useNavigate } from "react-router-dom";
// import {  useNavigate } from 'react-router-dom';
import './nav.css';



function Navbar() {
    let navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <nav class="navbar sticky-top  navbar-expand-lg navbar-light" style={{backgroundColor:'#001138'}}>
            <div class="container-fluid">
               
               <img width="90px" src={icon} /> 
               <a class="navbar-brand"  onClick={()=>{ navigate('/') ; }} href="#"><strong>Global Consultancy</strong>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link "   onClick={()=>{ navigate('/') }} href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  onClick={()=>{ navigate('/') ; }} href="#services">Our Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  onClick={()=>{ navigate('/') ; }} href="#about">About Our Company</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Franchise
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" onClick={()=>{ navigate('franchise/1') }}>Beer Street</a></li>
                                <li><a class="dropdown-item" onClick={()=>{ navigate('franchise/2') }}>Dosa Cafe</a></li>
                                <li><a class="dropdown-item" onClick={()=>{ navigate('franchise/3') }}>Fusion Cafe</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar