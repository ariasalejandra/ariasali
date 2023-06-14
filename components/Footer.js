import styles from './Footer.module.css'
import React from "react";
import Github from "/images/github.svg"
export default function Footer() {
  return (
    <React.Fragment>
      <footer classNAme={styles.footer}>
      <div>
      <a href="https://github.com/ariasalejandra"><img classNAme={styles.footer} class="hvr-float"src="https://media.giphy.com/media/CwTvSiWflgCGKgz5eb/giphy.gif" width="30"></img></a>
      <a href="https://linkedin.com/in/aalejandra"><img classNAme={styles.footer} class="hvr-float"alt="linkedin" src="https://media.giphy.com/media/HQTYdpx1yhxWpugAi2/giphy.gif" width="30"></img></a>
      <a href="https://instagram.com/alejandra.arix"><img classNAme={styles.footer} class="hvr-float"alt="instagram" src="https://media.giphy.com/media/6mXJk1rHd9KoTlkBjz/giphy.gif" width="30"></img></a>
      <a href="mailto:alejandra.aarias0@gmail.com"><img classNAme={styles.footer} class="hvr-float"alt="email" src="https://media.giphy.com/media/k7Yv2QsOGYTsI0CIDt/giphy.gif" width="30"></img></a>
      <a href="https://github.com/ariasalejandra/ariasali"><img classNAme={styles.footer} class="hvr-float"src="https://media.giphy.com/media/kAm4u0lhDCmXnugz6p/giphy.gif"width="30"></img></a>
  </div>
  <div >
    <p>Made with ‎♡ by alejandra</p>
  </div>
      </footer>
    </React.Fragment>
  )
}
