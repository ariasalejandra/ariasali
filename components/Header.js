import React from "react";

export default function Header() {
  return(
    <React.Fragment>
        <header class="header-main">
        <a href="/">
          </a>
          <nav className="navigation">
            <ul className="ul-special">
                <li><a className="hvr-float org-color-text " href="">Home</a></li>
                <li ><a className="hvr-float org-color-text" href="/about">About</a></li>
                <li><a className="hvr-float org-color-text" href="/projects">Projects</a></li>
                <li><a className="hvr-float org-color-text" href="/contact">Contact</a></li>
                <li><a className="hvr-float org-color-text" href="https://drive.google.com/file/d/1SKOvFQybQB0GQU9tsg30d2_W4o2KsjTc/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>
        </header>
    </React.Fragment>
  )
}
