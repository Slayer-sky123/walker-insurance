import React from 'react'
import AnimatedContent from '../components/AnimatedContent';
import { Link } from 'react-router-dom'

const Home = () => {
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
                                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary__color)]'>Protect Your Income.
                                        Preserve Your Legacy.</h1>
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
                                    <h6 className='text-lg text-gray-600 mt-3 md:mt-4'>Walker Insurance is a digital-first insurance practice specializing in Disability, Critical Illness, and Life Insurance. We help professionals, business owners, and families protect their income, prepare for unexpected health challenges, and create lasting financial security for the next generation.</h6>
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
                                        <a target='_blank' draggable="false" href="https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxACDA2HALqgJ50Rbjt11PtX4qILxh5uDR444hbpf6edx4fu3xj3xg8BtXf2LfDPSfPASwmojPK6j135awB4IkpxgX7OEmMGrMJgCFfHFr6N9zd1mFevDI4NwAeDzJIBupI29XTbPmZ1dk0eE7OOZmLs3nUXbHTzx1m2FlhkQsvDvacZ00UGNVuzVspuq8Qgf79mshv6GW-2FJ1fOqeo6ig5pN7Lo4jPaIWUsjhhZkDwt3d0BX9zfFEUcbq1zbaroS78g-3D-3DUiu1_p4A4YQt8epDIK9HlKea9sS9y-2FXI3hZ-2Br5MGDAGWSQZ5-2FNdlMNznSmx5vBjrWGdnjnbFE2Mv7-2FirA7nEBiNZzzPW8TFOHwcrDUa87jtA1jFHkbEwv1dL9Xd6C4A-2B8gkiEufPW3hPiUBegGKPiPQ4GY5ftIAtYVUiTYMCCgvjfQQarsw-2FEQEPZqWsRC2Nj1kv6Aa7oB5s49gYeX4WPf87drmEXlPSP4gG7AyY1t5AFXbAgn6ngUSQG8fgOmmVb5X2Vu-2FttSsDb31K-2BaWsNQZ-2Fv6HnxQPbFXAfyxqaXu6Q2UbHvztBCahymNuuqNVyk5qpBrvhk23PJMYhRqiCkTbGypqnqYccmVLc2J6Iem3I96kUhgw5Yj9FlueHzxO0FgxYmqqwU54Mgno2m56swKQdzvQVVUb2DD1WvMztryBkL58mPm6OZzlDFETl12DWZeVQB9tkJaxsnxDVine-2FRf4GXzuZ05HnuI9eLtbi1ZHE3XoD1LIEJeNOkfsl3Z-2BPWXEn-2BeG-2FbiUDRUHzFMcE-2F1Dq-2BKtlANv2iG9kdeAvbwgjfunlml8-2F5A7CEUmVuvTRHza0MbCSD5NA5UfuzNUh49yCLUOUoq0cUJQ8tEeUm6LSrO7ifMAOl62WhAVY8GJ9G0sKcVBLSlIWl-2F8Jg17dNVDuVA1MGFKUAvy8szwbYK5TfRXNLeoa-2B-2BxCl9aDF9bY6avELK1c9Qe6BNBctr7QxLwT8amHp2YN3P4FHL50imHwjwi57q-2BBSJ1JC2MRP2ZZI-2FjSN" className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Book a Consultation</a>
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
                                <img draggable="false" className='w-full h-auto aspect-[16/12] object-cover object-center rounded-2xl shadow-lg' src="./images/home-banner.webp" alt="" />
                            </AnimatedContent>
                        </div>
                    </div>
                    <div className='mt-16 md:mt-20 lg:mt-20 w-full'>
                        <div className='flex justify-center'>
                            <div className='md:w-3/4 lg:w-3/4'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <h2 className='text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center'>What We Specialize In</h2>
                                </AnimatedContent>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={100}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <p className='text-base text-center text-gray-600 mt-3 md:mt-4'>At Walker Insurance, we focus exclusively on three essential areas of risk protection. Each solution is delivered through a fully digital process tailored to support your income, health, and long-term financial security.</p>
                                </AnimatedContent>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 mt-10 md:gap-x-8 gap-y-8'>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <div className='border-2 border-gray-200 rounded-md p-7 lg:min-h-[295px] select-none hover:border-[var(--primary__color)] transition-all duration-200 ease-in-out h-full'>
                                        <div className='text-[var(--primary__color)]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                                        </div>
                                        <h3 className='text-[var(--primary__color)] font-semibold text-xl lg:text-xl my-3'>Disability Insurance</h3>
                                        <p className='text-base text-gray-600'>Protects your income if an illness or injury prevents you from working. We help professionals, business owners, and families build a financial safety plan that supports their lifestyle through uncertain times.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={100}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <div className='border-2 border-gray-200 rounded-md p-7 lg:min-h-[295px] select-none hover:border-[var(--primary__color)] transition-all duration-200 ease-in-out h-full'>
                                        <div className='text-[var(--primary__color)]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 lucide lucide-heart-plus-icon lucide-heart-plus"><path d="M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5" /><path d="M15 15h6" /><path d="M18 12v6" /></svg>
                                        </div>
                                        <h3 className='text-[var(--primary__color)] font-semibold text-xl lg:text-xl my-3'>Critical Illness Insurance</h3>
                                        <p className='text-base text-gray-600'>Provides a lump sum payment if you are diagnosed with a covered condition. This coverage allows you to focus on recovery without added financial strain.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={300}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <div className='border-2 border-gray-200 rounded-md p-7 lg:min-h-[295px] select-none hover:border-[var(--primary__color)] transition-all duration-200 ease-in-out h-full'>
                                        <div className='text-[var(--primary__color)]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-10 lucide lucide-heart-pulse-icon lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></svg>
                                        </div>
                                        <h3 className='text-[var(--primary__color)] font-semibold text-xl lg:text-xl my-3'>Life Insurance</h3>
                                        <p className='text-base text-gray-600'>Delivers financial protection to your loved ones or business in the event of your death. We design coverage that supports income replacement, estate preservation, and long-term planning goals.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-10 lg:px-16'>
                    <div className='lg:container mx-auto'>
                        <h4 className='text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center'>What Sets Us Apart</h4>
                        <div className='flex justify-center'>
                            <div className='md:w-3/4 lg:w-3/4'>
                                <h5 className='text-center font-medium text-xl mt-4 md:mt-5 text-gray-600'>We focus on clarity, experience, and personalized service</h5>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={100}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <p className='text-base text-center text-gray-600 mt-2 md:mt-3'>At Walker Insurance, you receive advice that is structured, relevant, and designed to protect your
                                        income, health, and legacy</p>
                                </AnimatedContent>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <ul className='mt-8 md:w-3/4 flex flex-col gap-y-5'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={50}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <li className='select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>
                                        <div className='flex flex-col gap-y-2'>
                                            <span className='text-xl'>Specialized Focus</span>
                                            <span className='text-gray-500 font-normal'>We work only in Disability Insurance, Critical Illness Insurance, and Life Insurance to deliver focused and relevant solutions</span>
                                        </div>
                                    </li>
                                </AnimatedContent>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={100}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <li className='select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>
                                        <div className='flex flex-col gap-y-2'>
                                            <span className='text-xl'>Digital First Process</span>
                                            <span className='text-gray-500 font-normal'>Everything is done online, from consultation to policy delivery. No paperwork or in person meetings required</span>
                                        </div>
                                    </li>
                                </AnimatedContent>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={150}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <li className='select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>
                                        <div className='flex flex-col gap-y-2'>
                                            <span className='text-xl'>Independent Recommendations</span>
                                            <span className='text-gray-500 font-normal'>We work with multiple insurers but always act in your best interest</span>
                                        </div>
                                    </li>
                                </AnimatedContent>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={200}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <li className='select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>
                                        <div className='flex flex-col gap-y-2'>
                                            <span className='text-xl'>Professional Expertise</span>
                                            <span className='text-gray-500 font-normal'>With over ten years of experience and advanced designations, we provide advice grounded in planning and practical insight</span>
                                        </div>
                                    </li>
                                </AnimatedContent>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={250}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <li className='select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>
                                        <div className='flex flex-col gap-y-2'>
                                            <span className='text-xl'>Collaborative Planning</span>
                                            <span className='text-gray-500 font-normal'>We coordinate with your accountant or lawyer when needed to ensure your insurance fits into your broader financial or estate plan</span>
                                        </div>
                                    </li>
                                </AnimatedContent>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-10 md:py-16 px-4 md:px-10 lg:px-16'>
                    <div className='lg:container mx-auto'>
                        <h4 className='text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center'>Our Process</h4>
                        <div className='flex justify-center'>
                            <div className='md:w-3/4 lg:w-3/4'>
                                <h5 className='text-center font-medium text-xl mt-4 md:mt-5 text-gray-600'>A clear process. No pressure. Fully online.</h5>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={100}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <p className='text-base text-center text-gray-600 mt-2 md:mt-3'>Working with Walker Insurance is simple. We guide you through every step so you can make confident decisions without unnecessary complexity.</p>
                                </AnimatedContent>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 mt-10 md:gap-x-8 gap-y-1'>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={50}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <div className='p-7 select-none h-full flex flex-col justify-center items-center'>
                                        <div className='text-[var(--primary__color)] size-16 rounded-full bg-[#e8f1ff] flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                        </div>
                                        <h3 className='text-[var(--primary__color)] text-center font-semibold text-xl lg:text-xl mb-3 mt-4'>Book a Consultation</h3>
                                        <p className='text-base text-gray-600 text-center'>Schedule a short virtual meeting to discuss what matters most to you. We take time to understand your income, family, and planning goals.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={100}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <div className='p-7 select-none h-full flex flex-col justify-center items-center'>
                                        <div className='text-[var(--primary__color)] size-16 rounded-full bg-[#e8f1ff] flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 lucide lucide-book-icon lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /></svg>
                                        </div>
                                        <h3 className='text-[var(--primary__color)] text-center font-semibold text-xl lg:text-xl mb-3 mt-4'>Review Your Plan</h3>
                                        <p className='text-base text-gray-600 text-center'>We present tailored options for Disability Insurance, Critical Illness Insurance, and Life Insurance. You choose the solution that fits your needs.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                            <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    delay={150}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                >
                                    <div className='p-7 select-none h-full flex flex-col justify-center items-center'>
                                        <div className='text-[var(--primary__color)] size-16 rounded-full bg-[#e8f1ff] flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 lucide lucide-shield-plus-icon lucide-shield-plus"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                                        </div>
                                        <h3 className='text-[var(--primary__color)] text-center font-semibold text-xl lg:text-xl mb-3 mt-4'>Apply and Get Covered</h3>
                                        <p className='text-base text-gray-600 text-center'>Your application is completed securely online. We manage the process from start to finish and stay in touch until your policy is in place.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
