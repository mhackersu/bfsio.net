// welcome.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Welcome() {
  const welcomeContentA = "Personal interests include ham radio (KI5IBD) and weather radio. Other interests include following r/cyberdeck, playing clarinet, painting with oils, and experimenting the OP-1."
  const welcomeContentB = "Professional experience includes GCP, AWS, and Azure, in DevOps and IaC contexts. Primarily interested in building applications using next-generation cloud platforms such as Netlify, Render, Cloudflare, and Fastly. Have shipped primarily backend contributions in GoLang and Ruby, Python, and JS. Presently, Lambda functions are very interesting to me."

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
              {welcomeContentA}
              <p><code><a href="https://www.github.com/mhackersu" target='_window'>follow me on github</a></code></p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="professional experience">
              <p className="menu-item">{welcomeContentB}</p>
              <p><code><a href="https://www.linkedin.com/in/mike-hacker" target='_window'>follow me on linkedin</a></code></p>
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
