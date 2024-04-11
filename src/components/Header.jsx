import AppRouter from "../routes/AppRouter";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom" data-bs-theme="dark">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <NavLink to ="/home" className="nav-link link-body-emphasis px-2 active"
                aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/home" className="nav-link link-body-emphasis px-2">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              {" "}
              <NavLink to ="/home" className="nav-link link-body-emphasis px-2">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/home" className="nav-link link-body-emphasis px-2">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/home" className="nav-link link-body-emphasis px-2">
                About
              </NavLink>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to ="/login" className="nav-link link-body-emphasis px-2">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/userregistration" className="nav-link link-body-emphasis px-2">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
