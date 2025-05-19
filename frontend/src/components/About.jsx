import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The Only Thing we are serious about is food</p>
          </div>

          <p className="mid">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quam
            vero laudantium reprehenderit, velit illum obcaecati eius nisi
            voluptatibus dignissimos doloremque repellat ducimus aspernatur.
            Quisquam saepe aliquam odio maxime a vero nihil, architecto, atque
            similique consectetur dolorem veritatis. Necessitatibus quo
            voluptates perspiciatis expedita perferendis temporibus illo sed
            tempore eos ut.
          </p>
          <Link to={'/'}>Eplore Menu<span> <HiOutlineArrowNarrowRight /> </span></Link>
        </div>


        <div className="banner">

         <img src="/about.png" alt="about" />

        </div>
      </div>
    </section>
  )
}
