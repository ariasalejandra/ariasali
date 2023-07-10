import React from "react";

export default function Header() {
  return(
    <React.Fragment>
        <header class="header-main">
          <nav>
            <ul className="ul-special">
                <li><a className="hvr-float og-text-color " href="/">Home</a></li>
                <li ><a className="hvr-float og-text-color" href="/about">About</a></li>
                <li><a className="hvr-float og-text-color" href="/projects">Projects</a></li>
                <li><a className="hvr-float og-text-color" href="/contact">Contact</a></li>
                <li><a className="hvr-float og-text-color" href="https://drive.google.com/file/d/1SKOvFQybQB0GQU9tsg30d2_W4o2KsjTc/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>
        </header>
    </React.Fragment>
  )
}
