// about.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function About() {
  const title = "About";
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      	<br></br>
      	<br></br>
      	<a href="/"><code>back to home page...</code></a>
      <main>
        <p>
          <code>
            <a href="https://github.com/bfsio" target='_window'>GitHub</a>
          </code>
        </p>
        <br></br>
        <b>DevOps Consulting</b>
        <br></br>
        <br></br>
      </main>
      <Footer />
    </div>
  )
}
