// projects.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Projects() {
  const defaultContentA = "A";
  const defaultContentB = "B";
  const defaultContentC = "C";

  return (
    <Accordion variant="bordered">
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContentA}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContentB}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContentC}
      </AccordionItem>
    </Accordion>
  )
}
