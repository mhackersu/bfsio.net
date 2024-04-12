// hello-world.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Projects() {
  const title = "hello-world";
  return (
    <div className="container">
      <Head>
        <title>BFS - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a href="/"><code>back</code></a>
      <Header title={title}/>
    <main>
        <p><code><a href="/hello-world">hello-world</a></code></p>
    </main>
    <Footer />
    </div>
  )
}
