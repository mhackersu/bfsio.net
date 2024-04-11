// welcome.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Welcome() {
  const welcomeContentA = ""
  const welcomeContentB = ""

  return (
    <div className="container">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p><a href="/">navigate to main page</a></p>
      <main>
        <Header title="Welcome"/>
	      <p className="menu-item">
	        <a>
	         <code>hello world</code>
	        </a>
          <br></br>
          <br></br>
          <a>
          This site is perfectly imperfect as I continue to work with ReactJS and expand ES knowhow.
          </a>
          <br></br>
          <br></br>
          <a href="https://github.com/mhackersu/bfsio.net" target="_window">Built with Next.js it is</a>
          <br></br>
          <br></br>
        </p>
          <Accordion variant="bordered">
            <AccordionItem key="1" aria-label="Accordion 1" title="personal interests">
                <br></br>
                <br></br>
                <b>Hobbies:</b>
                <br></br>
                <br></br>
                <li>r/meteorology</li>
                <li>r/hamradio @KI5IBD</li>
                <li>r/cyberdeck</li>
                <li>r/clarinet</li>
                <li>r/oilpainting</li>
                <li>r/OP1users</li>
              <p><code><a href="https://www.github.com/mhackersu" target='_window'>follow me on github</a></code></p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="professional experience">
              <p className="menu-item">
                Professional experience includes GCP, AWS, and Azure, in DevOps and IaC contexts.
                <br></br>
                <br></br>
                My contributions tend to be backend in nature and written in NodeJS, Ruby, and Python.
                <br></br>
                <br></br>
                I am learning Go; I will share some recent Go projects soon.
                <br></br>
                <br></br>
              </p>
              <p>
                <code>
                  <a href="https://www.linkedin.com/in/mike-hacker" target='_window'>follow me on linkedin</a>
                </code>
              </p>
            </AccordionItem>
          </Accordion>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </main>
      <Footer />
    </div>
  )
}
