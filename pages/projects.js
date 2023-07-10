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
                    <code>personal/website.html</code>
                </p>
                
            </main>
            <Footer/>
        </React.Fragment>
    )
}