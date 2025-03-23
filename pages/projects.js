// projects.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Projects() {
  const title = "Projects";
  return (
    <div className="container">
      <Head>
        <title>BFS - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <a href="/"><code>back to home page...</code></a>
      <Header title={title}/>
      <main>
        <p><code><a href="/feeder">GRPC Event Generator</a></code></p>
        <p><code><a href="/sdc">Py/Docker Financial Analysis Calculator</a></code></p>
        <p><code><a href="/infra-assistant">Localstack Dev Templates</a></code></p>
      </main>
      <Footer />
    </div>
  )
}
