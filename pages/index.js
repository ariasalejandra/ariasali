import Head from 'next/head'
import Header from 'ariasali/components/Header'
import Footer from 'ariasali/components/Footer'
import React from "react"

export default function Home() {
  return (
    <><link rel='stylesheet' type='text/css' href='global.css'></link><div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="https://64.media.tumblr.com/tumblr_lu9wadyIR81qf290m.gif" />
      </Head>
      <Header />
      <main>
        <h1 className="org-color-text title">ariasalejandra</h1>
        <p className="personal website">
           <code>personal/website.jsx</code>
        </p>
      </main>

      <Footer />

    </div></>
  )
}
