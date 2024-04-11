// projects.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Projects() {

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p><a href="/">navigate to main page</a></p>
      <main>
        <Header title="Projects" />
        <Accordion>
          <AccordionItem title="Bond Flix" className="accordion">
            <p>
              <a className="accordion-text">
                <br></br>
                <a href="https://bond-flix.netlify.app/" target='_window'>Bond Flix</a>
                <br></br>
                <br></br>
                This project was built while virtually attending Brian Holt's course at Frontend Masters.
                <br></br>
                It is a Netflix-insipred UI with search function retrieving data from a JSON flat file.
                <br></br>
                <br></br>
                <a href="https://github.com/mhackersu/bondflix">Github</a>
                <br></br>
                <br></br>
                <a href="https://github.com/mhackersu/bondflix-api-rails-6">New Backend in Progress</a>
              </a>
            </p>
          </AccordionItem>
          <AccordionItem title="Weather App" className="accordion">
            <p><a className="accordion-text">
                <br></br>
                <a href="https://fp-weather.netlify.app/" target='_window'>Weather App</a>
                <br></br>
                <br></br>
                This project uses Ramda to utilize functional programming techniques to create a MVC architecture in Javascript.
                <br></br>
                <br></br>
                <i>* Currently the UI works but the API calls are broken because of OpenAPIWeather CORS related issues.
                <br></br>
                <br></br>
                Refinements are in progress <a href="https://github.com/mhackersu/avwx-api-js">here.</a></i>
                <br></br>
                <br></br>
                <i>I am planning to solve the API issue by polling for METORs and TAMs data.</i>
                <br></br>
                <br></br>
                <a href="https://github.com/mhackersu/fp-app-openweather-api">Github</a>
                <br></br>
                <br></br>
                <a href="https://github.com/mhackersu/avwx-api-js">New Backend in Progress</a>
            </a></p>
          </AccordionItem>
          <AccordionItem title="Toggle The Lamp" className="accordion">
            <p><a className="accordion-text">
                <br></br>
                <a href="https://react-js-toggle-lamp.netlify.app/" target='_window'>Toggle The Lamp</a>
                <br></br>
                <br></br>
                This project utilizes SVG and JS to create lighting effects.
                <br></br>
                <br></br>
                I arranged the isometric objects into the unique SVG objects,
                <br></br>
                <br></br>
                and created the JS to toggle between the differient JS objects.
                <br></br>
                <br></br>
                <a href="https://github.com/mhackersu/react-js-toggle-lamp">GitHub</a>
            </a></p>
          </AccordionItem>
          <AccordionItem title="Compliment Time" className="accordion">
            <p>
              <a className="accordion-text">
                <br></br>
                <a href="https://compliment-time.netlify.app/" target='_window'>Compliment Time</a>
                <br></br>
                <br></br>
                I started this project in 2016 as a self-love exercise while traveling in New Zealand.
                <br></br>
                <br></br>
                <i>* Refinements include creating a backend API server as a publically open API for the data.</i>
                <br></br>
                <br></br>
                <a href="https://github.com/mhackersu/compliment-time-app">GitHub</a>
              </a>
            </p>
          </AccordionItem>
          <AccordionItem title="Recipe Book" className="accordion">
            <p>
              <a className="accordion-text">
                <br></br>
                <a href="https://from-the-kitchen-of.netlify.app/" target='_window'>Recipe Book</a>
                <br></br>
                <br></br>
                Nothing to see here, just another recipe book.
                <br></br>
                <br></br>
                <i>* Have more recipes to share; Will update soon. </i>
                <br></br>
                <br></br>
                <a href="https://github.com/mhackersu/from-the-kitchen-of">GitHub</a>
              </a>
            </p>
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </div>
  )
}
