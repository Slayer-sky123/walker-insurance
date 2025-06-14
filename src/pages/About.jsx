import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialCarousel from '../components/TestimonialCarousel';
import CountUp from '../components/CountUp';
import AnimatedContent from '../components/AnimatedContent';

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
      <section className='bg-white mt-16 lg:mt-12'>
        <div className='lg:container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20'>
          <div className='grid grid-cols-12 md:gap-x-8 gap-y-6'>
            <div className='col-span-12 md:col-span-6 lg:col-span-6 order-2 md:order-1 flex items-center'>
              <div>
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary__color)]'>Specialized Insurance Advice with a Planning Focus</h1>
                </AnimatedContent>
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  config={{ tension: 80, friction: 20 }}
                  delay={100}
                  initialOpacity={0}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <h6 className='text-lg text-gray-600 mt-3 md:mt-4'>Walker Insurance offers structured advice for Disability Insurance, Critical Illness Insurance, and Life Insurance. Everything is delivered through a secure digital process tailored for professionals, families, and business owners.</h6>
                </AnimatedContent>
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={true}
                  config={{ tension: 80, friction: 20 }}
                  delay={200}
                  initialOpacity={0}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className='flex mt-6 lg:mt-6'>
                    <a target='_blank' draggable="false" href='https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxACDA2HALqgJ50Rbjt11PtX4qILxh5uDR444hbpf6edx4fu3xj3xg8BtXf2LfDPSfPASwmojPK6j135awB4IkpxgX7OEmMGrMJgCFfHFr6N9zd1mFevDI4NwAeDzJIBupI29XTbPmZ1dk0eE7OOZmLs3nUXbHTzx1m2FlhkQsvDvacZ00UGNVuzVspuq8Qgf79mshv6GW-2FJ1fOqeo6ig5pN7Lo4jPaIWUsjhhZkDwt3d0BX9zfFEUcbq1zbaroS78g-3D-3DUiu1_p4A4YQt8epDIK9HlKea9sS9y-2FXI3hZ-2Br5MGDAGWSQZ5-2FNdlMNznSmx5vBjrWGdnjnbFE2Mv7-2FirA7nEBiNZzzPW8TFOHwcrDUa87jtA1jFHkbEwv1dL9Xd6C4A-2B8gkiEufPW3hPiUBegGKPiPQ4GY5ftIAtYVUiTYMCCgvjfQQarsw-2FEQEPZqWsRC2Nj1kv6Aa7oB5s49gYeX4WPf87drmEXlPSP4gG7AyY1t5AFXbAgn6ngUSQG8fgOmmVb5X2Vu-2FttSsDb31K-2BaWsNQZ-2Fv6HnxQPbFXAfyxqaXu6Q2UbHvztBCahymNuuqNVyk5qpBrvhk23PJMYhRqiCkTbGypqnqYccmVLc2J6Iem3I96kUhgw5Yj9FlueHzxO0FgxYmqqwU54Mgno2m56swKQdzvQVVUb2DD1WvMztryBkL58mPm6OZzlDFETl12DWZeVQB9tkJaxsnxDVine-2FRf4GXzuZ05HnuI9eLtbi1ZHE3XoD1LIEJeNOkfsl3Z-2BPWXEn-2BeG-2FbiUDRUHzFMcE-2F1Dq-2BKtlANv2iG9kdeAvbwgjfunlml8-2F5A7CEUmVuvTRHza0MbCSD5NA5UfuzNUh49yCLUOUoq0cUJQ8tEeUm6LSrO7ifMAOl62WhAVY8GJ9G0sKcVBLSlIWl-2F8Jg17dNVDuVA1MGFKUAvy8szwbYK5TfRXNLeoa-2B-2BxCl9aDF9bY6avELK1c9Qe6BNBctr7QxLwT8amHp2YN3P4FHL50imHwjwi57q-2BBSJ1JC2MRP2ZZI-2FjSN' className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Schedule Your Free Consultation</a>
                  </div>
                </AnimatedContent>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-6 order-1 md:order-2'>
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <img draggable="false" className='w-full h-auto aspect-[16/12] object-cover object-center rounded-2xl shadow-lg' src="./images/about-banner-2.webp" alt="Specialized Insurance Advice with a Planning Focus" />
              </AnimatedContent>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-x-5 md:gap-x-10 gap-y-5 mt-16 md:mt-24 lg:mt-24'>
            <div className='col-span-6 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white shadow-md rounded-xl px-4 py-7 lg:py-10 lg:px-6 flex flex-col justify-center items-center border border-gray-200'>
                <h5 className='font-bold text-[var(--primary__color)] text-3xl lg:text-5xl'><CountUp
                  from={0}
                  to={12}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+</h5>
                <p className='text-gray-500 mt-2 text-center'>Years Experience</p>
              </div>
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white shadow-md rounded-xl px-4 py-7 lg:py-10 lg:px-6 flex flex-col justify-center items-center border border-gray-200'>
                <h5 className='font-bold text-[var(--primary__color)] text-3xl lg:text-5xl'><CountUp
                  from={0}
                  to={500}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+</h5>
                <p className='text-gray-500 mt-2 text-center'>Satisfied Clients</p>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
              <div className='w-full h-full bg-white shadow-md rounded-xl px-4 py-7 lg:py-10 lg:px-6 flex flex-col justify-center items-center border border-gray-200'>
                <h5 className='font-bold text-[var(--primary__color)] text-3xl lg:text-5xl'><CountUp
                  from={0}
                  to={2}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                /></h5>
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
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                delay={0}
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className='w-full h-full md:min-h-[235px] lg:min-h-[235px] bg-white/10 backdrop-blur-lg shadow-md rounded-xl px-6 py-7 lg:py-6 lg:px-6'>
                  <div className='size-14 bg-white/20 mb-4 rounded-full inline-flex justify-center items-center text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                  <h5 className='font-semibold text-white text-2xl lg:text-2xl'>Clarity</h5>
                  <p className='text-white mt-2'>We design insurance strategies that reflect your personal and financial priorities.</p>
                </div>
              </AnimatedContent>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                delay={100}
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className='w-full h-full md:min-h-[235px] lg:min-h-[235px] bg-white/10 backdrop-blur-lg shadow-md rounded-xl px-6 py-7 lg:py-6 lg:px-6'>
                  <div className='size-14 bg-white/20 mb-4 rounded-full inline-flex justify-center items-center text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                  <h5 className='font-semibold text-white text-2xl lg:text-2xl'>Integrity</h5>
                  <p className='text-white mt-2'>Our advice is independent and backed by professional designations and experience.</p>
                </div>
              </AnimatedContent>
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                delay={200}
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className='w-full h-full md:min-h-[235px] bg-white/10 backdrop-blur-lg shadow-md rounded-xl px-6 py-7 lg:py-6 lg:px-6'>
                  <div className='size-14 bg-white/20 mb-4 rounded-full inline-flex justify-center items-center text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                  <h5 className='font-semibold text-white text-2xl lg:text-2xl'>Simplicity</h5>
                  <p className='text-white mt-2'>We make the process easy to navigate using secure technology and virtual meetings.</p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='bg-[#f5f9ff] pt-12 pb-8 lg:py-16 px-4 md:px-8 lg:px-16'>
        <div className='lg:container mx-auto'>
          <h4 className='text-center text-[var(--primary__color)] font-semibold text-2xl md:text-3xl lg:text-4xl'>What Our Clients Say</h4>
          <div className='w-full mt-2 md:mt-5'>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section> */}
      <section className='bg-white py-12 lg:py-16 px-4 md:px-8 lg:px-16'>
        <div className='lg:container mx-auto'>
          <div className='grid grid-cols-12 md:gap-x-8 gap-y-6'>
            <div className='col-span-12 md:col-span-12 lg:col-span-6 order-2 md:order-1 flex items-center'>
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div>
                  <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--primary__color)]'>Meet Michael Walker</h1>
                  <h6 className='text-base text-gray-600 mt-3 md:mt-4'>Michael Walker is a licensed Canadian insurance advisor with more than twelve years of experience. He helps clients protect income, plan for health events, and build long term financial security.</h6>
                  <h6 className='text-base text-gray-600 mt-2 md:mt-3'>He holds a Bachelor of Commerce degree and the following designations:</h6>
                  <ul className='mt-4 flex flex-col gap-y-3'>
                    <li className='flex items-start gap-x-2 text-gray-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 mt-1 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                      <p className='text-lg font-semibold text-gray-600'>
                        Chartered Life Underwriter (CLU)<br></br>
                        <span className='font-normal text-gray-600 text-base leading-tight'>Focused on life insurance planning, business continuity, and estate strategies.</span>
                      </p>
                    </li>
                    <li className='flex items-start gap-x-2 text-gray-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 mt-1 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                      <p className='text-lg font-semibold text-gray-600'>
                        Trust and Estate Practitioner (TEP)<br></br>
                        <span className='font-normal text-gray-600 text-base leading-tight'>Recognized internationally for expertise in succession planning and intergenerational wealth transfer.</span>
                      </p>
                    </li>
                    <li className='flex items-start gap-x-2 text-gray-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 mt-1 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                      <p className='text-lg font-semibold text-gray-600'>
                        Certified Health Insurance Specialist (CHS)<br></br>
                        <span className='font-normal text-gray-600 text-base leading-tight'>Specializing in Disability Insurance, Critical Illness Insurance, and related living benefits.</span>
                      </p>
                    </li>
                  </ul>
                  <h6 className='text-base text-gray-600 mt-3 md:mt-4'>Outside of work, Michael enjoys real estate as a personal interest, values time with his family, and makes space for travel when possible.</h6>
                </div>
              </AnimatedContent>
            </div>
            <div className='col-span-12 md:col-span-12 lg:col-span-6 order-1 md:order-2'>
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <img draggable="false" className='w-full h-auto aspect-[16/12] object-cover object-center rounded-2xl shadow-lg' src="./images/walker-img.webp" alt="Meet Michael Walker" />
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
