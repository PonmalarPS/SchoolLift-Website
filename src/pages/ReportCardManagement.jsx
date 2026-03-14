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
    ChevronUp
} from "lucide-react";
import heroImg from "../assets/report-card-icons/report_card_banner.jpg"; // replace with your image
import interaction from "../assets/report-card-icons/1-interaction.svg";
import easy from "../assets/report-card-icons/2-easy.svg";
import grade from "../assets/report-card-icons/3-grade.svg";
import reportCard1 from "../assets/report-card-icons/4-report-card.svg";
import family from "../assets/report-card-icons/5-family.svg";
import student from "../assets/report-card-icons/6-student.png";
import infographic from "../assets/report-card-icons/7-infographic.svg";
import reportCard2 from "../assets/report-card-icons/8-report-card.svg";
import reportAutoCalcScreen3 from "../assets/report-card-icons/Report_Auto_Calc_ Screen3.gif";
import reportCardsScreen4 from "../assets/report-card-icons/Report_Cards_ Screen4.gif";
import reportDefineScreen1 from "../assets/report-card-icons/Report_Define_ Screen1.gif";
import reportInputScreen2 from "../assets/report-card-icons/Report_Input_ Screen2.gif";
import reportPublishScreen5 from "../assets/report-card-icons/Report_Publish_ Screen5.gif";
import parentsIcon from "../assets/home-icons/Parents.png";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";

const ReportCardManagement = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <ReportCardManagementSection />
            <FreeDemo />
            <EffortlessReportCardManagementSection />
            <RevolutionizeStudentEvaluationSection />
            <KnowMore />
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

const ReportCardManagementSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 pt-15 md:px-10 lg:px-16">
            {/* bottom decorative icon */}
            <div className="pointer-events-none absolute bottom-[10%] left-[15%] hidden opacity-20 md:block">
                <svg
                    width="150"
                    height="110"
                    viewBox="0 0 150 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-sbPurple"
                >
                    <path
                        d="M36 57C36 42 50 31 68 31C87 31 101 42 101 57C101 72 87 83 68 83H56L42 94L46 80C40 75 36 66 36 57Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M88 66C88 54 99 45 114 45C129 45 140 54 140 66C140 78 129 87 114 87H107L96 95L100 84C93 80 88 74 88 66Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                </svg>
            </div>

            <div className="mx-auto max-w-[1400px] text-center">
                <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                    Report Card Management
                </h1>

                <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-sbBlue" />

                <p className="mx-auto mt-10 max-w-[1000px] font-primary text-[22px] font-semibold text-black leading-8">
                    Generate custom report cards that are accurate, board-compliant and insightful easily.
                </p>

                <p className="mx-auto mt-4 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Reduce the amount of time spent on manual entry of marks, report card formatting, and grade calculation with School Lift. Our platform not only allows for mobile entry of grades by teachers but also automates grade calculations and provides customized report cards that will impress parents.
                </p>

                <p className="mx-auto mt-8 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Access to report cards is quick and easy for parents with a simple login on the School Lift app. The academic team can also gain in-depth insights into school, class, and student performance. School Lift also provides compliance with board and NEP requirements, making it a hassle-free solution for all your evaluation and report card management needs.
                </p>
            </div>
        </section>
    );
};

function EffortlessReportCardManagementSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const accordionItems = [
        {
            title: "Define criteria for grade calculations",
            description: "Enter student information, class details, and grading criteria into the system. Schools can customize the system to match their specific needs.",
            image: reportDefineScreen1,
        },
        {
            title: "Input marks using the SchoolLift app",
            description: "Teachers can enter marks into the system using their mobile app from anywhere",
            image: reportInputScreen2,
        },
        {
            title: "Get automatic grade calculations",
            description: "With a few clicks, the report card management software automatically calculates grades based on the predefined criteria.",
            image: reportAutoCalcScreen3,
        },
        {
            title: "Auto-Generate impressive report cards",
            description: "With a few clicks, attractive report cards for individual students or entire classes can be generated. Print or export report cards for a particular student or an entire class at once.",
            image: reportCardsScreen4,
        },
        {
            title: "Publish to Parent Portal",
            description: "Parents can log in to view their child's report cards, providing instant access to performance.",
            image: reportPublishScreen5,
        },
        {
            title: "Power informed decisions with insightful dashboard reports",
            description: "The principal and academic team can get summarized or segmented views and insights on student, class, subject or school performance.",
            image: reportDefineScreen1,
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
                                Effortless report card management with student report card software
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
                                        : reportAutoCalcScreen3
                                }
                                alt="Student information dashboard"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const FreeDemo = () => {
    return (
        <CommonButton
            label="Get a Free Demo"
            className="mt-10 flex !justify-center"
        />
    );
};

const KnowMore = () => {
    return (
        <CommonButton
            label="Know More"
            className="mt-2 flex !justify-center"
        />
    );
};

const RevolutionizeStudentEvaluationSection = () => {
    const features = [
        {
            id: 1,
            title: "Digitizes the entire result management process",
            description: "Make the entire process of exam result management digitized from marks entry to custom, well-designed report card.",
            icon: interaction,
        },
        {
            id: 2,
            title: "Easy marks entry",
            description: "Teachers can enter marks easily using the School Lift app.",
            icon: easy,
        },
        {
            id: 3,
            title: "Automates grade calculations",
            description: "Eliminate the headache of complex grade calculations and ensure accuracy and huge time savings.",
            icon: grade,
        },
        {
            id: 4,
            title: "Instant generation of Report Cards",
            description: "Reduce effort done on complex calculations and generate report cards easily.",
            icon: reportCard1,
        },
        {
            id: 5,
            title: "Give parents easy access to child’s performance",
            description: "Publish or share results via the parent portal enabling them easy access to their child’s performance.",
            icon: family,
        },
        {
            id: 6,
            title: "Analyse student, class and school performance",
            description: "Compile and access data for any segment to get a clear understanding and insights on performance.",
            icon: student,
        },
        {
            id: 7,
            title: "Effortlessly comply with regulatory requirements",
            description: "Comply with NEP or board requirements and provide holistic understanding of student performance in defined formats.",
            icon: infographic,
        },
        {
            id: 8,
            title: "Impress with well-designed custom templates",
            description: "Design impressive-looking report cards as per your schools’ needs.",
            icon: reportCard2,
        },
    ];

    return (
        <section className="mt-5 relative overflow-hidden bg-white px-6 py-10 md:px-10 lg:px-16 xl:px-20">
            {/* Background doodle */}
            <div className="pointer-events-none absolute left-[14%] top-[105px] hidden opacity-20 md:block">
                <svg
                    width="170"
                    height="300"
                    viewBox="0 0 170 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g stroke="#e5b8ea" strokeWidth="3">
                        <circle cx="45" cy="25" r="8" />
                        <circle cx="63" cy="48" r="5" />
                        <circle cx="30" cy="82" r="4" />
                        <circle cx="57" cy="81" r="8" />
                        <path d="M70 105c16-8 27-1 31 12l19 71c4 15-5 28-21 32-16 4-27-3-31-18l-17-67c-3-14 3-24 19-30Z" />
                        <path d="M37 150c11-5 19-1 23 8l22 80c4 14-3 25-16 29-13 3-23-3-27-16l-19-75c-3-11 2-21 17-26Z" />
                        <path d="M57 104l32-8" />
                        <path d="M22 148l29-8" />
                    </g>
                </svg>
            </div>

            <div className="mx-auto max-w-[1500px]">
                {/* Top heading */}
                <div className="mx-auto max-w-[1000px] text-center">
                    <div className="relative z-10 mx-auto max-w-[770px] text-center">
                        <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                            Revolutionize student evaluation & improve student success
                        </h2>

                        <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-sbBlue" />
                    </div>
                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        School Lift’s student report card software not only simplifies and automates the process of evaluation. It helps provide timely and helpful insights on performance, keeps parents involved and enables holistic evaluation. Schools can focus on improving student success with reliable insights.                    </p>
                </div>

                {/* Feature grid */}
                <div className="mt-10 grid grid-cols-1 gap-y-8 md:mt-10 md:grid-cols-2 md:gap-x-20 lg:gap-x-28 xl:gap-x-36">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start gap-8 lg:gap-10"
                        >
                            <div className="flex h-[78px] w-[78px] shrink-0 items-center justify-center">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="max-h-[80px] max-w-[80px] object-contain"
                                />
                            </div>

                            <div className="max-w-[620px]">
                                <p className="text-[18px] font-semibold leading-[1.35] text-black">
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
};

const FrequentlyAskedQuestions = () => {
    const [openId, setOpenId] = useState(null);
    const faqItems = [
        {
            id: 1,
            question: "What is a student result management system?",
            answer: `School Lift’s student result management system has essentially two parts:

Student Report: Record of all evaluation for a particular student
School Summary: Detailed reports on student, class, subject, school performance for administrators.`,
        },
        {
            id: 2,
            question: "What are the steps involved in setting up a student report card software?",
            answer: `
The steps involved:

1.Choose from our repository of CBSE/Education Board compliant report card templates
2.Setup of Grading/Marking levels
3.Entry by Teachers using School Lift app
4.Publish reports online or export and print report cards
5.School Analysis/Parent review of progress`,
        },
        {
            id: 3,
            question: "How can a student report card software benefit my school?",
            answer: `The student report card software can transform the way your school handles performance management. From streamlining processes to improving accuracy, efficiency, trackability and deriving insights it can be a true asset to your school.

1.Comply with Govt and Academic Board regulations
2.Reduce teachers efforts by 90%
3.Remote marks entry for teachers through smartphones
4.Summary for principal and teachers analysis
5.Elegantly designed report card for parents`,
        },
        {
            id: 4,
            question: "What is special about the School Lift's student report card software?",
            answer: `The interface is intuitive and easy to use
1.Easy to collate marks
2.Auto grade calculations
3.Role based publishing rights
4.Elegantly designed report card templates`,
        },
        {
            id: 5,
            question: "Do you provide any training for report card generation?",
            answer: `Yes, we provided teacher training. We also have easily understandable youtube videos.`,
        },
        {
            id: 6,
            question: "Can the report cards be shared to parents online?",
            answer: `Yes. Available as pdf in the School Lift app. This can be downloaded as well.`,
        },
        {
            id: 7,
            question: "Can the report cards be printed?",
            answer: `Entire report card for a class can be exported as a single pdf file. This can be used to print report cards for the entire class.`,
        },
        {
            id: 8,
            question: "How long does it take to set up the system?",
            answer: `3 days including setup and training.`,
        }
    ];
    return (
        <section className="relative overflow-hidden bg-white mt-10">
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


export default ReportCardManagement;