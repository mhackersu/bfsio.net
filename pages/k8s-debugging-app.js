// k8s-debugging-helper.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function K8sDebuggerHelper() {
  const title = "k8s Debugging Helper"
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
              <a href="https://k8s-debugging-helper-app.netlify.app/" target='_window'>k8s Debugger Helper App</a>
          </code>
        </p>
        <br></br>
        <li>utilizes <a href="https://learnk8s.io/troubleshooting-deployments" target='_window'>debugging</a> workflow</li>
        <li>guides user thru k8s debugging steps</li>
        <br></br>
        <p>
          <code>
              <a href="https://github.com/mhackersu/k8s-debuging-helper-app" target='_window'>GitHub</a>
          </code>
        </p>
        <br></br>
        <p>
          <code>
              <a href="https://k8s-debugging-helper-app.netlify.app/" target='_window'>k8s Debugger Helper App</a>
          </code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
