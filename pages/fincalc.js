// fincalc.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FinCalc() {
  const title = "SDC Calculator";
  return (
    <div className="container">
      <Head>
        <title>BFS - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <a href="/gallery"><code>back to gallery...</code></a>
      <Header title={title}/>
    <main>
        
    </main>
    <main>
        <p><code><a href="https://github.com/mhackersu/sdc" target="_window">SDC Calc</a></code></p>
        <p>Standard Deviation Currency Calculator</p>
        <p><code><a href="https://github.com/mhackersu/sdc" target="_window">Source</a></code></p>
        <br></br>
    </main>
    <Footer />
    </div>
  )
}
