import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedContent from '../components/AnimatedContent';

const Footer = () => {
    return (
        <div className='bg-[var(--primary__color)] pt-12 pb-4 lg:pt-20 lg:pb-5 px-4 md:px-8 lg:px-16'>
            <div className='lg:container mx-auto'>
                <div className='flex justify-center mb-20 lg:mb-32'>
                    <div className='md:w-[65%] lg:w-1/2'>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0}
                            delay={0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                        >
                            <h4 className='text-center text-white font-semibold text-3xl lg:text-4xl'>Digital. Secure. Independent.</h4>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0}
                            delay={100}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                        >
                            <p className='text-white/80 text-center mt-4 lg:mt-5'>Built for modern professionals, families, and business owners across Canada. All communication is confidential and stored with bank-level security protocols.</p>
                        </AnimatedContent>
                        <div className='flex justify-center mt-6 lg:mt-8'>
                            <AnimatedContent
                                distance={150}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 80, friction: 20 }}
                                initialOpacity={0}
                                delay={200}
                                animateOpacity
                                scale={1.1}
                                threshold={0.2}
                            >
                                <a target='_blank' draggable="false" href="https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxACDA2HALqgJ50Rbjt11PtX4qILxh5uDR444hbpf6edx4fu3xj3xg8BtXf2LfDPSfPASwmojPK6j135awB4IkpxgX7OEmMGrMJgCFfHFr6N9zd1mFevDI4NwAeDzJIBupI29XTbPmZ1dk0eE7OOZmLs3nUXbHTzx1m2FlhkQsvDvacZ00UGNVuzVspuq8Qgf79mshv6GW-2FJ1fOqeo6ig5pN7Lo4jPaIWUsjhhZkDwt3d0BX9zfFEUcbq1zbaroS78g-3D-3DUiu1_p4A4YQt8epDIK9HlKea9sS9y-2FXI3hZ-2Br5MGDAGWSQZ5-2FNdlMNznSmx5vBjrWGdnjnbFE2Mv7-2FirA7nEBiNZzzPW8TFOHwcrDUa87jtA1jFHkbEwv1dL9Xd6C4A-2B8gkiEufPW3hPiUBegGKPiPQ4GY5ftIAtYVUiTYMCCgvjfQQarsw-2FEQEPZqWsRC2Nj1kv6Aa7oB5s49gYeX4WPf87drmEXlPSP4gG7AyY1t5AFXbAgn6ngUSQG8fgOmmVb5X2Vu-2FttSsDb31K-2BaWsNQZ-2Fv6HnxQPbFXAfyxqaXu6Q2UbHvztBCahymNuuqNVyk5qpBrvhk23PJMYhRqiCkTbGypqnqYccmVLc2J6Iem3I96kUhgw5Yj9FlueHzxO0FgxYmqqwU54Mgno2m56swKQdzvQVVUb2DD1WvMztryBkL58mPm6OZzlDFETl12DWZeVQB9tkJaxsnxDVine-2FRf4GXzuZ05HnuI9eLtbi1ZHE3XoD1LIEJeNOkfsl3Z-2BPWXEn-2BeG-2FbiUDRUHzFMcE-2F1Dq-2BKtlANv2iG9kdeAvbwgjfunlml8-2F5A7CEUmVuvTRHza0MbCSD5NA5UfuzNUh49yCLUOUoq0cUJQ8tEeUm6LSrO7ifMAOl62WhAVY8GJ9G0sKcVBLSlIWl-2F8Jg17dNVDuVA1MGFKUAvy8szwbYK5TfRXNLeoa-2B-2BxCl9aDF9bY6avELK1c9Qe6BNBctr7QxLwT8amHp2YN3P4FHL50imHwjwi57q-2BBSJ1JC2MRP2ZZI-2FjSN" className='text-sm lg:text-base inline-block text-[var(--primary__color)] font-semibold text-center bg-white hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Schedule Your Free Consultation</a>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 md:gap-x-10 gap-y-10 mb-10'>
                    <div className='col-span-12 md:col-span-4 lg:col-span-5'>
                        <Link to='/'>
                            <img src='../images/white-logo.png' alt='WalkerInsurance' className='aspect-video object-contain object-center w-36 lg:w-44'></img>
                        </Link>
                        <h5 className='font-semibold text-white text-xl lg:text-xl mt-4'>Disability • Critical Illness • Life Insurance</h5>
                        <p className='text-white/90 text-base mt-4'>Plan for the Unexpected. Protect What Matters.</p>
                    </div>
                    <div className='col-span-12 md:col-span-4 lg:col-span-3'>
                        <h5 className='font-semibold text-white text-xl lg:text-xl'>Quick Links</h5>
                        <ul className='mt-4 flex flex-col gap-y-2'>
                            <li>
                                <Link draggable="false" to="/about" className='inline-flex items-center gap-x-1 text-white transition-all duration-200 ease-in-out hover:ps-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    About</Link>
                            </li>
                            <li>
                                <Link draggable="false" to="/services" className='inline-flex items-center gap-x-1 text-white transition-all duration-200 ease-in-out hover:ps-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    Services</Link>
                            </li>
                            <li>
                                <Link draggable="false" to="/client-portal" className='inline-flex items-center gap-x-1 text-white transition-all duration-200 ease-in-out hover:ps-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    Client Portal</Link>
                            </li>
                            <li>
                                <Link draggable="false" to="/lead-generation" className='inline-flex items-center gap-x-1 text-white transition-all duration-200 ease-in-out hover:ps-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    Lead Generation</Link>
                            </li>
                            <li>
                                <Link draggable="false" to="/privacy-policy" className='inline-flex items-center gap-x-1 text-white transition-all duration-200 ease-in-out hover:ps-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                                    Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                        <h5 className='font-semibold text-white text-xl lg:text-xl'>Contact</h5>
                        <ul className='mt-4 flex flex-col gap-y-2'>
                            <li>
                                <a draggable="false" href="mailto:michael@walkerinsurance.ca" className='inline-flex items-center gap-x-2 text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                                    michael@walkerinsurance.ca</a>
                            </li>
                            <li>
                                <a draggable="false" href="tel:(123) 456-7890" className='inline-flex items-center gap-x-2 text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                                    (123) 456-7890</a>
                            </li>
                        </ul>
                        <h5 className='font-semibold text-white text-xl lg:text-xl mt-5'>Office Hours</h5>
                        <ul className='mt-4 flex flex-col gap-y-2'>
                            <li>
                                <a className='flex items-start gap-x-2 text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    Monday - Friday: 9am - 5pm
                                </a>
                            </li>
                            <li>
                                <a className='flex items-start gap-x-2 text-white'>
                                    Weekends: By appointment
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='w-full border-t border-white/25 mb-5'></p>
                <p className='text-center text-gray-300 te'>© 2025 Walker Insurance. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
