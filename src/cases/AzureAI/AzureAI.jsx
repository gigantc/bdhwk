import React, { useState } from 'react';

import Splash from '../../components/Splash/Splash.jsx';
import CaseStudy from "../../components/CaseStudy/CaseStudy.jsx"

import './AzureAI.scss';


import Hero from './assets/hero.jpg'
import Gallery1 from './assets/full-results.jpg'
import Gallery2 from './assets/square-news.jpg'
import Gallery3 from './assets/square-results.jpg'
import Gallery4 from './assets/full-diagram.jpg'
import Gallery5 from './assets/square-backend.jpg'




const AzureAI = () => {


  //////////////////////////////////////
  // REFS & STATE
  const [showSplash, setShowSplash] = useState(true);


  //////////////////////////////////////
  // CONTENT
  const heading = "Building an AI-Powered Search Engine Inside Boeing's Firewall";

  const paragraphs = [
    <>
      <strong>The Problem.</strong>
    </>,
    <>
      Boeing's Digital Safety Experience was spread across four disconnected environments: a Brightcove social platform, a custom React application, an RSS-based news system, and a web series hosted on Boeing.com. But users needed a single search experience. One box. One query. Results from everywhere.
    </>,
    <>
      Off-the-shelf solutions weren't going to cut it. Not with Boeing's security restrictions. The project needed a fully custom, private search engine built inside a closed Azure cloud environment, with zero public exposure and total control over the data layer.
    </>,
    <>
      <strong>The Approach.</strong>
    </>,
    <>
      I took this one solo. No dev team, no PM handoff. I owned the architecture, the build, and the communication with Boeing's internal stakeholders.
    </>,
    <>
      First, I mapped the system. The source data lived in SQL, with JSON mirrors stored in Azure Blob Storage to support faster access and re-indexing. I built a React front-end to serve users inside the protected Boeing ecosystem. Behind it, a Node.js backend powered by Azure Functions handled API routes, search queries, and result aggregation.
    </>,
    <>
      At the core was <b>Azure AI Search</b>. It was flexible enough to ingest data from multiple sources, but raw enough that I had to normalize and transform inputs across all four content types. Nothing matched out of the box. Everything had to be flattened, equalized, and indexed manually.
    </>,
    <>
      The AI layer handled misspellings, pulled synonyms, and populated smart suggestions with related people, places, and aircraft. This helped users find what they meant, not just what they typed.
    </>,
    <>
      I also built a custom re-indexer, as a separate Node.js Azure Function, scheduled to refresh content every 48 hours, without interrupting service. If any data needed to be inserted manually, there was a small control panel for administrators.
    </>,
    <>
      <strong>The Outcome.</strong>
    </>,
    <>
      The result was a fully integrated, lightning-fast search engine capable of surfacing video, articles, internal content, and RSS feeds all through a single, secure interface. It felt seamless to users. But under the hood, it was a hand-built AI layer orchestrating data across platforms, formats, and security walls.
    </>
  ];


  //////////////////////////////////////
  // RENDER
  return (
    <section className="case-study">

      {showSplash && (
        <Splash 
        onComplete={() => setShowSplash(false)} 
        title="Azure AI Search" 
        />
      )}

      {!showSplash && (

        <CaseStudy
          title="Azure AI Search"
          subtitle="A search engine that leverages AI"
          hero={Hero}
          heading={heading}
          writeup={[ ...paragraphs ]}
          info={{
            year: "2025",
            client: "Boeing",
            design: "Ryan Lord, Maribel Barba",
            timeline: "4 months",
            platform: "Azure Cloud (internal)",
            stack: "Azure AI, Azure Functions, Node.js, React, SQL",
            role: "Solo Developer + Project Manager"
          }}
          // url="https://theunfilteredstory.org"
          gallery={[Gallery1, Gallery2, Gallery5, Gallery4]}
        />
        
      )}
    </section>
  );
};

export default AzureAI;
