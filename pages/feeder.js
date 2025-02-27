// bondflix.js

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
        <p><code><a href="https://github.com/mhackersu/online-feeder" target="_window">Online Bird Feeder</a></code></p>
        <li>Online Feeder</li>
    </main>
    <Footer />
    </div>
  )
}
