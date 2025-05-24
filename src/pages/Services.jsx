import React from "react";
import AnimatedContent from "../components/AnimatedContent";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="bg-white">
        <div className="lg:container mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
          <div className="mt-16 md:mt-20 lg:mt-20 w-full">
            <div className="flex justify-center">
              <div className="md:w-3/4 lg:w-3/4">
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center capitalize">
                    Insurance that works when you need it most
                  </h2>
                </AnimatedContent>
              </div>
            </div>
            <div className="grid grid-cols-12 mt-10 md:gap-x-8 gap-y-8">
              <div className="col-span-12 md:col-span-6 lg:col-span-6">
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
                  <div className="border-2 border-gray-200 rounded-md p-7 lg:min-h-[225px] select-none hover:border-[var(--primary__color)] transition-all duration-200 ease-in-out h-full">
                    <div className="text-[var(--primary__color)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-10 lucide lucide-shield-icon lucide-shield"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      </svg>
                    </div>
                    <h3 className="text-[var(--primary__color)] font-semibold text-xl lg:text-xl my-3">
                      Disability Insurance
                    </h3>
                    <p className="text-base text-gray-600">
                      Your ability to earn an income is your greatest asset. If
                      you're self-employed or incorporated, you likely don't
                      have benefits in place to protect it.We design disability insurance plans that ensure your
                      income continues - even if your ability to work doesn't.
                    </p>
                  </div>
                </AnimatedContent>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-6">
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
                  <div className="border-2 border-gray-200 rounded-md p-7 select-none hover:border-[var(--primary__color)] transition-all duration-200 ease-in-out h-full">
                    <div className="text-[var(--primary__color)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-10 lucide lucide-heart-plus-icon lucide-heart-plus"
                      >
                        <path d="M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5" />
                        <path d="M15 15h6" />
                        <path d="M18 12v6" />
                      </svg>
                    </div>
                    <h3 className="text-[var(--primary__color)] font-semibold text-xl lg:text-xl my-3">
                      Critical Illness Insurance
                    </h3>
                    <p className="text-base text-gray-600">
                      A major health event can turn life upside down. Critical
                      Illness coverage pays out a lump sum tax-free if you're
                      diagnosed with a covered condition, giving you the
                      flexibility to take time off, seek private care, or keep
                      your household running during recovery.
                    </p>
                  </div>
                </AnimatedContent>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-12">
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
                  <div className="border-2 border-gray-200 rounded-md p-7 lg:min-h-[225px] select-none hover:border-[var(--primary__color)] transition-all duration-200 ease-in-out h-full">
                    <div className="text-[var(--primary__color)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-10 lucide lucide-cloud-icon lucide-cloud"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      </svg>
                    </div>
                    <h3 className="text-[var(--primary__color)] font-semibold text-xl lg:text-xl my-3">
                      Life Insurance & Estate Planning
                    </h3>
                    <p className="text-base text-gray-600">
                      Life Insurance can do far more than cover final expenses.
                      We build both term and permanent insurance strategies
                      (Whole Life & Universal Life) to:
                    </p>
                    <ul className="mt-4 space-y-1 list-disc list-inside">
                      <li className="text-base text-gray-600">Protect your family.</li>
                      <li className="text-base text-gray-600">Secure business succession</li>
                      <li className="text-base text-gray-600">Support tax-efficient wealth transfer</li>
                      <li className="text-base text-gray-600">Fund trusts or legacy gifts</li>
                    </ul>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-10 lg:px-16">
          <div className="lg:container mx-auto">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
              Why Work With Us
            </h4>
            <div className="flex justify-center">
              <ul className="mt-8 md:w-3/4 flex flex-col gap-y-5">
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
                  <li className="select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#25d366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6 lucide lucide-check-check-icon lucide-check-check"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                    Over 12 years of experience in insurance and wealth
                    protection
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
                  <li className="select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#25d366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6 lucide lucide-check-check-icon lucide-check-check"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                    Licensed with Canada's top insurance providers
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
                  <li className="select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#25d366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6 lucide lucide-check-check-icon lucide-check-check"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                    Fully digital, secure, and built around your schedule
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
                  <li className="select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#25d366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6 lucide lucide-check-check-icon lucide-check-check"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                    We collaborate with your accountant and lawyer to ensure all
                    parts of your plan are aligned
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
                  <li className="select-none bg-white rounded-lg p-5 font-medium border border-gray-200 flex justify-start items-start gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#25d366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6 lucide lucide-check-check-icon lucide-check-check"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                    No pushy sales — just clarity, structure, and long-term
                    value
                  </li>
                </AnimatedContent>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white py-10 md:py-16 px-4 md:px-10 lg:px-16">
          <div className="lg:container mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-12 mt-10 md:gap-x-8 gap-y-1">
              <div className="col-span-12 md:col-span-4 lg:col-span-4">
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
                  <div className="p-7 select-none h-full flex flex-col justify-center items-center">
                    <div className="text-[var(--primary__color)] size-16 rounded-full bg-[#e8f1ff] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-8 lucide lucide-clock-icon lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <h3 className="text-[var(--primary__color)] text-center font-semibold text-xl lg:text-xl mb-3 mt-4">
                      Book a Call
                    </h3>
                    <p className="text-base text-gray-600 text-center">
                      A no-pressure consultation to understand your needs
                    </p>
                  </div>
                </AnimatedContent>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-4">
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
                  <div className="p-7 select-none h-full flex flex-col justify-center items-center">
                    <div className="text-[var(--primary__color)] size-16 rounded-full bg-[#e8f1ff] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-8 lucide lucide-book-icon lucide-book"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                      </svg>
                    </div>
                    <h3 className="text-[var(--primary__color)] text-center font-semibold text-xl lg:text-xl mb-3 mt-4">
                      Review Your Options
                    </h3>
                    <p className="text-base text-gray-600 text-center">
                      A custom plan based on your life and goals
                    </p>
                  </div>
                </AnimatedContent>
              </div>
              <div className="col-span-12 md:col-span-4 lg:col-span-4">
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
                  <div className="p-7 select-none h-full flex flex-col justify-center items-center">
                    <div className="text-[var(--primary__color)] size-16 rounded-full bg-[#e8f1ff] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-8 lucide lucide-shield-plus-icon lucide-shield-plus"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>
                    <h3 className="text-[var(--primary__color)] text-center font-semibold text-xl lg:text-xl mb-3 mt-4">
                      Get Protected
                    </h3>
                    <p className="text-base text-gray-600 text-center">
                      And stay confidently organized for whatever cornes next
                    </p>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
