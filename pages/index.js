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
            <a href="https://from-the-kitchen-of.netlify.app" target="_window">
              <code>recipe book</code>
            </a>
          </p>
      </main>
      <Footer />
    </div>
  )
}
