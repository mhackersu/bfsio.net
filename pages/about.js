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
        <h1>Infrastructure Services Research</h1>
        <div>
          <ul>
              <li>
              <b>Organization:</b> Banana For Scale
              </li>
              <li>
              <b>Domain:</b> Infrastructure Engineering & Education 
              </li>
              <li>
              <b>Core Mission:</b> Bridging compatibility, accessibility, and excellence in infrastructure.
              </li>
          </ul>
        </div>
        <h2>Thesis</h2>
        <h4>Production Parody & Cost Relationship</h4>
        <p>Exploring the widely referenced (yet often unproven) claim that software defects cost</p>
        <p>100x more to fix in production, we pursue a hypothesis-driven approach to test assumptions</p>
        <p>in enterprise development environments. Our goal is to demystify software engineering</p>
        <p> practices, reducing reliance on folklore and emphasizing empirical, repeatable experimentation.</p>
        <br></br>
        <div>

          <h2>Research Focus Areas</h2>
          <ul>
            <li>
              Environment Compatibility Testing
            </li>
            <li>
              Toolchain Emulation & Docker-Based Deployment
            </li>
            <li>
              Resilient System Design
            </li>
            <li>
              Developer Experience Edge Cases
            </li>
          </ul>
        </div>
        <br></br>
      </main>
      <Footer />
    </div>
  )
}
