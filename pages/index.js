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
        <p className="description">
          Oh happy day <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
