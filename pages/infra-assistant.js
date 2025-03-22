// infra-assistant.js

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
    <p><code><a href="https://k8s-debugging-helper-app.netlify.app/" target="_window">Infra Service Templates</a></code></p>
        <p>Infra Services</p>
        <p><code><a href="https://github.com/bfsio/inf-svc" target="_window">Source</a></code></p>
        <br></br>
    </main>
    <Footer />
    </div>
  )
}
