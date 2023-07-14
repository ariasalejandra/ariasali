import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import React from "react"

export default function Home() {
  return (
    <><link rel='stylesheet' type='text/css' href='global.css'></link><html>
      <Head class=".typewriter">
        <meta httpEquiv='X-UA-Compatible' ></meta>
        <title >alejandra</title>
        <link rel="icon" href="https://64.media.tumblr.com/tumblr_lu9wadyIR81qf290m.gif" />
      </Head>
      <Header />
        <main class="typewriter">
          <section><h1 className="og-text-color">ariasalejandra</h1></section>
          <p className="personal-website">
            <code>personal/website.jsx</code>
          </p>
          <p className='block-text'>
            Hello! My name is Alejandra Arias and I am a student attending the <span className='school-color'>University of Illinois Urbana-Champaign</span> and I am
            studying Information Science with a minor in Computer Science. My interests revolve around <span className='cloud-color'>cloud development</span> and <span className='cyber-color'>cyber security! </span> 
            As a hispanic student, I try my best to get other Hispanic or poc students to get involved in Tech. I develop for the purpose of making an impact on my community !
          </p>
        </main>
      <Footer />

    </html></>
  )
}
