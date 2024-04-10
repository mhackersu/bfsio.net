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
            <a href="https://bond-flix.netlify.app/" target='_window'>
              <code>movies</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://from-the-kitchen-of.netlify.app/" target='_window'>
              <code>recipes</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://fp-weather.netlify.app/" target='_window'>
              <code>weather report</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://compliment-time.netlify.app/" target='_window'>
              <code>receive a compliment</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://netlify-go-function.netlify.app/" target='_window'>
              <code>metar decoder</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://www.bonfire.com/store/earthling-store/" target='_window'>
              <code>shop</code>
            </a>
          </p>
      </main>
      <Footer />
    </div>
  )
}


