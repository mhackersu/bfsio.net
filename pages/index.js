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
            <a href="/recipes">
              <code>recipes</code>
            </a>
          </p>
          <p>
            <a href="/blog">
              <code>blog</code>
            </a>
          </p>
      </main>
      <Footer />
    </div>
  )
}
