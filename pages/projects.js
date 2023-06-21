import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head"
export default function Projects() {
    return (
        <React.Fragment>
            <Head class=".typewriter">
                <title >alejandra</title>
                <link rel="icon" href="https://64.media.tumblr.com/tumblr_lu9wadyIR81qf290m.gif" />
            </Head>
            <Header/>
            <main className="typewriter">
                <section>
                    <h1 className="og-text-color">my projects</h1>
                </section>
                <p className="personal-website">
                    <code>Personal/Website.html</code>
                </p>
                <p className="projects-block-text">
                    my most recent project is this website! i've been trying to learn frontend development and this is the result.
                    this website is build using next.js and react fragments. i've deployed it using netlify instead of github pages
                    because gh-pages does not support this type of app. read more about my journey on my blog!
                </p>
                <p className="personal-website">
                    <code>Crustacean Chat</code>
                </p>
                <section>
                    <h1 className="og-text-color">research</h1>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}