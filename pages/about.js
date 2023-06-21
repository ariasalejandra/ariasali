import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head"
export default function About() {
    return (
        <React.Fragment>
            <Head class=".typewriter">
                <title >alejandra</title>
                <link rel="icon" href="https://64.media.tumblr.com/tumblr_lu9wadyIR81qf290m.gif" />
            </Head>
            <Header/>
            <main className="typewriter">
            <section><h1 className="og-text-color">about alejandra</h1> </section>
            <section className="wrapper">
            <img className="me" src="../images/alejandra.png" alt="ariasalejandra"/>
            <h2>aspiring cloud & security developer</h2>
            <p className=" about-text-box og-text-color">hello, i am an inspiring software developer and i am currently trying to learn more about the <span className="cloud-color">cloud </span>
                and <span className="cyber-color">information security! </span> aside from technology, i am also a digital artist. i speak 
                spanish and english fluently too! additionally, i listen to nu-metal with some of my favorite bands being hoobastank, limp bizkit, three days grace, 
                etc. lastly, i enjoy anime like death note code geass, seraph of the end, but i prefer reading manga :D
            </p>
            </section>
            
            </main>
            <Footer/>
        </React.Fragment>
    )
}