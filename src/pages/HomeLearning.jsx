import React, { useRef, useState } from "react";
import CommonButton from "../component/CommonButton";
import {
    Users,
    Wallet,
    MessageCircle,
    ClipboardList,
    Bus,
    Boxes,
    ArrowUp,
    CheckCircle2,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import banner from "../assets/home-learning-icons/home-learning-banner.jpg";
import mobile1 from "../assets/home-learning-icons/3s-app-center.png";
import mobile2 from "../assets/home-learning-icons/3s-app-left.png";
import mobile3 from "../assets/home-learning-icons/3s-app-right.png";
import schoolGirlLogo from "../assets/home-learning-icons/exited-cute-schoolgirl-uniform-studying-home-800x600.jpg";
import girlIndianLogo from "../assets/home-learning-icons/indian-girl-getting-coaching-her-studies-800x600.jpg";
import teacherLogo from "../assets/home-learning-icons/teacher-showing-geometry-pupil-classroom-800x600.jpg";
import youngGirlLogo from "../assets/home-learning-icons/young-girl-using-laptop-indoors-800x600.jpg";
import semiCircle from "../assets/home-icons/img_semicircle.png";
import learn1 from "../assets/home-learning-icons/learn-1.png";
import learn2 from "../assets/home-learning-icons/learn-2.png";
import learn3 from "../assets/home-learning-icons/learn-3.png";
import learn4 from "../assets/home-learning-icons/learn-4.png";
import learn5 from "../assets/home-learning-icons/learn-5.png";
import learn6 from "../assets/home-learning-icons/learn-6.png";
import icSad from "../assets/home-learning-icons/ic_sad.png";
import icon1 from "../assets/home-learning-icons/1.svg";
import icon2 from "../assets/home-learning-icons/2.svg";
import icon3 from "../assets/home-learning-icons/3.svg";
import icon4 from "../assets/home-learning-icons/4.svg";
import icon5 from "../assets/home-learning-icons/5.svg";
import icon6 from "../assets/home-learning-icons/6.svg";

import icon7 from "../assets/home-learning-icons/2.png";
import icon8 from "../assets/home-learning-icons/3.png";
import icon9 from "../assets/home-learning-icons/4.png";
import icon10 from "../assets/home-learning-icons/5.png";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";

const HomeLearning = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <HomeLearningSolutionsSection />
            <LearningResources />
            {/* Button */}
            <GetFreeDemo />
            <ELearningHeroSection />
            <OnlineLearningSection />
            <KnowMore />
            <LearningPlatformSection />
            <WhySkoolPlusLearning />
            <WhatEducatorsSay />
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
                style={{ backgroundImage: `url(${banner})` }}
            />
        </section>
    );
};

const HomeLearningSolutionsSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 pt-10 md:px-10 lg:px-16">
            {/* top left decorative icon */}
            <div className="pointer-events-none absolute left-[12%] top-[24%] hidden opacity-20 md:block">
                <svg
                    width="120"
                    height="90"
                    viewBox="0 0 120 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-sbPurple"
                >
                    <path
                        d="M16 58L73 20L106 66L48 64L16 58Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M58 28L81 67"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M40 41L66 29"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </div>

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

            <div className="mx-auto max-w-[1700px] text-center">
                <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                    Home Learning Solutions
                </h1>

                <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-sbBlue" />

                <p className="mx-auto mt-10 text-[22px] max-w-[1400px] font-primary font-semibold text-lg leading-8 text-black">
                    Augment in-school learning experiences, cater to individual learner
                    needs and drive better parent involvement with our online learning
                    platform.
                </p>

                <p className="mx-auto mt-2 max-w-[1500px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Empower and inspire your students with the ability to augment their
                    learning at school with anywhere, anytime access to the same
                    high-quality learning resources used in the classroom. Increase
                    parent involvement by giving them a single place to access all
                    school-related information.
                </p>

                <p className="mx-auto mt-8 max-w-[1500px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Involving parents in school activities as well as in supporting
                    learning at home not only enhances student interest and motivation
                    but also can greatly help the overall development of the child&apos;s
                    personality.
                </p>

                <p className="mx-auto mt-8 max-w-[1400px] text-[19px] font-bold leading-[1.4] text-black">
                    Greater Involvement. Better Outcomes. Exceptional Experience.
                </p>
            </div>
        </section>
    );
};

const LearningResources = () => {
    const solutions = [
        {
            id: 1,
            title: "Learning Resources",
            points: [
                "Access to same material used in the classroom",
                "Additional Multi-media Content",
                "Gamified Learning modules",
            ],
            image: youngGirlLogo,
            imageBg: "bg-sbPurple",
        },
        {
            id: 2,
            title: "Practice Tests & Exams",
            image: schoolGirlLogo,
            imageBg: "bg-sbBlueLight",
            points: [
                "Quizzes and question banks",
                "Online Assessments",
                "Competitive Exam Practice",
                "Comparative Scoring",
            ],
        },
        {
            id: 3,
            title: "Personalized Roadmap",
            image: teacherLogo,
            imageBg: "bg-sbPurpleLight",
            points: [
                "Identify strengths & improvement areas",
                "Custom difficulty setting",
                "Goal setting",
                "Learning materials to suit your style",
            ],
        },
        {
            id: 4,
            title: "Parent Portal",
            image: girlIndianLogo,
            imageBg: "bg-sbPurpleLight",
            points: [
                "One app for school-related information",
                "Pay Fees Securely Online",
                "Access school events, timetable, calendar, report cards and homework",
                "Learning Material to help home-study",
            ],
        },
    ];
    return (
        <section className="bg-white py-10">
            <div className="mx-auto max-w-full">
                <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
                    {solutions.map((item) => (
                        <div key={item.id} className="flex flex-col">
                            <div className={`h-[240px] sm:h-[240px] ${item.imageBg}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="relative px-7 pt-10 pb-2 sm:px-9">
                                <img
                                    src={semiCircle}
                                    alt=""
                                    className="absolute left-3 top-7 h-14 w-auto -translate-x-1/2 object-contain"
                                />

                                <p className="font-primary text-[20px] font-semibold text-sbText">
                                    {item.title}
                                </p>

                                <div className="mt-5 space-y-3">
                                    {item.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <CheckCircle2
                                                className="mt-1 h-6 w-6 shrink-0 text-sbBlue"
                                                strokeWidth={1.9}
                                            />
                                            <p className="font-primary text-[19px] leading-[1.5] text-sbTextLight font-extralight">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const GetFreeDemo = () => {
    return (
        <CommonButton
            label="Get a Free Demo"
            className="flex !justify-center"
        />
    );
};

const KnowMore = () => {
    return (
        <CommonButton
            label="Know More"
            className="flex !justify-center"
        />
    );
};

const BookDemo = () => {
    return (
        <CommonButton
            label="Book a Demo"
            className="mt-10 flex !justify-center"
        />
    );
};

const ELearningHeroSection = () => {
    return (
        <section className="relative overflow-hidden rounded-b-[28px] bg-white px-4 pt-15 pb-30 sm:px-6 md:px-8 lg:px-10">
            {/* Left soft circle */}
            <div className="pointer-events-none absolute left-[-250px] top-[255px] h-[470px] w-[470px] rounded-full bg-[#efe8f3] opacity-30" />

            {/* Top left A+ */}
            <div className="pointer-events-none absolute left-[9%] top-[2%] hidden text-[#ecddef] opacity-40 md:block">
                <span className="font-heading text-[74px] font-bold leading-none">A+</span>
            </div>

            {/* Top right music */}
            <div className="pointer-events-none absolute right-[12.5%] top-[3%] hidden text-[#ecddef] opacity-40 md:block">
                <svg width="56" height="76" viewBox="0 0 56 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M35 11V45C35 53 30 58 23 58C16 58 11 54 11 47C11 40 16 35 23 35C26.5 35 29.5 36.2 31.5 38.3V16L48 10V39"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Top right A */}
            <div className="pointer-events-none absolute right-[1.7%] top-[2%] hidden text-[#ecddef] opacity-40 md:block">
                <span className="font-heading text-[72px] font-bold leading-none">A</span>
            </div>

            {/* Left bulb */}
            <div className="pointer-events-none absolute left-[15.5%] top-[27%] hidden text-[#ecddef] opacity-40 md:block">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 46V54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 32H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M46 32H54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 18L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M41 41L46 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 46L23 41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M41 23L46 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 22C27 22 23 26 23 31C23 36 27 40 32 40C37 40 41 36 41 31C41 26 37 22 32 22Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 28.5C30 27.12 31.12 26 32.5 26C33.88 26 35 27.12 35 28.5C35 29.59 34.3 30.52 33.33 30.86V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="32.5" cy="37.5" r="1" fill="currentColor" />
                </svg>
            </div>

            {/* Bottom rocket */}
            <div className="pointer-events-none absolute bottom-[2.8%] right-[25.5%] hidden text-[#ecddef] opacity-40 md:block">
                <svg width="64" height="64" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18 43C31 44 40 37 46 22C50 29 47 42 34 50C28 54 21 56 15 56C17 52 18 48 18 43Z"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M31 32C31 32 35 34 37 39"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    />
                    <circle cx="45" cy="22" r="2" fill="currentColor" />
                </svg>
            </div>

            {/* Heading */}
            <div className="relative z-10 mx-auto max-w-[770px] text-center">
                <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                    Active, Engaging & Collaborative online learning
                    <br className="hidden lg:block" />
                    platform
                </h2>

                <div className="mx-auto mt-4 h-[4px] w-[78px] rounded-full bg-[#4456d9]" />
                <p className="mx-auto mt-8 max-w-[1500px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Access to high quality education made affordable with e-learning app
                </p>
            </div>

            {/* Phones wrapper */}
            <div className="relative mx-auto mt-2 h-[320px] max-w-[980px] sm:mt-2 sm:h-[420px] md:mt-3 md:h-[560px] lg:mt-4 lg:h-[680px]">
                {/* Bottom glow */}
                <div className="pointer-events-none absolute bottom-[16px] left-1/2 z-0 h-[130px] w-[280px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(206,132,230,0.30)_0%,rgba(206,132,230,0.12)_42%,rgba(206,132,230,0)_74%)] sm:h-[170px] sm:w-[390px] md:h-[220px] md:w-[560px] lg:h-[260px] lg:w-[760px]" />

                {/* Left phone */}
                <img
                    src={mobile2}
                    className="
    absolute
    left-1/2
    bottom-[40px]
    z-[1]
    w-[110px]
    -translate-x-[140%]
    sm:w-[150px]
    md:w-[210px]
    lg:w-[260px]
    lg:-translate-x-[135%]
  "
                />

                {/* Right phone */}
                <img
                    src={mobile3}
                    className="
    absolute
    left-1/2
    bottom-[40px]
    z-[1]
    w-[110px]
    translate-x-[40%]
    sm:w-[150px]
    md:w-[210px]
    lg:w-[260px]
    lg:translate-x-[35%]
  "
                />

                {/* Center phone */}
                <img
                    src={mobile1}
                    className="
    absolute
    left-1/2
    -bottom-20
    z-10
    w-[125px]
    -translate-x-1/2
    sm:w-[170px]
    md:w-[230px]
    lg:w-[290px]
  "
                />
            </div>
        </section>
    );
};

function OnlineLearningSection() {
    const learningFeatures = [
        {
            id: 1,
            title: "Aligned to what is taught in the classroom",
            description:
                "Access to material used in the classroom even at home. Revise and internalize concepts taught in the class easily.",
            image:
                learn1,
        },
        {
            id: 2,
            title: "Learn anywhere, anytime",
            description:
                "Access multi-media learning materials, take practice questions and pace learning.",
            image:
                learn4,
        },
        {
            id: 3,
            title: "Suited to individual learning styles",
            description:
                "Whether a student's learning style involves watching videos, reading or learning through application, we have learning materials to suit different styles.",
            image:
                learn2
        },
        {
            id: 4,
            title: "An enjoyable learning experience",
            description:
                "Apply learning and enjoy an immersive experience with gamified learning modules.",
            image:
                learn5
        },
        {
            id: 5,
            title: "Personalized Learning Path",
            description:
                "Measure progress, identify gaps & make course corrections continuously.",
            image:
                learn3
        },
        {
            id: 6,
            title: "Better prepare for competitive exams",
            description:
                "Online assessments can help gain confidence for tests and exams. Exhaustive question banks and comparative scoring help excel in competitive exams.",
            image:
                learn6
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white px-6 py-10 md:px-10 lg:px-16 xl:px-20">
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
                    <p className="text-[18px] font-primary font-semibold text-lg leading-8 text-black">
                        Simplify home-learning and save on expensive tuitions with our
                        Online Learning platform.
                    </p>

                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        Having access to classroom materials and assignments helps students
                        learn more effectively. E-learning portal becomes a continuation of
                        the classroom experience and both teachers and students can continue
                        to work collaboratively beyond the classroom.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="mt-6 grid grid-cols-1 gap-y-8 md:mt-6 md:grid-cols-2 md:gap-x-20 lg:gap-x-28 xl:gap-x-36">
                    {learningFeatures.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start gap-5 lg:gap-5"
                        >
                            <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-[90px] max-w-[90px] object-contain"
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
}

const LearningPlatformSection = () => {
    return (
        <section className="bg-sbWhite py-15">
            <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between gap-16">

                {/* LEFT CONTENT */}
                <div className="max-w-[600px]">

                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        All-in-One Online
                        Learning Platform & App
                    </h2>

                    <div className="w-14 h-[3px] bg-sbBlue mt-2 mb-5"></div>

                    <p className="text-[18px] font-semibold text-sbText leading-[34px] mb-6">
                        Better Involvement with Online learning platform
                    </p>

                    <div className="space-y-4 mb-8">
                        {[
                            "Stay updated on homework, report cards, events & holidays",
                            "Make fee payments online",
                            "Easy communication with teachers",
                            "Track child's performance",
                            "Identify improvement areas for child",
                            "Know the location of the school bus",
                            "Submit Leave Application",
                            "Update details",
                            "Get the latest learning & and assessment tools",
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-1 shrink-0" />
                                <p className="text-[18px] font-extralight text-sbTextLight leading-tight">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* RIGHT VIDEO CARD */}
                <div className="w-[720px] rounded-3xl overflow-hidden shadow-sb bg-black">
                    <iframe src="https://player.vimeo.com/video/1123084258?h=8372105d9e&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;loop=1&amp;app_id=122963" width="708.711" height="398.633" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Home-and-Classroom-Solutions" data-ready="true"></iframe>
                </div>

            </div>
        </section>
    );
};

const WhySkoolPlusLearning = () => {
    const comparisonRows = [
        {
            feature: "Alignment with School",
            otherIcon: icSad,
            otherText:
                "No alignment",
            plusIcon: icon1,
            plusText: "Eliminates confusions in the way concepts are taught",
        },
        {
            feature: "Affordability",
            otherIcon: icon7,
            otherText: "Expensive",
            plusIcon: icon2,
            plusText: "A high-quality learning solution that puts your students in command of their own learning at a cost that is negligible.",
        },
        {
            feature: "Anytime Accessibility",
            otherIcon: icon8,
            otherText: "May not be available",
            plusIcon: icon3,
            plusText:
                "Eliminates confusions in the way concepts are taught",
        },
        {
            feature: "Teacher Support",
            otherIcon: icon9,
            otherText: "Separate from what is taught in school",
            plusIcon: icon4,
            plusText:
                "Lessons and learning materials are accessible to both teachers and students. Makes it easier to clarify doubts and get help from teachers at school.",
        },
        {
            feature: "Personalization",
            otherIcon: icon10,
            otherText: "Not available",
            plusIcon: icon5,
            plusText: "Analyze what topics you are good at and identify gaps in understanding. Get better with personalized recommendations and proficiency level setting.",
        },
        {
            feature: "Stress-free Learning",
            otherIcon: icon10,
            otherText: "Not available",
            plusIcon: icon6,
            plusText: "Make learning less stressful and enjoyable. Have fun with gamified learning and multi- media materials.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#fcf7fc] w-full py-12 md:py-16 lg:py-20">
            {/* background pattern */}
            <div className="absolute inset-0 opacity-[0.14]">
                <div className="h-full w-full bg-[radial-gradient(circle_at_20px_20px,#d78adf_1.2px,transparent_1.2px)] bg-[length:38px_38px]" />
            </div>

            <div className="relative mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-8">
                {/* heading */}
                <div className="mb-8 flex flex-col items-center">
                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        @Home Learning - Why Choose SkoolBeep's e-learning
                    </h2>
                    <div className="mt-4 h-[4px] w-[52px] rounded-full bg-sbPurple" />
                </div>

                {/* table */}
                <div className="overflow-hidden rounded-[24px] bg-sbWhite shadow-[0_20px_50px_rgba(170,46,177,0.10)]">
                    {/* header */}
                    <div className="grid grid-cols-[1.05fr_1.05fr_1fr]">
                        <div className="border-r border-gray-200 bg-white px-10 py-14 font-primary text-[15px] font-bold uppercase tracking-[0.02em] text-sbText">
                            Feature
                        </div>
                        <div className="border-r border-gray-200 bg-white px-10 py-14 font-primary text-center text-[15px] font-bold uppercase tracking-[0.02em] text-sbText">
                            OTHER HOME LEARNING SOLUTIONS
                        </div>
                        <div className="bg-sbPurple px-10 py-14 font-primary text-center text-[15px] font-bold uppercase tracking-[0.02em] text-white">
                            SKOOLBEEP E-LEARN
                        </div>
                    </div>

                    {/* rows */}
                    {comparisonRows.map((row) => (
                        <div
                            key={row.feature}
                            className="grid grid-cols-[1.05fr_1.05fr_1fr]"
                        >
                            <div className="flex items-center border-t border-r border-gray-200 bg-white px-10 py-10">
                                <p className="font-primary text-[16px] font-semibold text-sbText">
                                    {row.feature}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-r border-gray-200 bg-white px-10 py-8">
                                <img
                                    src={row.otherIcon}
                                    alt=""
                                    className="h-[40px] w-[40px] object-contain shrink-0"
                                />
                                <p className="font-primary text-[16px] leading-[1.5] text-[#555555] md:text-[16px] font-extralight">
                                    {row.otherText}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-white/20 bg-[#a61fb1] px-7 py-8 md:px-8">
                                <img
                                    src={row.plusIcon}
                                    alt=""
                                    className="h-[40px] w-[40px] object-contain shrink-0"
                                />
                                <p className="font-primary text-[16px] leading-[1.5] font-extralight text-white/95 md:text-[16px]">
                                    {row.plusText}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const WhatEducatorsSay = () => {
    return (
        <section className="relative py-16 overflow-hidden rounded-b-[28px] bg-[#f5f4f5] px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="relative z-10 mx-auto max-w-[770px] text-center">
                <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                    What Educators Say
                </h2>

                <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-[#4456d9]" />
            </div>
            <BookDemo />
        </section>
    );
}

const FrequentlyAskedQuestions = () => {
    const [openId, setOpenId] = useState(null);
    const faqItems = [
        {
            id: 1,
            question: "What's SkoolBeep’s home learning solution?",
            answer: `Our home learning solution equips students with high-quality resources to continue their learning at home. By subscribing to our online learning platform, schools can give students access to syllabus-aligned content and multimedia resources used by the teachers in the classroom.

Here are some more reasons why our home-learning solutions are highly recommended:

1.Learning becomes complete only with home support. Extending classroom learning to home is critical to enable the same.
2.Each student is different; they have different learning styles, comprehension skills and interests. Our e-learning solutions accommodate student’s unique needs and current level.
3.The resources teachers use in the classroom are made available to the students at the comfort of their home to enable “any time , anywhere learning”. This allows them to learn at their own pace,
4.Personalized feedback on tests or practice quizzes and the ability to set difficulty levels help students have more control on their progress, gives insights to teachers and helps boost learner confidence.`,
        },
        {
            id: 2,
            question: "Who can subscribe for Skoolbeep’s home learning?",
            answer: `It is highly recommended that schools take the initiative to subscribe for students and enable access. This ensures all students have access to high-quality resources at a very affordable cost and reduces dependency on tuition.

Individual students can also subscribe to Skoolbeep’s e-learning solution provided the school has any of SkoolBeep’s other solutions like School Management or Classroom solutions.`,
        },
        {
            id: 3,
            question: "Why should a school subscribe to Skoolbeep e-learning portal?",
            answer: `By subscribing to Skoolbeep’s e-learning portal, schools can:

1.e-learning in education enables better outcomes for students
2.Give access to different learning methods and resources
3.Empower children to learn at their pace
4.Get excellent Assessment & personalisation tools
5.Ensure affordable access to top-class resources for all students all year round`,
        },
        {
            id: 4,
            question: "What is the duration of subscription for online learning platform?",
            answer: `The minimum subscription duration is 1 year.`,
        },
        {
            id: 5,
            question: "Can I take a trial?",
            answer: `Yes , Trial available for 7 days.

During this period schools will have complete access to evaluate the product content and assessment tools.`,
        },
        {
            id: 6,
            question: "Who will help me when the school/student faces problems?",
            answer: `Support is available 6 days a week during regular office hours ( 9AM to 6PM).

Available over whatsapp, voice call and email and chat.

Field training and support is also available on a need basis.`,
        },
        {
            id: 7,
            question: "Do I need a subscription to digitally submit school assignments?",
            answer: `Teachers should have a valid license to assign assessments or activities to students.

It’s not mandatory for students to have an active subscription to submit assignments.`,
        },
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



export default HomeLearning;