// projects.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Projects() {
  const defaultContentA = "This project was built with from Brian Holt's course at Frontend Masters. It is a Netflix-insipred UI with search function retrieving data from a JSON flat file. Refinements could be made to read from an backend database via RESTful API.";
  const defaultContentB = "B";
  const defaultContentC = "C";
  const defaultContentD = "D";

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p><a href="/">navigate to main page</a></p>
      <main>
        <Header title="Projects" />
        <Accordion variant="bordered">
          <AccordionItem key="1" aria-label="Accordion 1" title="watch a show">
            {defaultContentA}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="recieve a compliment">
            {defaultContentB}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="prepare food">
            {defaultContentC}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 3" title="check the weather">
            {defaultContentD}
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </div>
  )
}
