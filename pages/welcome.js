// welcome.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Welcome() {
  return (
    <div className="container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p><a href="/">navigate to main page</a></p>
      <main>
        <Header title=""/>
        <code>hello world</code>
        <p className="menu-item">
            <br></br>
            <a href="https://github.com/mhackersu/bfsio.net" target="_window">This site is built on Next.js</a>
        </p>
        <br></br>
        <b>Personal Interests</b>
        <br></br>
        <li>r/meteorology</li>
        <li>r/hamradio @KI5IBD</li>
        <li>r/cyberdeck</li>
        <li>r/clarinet</li>
        <li>r/oilpainting</li>
        <li>r/OP1users</li>
        <br></br>
        <p>
          <code>
            <a href="https://www.github/mhackersu" target='_window'>follow me on GitHub</a>
          </code>
        </p>
        <br></br>
        <br></br>
        <b>Professional Experience</b>
        <br></br>
        <li>GCP, AWS, and Azure</li>
        <li>Go, Ruby, Python, JS</li>
        <li>DevOps, IaC</li>
        <br></br>
        <p>
          <code>
            <a href="https://www.linkedin.com/in/mike-hacker" target='_window'>follow me on LinkedIn</a>
          </code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
