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
      </main>
      <Footer />
    </div>
  )
}


