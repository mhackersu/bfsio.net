import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const title = "Banana For Scale"
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header title={title} />
      <main>
      <br></br>
      <br></br>
      <i>mindfully created, minimal design</i>
      <br></br>
      <br></br>
          <p>
            <a href="/welcome">
              <code>welcome</code>
            </a>
          </p>
          <p>
            <a href="/gallery">
              <code>gallery</code>
            </a>
          </p>
          <p>
            <a href="/about">
              <code>about</code>
            </a>
          </p>
          <p>
            <a href="https://mvskokvlke.com/" target="_window">
              <code>blog</code>
            </a>
          </p>
      </main>
      <Footer />
    </div>
  )
}
