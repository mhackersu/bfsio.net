// booking.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Booking() {
  const title = "Booking";
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
        <p><code><a href="#" target="_window">Online Booking & Registration</a></code></p>
        <li>Elevated Customer Experiences</li>
    </main>
    <Footer />
    </div>
  )
}
