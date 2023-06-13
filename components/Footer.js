import styles from './Footer.module.css'
import React from "react";
export default function Footer() {
  return (
    <React.Fragment>
      <footer>
      <div>
      <a href="https://github.com/ariasalejandra"><img class="hvr-float"alt="github" src="images/github.svg"></img></a>
      <a href="https://linkedin.com/in/aalejandra"><img class="hvr-float"alt="linkedin" src="images/linkedin.svg"></img></a>
      <a href="https://instagram.com/alejandra.arix"><img class="hvr-float"alt="instagram" src="images/instagram.svg"></img></a>
      <a href="mailto:alejandra.aarias0@gmail.com"><img class="hvr-float"alt="email" src="images/email.svg"></img></a>
  </div>
  <div >
    <p>Made with ‎♡ by alejandra / <a class="underline"href="https://github.com/ariasalejandra/">Source</a></p>
  </div>
      </footer>
    </React.Fragment>
  )
}
