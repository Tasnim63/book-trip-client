import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo.png'

const Footer = () => {
        return (
                <div className="footer mt-5">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <Link to="/" className="navbar-brand" href="#">
                                                        <img src={logo} className="img-fluid rounded-circle m-0 p-0" width="70" alt="" /> <span className="fw-bold m-0 p-0 text-white fs-6"><span className="fw-bold fs-2 brand-color">A</span>sia Travel Agency</span>
                                                </Link>
                                                <br />
                                                <div className="mt-4 p-2">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                        <img src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                        <img src="https://yt3.ggpht.com/ytc/AKedOLQOxbU9dZGL0XnLXMzWRRZiW7elSPl4JguWrcYfaxE=s900-c-k-c0x00ffffff-no-rj" className="img-fluid rounded-circle me-3" width="40" alt="" />
                                                </div>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <h3 className="fw-bold pb-3 brand-color">Company</h3>
                                                <h6 className="p-0 m-0 footer-item">About Us</h6>
                                                <h6 className="p-0 m-0 footer-item">Vision & Mission</h6>
                                                <h6 className="p-0 m-0 footer-item">Leadership</h6>
                                                <h6 className="p-0 m-0 footer-item">Tour Area</h6>
                                                <h6 className="p-0 m-0 footer-item">News & Article</h6>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <h3 className="fw-bold pb-3 brand-color">Support</h3>
                                                <h6 className="p-0 m-0 footer-item">Help Center</h6>
                                                <h6 className="p-0 m-0 footer-item">FAQ</h6>
                                                <h6 className="p-0 m-0 footer-item">Contact Us</h6>
                                                <h6 className="p-0 m-0 footer-item">Tickets</h6>
                                                <h6 className="p-0 m-0 footer-item">Get Booking</h6>
                                        </div>
                                        <div className="col-lg-3 pt-5 pb-5">
                                                <div>
                                                        <h3 className="fw-bold pb-3 brand-color">Contact Info</h3>
                                                </div>
                                                <div className="d-flex">
                                                        <i className="fas fa-map-marker-alt pt-2 brand-color"></i>
                                                        <h6 className="ps-3">Maskanda, Passport Office Road, Mymensingh.</h6>
                                                </div>
                                                <div className="d-flex pt-2">
                                                        <i className="fas fa-envelope pt-1 brand-color"></i>
                                                        <h6 className="ps-3">support@asiatravelagency.com</h6>
                                                </div>
                                                <div className="d-flex pt-2">
                                                        <i className="fas fa-phone-alt pt-1 brand-color"></i>
                                                        <h6 className="ps-3">
                                                                +6221.2002.2012</h6>
                                                </div>
                                        </div>
                                </div>
                                <div className="text-center pb-5">
                                        <p className="p-0 m-0">Copyright ?? 2021 ||Asia-Travel-Agency.web.app</p>
                                        <small>made by <span className="fw-bold  brand-color">Abdullah Al Akash</span></small>
                                </div>
                        </div>
                </div>
        );
};

export default Footer;