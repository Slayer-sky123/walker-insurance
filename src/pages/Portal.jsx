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
                                        <h6 className='text-lg text-gray-600 mt-3 md:mt-4'>Every client gets access to a private, encrypted document
                                            vault where you can store, view, and share your most
                                            important insurance and estate documents — all in one
                                            place.</h6>
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
                                            <a target='_blank' draggable="false" href='https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxACDA2HALqgJ50Rbjt11PtX4qILxh5uDR444hbpf6edx4fu3xj3xg8BtXf2LfDPSfPASwmojPK6j135awB4IkpxgX7OEmMGrMJgCFfHFr6N9zd1mFevDI4NwAeDzJIBupI29XTbPmZ1dk0eE7OOZmLs3nUXbHTzx1m2FlhkQsvDvacZ00UGNVuzVspuq8Qgf79mshv6GW-2FJ1fOqeo6ig5pN7Lo4jPaIWUsjhhZkDwt3d0BX9zfFEUcbq1zbaroS78g-3D-3DUiu1_p4A4YQt8epDIK9HlKea9sS9y-2FXI3hZ-2Br5MGDAGWSQZ5-2FNdlMNznSmx5vBjrWGdnjnbFE2Mv7-2FirA7nEBiNZzzPW8TFOHwcrDUa87jtA1jFHkbEwv1dL9Xd6C4A-2B8gkiEufPW3hPiUBegGKPiPQ4GY5ftIAtYVUiTYMCCgvjfQQarsw-2FEQEPZqWsRC2Nj1kv6Aa7oB5s49gYeX4WPf87drmEXlPSP4gG7AyY1t5AFXbAgn6ngUSQG8fgOmmVb5X2Vu-2FttSsDb31K-2BaWsNQZ-2Fv6HnxQPbFXAfyxqaXu6Q2UbHvztBCahymNuuqNVyk5qpBrvhk23PJMYhRqiCkTbGypqnqYccmVLc2J6Iem3I96kUhgw5Yj9FlueHzxO0FgxYmqqwU54Mgno2m56swKQdzvQVVUb2DD1WvMztryBkL58mPm6OZzlDFETl12DWZeVQB9tkJaxsnxDVine-2FRf4GXzuZ05HnuI9eLtbi1ZHE3XoD1LIEJeNOkfsl3Z-2BPWXEn-2BeG-2FbiUDRUHzFMcE-2F1Dq-2BKtlANv2iG9kdeAvbwgjfunlml8-2F5A7CEUmVuvTRHza0MbCSD5NA5UfuzNUh49yCLUOUoq0cUJQ8tEeUm6LSrO7ifMAOl62WhAVY8GJ9G0sKcVBLSlIWl-2F8Jg17dNVDuVA1MGFKUAvy8szwbYK5TfRXNLeoa-2B-2BxCl9aDF9bY6avELK1c9Qe6BNBctr7QxLwT8amHp2YN3P4FHL50imHwjwi57q-2BBSJ1JC2MRP2ZZI-2FjSN' className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Access Secure Portal</a>
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
                                    <div className='size-80 md:size-96 lg:size-96 bg-white shadow-lg text-[var(--primary__color)] rounded-full flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-52 md:size-56 lg:size-60 lucide lucide-shield-plus-icon lucide-shield-plus"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>
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
                        Why It Matters
                    </h4>
                    <div className='mt-6 md:mt-10 grid grid-cols-12 lg:gap-x-6 gap-y-6'>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                            <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                <div className='text-[var(--primary__color)]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                <div className='space-y-2'>
                                    <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Peace of Mind for Families</h6>
                                    <p className='text-base text-gray-600'>Families gain peace of mind knowing their documents are
                                        always accessible, organized, and secure.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                            <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                <div className='text-[var(--primary__color)]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                <div className='space-y-2'>
                                    <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Reduced Stress</h6>
                                    <p className='text-base text-gray-600'>Executors & spouses avoid stress by knowing exactly where
                                        things are when they're needed most.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                            <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                <div className='text-[var(--primary__color)]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                <div className='space-y-2'>
                                    <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Business Organization</h6>
                                    <p className='text-base text-gray-600'>Business owners store policies, agreements, and succession
                                        plans in one organized location.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 lg:col-span-6'>
                            <div className='bg-[#e8f1ff] p-5 flex items-start gap-x-3 rounded-lg'>
                                <div className='text-[var(--primary__color)]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                </div>
                                <div className='space-y-2'>
                                    <h6 className='text-xl font-semibold text-[var(--primary__color)]'>Professional Efficiency</h6>
                                    <p className='text-base text-gray-600'>Professionals can grant secure access to their accountant or
                                        lawyer — reducing back-and-forth and saving time.</p>
                                </div>
                            </div>
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
                        <div className='mt-7 md:mt-10 grid grid-cols-12 gap-y-8 lg:gap-x-4'>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                                <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                    <div className='flex justify-center text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-9 lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </div>
                                    <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>Bank-grade encryption</h5>
                                    <p className='text-center text-gray-600 text-sm'>Your data is protected with the
                                        same level of encryption used
                                        by leading financial
                                        institutions.</p>
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                                <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                    <div className='flex justify-center text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-9 lucide lucide-server-off-icon lucide-server-off"><path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" /><path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" /><path d="M22 17v-1a2 2 0 0 0-2-2h-1" /><path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" /><path d="M6 18h.01" /><path d="m2 2 20 20" /></svg>
                                    </div>
                                    <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>No public servers</h5>
                                    <p className='text-center text-gray-600 text-sm'>Your sensitive documents are
                                        never stored on public servers,
                                        maintaining maximum
                                        privacy.</p>
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                                <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                    <div className='flex justify-center text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-9 lucide lucide-user-lock-icon lucide-user-lock"><circle cx="10" cy="7" r="4" /><path d="M10.3 15H7a4 4 0 0 0-4 4v2" /><path d="M15 15.5V14a2 2 0 0 1 4 0v1.5" /><rect width="8" height="5" x="13" y="16" rx=".899" /></svg>
                                    </div>
                                    <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>Permission controls</h5>
                                    <p className='text-center text-gray-600 text-sm'>Full permission controls and
                                        activity tracking ensure you
                                        know who accessed what and
                                        when.</p>
                                </div>
                            </div>
                            <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                                <div className='h-full w-full bg-white shadow-lg rounded-lg px-7 py-10 space-y-3'>
                                    <div className='flex justify-center text-[var(--primary__color)]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="size-9 lucide lucide-sliders-vertical-icon lucide-sliders-vertical"><line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" /><line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" /><line x1="2" x2="6" y1="14" y2="14" /><line x1="10" x2="14" y1="8" y2="8" /><line x1="18" x2="22" y1="16" y2="16" /></svg>
                                    </div>
                                    <h5 className='text-[var(--primary__color)] text-lg font-semibold text-center'>Complete control</h5>
                                    <p className='text-center text-gray-600 text-sm'>You control access at all
                                        times, determining who can
                                        view which documents within
                                        your vault.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-10 md:py-16 px-4 md:px-10 lg:px-16">
                <div className="lg:container mx-auto">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
                        Efficiency Promise
                    </h4>
                    <div className='flex justify-center mt-4'>
                        <div className='md:w-2/4'>
                            <p className='text-base text-gray-600 text-center'>By keeping your documents organized, we reduce the burden on your professional team — making their work easier, more
                                efficient, and less reactive.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-x-5 mt-6'>
                        <a target='_blank' draggable="false" href='https://auth.sidedrawer.com/login?state=hKFo2SBnaEJWLUdOMjg5TUtnVmlVbWlBMmtlM25FTmFoOGpUOaFupWxvZ2luo3RpZNkgQWRlcnFidE54UURHOWJBejhfQWs5OWFpeEMwS0h5cEqjY2lk2SAyVG5reTVuZGFNSFcwaTdjU1NyeVZVUVNOV0dCMTVYVA&client=2Tnky5ndaMHW0i7cSSryVUQSNWGB15XT&protocol=oauth2&scope=openid%20profile%20email&audience=https%3A%2F%2Fuser-api.sidedrawer.com&redirect_uri=https%3A%2F%2Fmy.sidedrawer.com%2Fauth%2Fauthorize%3F%26origin%3D%2Fauth%2Fauthorize&response_type=code&response_mode=query&nonce=czIyU2g0T3JpcDlaNEk5cnJZbWZrU3cxUkpPaXFiWWtCN0RuYXNoTkNGOA%3D%3D&code_challenge=2qT1Y5Iqxh_p1uSTrDvde5OoFlMnWtQsVR15UvG7A-0&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjIuMS4zIn0%3D' className='text-sm lg:text-base inline-flex items-center gap-x-2 text-white border-2 border-transparent font-medium text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
                            Access Secure Portal</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portal
