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
      <i>online code projects gallery</i>
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
          </p>
      </main>
      <Footer />
    </div>
  )
}
