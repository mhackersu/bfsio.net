import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Banana For Scale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Banana For Scale" />
        <p className="menu-item">
          <a href="https://react-js-toggle-lamp.netlify.app/" target='_window'>
            <code>toggle the lamp</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://blog.bfsio.net/" target='_window'>
            <code>blog</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://bond-flix.netlify.app/" target='_window'>
            <code>bond flix</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://netlify-go-function.netlify.app/" target='_window'>
            <code>netlify go lambda function</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://fostercs.github.io/" target='_window'>
            <code>happy little code</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://mvskokvlke.com" target='_window'>
            <code>mvskokvlke</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://from-the-kitchen-of.netlify.app/" target='_window'>
            <code>from the kitchen of</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://fp-weather.netlify.app/" target='_window'>
            <code>fp weather app</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://compliment-time.netlify.app/" target='_window'>
            <code>compliment time</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://thedigitalcatechism.com/" target='_window'>
            <code>digital catechism</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://www.bonfire.com/store/earthling-store/" target='_window'>
            <code>earthling store</code>
          </a>
        </p>
        <p className="menu-item">
          <a href="https://www.doublebarmphotography.com/" target='_window'>
            <code>photography website</code>
          </a>
        </p>
      </main>
      <Footer />
    </div>
  )
}


