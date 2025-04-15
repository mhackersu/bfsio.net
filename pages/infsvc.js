// k8s-debugging-helper.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Infsvc() {
  const title = "Infra Services"
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <br></br>
      <a href="/collection"><code>back to collection...</code></a>
      <Header title={title}/>
      <main>
        <p>
          <code>
              <a href="https://github.com/bfsio/inf-svc" target='_window'>Infrastructure Services</a>
          </code>
        </p>
        <br></br>
        <li>Infrastructure Lab Setup</li>
        <li>Resiliency Testing</li>
        <li>Compatibility Focus</li>
        <li>Educational Impact</li>
        <li>Organizational Mission</li>
        <br></br>
        <p>
          <code>
              <a href="https://github.com/bfsio/" target='_window'>BFS GitHub</a>
          </code>
        </p>
        <br></br>
      </main>
      <Footer />
    </div>
  )
}
