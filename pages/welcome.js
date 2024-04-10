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
        <Header title="Welcome" />
	      <p className="menu-item">
	        <a>
	          <code>welcome</code>
	        </a>
          <a>hello world, I am a software engineer with a background in DevOps and SRE within product spaces primarily around the edge.</a>
          <a>In additional to being professionally interested in software engineering, I am personally interested to quite some extent as well.</a>
          <a>I will write about it here, including my ham radio (KI5IBD) and weather interests.</a>
          <a>My other interests include clarinet, oil painting, and experimenting with my OP-1.</a>
	      </p>
      </main>
      <Footer />
    </div>
  )
}
