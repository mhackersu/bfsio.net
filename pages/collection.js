// gallery.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Collection() {
  const title = "BFS Collection";
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
        <p><code><a href="/infsvc">Infra Services Research Project</a></code></p>
        {/* <p><code><a href="/fincalc">Financial Analysis Calculator</a></code></p> */}
        {/* <p><code><a href="/storybook">StoryBook</a></code></p> */}
        {/* <p><code><a href="/booking">Online Booking & Registration</a></code></p> */}
        {/* <p><code><a href="/fostercs">Foster CS</a></code></p> */}
        {/* <p><code><a href="/holycalc">Calculate Holy Days</a></code></p> */}
        {/* <p><code><a href="/masslookup">Lookup Local Mass</a></code></p> */}
      </main>
      <Footer />
    </div>
  )
}
