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
	        <a>welcome
	         <code>hello world</code>
	        </a>
          <a>This site is dedicated to topics related to software engineering.</a>
          <a>In addition to being professionally interested in software engineering, I am personally interested to quite some extent as well.</a>
          <a>I will write about it here, including my ham radio (KI5IBD) and weather radio interests.</a>
          <a>I am primarily interested in building applications using next-generation cloud products such as Netlify, Render, Cloudflare, and Fastly.</a>
          <a>I am primarily focused on contiuning to work with GoLang but I also spend time in Ruby, Python, and JS code-bases.</a>
          <a>Cloudflare Workers and Netlify Functions are very interesting to me at the moment.</a>
          <a>My other interests include following r/cyberdeck, practicing clarinet, painting with oils, and experimenting with my OP-1.</a>
          <br>
          <a>This site is built on Next.js and runs on Netlify.</a>
	      </p>
      </main>
      <Footer />
    </div>
  )
}
