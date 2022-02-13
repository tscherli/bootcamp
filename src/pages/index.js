import React from "react"
import { Helmet } from "react-helmet"
import { injectGlobal } from '@emotion/css'
import { Carousel } from 'react-bootstrap'
import './styles.css'

injectGlobal`
  * {
    overflow: hidden;
  }
`

export default function Index(){
  return <body>
    <Helmet>
      <title>Code Bootcamp</title>
      <meta name="description" content="This is a Frontendmentor challenge" />
      <meta name="referrer" content="origin" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
    <Carousel>
      <Carousel.Item>
       <div className="tanya"/>
       <Carousel.Caption>
       <div className="maintext">“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” <span className="nameofperson">Tanya Sinclair </span><span className="occupation">UX Engineer</span></div>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="john"/>
       <Carousel.Caption>
        <div className="maintext">“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” <span className="nameofperson">John Tarkpor </span><span className="occupation">Junior Front-end Developer</span></div>
       </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
    </body>
}
