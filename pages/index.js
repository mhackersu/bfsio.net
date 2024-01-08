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
            <a href="https://blog.bfsio.net/">
              <code>blog</code>
            </a>
          </p>
          <p>
            <a href="https://bond-flix.netlify.app/">
              <code>bond flix</code>
            </a>
          </p>
          <p>
            <a href="https://netlify-go-function.netlify.app/">
              <code>netlify go lambda function</code>
            </a>
          </p>
          <p>
            <a href="http://fostercs.wpengine.com/">
              <code>happy little code</code>
            </a>
          </p>
          <p>
            <a href="https://mvskokvlke360.wpengine.com/">
              <code>mvskokvlke360</code>
            </a>
          </p>
          <p>
            <a href="https://prayerbible.netlify.app/">
              <code>prayer bible</code>
            </a>
          </p>
          <p>
            <a href="https://from-the-kitchen-of.netlify.app/">
              <code>from the kitchen of</code>
            </a>
          </p>
        </p>
      </main>

      <Footer />
    </div>
  )
}


