import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Banana For Scale" />
          <p>
            <a href="/welcome">
              <code>welcome</code>
            </a>
          </p>
          <p>
            <a href="/projects">
              <code>projects</code>
            </a>
          </p>
          <p>
            <a href="https://blog.bfsio.net" target="_window">
              <code>blog</code>
            </a>
          </p>
          <p>
            <a href="https://mvskokvlke.com" target='_window'>
              <code>mvskokvlke</code>
            </a>
          </p>
          <p>
            <a href="https://fostercs.github.io/" target='_window'>
              <code>foster cs</code>
            </a>
          </p>
      </main>
      <Footer />
    </div>
  )
}
