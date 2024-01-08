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
        <Header title="bfsio.net is up" />
        <p className="menu">
          <p>
            <a href="https://react-js-toggle-lamp.netlify.app/" target='_window'>
              <code>turn on the light!</code>
            </a>
          </p>
          <p>
            <a href="https://blog.bfsio.net/" target='_window'>
              <code>blog</code>
            </a>
          </p>
          <p>
            <a href="https://bond-flix.netlify.app/" target='_window'>
              <code>bond flix</code>
            </a>
          </p>
          <p>
            <a href="https://netlify-go-function.netlify.app/" target='_window'>
              <code>netlify go lambda function</code>
            </a>
          </p>
          <p>
            <a href="http://fostercs.wpengine.com/" target='_window'>
              <code>happy little code</code>
            </a>
          </p>
          <p>
            <a href="https://mvskokvlke360.wpengine.com/" target='_window'>
              <code>mvskokvlke360</code>
            </a>
          </p>
          <p>
            <a href="https://prayerbible.netlify.app/" target='_window'>
              <code>prayer bible</code>
            </a>
          </p>
          <p>
            <a href="https://from-the-kitchen-of.netlify.app/" target='_window'>
              <code>from the kitchen of</code>
            </a>
          </p>
        </p>
      </main>

      <Footer />
    </div>
  )
}


