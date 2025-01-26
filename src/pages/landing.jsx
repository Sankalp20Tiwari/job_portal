import { Button } from '@/components/ui/button'
import companies from '../data/companies.json'
import { Carousel, CarouselContent, CarouselItem,} from '@/components/ui/carousel'
import React from 'react'
import { Link } from 'react-router-dom'
import Autoplay from "embla-carousel-autoplay"
import faq from '../data/faq.json'
import {
  Card,
  CardContent,
 
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const LandingPage = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 container'>
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl tracking-tighter py-4'>
          Find Your Dream Job
          <span className='flex items-center gap-2 sm:gap-6'>and get <img src="/logo.png" alt="Hirrd" className='h-14 sm:h-24 lg:h-32'/></span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousands of job listings or find the perfect candidate 
        </p>
      </section>
      <div className='flex gap-2 sm:gap-6 justify-center px-auto'>
        {/*buttons*/}
        <Link to="/jobs">
          <Button variant='outline' size='xl'>Find Jobs</Button>
        </Link>
        <Link to="/post-job">
          <Button variant='outline' size='xl'>Post a Job</Button>
        </Link>
      </div>
        {/*carousel*/}
          <Carousel     
          className="w-full py-10"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className='flex gap-5 sm:gap-20 items-center'>
              {companies.map(({name,id,path})=> {
                return <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain"
                  />
                </CarouselItem>
              })}
            </CarouselContent>
          </Carousel>
        {/* banner */}
        <img src="/banner.jpeg" alt="banner" className='w-full'/>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find best candidates
          </CardContent>
        </Card>

      </section>
      {/* accordion */}
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item ,index) => (
          <AccordionItem value={`item-${index + 1}`} key={index} >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </main>
  )
}

export default LandingPage
