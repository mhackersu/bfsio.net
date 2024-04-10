// projects.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Projects" />
          <p className="menu-item">
            <a href="https://react-js-toggle-lamp.netlify.app/" target='_window'>
              <code>toggle the lamp</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://bond-flix.netlify.app/" target='_window'>
              <code>watch movies</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://from-the-kitchen-of.netlify.app/" target='_window'>
              <code>cook recipes</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://fp-weather.netlify.app/" target='_window'>
              <code>check the weather report</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://compliment-time.netlify.app/" target='_window'>
              <code>receive a compliment</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://netlify-go-function.netlify.app/" target='_window'>
              <code>decode metar messages</code>
            </a>
          </p>
      </main>
      <Footer />
    </div>
  )
}
