import React from "react";
import AnimatedContent from "../components/AnimatedContent";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Services = () => {
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
      <section className="bg-[#e8f1ff] py-10 md:py-16 px-4 md:px-10 lg:px-16 mt-20">
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
                  <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[var(--primary__color)]'>Insurance that works when you need it most</h1>
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
                  <h6 className='text-lg text-gray-600 mt-3 md:mt-4'>Tailored insurance solutions for professionals, business owners, and
                    families.</h6>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-48 md:size-56 lg:size-60 lucide lucide-shield-plus-icon lucide-shield-plus"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="lg:container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <h4 className='text-center text-[var(--primary__color)] font-semibold text-3xl md:text-4xl lg:text-5xl'>Our Services</h4>
          <div className="grid grid-cols-12 md:gap-x-8 gap-y-8 mt-6 md:mt-10">
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
                  <div className="mt-4">
                    <a target='_blank' draggable="false" href='https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxACDA2HALqgJ50Rbjt11PtX4qILxh5uDR444hbpf6edx4fu3xj3xg8BtXf2LfDPSfPASwmojPK6j135awB4IkpxgX7OEmMGrMJgCFfHFr6N9zd1mFevDI4NwAeDzJIBupI29XTbPmZ1dk0eE7OOZmLs3nUXbHTzx1m2FlhkQsvDvacZ00UGNVuzVspuq8Qgf79mshv6GW-2FJ1fOqeo6ig5pN7Lo4jPaIWUsjhhZkDwt3d0BX9zfFEUcbq1zbaroS78g-3D-3DUiu1_p4A4YQt8epDIK9HlKea9sS9y-2FXI3hZ-2Br5MGDAGWSQZ5-2FNdlMNznSmx5vBjrWGdnjnbFE2Mv7-2FirA7nEBiNZzzPW8TFOHwcrDUa87jtA1jFHkbEwv1dL9Xd6C4A-2B8gkiEufPW3hPiUBegGKPiPQ4GY5ftIAtYVUiTYMCCgvjfQQarsw-2FEQEPZqWsRC2Nj1kv6Aa7oB5s49gYeX4WPf87drmEXlPSP4gG7AyY1t5AFXbAgn6ngUSQG8fgOmmVb5X2Vu-2FttSsDb31K-2BaWsNQZ-2Fv6HnxQPbFXAfyxqaXu6Q2UbHvztBCahymNuuqNVyk5qpBrvhk23PJMYhRqiCkTbGypqnqYccmVLc2J6Iem3I96kUhgw5Yj9FlueHzxO0FgxYmqqwU54Mgno2m56swKQdzvQVVUb2DD1WvMztryBkL58mPm6OZzlDFETl12DWZeVQB9tkJaxsnxDVine-2FRf4GXzuZ05HnuI9eLtbi1ZHE3XoD1LIEJeNOkfsl3Z-2BPWXEn-2BeG-2FbiUDRUHzFMcE-2F1Dq-2BKtlANv2iG9kdeAvbwgjfunlml8-2F5A7CEUmVuvTRHza0MbCSD5NA5UfuzNUh49yCLUOUoq0cUJQ8tEeUm6LSrO7ifMAOl62WhAVY8GJ9G0sKcVBLSlIWl-2F8Jg17dNVDuVA1MGFKUAvy8szwbYK5TfRXNLeoa-2B-2BxCl9aDF9bY6avELK1c9Qe6BNBctr7QxLwT8amHp2YN3P4FHL50imHwjwi57q-2BBSJ1JC2MRP2ZZI-2FjSN' className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Book a Consultation</a>
                  </div>
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
                  <div className="mt-4">
                    <a target='_blank' draggable="false" href='https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxACDA2HALqgJ50Rbjt11PtX4qILxh5uDR444hbpf6edx4fu3xj3xg8BtXf2LfDPSfPASwmojPK6j135awB4IkpxgX7OEmMGrMJgCFfHFr6N9zd1mFevDI4NwAeDzJIBupI29XTbPmZ1dk0eE7OOZmLs3nUXbHTzx1m2FlhkQsvDvacZ00UGNVuzVspuq8Qgf79mshv6GW-2FJ1fOqeo6ig5pN7Lo4jPaIWUsjhhZkDwt3d0BX9zfFEUcbq1zbaroS78g-3D-3DUiu1_p4A4YQt8epDIK9HlKea9sS9y-2FXI3hZ-2Br5MGDAGWSQZ5-2FNdlMNznSmx5vBjrWGdnjnbFE2Mv7-2FirA7nEBiNZzzPW8TFOHwcrDUa87jtA1jFHkbEwv1dL9Xd6C4A-2B8gkiEufPW3hPiUBegGKPiPQ4GY5ftIAtYVUiTYMCCgvjfQQarsw-2FEQEPZqWsRC2Nj1kv6Aa7oB5s49gYeX4WPf87drmEXlPSP4gG7AyY1t5AFXbAgn6ngUSQG8fgOmmVb5X2Vu-2FttSsDb31K-2BaWsNQZ-2Fv6HnxQPbFXAfyxqaXu6Q2UbHvztBCahymNuuqNVyk5qpBrvhk23PJMYhRqiCkTbGypqnqYccmVLc2J6Iem3I96kUhgw5Yj9FlueHzxO0FgxYmqqwU54Mgno2m56swKQdzvQVVUb2DD1WvMztryBkL58mPm6OZzlDFETl12DWZeVQB9tkJaxsnxDVine-2FRf4GXzuZ05HnuI9eLtbi1ZHE3XoD1LIEJeNOkfsl3Z-2BPWXEn-2BeG-2FbiUDRUHzFMcE-2F1Dq-2BKtlANv2iG9kdeAvbwgjfunlml8-2F5A7CEUmVuvTRHza0MbCSD5NA5UfuzNUh49yCLUOUoq0cUJQ8tEeUm6LSrO7ifMAOl62WhAVY8GJ9G0sKcVBLSlIWl-2F8Jg17dNVDuVA1MGFKUAvy8szwbYK5TfRXNLeoa-2B-2BxCl9aDF9bY6avELK1c9Qe6BNBctr7QxLwT8amHp2YN3P4FHL50imHwjwi57q-2BBSJ1JC2MRP2ZZI-2FjSN' className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Book a Consultation</a>
                  </div>
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
                  <div className="mt-4">
                    <a target='_blank' draggable="false" href='https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxACDA2HALqgJ50Rbjt11PtX4qILxh5uDR444hbpf6edx4fu3xj3xg8BtXf2LfDPSfPASwmojPK6j135awB4IkpxgX7OEmMGrMJgCFfHFr6N9zd1mFevDI4NwAeDzJIBupI29XTbPmZ1dk0eE7OOZmLs3nUXbHTzx1m2FlhkQsvDvacZ00UGNVuzVspuq8Qgf79mshv6GW-2FJ1fOqeo6ig5pN7Lo4jPaIWUsjhhZkDwt3d0BX9zfFEUcbq1zbaroS78g-3D-3DUiu1_p4A4YQt8epDIK9HlKea9sS9y-2FXI3hZ-2Br5MGDAGWSQZ5-2FNdlMNznSmx5vBjrWGdnjnbFE2Mv7-2FirA7nEBiNZzzPW8TFOHwcrDUa87jtA1jFHkbEwv1dL9Xd6C4A-2B8gkiEufPW3hPiUBegGKPiPQ4GY5ftIAtYVUiTYMCCgvjfQQarsw-2FEQEPZqWsRC2Nj1kv6Aa7oB5s49gYeX4WPf87drmEXlPSP4gG7AyY1t5AFXbAgn6ngUSQG8fgOmmVb5X2Vu-2FttSsDb31K-2BaWsNQZ-2Fv6HnxQPbFXAfyxqaXu6Q2UbHvztBCahymNuuqNVyk5qpBrvhk23PJMYhRqiCkTbGypqnqYccmVLc2J6Iem3I96kUhgw5Yj9FlueHzxO0FgxYmqqwU54Mgno2m56swKQdzvQVVUb2DD1WvMztryBkL58mPm6OZzlDFETl12DWZeVQB9tkJaxsnxDVine-2FRf4GXzuZ05HnuI9eLtbi1ZHE3XoD1LIEJeNOkfsl3Z-2BPWXEn-2BeG-2FbiUDRUHzFMcE-2F1Dq-2BKtlANv2iG9kdeAvbwgjfunlml8-2F5A7CEUmVuvTRHza0MbCSD5NA5UfuzNUh49yCLUOUoq0cUJQ8tEeUm6LSrO7ifMAOl62WhAVY8GJ9G0sKcVBLSlIWl-2F8Jg17dNVDuVA1MGFKUAvy8szwbYK5TfRXNLeoa-2B-2BxCl9aDF9bY6avELK1c9Qe6BNBctr7QxLwT8amHp2YN3P4FHL50imHwjwi57q-2BBSJ1JC2MRP2ZZI-2FjSN' className='text-sm lg:text-base inline-block text-white font-semibold text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>Book a Consultation</a>
                  </div>
                </div>
              </AnimatedContent>
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
            <h4 className='text-center text-[var(--primary__color)] font-semibold text-2xl md:text-3xl lg:text-4xl'>What Our Clients Say</h4>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
