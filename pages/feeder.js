// feeder.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Feeder() {
  const title = "Feeder";
  return (
    <div className="container">
      <Head>
        <title>BFS - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <a href="/projects"><code>back to projects...</code></a>
      <Header title={title}/>
    <main>
        <p><code><a href="https://online-feeder.vercel.app" target="_window">Online Event Generator</a></code></p>
        <p>Go Feeder</p>
        <p><code><a href="https://github.com/mhackersu/go-feeder" target="_window">Source</a></code></p>
        <br></br>
    </main>
    <Footer />
    </div>
  )
}
