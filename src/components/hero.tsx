"use client"
import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { textGenerateWords, typewriterWords } from '@/constants'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

const Hero = () => {

    const router = useRouter()
  return (
    <section
        id="hero"
      className="flex flex-col justify-center rounded-lg py-20 items-center md:h-[calc(100vh-64px)] "
      >
        
        <TypewriterEffectSmooth words={typewriterWords} className='text-xl ' />
        <TextGenerateEffect
          duration={0.5}
          words={textGenerateWords}
          className="md:w-1/2 text-center font-light text-gray-500 text-xs w-[90%] md:text-sm"
        />
        <Button
          onClick={() => router.push("/sign-up")}
          className="mt-10 bg-blue-500 cursor-pointer hover:bg-blue-500/80 flex justify-center items-center gap-2 z-10 text-white"
        >
          Join the forum
          <ArrowRight />
        </Button>
      </section>
  )
}

export default Hero