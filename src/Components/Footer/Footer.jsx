import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <div>
<footer className="footer p-10 bg-base-100 border-t border-b-[15px] border-b-primary text-base-content">
  <div>
    <img className="h-9" src={logo} alt="" />
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link to="about-us" className="link link-hover">About us</Link> 
    <Link to="contact" className="link link-hover">Contact</Link> 
    <Link to="/show-all-products" className="link link-hover">Products</Link> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;