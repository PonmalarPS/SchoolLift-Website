import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";

const FrequentlyAskedQuestions = ({ faqItems, title = "Frequently Asked Questions" }) => {
    const [openId, setOpenId] = useState(null);

    return (
        <section className="relative overflow-hidden bg-white py-10 lg:py-16">
            <div className="mx-auto max-w-[1400px] px-6">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl md:text-[32px] font-semibold text-sbText leading-tight md:leading-[40px] text-center">
                        {title}
                    </h2>

                    <div className="mt-4 h-[4px] w-[44px] rounded-full bg-[#4e6fb9]" />
                </div>

                <div className="relative mt-6 md:mt-10 mx-auto">
                    <div className="relative z-10 w-full space-y-1">
                        {faqItems.map((item, index) => (
                            <FaqRow
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                isLast={index === faqItems.length - 1}
                                onToggle={() =>
                                    setOpenId((prev) => (prev === item.id ? null : item.id))
                                }
                            />
                        ))}
                    </div>

                    {/* Right bottom decorative image */}
                    <div className="pointer-events-none absolute bottom-[-80px] right-[-150px] hidden xl:block z-0 opacity-80">
                        <img
                            src={homeLearningBg}
                            alt=""
                            className="h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

function FaqRow({ item, isOpen, onToggle, isLast }) {
    return (
        <div className={`${!isLast ? "border-b border-gray-100" : ""}`}>
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 py-5 md:py-[22px] text-left group"
            >
                <span className="pr-4 text-base md:text-[17px] font-semibold leading-snug md:leading-[1.45] text-[#2f2f2f] transition-colors group-hover:text-sbBlue">
                    {item.question}
                </span>

                <span className="shrink-0 text-[#4e6fb1]">
                    {isOpen ? (
                        <ChevronUp className="h-5 w-5 md:h-[22px] md:w-[22px] stroke-[2]" />
                    ) : (
                        <ChevronDown className="h-5 w-5 md:h-[22px] md:w-[22px] stroke-[2]" />
                    )}
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="pb-3 text-sm md:text-[16px] leading-relaxed md:leading-[1.9] font-extralight text-[#666666] whitespace-pre-line pr-4">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FrequentlyAskedQuestions;
