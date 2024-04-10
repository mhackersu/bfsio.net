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
            <a href="/welcome">
              <code>welcome</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="/projects">
              <code>code projects</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://www.bonfire.com/store/earthling-store/" target='_window'>
              <code>shop</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://www.linkedin.com/in/mike-hacker" target='_window'>
              <code>linkedin</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://www.github.com/mhackersu" target='_window'>
              <code>github</code>
            </a>
          </p>
          <p className="menu-item">
            <a href="https://mvskokvlke.com" target='_window'>
              <code>mvskokvlke nation</code>
            </a>
          </p>
      </main>
      <Footer />
    </div>
  )
}


