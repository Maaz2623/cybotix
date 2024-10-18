import React from 'react'

const About = () => {
  return (
    <section id='about' className="h-screen justify-start items-center flex flex-col gap-y-4 px-20">
      <div className=" flex flex-col gap-y-2 mt-16 justify-center items-center">
        <p className="text-4xl font-semibold text-gray-100 flex gap-2">
          About
          <span className="text-blue-500">US</span>
        </p>
        <p className="text-center w-1/2 text-gray-500">
          Explore the profiles below to learn more about our team members, their
          roles, and the unique contributions they make to the Cybotix
          community.
        </p>
      </div>
    </section>
  )
}

export default About