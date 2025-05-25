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
                            Start Your Personalized Insurance Plan
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
                                <p className='text-white text-center'>Submit your info and we'll reach out personally to schedule your free 30-
                                    minute consultation.</p>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-16 lg:px-32">
                <div className="lg:container mx-auto">
                    <div className='grid grid-cols-12 gap-y-10 md:gap-x-10'>
                        <div className='col-span-12 md:col-span-4 lg:col-span-4'>
                            <div className='size-28 md:size-32 bg-white rounded-full shadow-lg flex justify-center items-center text-[var(--primary__color)]'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="size-16 md:size-20 lucide lucide-boxes-icon lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /><path d="m7 16.5-4.74-2.85" /><path d="m7 16.5 5-3" /><path d="M7 16.5v5.17" /><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /><path d="m17 16.5-5-3" /><path d="m17 16.5 4.74-2.85" /><path d="M17 16.5v5.17" /><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /><path d="M12 8 7.26 5.15" /><path d="m12 8 4.74-2.85" /><path d="M12 13.5V8" /></svg>
                            </div>
                            <ul className='mt-7 md:mt-10 list-decimal list-inside space-y-3'>
                                <li className='text-xl font-medium text-black'>
                                    Submit your info
                                </li>
                                <li className='text-xl font-medium text-black'>
                                    We'll contact you
                                </li>
                                <li className='text-xl font-medium text-black'>
                                    Free 30-min consultation
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-12 md:col-span-8 lg:col-span-8'>
                            <div className='bg-white shadow-lg rounded-lg p-5 md:p-10'>
                                <form className="space-y-5">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block font-medium mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block font-medium mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                            required
                                        />
                                    </div>

                                    {/* Province */}
                                    <div>
                                        <label className="block font-medium mb-1">
                                            Province <span className="text-red-500">*</span>
                                        </label>
                                        <select
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

                                    {/* Occupation / Business Name */}
                                    <div>
                                        <label className="block font-medium mb-1">Occupation or Business Name</label>
                                        <input
                                            type="text"
                                            placeholder="Web Developer / ABC Company"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                        />
                                    </div>

                                    {/* Insurance Type */}
                                    <div>
                                        <label className="block font-medium mb-2">
                                            Type(s) of insurance you're interested in <span className="text-red-500">*</span>
                                        </label>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="accent-blue-600" />
                                                <span>Disability</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="accent-blue-600" />
                                                <span>Critical Illness</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="accent-blue-600" />
                                                <span>Life Insurance</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Optional Message */}
                                    <div>
                                        <label className="block font-medium mb-1">Tell us what’s on your mind (optional)</label>
                                        <textarea
                                            placeholder="Any specific questions or concerns we can help with?"
                                            className="w-full border border-gray-300 rounded px-3 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
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
                                        We keep your information strictly confidential and never share it without consent.
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
