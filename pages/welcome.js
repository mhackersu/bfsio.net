// welcome.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Welcome() {
  return (
    <div className="container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
	      <p className="menu-item">
	        <a href="/welcome" target='_window'>
	          <code>welcome</code>
	        </a>
	      </p>
      </main>
      <Footer />
    </div>
  )
}
