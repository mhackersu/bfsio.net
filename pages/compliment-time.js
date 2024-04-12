// compliment-time.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function ComplimentTime() {
  const title = "Compliment Time"
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <br></br>
      <a href="/projects"><code>back to projects...</code></a>
      <Header title={title}/>
      <main>
        <p>
          <code>
              <a href="#" target='_window'>Compliment Time</a>
          </code>
        </p>
        <br></br>
        <li></li> 
        <br></br>
        <p>
          <code>
              <a href="" target='_window'>GitHub</a>
          </code>
        </p>
        <br></br>
      </main>
      <Footer />
    </div>
  )
}
