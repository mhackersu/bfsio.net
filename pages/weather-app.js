// weather-app.js

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function WeatherApp() {
  const title = "Weather App";
  return (
    <div className="container">
      <Head>
        <title>BFS - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <br></br>
      <a href="/projects"><code>back to projects...</code></a>
      <Header title={title}/>
    <main>
        <p><code><a href="https://fp-weather.netlify.app/" target='_window'>Weather App</a></code></p>
        <br></br>
        <li>Utilizes RamdaJS</li>
        <li>Functional Programming in JS</li>
        <br></br>
        <p><code><a href="https://github.com/mhackersu/fp-app-openweather-api" target='_window'>Github</a></code></p>
        <p><code><a href="https://github.com/mhackersu/avwx-api-js" target='_window'>New Backend in Progress</a></code></p>
    </main>
    <Footer />
    </div>
  )
}
