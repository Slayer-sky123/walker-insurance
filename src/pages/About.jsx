import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialCarousel from '../components/TestimonialCarousel';

const About = () => {
  const testimonials = [
    {
      name: 'James Wilson',
      role: 'Business Owner',
      message:
        'The level of personalized service and attention to detail we received was exceptional. Highly recommend Walker Insurance.',
    },
    {
      name: 'Emily Carter',
      role: 'Marketing Manager',
      message:
        'Incredible support and professionalism from the entire team. We felt confident and well informed throughout.',
    },
    {
      name: 'Michael Lee',
      role: 'Software Engineer',
      message:
        'Reliable, transparent, and efficient — everything you want in an insurance provider.',
    },
    {
      name: 'Michael Lee',
      role: 'Software Engineer',
      message:
        'Reliable, transparent, and efficient — everything you want in an insurance provider.',
    },
  ];

  return (
    <>
      <section className='bg-white mt-14 lg:mt-12'>
        <div className='lg:container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20'>
          <div className='grid grid-cols-12 md:gap-x-8 gap-y-6'>
            <div className='col-span-12 md:col-span-6 lg:col-span-6 order-2 md:order-1 flex items-center'>
              <div>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--primary__color)]'>Insurance That Makes Sense</h1>
                <h6 className='text-lg text-gray-600 mt-3 md:mt-4'>At Walker Insurance, we believe in making insurance clear,
                  accessible, and aligned with your goals. Our expertise is in crafting
                  protection that fits your unique journey.</h6>

                <div className='flex mt-6 lg:mt-6'>
                  <Link draggable="false" to='/contact' className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Schedule Your Free Consultation</Link>
                </div>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-6 order-1 md:order-2'>
              <img draggable="false" className='w-full h-auto aspect-[16/12] object-cover object-center rounded-2xl shadow-lg' src="./images/about-banner.webp" alt="" />
            </div>
          </div>
          <div className='grid grid-cols-12 gap-x-5 md:gap-x-10 gap-y-5 mt-16 md:mt-24 lg:mt-24'>
            <div className='col-span-6 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white shadow-md rounded-xl px-4 py-7 lg:py-10 lg:px-6 flex flex-col justify-center items-center border border-gray-200'>
                <h5 className='font-bold text-[var(--primary__color)] text-3xl lg:text-5xl'>12+</h5>
                <p className='text-gray-500 mt-2 text-center'>Years Experience</p>
              </div>
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white shadow-md rounded-xl px-4 py-7 lg:py-10 lg:px-6 flex flex-col justify-center items-center border border-gray-200'>
                <h5 className='font-bold text-[var(--primary__color)] text-3xl lg:text-5xl'>500+</h5>
                <p className='text-gray-500 mt-2 text-center'>Satisfied Clients</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white shadow-md rounded-xl px-4 py-7 lg:py-10 lg:px-6 flex flex-col justify-center items-center border border-gray-200'>
                <h5 className='font-bold text-[var(--primary__color)] text-3xl lg:text-5xl'>2</h5>
                <p className='text-gray-500 mt-2 text-center'>Professional Designations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[var(--primary__color)] py-12 lg:py-16 px-4 md:px-8 lg:px-16'>
        <div className='lg:container mx-auto'>
          <h4 className='text-center text-white font-semibold text-3xl lg:text-4xl'>Our Values</h4>
          <div className='grid grid-cols-12 md:gap-x-8 gap-y-5 mt-10'>
            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white/10 backdrop-blur-lg shadow-md rounded-xl px-6 py-7 lg:py-6 lg:px-6'>
                <div className='size-14 bg-white/20 mb-4 rounded-full inline-flex justify-center items-center text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-7 lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h5 className='font-semibold text-white text-2xl lg:text-2xl'>Trust</h5>
                <p className='text-white mt-2'>Built on years of experience and integrity in
                  financial services.</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white/10 backdrop-blur-lg shadow-md rounded-xl px-6 py-7 lg:py-6 lg:px-6'>
                <div className='size-14 bg-white/20 mb-4 rounded-full inline-flex justify-center items-center text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
                <h5 className='font-semibold text-white text-2xl lg:text-2xl'>Clarity</h5>
                <p className='text-white mt-2'>Clear communication and transparent
                  processes every step of the way.</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white/10 backdrop-blur-lg shadow-md rounded-xl px-6 py-7 lg:py-6 lg:px-6'>
                <div className='size-14 bg-white/20 mb-4 rounded-full inline-flex justify-center items-center text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <h5 className='font-semibold text-white text-2xl lg:text-2xl'>Personalization</h5>
                <p className='text-white mt-2'>Tailored solutions that match your unique
                  needs and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#f5f9ff] pt-12 pb-8 lg:py-16 px-4 md:px-8 lg:px-16'>
        <div className='lg:container mx-auto'>
          <h4 className='text-center text-[var(--primary__color)] font-semibold text-2xl md:text-3xl lg:text-4xl'>What Our Clients Say</h4>
          <div className='w-full mt-2 md:mt-5'>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>
      <section className='bg-white py-12 lg:py-16 px-4 md:px-8 lg:px-16'>
        <div className='lg:container mx-auto'>
          <div className='grid grid-cols-12 md:gap-x-8 gap-y-6'>
            <div className='col-span-12 md:col-span-6 lg:col-span-6 order-2 md:order-1 flex items-center'>
              <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary__color)]'>Meet Michael Walker</h1>
                <h6 className='text-base text-gray-600 mt-3 md:mt-4'>Michael Walker is a licensed Canadian insurance advisor with more than 12
                  years of experience helping clients protect their income, build their legacy,
                  and prepare for life's unknowns.</h6>
                <ul className='mt-4 flex flex-col gap-y-3'>
                  <li>
                    <p className='text-base text-gray-600 flex items-start gap-x-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00cfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 mt-1 lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
                      CLU (Chartered Life Underwriter) & TEP (Trust and Estate Practitioner)
                    </p>
                  </li>
                  <li>
                    <p className='text-base text-gray-600 flex items-start gap-x-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00cfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 mt-1 lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                      Specialized in serving professionals and business owners
                    </p>
                  </li>
                  <li>
                    <p className='text-base text-gray-600 flex items-start gap-x-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00cfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 mt-1 lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                      Fully digital practice serving clients across Canada
                    </p>
                  </li>
                </ul>
                <h6 className='text-base text-gray-600 mt-3 md:mt-4'>Michael believes insurance should complement—not compete with—the
                  tax and legal strategies developed by your advisory team. He's here to
                  bring structure and protection, not complication.</h6>
                <h6 className='text-base text-gray-600 mt-3 md:mt-4'>Outside of work, Michael enjoys real estate, spending time at the lake with
                  his wife and son, and traveling the world — although not as often these
                  days.</h6>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-6 order-1 md:order-2'>
              <img draggable="false" className='w-full h-auto aspect-[16/12] object-cover object-center rounded-2xl shadow-lg' src="./images/about-banner.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
