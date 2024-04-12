// hello-world.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function HelloWorld() {
  const title = "Hello World"
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a href="/projects"><code>back</code></a>
      <Header title={title}/>
      <main>
        <p>
          <code>
              <a href="#" target='_window'>Hello World</a>
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
