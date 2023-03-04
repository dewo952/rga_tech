import React from "react";
import "../Styles/navbar.css";
import logo from "../Assets/logo.webp";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <main className="nav__main">
        <Container>
          <header className="primary-header flex">
            <div>
              <Link to="/">
                <img src={logo} className="logo" alt="" />
              </Link>
            </div>
            <button
              className="mobile-nav-toggle"
              aria-controls="primary-navigation"
            >
              <span aria-expanded="false" className="sr-only">
                Menu
              </span>
            </button>
            <nav>
              <ul
                id="primary-navigation"
                data-visible="false"
                className="primary-navigation underline-indicators flex"
              >
                <li className="active">
                  <Link className="uppercase letter-spacing-2" to='/about'>About</Link>
                </li>
                <li>
                  <a href="/#services" className="uppercase letter-spacing-2">
                    Services
                  </a>
                </li>
                <li>
                  <Link to='/contact' className="uppercase letter-spacing-2">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </Container>
      </main>
    </>
  );
}

export default NavBar;
