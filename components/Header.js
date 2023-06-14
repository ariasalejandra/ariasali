import React from "react";
import Projects from "components/projects"
export default function Header() {
  return(
    <React.Fragment>
        <header class="header-main">
        <a href="/">
          </a>
          <nav>
            <ul className="ul-special">
                <li ><a className="hvr-float org-color-text" href="components/about.js">About</a></li>
                <li><a className="hvr-float org-color-text" href={Projects}>Projects</a></li>
                <li><a className="hvr-float org-color-text" href="/contact.js">Contact</a></li>
                <li><a className="hvr-float org-color-text" href="https://drive.google.com/file/d/1SKOvFQybQB0GQU9tsg30d2_W4o2KsjTc/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>
        </header>
    </React.Fragment>
  )
}
