// bondflix.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Bondflix() {
  const title = "Bondflix";
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
        <p><code><a href="https://bond-flix.netlify.app" target="_window">Bondflix App</a></code></p>
        <li>Netflix-Inspired</li>
        <li>Frontend Masters ReactJS Course</li>
        <li>Reads from JSON flat-file</li>
        <li>Displays 007 Titles</li>
        <br></br>
        <p><code><a href="https://github.com/mhackersu/bondflix/tree/waku" target="_window">Migrate to Waku</a></code></p>
        <br>
        <p><code><a href="https://github.com/mhackersu/bondflix" target="_window">GitHub</a></code></p>
        <p><code><a href="https://github.com/mhackersu/bondflix-api-rails-6" target='_window'>New Backend in Progress</a></code></p>
    </main>
    <Footer />
    </div>
  )
}
