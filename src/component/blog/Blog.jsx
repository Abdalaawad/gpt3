import React from 'react'
import "./Blog.css"
import blog1 from "../../assets/Rectangle 22-4.png"
import blog2 from "../../assets/Rectangle 22.png"
import blog3 from "../../assets/Rectangle 22-2.png"
import blog4 from "../../assets/Rectangle 22-3.png"
import blog5 from "../../assets/Rectangle 22-1.png"
import Articles from '../articless/Articles'

function Blog() {
  return (
    <div className='blog-gpt3'>
      <div className='blog-heading-gpt3'>
        <h1>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='blog-all-box-gpt3'>
      <div className='blog-single-image'>
        <Articles imageurl={blog1} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>
      <div className='blog-group-image'>
      <Articles imageurl={blog2} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      <Articles imageurl={blog3} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      <Articles imageurl={blog4} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      <Articles imageurl={blog5} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>
      </div>
    </div>
  )
}

export default Blog