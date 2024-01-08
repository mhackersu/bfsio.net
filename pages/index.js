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
          <code href="http://fostercs.wpengine.com/">happy little code</code>
          <code href="https://blog.bfsio.net/">blog</code>
          <code href="https://netlify-go-function.netlify.app/">go lambda function</code>
          <code href="https://k8s-debugging-helper-app.netlify.app/">k8s debugging helper</code>
          <code href="https://mvskokvlke360.wpengine.com/">mvskokvlke</code>
          <code href="https://bond-flix.netlify.app/">bondflix</code>
          <code href="https://from-the-kitchen-of.netlify.app/">from the kitchen of</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
