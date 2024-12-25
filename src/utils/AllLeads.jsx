import React, { useEffect, useRef, useState } from 'react'
import KeenSlider from 'keen-slider'
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css'
import slidesData from './slidesData.json'; 

function AllLeads() {
  const [slider, setSlider] = useState(null)
  const keenSliderRef = useRef(null)  
  const keenSliderActive = useRef(null) 
  const keenSliderCount = useRef(null) 
  const keenSliderPrevious = useRef(null)  
  const keenSliderNext = useRef(null) 

  useEffect(() => {
    const sliderInstance = new KeenSlider(keenSliderRef.current, {
      loop: false,  
      defaultAnimation: {
        duration: 750,
      },
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 24,  
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            origin: 'center',
            perView: 1.5,
            spacing: 16,
          },
        },
        '(min-width: 768px)': {
          slides: {
            origin: 'center',
            perView: 1.75,
            spacing: 16,
          },
        },
        '(min-width: 1024px)': {
          slides: {
            origin: 'center',
            perView: 3,
            spacing: 16,
          },
        },
      },
      created(slider) {
        setSlider(slider)
        keenSliderActive.current.innerText = slider.track.details.rel + 1
        keenSliderCount.current.innerText = slider.slides.length

        slider.slides.forEach((slide, index) => {
          if (index === slider.track.details.rel) {
            slide.classList.remove('opacity-40')
            slide.classList.add('opacity-100') 
          } else {
            slide.classList.add('opacity-40') 
          }
        })
      },
      slideChanged(slider) {
        slider.slides.forEach((slide, index) => {
          slide.classList.add('opacity-40') 
          if (index === slider.track.details.rel) {
            slide.classList.remove('opacity-40')
            slide.classList.add('opacity-100')
          }
        })
        keenSliderActive.current.innerText = slider.track.details.rel + 1
      },
    })

    return () => {
      if (sliderInstance) {
        sliderInstance.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (slider) {
      keenSliderPrevious.current.addEventListener('click', () => slider.prev())
      keenSliderNext.current.addEventListener('click', () => slider.next())
    }
  }, [slider])

  return (
    <section className="bg-white">
      <div className="mx-auto p-4 sm:px-6 sm:py-4 lg:px-8 lg:py-6">

        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Team Leader of Different Domain
        </h2>

        <div className="mt-8">
          {/* <div ref={keenSliderRef} className="keen-slider flex gap-4 overflow-hidden h-[fit] sm:h-[25rem]"> */}
          <div ref={keenSliderRef} className="keen-slider flex gap-4 overflow-hidden h-fit md:h-[20rem]">
            {slidesData.map((slide, index) => (
              <div key={index} className="keen-slider__slide opacity-40 transition-opacity duration-500 w-[300px]">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt={slide.name}
                      src={slide.image}
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">{slide.name}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{slide.description}</p>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="mt-6  items-center justify-center gap-4 hidden">
            {/* flex */}
            <button
              aria-label="Previous slide"
              ref={keenSliderPrevious}
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <FaChevronCircleLeft />
            </button>

            <p className="w-16 text-center text-sm text-gray-700">
              <span ref={keenSliderActive}></span> / <span ref={keenSliderCount}></span>
            </p>

            <button
              aria-label="Next slide"
              ref={keenSliderNext}
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <FaChevronCircleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllLeads
