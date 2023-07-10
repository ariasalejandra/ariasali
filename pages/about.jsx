import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollRevealComponent = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <><Head class=".typewriter">
          <title>alejandra</title>
          <link rel="icon" href="https://64.media.tumblr.com/tumblr_lu9wadyIR81qf290m.gif" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          <script defer src="app.js"></script>
      </Head>
      <Header /><main className="typewriter">
              <section><h1 className="og-text-color">about alejandra</h1> </section>
              <section className="wrapper">
                  <img className="me" src="../images/alejandra.png" alt="ariasalejandra" />
                  <h2>aspiring cloud & security developer</h2>
                  <p className=" about-text-box og-text-color">hello, i am an inspiring software developer and i am currently trying to learn more about the <span className="cloud-color">cloud </span>
                      and <span className="cyber-color">information security! </span> aside from technology, i am also a digital artist. i speak
                      spanish and english fluently too! additionally, i listen to nu-metal with some of my favorite bands being hoobastank, limp bizkit, three days grace,
                      etc. lastly, i enjoy anime like death note code geass, seraph of the end, but i prefer reading manga :D
                  </p>
              </section>
              <section className="og-text-color"><h1>education</h1></section>
              <section className="wrapper" data-aos="fade-right" data-aos-duration="3000">
                  <img className="prog" src="../images/prog1.gif" />
                  <p className="about-right-text-box og-text-color">
                      as previously mentioned, i am studying information science with a minor in computer science at the university of illinois urbana-champaign.
                      i have taken cs124, cs128 + honors and i plan to take stat207, is203, and cyb100 from codepath in the fall'23. i have received the microsoft passport
                      challenge azure from techtogether and i am currently working on the aws cloud essentials learning path.
                  </p>
              </section>
              <section>
                  <h1 className="og-color-text">involvements</h1>
              </section>
              <section className="wrapper about-div" data-aos="fade-left" data-aos-duration="3000">
                  <img className="wicys-img" src="../images/wicys-white-logo-uiuc.png" width="450px" />
                  <h2>women in cybersecurity</h2>
                  <p className="about-text-box og-text-color">
                      I am currently the public relations chair at <span className="wicys-purple">women in cybersecurity illinois </span> for the 2023-2024 school year!
                      you can catch me at the wicys <a className="wicys-green" href="https://www.instagram.com/wicys.illinois/">instagram </a> or <a className="wicys-green" href="https://discord.gg/RHYfk2bGQh">discord! </a>
                      if you're interested, be sure to join our <a className="wicys-blue" href="https://docs.google.com/forms/d/e/1FAIpQLSeg6cclulm7YnWO04SjzFo8NftDUSQccqdvzkcSSDWJ0479Xw/viewform">mailing list </a>
                      for fall 2023, i am planning on revamping our website! if you wish to help with the making of this new website, please contact me on discord! - <span className="cloud-color">kayallii</span>
                  </p>
              </section>
          </main><Footer /></>
  );
};

export default ScrollRevealComponent;

