import React from 'react'
import AnimatedContent from '../components/AnimatedContent';

const Lead = () => {
    return (
        <>
            <section className="bg-[var(--primary__color)] py-10 md:py-16 px-4 md:px-10 lg:px-16 mt-20">
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
                        <h4 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
                            Book Your Consultation
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
                                <p className='text-white text-center'>Schedule a virtual meeting to explore your options for Disability Insurance, Critical Illness Insurance, or Life Insurance. This is a no-pressure conversation to help you plan with clarity.</p>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-16 lg:px-32">
                <div className="lg:container mx-auto">
                    <div className='grid grid-cols-12 gap-y-10 md:gap-x-10'>
                        <div className='col-span-12 md:col-span-5 lg:col-span-5'>
                            <div>
                                <div className='size-28 md:size-32 bg-white rounded-full shadow-lg flex justify-center items-center text-[var(--primary__color)]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="size-16 md:size-20 lucide lucide-boxes-icon lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /><path d="m7 16.5-4.74-2.85" /><path d="m7 16.5 5-3" /><path d="M7 16.5v5.17" /><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /><path d="m17 16.5-5-3" /><path d="m17 16.5 4.74-2.85" /><path d="M17 16.5v5.17" /><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /><path d="M12 8 7.26 5.15" /><path d="m12 8 4.74-2.85" /><path d="M12 13.5V8" /></svg>
                                </div>
                                <h4 className='text-[var(--primary__color)] font-semibold text-2xl md:text-3xl lg:text-4xl mt-10'>What to Expect</h4>
                                <ul className='mt-5 md:mt-7 list-decimal list-inside space-y-3'>
                                    <li className='text-xl font-medium text-black'>
                                        A virtual meeting
                                    </li>
                                    <li className='text-xl font-medium text-black'>
                                        Discussion of your goals and needs
                                    </li>
                                    <li className='text-xl font-medium text-black'>
                                        Tailored insurance recommendations
                                    </li>
                                    <li className='text-xl font-medium text-black'>
                                        Time for your questions
                                    </li>
                                </ul>
                                <h4 className='text-[var(--primary__color)] font-semibold text-2xl md:text-3xl lg:text-4xl mt-10'>After Booking</h4>
                                <p className='mt-4 text-black text-base'>You will receive a secure digital intake form to complete before the consultation.</p>
                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-7 lg:col-span-7'>
                            <div className='bg-white shadow-lg rounded-lg p-5 md:p-10'>
                                <form className="space-y-5">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block font-medium mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                            autoComplete="name"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block font-medium mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                            autoComplete="email"
                                            required
                                        />
                                    </div>

                                    {/* Province */}
                                    <div>
                                        <label htmlFor="province" className="block font-medium mb-1">
                                            Province <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="province"
                                            name="province"
                                            className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                            required
                                        >
                                            <option value="">Select your province</option>
                                            <option value="on">Ontario</option>
                                            <option value="bc">British Columbia</option>
                                            <option value="ab">Alberta</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    {/* Preferred Contact Method */}
                                    <div>
                                        <label htmlFor="contactMethod" className="block font-medium mb-1">
                                            Preferred Contact Method <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="contactMethod"
                                            name="contactMethod"
                                            type="text"
                                            placeholder="Phone Number / Email"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                            required
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label htmlFor="phone" className="block font-medium mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            pattern="[0-9]{10,15}"
                                            inputMode="numeric"
                                            placeholder="+1 123 456 7890"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                            autoComplete="tel"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition"
                                    >
                                        Submit
                                    </button>

                                    <p className="text-xs text-gray-500 text-center mt-2">
                                        Your information is confidential and protected by secure systems.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Lead
