import React from "react";
import "./Header.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {

  const pages = [
    "Home",
    "Event",
    "Venue",
    "Event Guest",
    "RSVP",
    "Contact us",
  ];

  return (
    <div>
      <header className="header" data-header="">
        <div className="container">
          <a href="#">
            <h1 className="logo">Eventor</h1>
          </a>
          <button
            className="nav-toggle-btn"
            data-nav-toggle-btn=""
            aria-label="Toggle Menu"
          >
            <ion-icon name="menu-outline" className="open" />
            <ion-icon name="close-outline" className="close" />
          </button>
          <nav className="navbar">
            <ul className="navbar-list">
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <li className="navbar-link">
                  <Button
                    key={page}
                    component={Link}
                    to={`/${page.toLowerCase().replace(" ", "")}`}
                    sx={{ my: 0, fontSize:'16px', color: "black",borderBottom:'1px solid green', display: "block" }}
                  >
                    {page}
                  </Button>
                  </li>
                ))}
              </Box>
            </ul>
            <a href="#" className="btn btn-secondary">
              Booking Now
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
