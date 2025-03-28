// holycalc.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function HolyCalc() {
  const title = "HolyCalc";
  return (
    <div className="container">
      <Head>
        <title>HolyCalc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a href="/"><code>back to home page...</code></a>
        <Header title={title}/>
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
