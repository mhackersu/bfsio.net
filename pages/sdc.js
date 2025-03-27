// sdc.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Sdc() {
  const title = "SDC Calculator";
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
        
    </main>
    <main>
        <p><code><a href="https://github.com/mhackersu/sdc" target="_window">SDC Calc</a></code></p>
        <p>SDC Financial Analysis Calculator</p>
        <p><code><a href="https://github.com/mhackersu/sdc" target="_window">Source</a></code></p>
        <br></br>
    </main>
    <Footer />
    </div>
  )
}
