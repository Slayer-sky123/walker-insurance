import React from 'react'

const Contact = () => {
    return (
        <section>
            <div className="bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-10 lg:px-16 mt-20">
                <div className="lg:container mx-auto">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
                        Let's Talk
                    </h4>
                    <div className='flex justify-center mt-4'>
                        <div className='md:w-2/4'>
                            <p className='text-base text-gray-600 text-center'>Have questions or want to explore how we can help? Send us a message or book a
                                free consultation. If you're a fellow advisor looking to collaborate, wed love to
                                connect.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className='md:w-3/4'>
                            <form className="space-y-4 bg-white shadow-lg rounded-lg px-5 md:px-10 py-10">
                                <p className='text-center text-base font-medium flex justify-center items-center gap-x-2 text-gray-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary__color)] size-5 lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    Your information is secure with us
                                </p>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                        required />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]" required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1 font-medium text-gray-700">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us how we can help you..."
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary__color)]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="cursor-pointer w-full text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:brightness-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear"
                                >
                                    Book a 30-Minute Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
