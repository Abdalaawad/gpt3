import React from 'react'
import "./Brand.css"
import google from "../../assets/google.png"
import atlassian from "../../assets/atlassian.png"
import slack from "../../assets/slack.png"
import shopify from "../../assets/shopify.png"
import drobbox from "../../assets/dropbox.png"


function Brand() {
  return (
    <div className='brand-gpt3'>
      <div className='brand-image-gpt3'>
      <img src={google} alt= "google"/>
      <img src={slack} alt= "google"/>
      <img src={atlassian} alt= "google"/>
      <img src={drobbox} alt= "google"/>
      <img src={shopify} alt= "google"/>
     </div>
    </div>
  )
}

export default Brand