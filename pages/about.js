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
        <b>Personal Interests</b>
        <br></br>
        <li>r/meteorology</li>
        <li>r/hamradio @KI5IBD</li>
        <p>
          <code>
            <a href="https://www.github/mhackersu" target='_window'>GitHub</a>
          </code>
        </p>
        <br></br>
        <b>Professional Experience</b>
        <br></br>
        <li>GCP, AWS, and Azure</li>
        <li>Go, Ruby, Python, JS</li>
        <li>DevOps, IaC</li>
        <br></br>
        <p>
          <code>
            <a href="https://www.linkedin.com/in/mike-hacker" target='_window'>LinkedIn</a>
          </code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
