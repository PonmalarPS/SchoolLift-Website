import React, { useState } from "react";
import CommonButton from "../component/CommonButton";
import {
    Users,
    Wallet,
    MessageCircle,
    ClipboardList,
    Bus,
    Boxes,
    ArrowUp,
    ChevronDown,
    ChevronUp,
    Check
} from "lucide-react";
import heroImg from "../assets/fees-icons/fee-management-banner.jpg"; // replace with your image
import cashlessPayment from "../assets/fees-icons/cashless-payment.svg"; // replace with your image
import alerts from "../assets/fees-icons/alerts.svg"; // replace with your image
import Fee_Custom_Structures from "../assets/fees-icons/Fee_Custom_Structures_ Screen1.gif"; // replace with your image
import Fee_Notifications_Reminders_Screen2 from "../assets/fees-icons/Fee_Notifications_Reminders_Screen2.gif"; // replace with your image
import Fee_Payments_Screen3 from "../assets/fees-icons/Fee_Payments_Screen3.gif"; // replace with your image
import Fee_Review_Reports_Screen4 from "../assets/fees-icons/Fee_Review_Reports_Screen4.gif"; // replace with your image
import Fee_Yearly_Audits_Screen5 from "../assets/fees-icons/Fee_Yearly_Audits_Screen5.gif"; // replace with your image
import fm1 from "../assets/fees-icons/fm-1.svg"; // replace with your image
import fm2 from "../assets/fees-icons/fm-2.svg"; // replace with your image
import fm3 from "../assets/fees-icons/fm-3.svg"; // replace with your image
import fm4 from "../assets/fees-icons/fm-4.svg"; // replace with your image
import fm5 from "../assets/fees-icons/fm-5.svg"; // replace with your image
import fm6 from "../assets/fees-icons/fm-6.svg"; // replace with your image
import fm7 from "../assets/fees-icons/fm-7.svg"; // replace with your image
import fm8 from "../assets/fees-icons/fm-8.svg"; // replace with your image
import reportComputer from "../assets/fees-icons/report-computer.svg"; // replace with your image
import report from "../assets/fees-icons/report.svg"; // replace with your image
import tickMark from "../assets/fees-icons/tick-mark.svg"; // replace with your image
import tick from "../assets/fees-icons/tick.svg"; // replace with your image
import chooseUs from "../assets/fees-icons/why-choose-us-bg.png"; // replace with your image
import img1 from "../assets/fees-icons/principal-img1.jpg"; // replace with your image
import img2 from "../assets/fees-icons/principal-img2.png"; // replace with your image
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";

const testimonials = [
    {
        id: 1,
        name: "Ms V Subbulakshmi B.Sc., B.Ed.",
        role: "Principal, Sri Akilandeswari Vidyalaya",
        location: "Tiruchirappalli, Tamil Nadu",
        image: img1,
        text: `The academic team at our school have evaluated the learning solution from School Lift. It has chapter-wise videos, presentations, practice questions and mock exams. It is completely aligned to the syllabus.`,
    },
    {
        id: 2,
        name: "Rev. Sr. Febi Mary Fernandez",
        role: "Principal Marygiri English Medium School",
        location: "Trivandrum, Kerala",
        image: img2,
        text: `School Lift provided us a simple solution to a complex problem. They simplified the fee collection process. It is very easy to use and well appreciated by parents and finance team. I appreciate the School Lift team for their relentless support, which is efficient and quick`,
    }
];


const FeesManagement = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <FeeManagementSection />
            <GetFreeDemo />
            <TakeChargeSection />
            <HassleFreeFeeManagementSection />
            <BookDemoCenter />
            <WhyChooseUsSection />
            <SupportedPayments />
            <FeeManagementProcessSection />
            <WhatSchoolsSay />
            <FrequentlyAskedQuestions />
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            />
        </section>
    );
};

const FeeManagementSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 pt-15 md:px-10 lg:px-16">
            <div className="mx-auto max-w-[1400px] text-center">
                <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                    Fee Management Solutions
                </h1>

                <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-sbBlue" />

                <p className="mx-auto mt-10 max-w-[1000px] font-primary text-[22px] font-semibold text-black leading-8">
                    Automate & Streamline with school fees payment app
                </p>

                <p className="mx-auto mt-4 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Simplify the fee management process and speed up collection with school fees payment app. A secure, efficient & hassle-free mechanism for fee scheduling, reminders, payment collection, receipt generation and bank reconciliation.
                </p>

                <p className="mx-auto mt-8 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Easy for parents, effortless for accountant, auditor and school management.
                </p>
            </div>
        </section>
    );
};

const GetFreeDemo = () => {
    return (
        <CommonButton
            label="Get a Free Demo"
            className="mt-10 flex !justify-center"
        />
    );
};

function TakeChargeSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const accordionItems = [
        {
            title: "Set custom fee structures",
            description:
                "Categorize and automate fee calculations factoring scholarships and discounts. Customize student fees and payment installments easily.",
            image: Fee_Custom_Structures,
        },
        {
            title: "Send notifications & reminders",
            description:
                "Set pending fees-related reminders and notifications to parents. Enable timely collections.",
            image: Fee_Notifications_Reminders_Screen2,
        },
        {
            title: "Enable quick payment through loan and payment options",
            description:
                "Online Payment support for over 50+ banks & UPI apps integrated within School Lift app. Loan Options also available.",
            image: Fee_Payments_Screen3,
        },
        {
            title: "Review real-time reports",
            description:
                "Real time summary, detailed reports, easy reminders, instant receipts, multiple accounts settlement to ensure effectiveness.",
            image: Fee_Review_Reports_Screen4,
        },
        {
            title: "Get ready for yearly audits",
            description:
                "Helps administrative staff in creating & managing internal documentation and records of all transactions. Payment reconciliation saves hours of manual audit work.",
            image: Fee_Yearly_Audits_Screen5,
        },
    ];

    return (
        <section className="mt-5 relative overflow-hidden bg-white px-4 py-8 sm:px-6 lg:px-10 xl:px-12">
            <div className="mx-auto max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-x-10 xl:gap-x-14 items-start">
                    {/* LEFT SIDE HEADER - Row 1 Col 1 */}
                    <div className="lg:col-start-1">
                        <div className="text-left">
                            <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                                Take charge of your educational institution’s financial health
                            </h2>
                            <div className="mt-6 h-[3px] w-[78px] rounded-full bg-[#4456d9]" />
                        </div>
                    </div>

                    {/* RIGHT SIDE SPACER for Header alignment */}
                    <div className="hidden lg:block lg:col-start-2"></div>

                    {/* LEFT SIDE ACCORDION - Row 2 Col 1 */}
                    <div className="mt-5 lg:col-start-1 lg:row-start-2">
                        <div className="mt-5">
                            {accordionItems.map((item, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div key={index}>
                                        <button
                                            type="button"
                                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                            className="flex w-full items-start justify-between gap-6 py-4 text-left"
                                        >
                                            <div className="pr-3">
                                                <p className="text-[18px] font-semibold leading-[1.35] text-black">
                                                    {item.title}
                                                </p>

                                                {isOpen && (
                                                    <p className="mt-3 text-[17px] text-sbTextLight leading-[1.8] font-extralight">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            <ChevronDown
                                                className={`mt-1 h-5 w-5 shrink-0 text-[#2e2e2e] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                                strokeWidth={2.2}
                                            />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT SIDE IMAGE - Row 2 Col 2: Matches Accordion Height */}
                    <div className="mt-8 lg:mt-5 lg:col-start-2 lg:row-start-2 lg:self-stretch">
                        <div className="h-full rounded-[18px] border border-[#e7e7e7] bg-white p-6 flex flex-col items-center justify-center">
                            <img
                                src={
                                    openIndex !== -1
                                        ? accordionItems[openIndex].image
                                        : sISUpdateScreen4
                                }
                                alt="Student information dashboard"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* LEFT SIDE BUTTON - Row 3 Col 1 */}
                    <div className="lg:col-start-1 lg:row-start-3 mt-5 lg:mt-8">
                        <BookDemo />
                    </div>
                </div>
            </div>
        </section>
    );
}

function HassleFreeFeeManagementSection() {
    const feeFeatures = [
        {
            icon: fm1,
            title: "Accurate, Transparent Fee Collection",
            description:
                "School fees payment app eliminates human errors or misappropriation with automatic fee calculation.",
        },
        {
            icon: fm2,
            title: "Convenient Payments",
            description:
                "No more long queues at the school office. Round-the-clock online payment options make it easy for staff and parents.",
        },
        {
            icon: fm3,
            title: "Easy Customization",
            description:
                "Fees of each student can be auto-calculated based on fee structure, scholarships, discounts etc.",
        },
        {
            icon: fm4,
            title: "Automatic Reminders & Receipts",
            description:
                "Improve fee collection and enable timely payment with reminders. Auto-generate receipts on every successful payment",
        },
        {
            icon: fm5,
            title: "Loan & Multiple Payment Options",
            description:
                "Online Payment support for over 50+ banks & UPI apps. Loan options to ease parental burden and speed collections.",
        },
        {
            icon: fm6,
            title: "Custom Financial Dashboards",
            description:
                "Compile and access data for any time-frame or segment in pre-defined reporting formats in a matter of minutes.",
        },
        {
            icon: fm7,
            title: "Hassle-free Accounting",
            description:
                "School fees payment app streamlines fee collection, automate tax calculations, improve revenue generation and accept donations.",
        },
        {
            icon: fm8,
            title: "Smarter, Quicker Decisions",
            description:
                "Get a bird’s eye-view of all the information you need on your mobile app in real-time for smarter, quicker decisions.",
        },
    ];

    return (
        <section className="mt-4 relative overflow-hidden bg-white px-6 py-7 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-[1500px]">
                {/* Top heading */}
                <div className="mx-auto max-w-[1000px] text-center">
                    <div className="relative z-10 mx-auto max-w-[770px] text-center">
                        <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                            Simple, Secure, Hassle-free Fee Management
                        </h2>

                        <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-sbBlue" />
                    </div>
                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        School Lift’s fee management provides a comprehensive solution for schools to simplify and speed up the fee collection process. An efficient mechanism for fee scheduling, timely reminders, payment collection, automated receipt generation, and bank reconciliation that lets you stay on top of the financial health of your institution.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="mt-10 grid grid-cols-1 gap-y-8 md:mt-10 md:grid-cols-2 md:gap-x-20 lg:gap-x-28 xl:gap-x-36">
                    {feeFeatures.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start gap-8 lg:gap-10"
                        >
                            <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="max-h-[90px] max-w-[90px] object-contain"
                                />
                            </div>

                            <div className="max-w-[620px]">
                                <p className="text-[17px] font-semibold leading-[1.35] text-black">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-[18px] text-sbTextLight leading-[1.8] font-extralight">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhyChooseUsSection() {
    const advantagePoints = [
        {
            title: "Trusted by 1500+ schools",
            description:
                "School Lift is absolutely secure and trusted by 1000+ schools across 15 states across India.",
        },
        {
            title: "50+ Options to Pay",
            description:
                "Online Payment support for over 50+ banks & UPI apps integrated within School Lift app. Loan Options also available.",
        },
        {
            title: "Easy Customization",
            description: "Ability to handle complex fee structures.",
        },
        {
            title: "Insightful Analytics",
            description:
                "Exhaustive reports and analytics of the school fee collected for any duration(daily/weekly/monthly etc.)",
        },
        {
            title: "Simplified Setup Process",
            description:
                "Very easy and simple setup procedure expedites fee automation. We also have a responsive support team.",
        },
    ];
    return (
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <div className="pt-19 mx-auto max-w-[1310px] overflow-hidden rounded-[28px] bg-gradient-to-b from-[#a31dac] to-[#7f2a8e] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
                <div className="grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                    {/* Left Side */}
                    <div className="relative flex flex-col items-center lg:items-start">
                        <div className="w-full text-center lg:pl-24 lg:text-left xl:pl-28 flex flex-col items-center lg:items-start">
                            <p className="text-[20px] font-extralight uppercase tracking-[0.3px] text-white/90">
                                THE SCHOOL LIFT ADVANTAGE
                            </p>

                            <h2 className="mt-2 text-[30px] font-medium leading-[1.15] text-white">
                                Why Choose Us?
                            </h2>

                            <div className="mx-auto mt-4 h-[4px] w-[54px] rounded-full bg-white lg:mx-0" />
                        </div>

                        <div className="mt-auto w-full max-w-[540px] lg:mt-12 lg:max-w-[640px]">
                            <img
                                src={chooseUs}
                                alt="Hand holding mobile phone"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col pb-12 lg:pb-16">
                        <div className="space-y-7 sm:space-y-8 lg:space-y-9">
                            {advantagePoints.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 sm:gap-5">
                                    <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-white/18 backdrop-blur-[1px]">
                                        <Check className="h-9 w-9 text-white" strokeWidth={4} />
                                    </div>

                                    <div className="pt-1">
                                        <p className="text-[17px] font-medium leading-[1.35] text-white">
                                            {item.title}
                                        </p>

                                        <p className="mt-2 font-extralight max-w-[560px] text-[17px] leading-[1.65] text-white/80">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="mt-9 inline-flex h-[52px] w-fit items-center justify-center gap-2 rounded-full bg-white px-5 text-[17px] font-semibold text-[#a12aac] transition hover:opacity-95"
                        >
                            <span>Know More</span>
                            <span className="text-[22px] leading-none">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SupportedPayments = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 py-7 md:px-10 lg:px-16 xl:px-20">
            <div className="mx-auto max-w-[1500px]">
                {/* Top heading */}
                <div className="mx-auto max-w-[1000px] text-center">
                    <div className="relative z-10 mx-auto max-w-[770px] text-center">
                        <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                            Supported Payment Mechanisms
                        </h2>

                        <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-sbBlue" />
                    </div>
                    <p className="mx-auto mt-5 text-sbTextLight text-[17px] font-extralight leading-[1.75]">
                        School Lift is available on all Android and iOS devices. We support all the leading banks in India, which will ensure that all your payment requirements are covered. In addition to net banking, we support UPI interface and integration with digital payment interfaces like Google Pay, PhonePe, PayTM etc.
                    </p>
                </div>
            </div>
        </section>
    );
};


function FeeManagementProcessSection() {
    const processItems = [
        {
            icon: report,
            title: "Share fee details",
            description:
                "School shares fee details for an academic year with School Lift. Our team will set up the fee management module.",
        },
        {
            icon: alerts,
            title: "Alert Parents",
            description:
                "School announces online fee payment to parents.",
        },
        {
            icon: cashlessPayment,
            title: "Pay on Mobile App",
            description:
                "Parents pay over the mobile app. Instant alert to school on new payments. Parents receive instant fee receipt over the app.",
        },
        {
            icon: tick,
            title: "Account Updated",
            description:
                "All payments during the day settles in to school bank account by mid-day next day.",
        },
        {
            icon: reportComputer,
            title: "Access Reports",
            description:
                "School can accesses payment history collection report and due report any time for reconciliation",
        },
    ];
    return (
        <section className="mt-10 relative overflow-hidden bg-[#4456d9] px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            {/* background pattern layer */}
            <div className="absolute inset-0 opacity-[0.10]">
                <div
                    className="h-full w-full bg-repeat"
                    style={{
                        backgroundImage:
                            "url('/images/pattern-bg.png')",
                        backgroundSize: "420px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-[1820px]">
                {/* heading */}
                <div className="text-center">
                    <h2 className="text-[32px] font-semibold text-white leading-[40px]">
                        Fee Management - The School Lift Process
                    </h2>
                    <div className="mx-auto mt-5 h-[3px] w-[72px] rounded-full bg-white" />
                </div>

                {/* cards */}
                <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5 xl:gap-7">
                    {processItems.map((item, index) => (
                        <div key={index} className="relative h-full">
                            <div className="rounded-[18px] border border-[#d9d9d9] bg-[#f7f7f7] px-8 pb-10 pt-12 text-center shadow-sm h-full">
                                <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>

                                <div className="mt-8">
                                    <p className="text-[19px] font-semibold leading-[1.35] text-black">
                                        {item.title}
                                    </p>

                                    <p className="mt-2 text-[16px] text-sbTextLight leading-[1.8] font-extralight">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* arrow between cards on xl */}
                            {index !== processItems.length - 1 && (
                                <div className="absolute right-[-16px] top-1/2 hidden -translate-y-1/2 xl:block">
                                    <div className="h-0 w-0 border-b-[16px] border-l-[16px] border-t-[16px] border-b-transparent border-l-[#f7f7f7] border-t-transparent" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const WhatSchoolsSay = () => {
    return (
        <section className="w-full bg-sbBgLight py-[40px]">
            <div className="w-full px-6 md:px-10 lg:px-16">
                <div className="mb-15 flex flex-col items-center">
                    {/* Heading */}
                    <h2 className="text-[32px] font-semibold text-sbText">
                        What Schools Say
                    </h2>
                    {/* Divider */}
                    <div className="w-[70px] h-[4px] bg-sbBlue mx-auto mt-4 mb-0 rounded-full" />
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ item }) => {
    return (
        <div className="relative flex w-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            {/* Top content */}
            <div className="relative flex-1 px-8 pt-10 md:px-10 pb-10 md:pt-10">
                <p className="relative z-[1] text-[16px] font-extralight italic leading-[1.8] text-[#2f2f2f] md:text-[16px]">
                    {item.text}
                </p>
            </div>

            {/* Bottom author section */}
            <div className="flex items-center bg-sbBlue px-8 py-5 md:px-14">
                <div className="mr-6 shrink-0">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-[80px] w-[80px] rounded-full border border-[#d9d9d9] bg-white object-cover"
                    />
                </div>

                <div className="text-left">
                    <p className="font-primary text-[15px] font-semibold leading-[1.35] text-white md:text-[15px]">
                        {item.name}
                    </p>

                    <p className="mt-1 font-primary text-[14px] font-extralight leading-[1.5] text-white/90 md:text-[14px]">
                        {item.role}
                        {item.location && (
                            <>
                                <br />
                                {item.location}
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FrequentlyAskedQuestions = () => {
    const [openId, setOpenId] = useState(null);
    const faqItems = [
        {
            id: 1,
            question: "What is the advantage of using School Lift’s fee management software?",
            answer: `School Lift’s fee management software significantly enhances your school's efficiency by automating and streamlining financial processes. Here are the key features that will transform the way you collect and manage fees.

Simplifies fee collection: Online school fee payment system for Parents. Reduces manual effort for staff. Reminders and notifications will ensure timely transactions.

Customizable fee structures: Handle fee structures including tuition, scholarships, extracurricular activities, and other miscellaneous fees with ease.

Tracks payments in real-time: Get insights into financial health and detailed collection reports anytime.

Automatic receipt generation: Minimizes paperwork and provides a clear record for both the school and parents.

Ensure Compliance: Secure data handling and integration with accounting systems ensures data capture making yearly audits a breeze.

Overall, the Online school fee payment system saves time, reduces costs, and promotes a transparent, efficient, and secure fee management system for your school.`,
        },
        {
            id: 2,
            question: "How do I receive payments made via the app? Is the fee payment process secure?",
            answer: `When parents pay over the mobile app, the school receives an instant alert on new payments. Parents receive instant fee receipt over the app. All payments during the day settles into the school bank account by mid-day next day. Once the parent pays the fees it flows to a safe escrow account, which can be operated only based on RBI conditions & guidelines. This ensures complete safety of transactions and on time/prompt money settlement for the school.`,
        },
        {
            id: 3,
            question: "Can I manage cheque/DD payments?",
            answer: `YES. School Lift supports all payment mechanisms from Cash, Bank Challans, Direct Online transfer to school bank account, DD, Cheques, Wallets etc.. Parents can choose and pay though any payment mechanism thats convenient for them, School Lift fee payment system supports ALL mechanisms.

Online payment is an additional convenience that enables 24*7 availablity, instant receipts, easy reconciliation for school management & a convenient method that saves time and effort for parents.`,
        },
        {
            id: 4,
            question: "How does the student loan facility work?",
            answer: `For schools at the start of academic cycle, entire fee amount will be received upfront. Payments from multiple installments can abe combined together and received upfront. For students they could have an option to receive interest free EMI. Please get in touch with us through the contact form in this page OR email/support numbers in this page. Our team will guide you through the process & loan options available.`,
        },
        {
            id: 5,
            question: "How can I implement School Lift’s fee management solution?",
            answer: `Please get in touch with us through the contact form in this page OR email/support numbers in this page.. We will schedule a time to talk to your school administration staff and set up the system for you in 10-15 days.`,
        }
    ];
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-[1600px] px-4 pb-16 pt-8 sm:px-6 lg:px-10 xl:px-14">
                <div className="flex flex-col items-center">
                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-4 h-[4px] w-[44px] rounded-full bg-[#4e6fb9]" />
                </div>

                <div className="relative mt-10">
                    <div className="relative z-10 w-full">
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
                    <div className="pointer-events-none absolute bottom-[-80px] right-[-60px] hidden xl:block z-0">
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
}

function FaqRow({ item, isOpen, onToggle, isLast }) {
    return (
        <div className={`${!isLast ? "border-b border-[#e7e7e7]" : ""}`}>
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 py-[22px] text-left"
            >
                <span className="pr-4 text-[17px] font-semibold leading-[1.45] text-[#2f2f2f]">
                    {item.question}
                </span>

                <span className="shrink-0 text-[#4e6fb9]">
                    {isOpen ? (
                        <ChevronUp className="h-[22px] w-[22px] stroke-[1.8]" />
                    ) : (
                        <ChevronDown className="h-[22px] w-[22px] stroke-[1.8]" />
                    )}
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="pb-[10px] text-[16px] leading-[1.9] font-extralight text-[#666666] whitespace-pre-line">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

const BookDemo = () => {
    return (
        <CommonButton
            label="Book Demo"
            className="!justify-start"
        />
    );
};


const BookDemoCenter = () => {
    return (
        <CommonButton
            label="Book Demo"
            className="mt-5 flex !justify-center"
        />
    );
};

const KnowMore = () => {
    return (
        <CommonButton
            label="Know More"
            className="mt-10 flex !justify-center"
        />
    );
};


export default FeesManagement;