import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedContent from '../components/AnimatedContent';

const Portal = () => {
    return (
        <section>
            <div>
                <div className="bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-10 lg:px-16 mt-20">
                    <div className="lg:container mx-auto">
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
                                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--primary__color)]'>Your Secure Digital
                                            Vault</h1>
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
                                        <h6 className='text-lg text-gray-600 mt-3 md:mt-4'>Every client receives access to a private and encrypted portal for managing insurance policies and important documents. You can share access with trusted professionals or family members — all in one place.</h6>
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
                                            <a target='_blank' draggable="false" href='https://walkerinsurance.sidedrawer.com/' className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Access Secure Portal</a>
                                        </div>
                                    </AnimatedContent>
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-6 order-1 md:order-2 flex justify-center items-center'>
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
                                    <div className='size-72 md:size-96 lg:size-96 bg-white shadow-lg text-[var(--primary__color)] rounded-full flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-48 md:size-56 lg:size-60 lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </div>
                                </AnimatedContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-10 md:py-16 px-4 md:px-10 lg:px-16">
                <div className="lg:container mx-auto">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
                        Benefits of Your Vault
                    </h4>
                    <div className='mt-6 md:mt-10 grid grid-cols-12 md:gap-x-6 gap-y-6'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
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
                                <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                    <div className='text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                    </div>
                                    <div className='space-y-2'>
                                        <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Peace of Mind for Families</h6>
                                        <p className='text-base text-gray-600'>Documents are clearly organized, accessible, and secure.</p>
                                    </div>
                                </div>
                            </AnimatedContent>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
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
                                <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                    <div className='text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                    </div>
                                    <div className='space-y-2'>
                                        <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Less Stress for Executors</h6>
                                        <p className='text-base text-gray-600'>Key information is ready when it is needed most.</p>
                                    </div>
                                </div>
                            </AnimatedContent>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
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
                                <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                    <div className='text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                    </div>
                                    <div className='space-y-2'>
                                        <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Clarity for Business Owners</h6>
                                        <p className='text-base text-gray-600'>Store insurance, agreements, and planning documents in one secure location.</p>
                                    </div>
                                </div>
                            </AnimatedContent>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
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
                                <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                    <div className='text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                    </div>
                                    <div className='space-y-2'>
                                        <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Efficiency for Professionals</h6>
                                        <p className='text-base text-gray-600'>Grant access to your accountant or lawyer to streamline planning and reduce delays.</p>
                                    </div>
                                </div>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-10 lg:px-16">
                    <div className="lg:container mx-auto">
                        <h4 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
                            Security You Can Trust
                        </h4>
                        <div className='mt-7 md:mt-10 grid grid-cols-12 gap-y-8 gap-x-8 lg:gap-x-4'>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
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
                                    <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                        <div className='flex justify-center text-[var(--primary__color)]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-9 lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                        </div>
                                        <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>Enterprise Encryption</h5>
                                        <p className='text-center text-gray-600 text-sm'>We use the same encryption standards as major financial institutions.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
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
                                    <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                        <div className='flex justify-center text-[var(--primary__color)]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-9 lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                                        </div>
                                        <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>Private Storage Only</h5>
                                        <p className='text-center text-gray-600 text-sm'>Your data is never stored on public servers.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
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
                                    <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                        <div className='flex justify-center text-[var(--primary__color)]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-9 lucide lucide-user-lock-icon lucide-user-lock"><circle cx="10" cy="7" r="4" /><path d="M10.3 15H7a4 4 0 0 0-4 4v2" /><path d="M15 15.5V14a2 2 0 0 1 4 0v1.5" /><rect width="8" height="5" x="13" y="16" rx=".899" /></svg>
                                        </div>
                                        <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>Permission Based Access</h5>
                                        <p className='text-center text-gray-600 text-sm'>Control who can see what. All access is tracked for transparency.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
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
                                    <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                        <div className='flex justify-center text-[var(--primary__color)]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="size-9 lucide lucide-sliders-vertical-icon lucide-sliders-vertical"><line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" /><line x1="2" x2="6" y1="14" y2="14" /><line x1="10" x2="14" y1="8" y2="8" /><line x1="18" x2="22" y1="16" y2="16" /></svg>
                                        </div>
                                        <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>You Stay in Control</h5>
                                        <p className='text-center text-gray-600 text-sm'>Grant or remove access anytime with full visibility and control.</p>
                                    </div>
                                </AnimatedContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-10 md:py-16 px-4 md:px-10 lg:px-16">
                <div className="lg:container mx-auto">
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
                        <h4 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
                            Efficiency Promise
                        </h4>
                    </AnimatedContent>
                    <div className='flex justify-center mt-4'>
                        <div className='md:w-2/4'>
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
                                <p className='text-base text-gray-600 text-center'>With everything in one place, your professional team can act with clarity, speed, and purpose.</p>
                            </AnimatedContent>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-x-5 mt-6'>
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
                            <a target='_blank' draggable="false" href='https://walkerinsurance.sidedrawer.com/' className='text-sm lg:text-base inline-flex items-center gap-x-1 md:gap-x-2 text-white border-2 border-transparent font-medium text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 md:size-6 lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                                Access Secure Portal</a>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portal
