import React from 'react'

const Privacy = () => {
    return (
        <section>
            <div className="bg-[#e8f1ff] py-10 md:py-16 px-7 md:px-16 lg:px-32 mt-20">
                <div className="lg:container mx-auto">
                    <h4 className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary__color)] font-bold text-center">
                        Our Privacy Policy
                    </h4>
                    <ul className="mt-6 space-y-4 list-disc list-outside">
                        <li className="text-base text-gray-600">Everything you share with us — from conversations to documents — is treated with absolute confidentiality.
                            We do not sell or share your data. Ever.</li>
                        <li className="text-base text-gray-600">All digital files are stored in secure environments with full encryption and activity logs. We follow best practices for Canadian insurance compliance, document handling, and privacy law.</li>
                        <li className="text-base text-gray-600">We understand the trust that clients and professionals place in us, and we work every day to earn and maintain it.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Privacy
