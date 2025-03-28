// welcome.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Welcome() {
  const title = "Welcome";
  return (
    <div className="container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title={title}/>
        <a href="/"><code>back to home page...</code></a>
        <p>
          <code>
            <a href="https://github.com/mhackersu/bfsio.net" target='_window'>This site runs on Next.js</a>
          </code>
        </p>
        <br></br>
      </main>
      <Footer />
    </div>
  )
}
