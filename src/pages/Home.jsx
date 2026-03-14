import React from "react";
import CommonButton from "../component/CommonButton";
import {
    Users,
    Wallet,
    MessageCircle,
    ClipboardList,
    Bus,
    Boxes,
    ArrowUp
} from "lucide-react";
import {
    Lightbulb,
    Handshake,
    Sparkles,
    IndianRupee,
    Monitor,
    Puzzle
} from "lucide-react";
import heroImg from "../assets/home-icons/header-image.webp"; // replace with your image
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// ── Background floating icons ──────────────────────────────────────────────
import icon1 from "../assets/home-icons/1.png";
import icon2 from "../assets/home-icons/2.png";
import icon3 from "../assets/home-icons/3.png";
import icon4 from "../assets/home-icons/4.png";
import icon5 from "../assets/home-icons/5.png";
import icon6 from "../assets/home-icons/6.png";
import icon7 from "../assets/home-icons/7.png";
import icon8 from "../assets/home-icons/8.png";
import icon9 from "../assets/home-icons/9.png";
import icon10 from "../assets/home-icons/10.png";
import icon11 from "../assets/home-icons/11.png";
import icon12 from "../assets/home-icons/12.png";
import icon13 from "../assets/home-icons/13.png";
import icon14 from "../assets/home-icons/1.png";
import icon15 from "../assets/home-icons/1.png";

import schoolIcon from "../assets/home-icons/school.svg";
import studentIcon from "../assets/home-icons/student.svg";
import teacherIcon from "../assets/home-icons/teachers.svg";
import indiaIcon from "../assets/home-icons/india.svg";
import img1 from "../assets/home-icons/1(1).png";
import img2 from "../assets/home-icons/2(1).png";
import img3 from "../assets/home-icons/3(1).png";
import img4 from "../assets/home-icons/4(1).png";
import img5 from "../assets/home-icons/5(1).png";
import img6 from "../assets/home-icons/6(1).png";
import parentsIcon from "../assets/home-icons/Parents.png";
import schoolsIcon from "../assets/home-icons/Schools.png";
import studentsIcon from "../assets/home-icons/Students.png";
import teachersIcon from "../assets/home-icons/Teachers.png";
import phoneMockup from "../assets/home-icons/phone-mockup.png";
import extensive1 from "../assets/home-icons/home-learning-1.png";
import extensive2 from "../assets/home-icons/home-learning-2.png";
import extensive3 from "../assets/home-icons/home-learning-3.png";
import extensive4 from "../assets/home-icons/home-learning-4.png";
import arrowIconWhite from "../assets/home-icons/arrow-white.svg";
import arrowIconDark from "../assets/home-icons/arrow-dark.svg";
import arrowTopIcon from "../assets/home-icons/arrow-top.svg";
import school1 from "../assets/home-icons/1(3).svg";
import school2 from "../assets/home-icons/2(3).svg";
import school3 from "../assets/home-icons/3(3).svg";
import school4 from "../assets/home-icons/4(3).svg";
import school5 from "../assets/home-icons/5(2).svg";
import school6 from "../assets/home-icons/6(3).svg";
import school7 from "../assets/home-icons/7(1).svg";
import school8 from "../assets/home-icons/8.svg";

const clients = [
    {
        name: "CSI Girls Matric Hr. Sec. School",
        location: "Tirupathur, Tamilnadu",
        logo: school1,
        imgClass: "h-52 w-auto object-contain",
    },
    {
        name: "Glazebrooke School",
        location: "Salem, Tamilnadu",
        logo: school2,
        imgClass: "h-48 w-auto object-contain",
    },
    {
        name: "Glentree Academy",
        location: "Bengaluru, Karnataka",
        logo: school3,
        imgClass: "h-36 w-auto object-contain",
    },
    {
        name: "Ideal English School",
        location: "Wayanad, Kerala",
        logo: school4,
        imgClass: "h-48 w-auto object-contain",
    },
    {
        name: "Little Millennium School",
        location: "Secunderabad, Telengana",
        logo: school5,
        imgClass: "h-40 w-auto object-contain",
    },
];

const testimonials = [
    {
        id: 1,
        name: "Ms V Subbulakshmi",
        role: "Principal, Sri Akilandeswari Vidyalaya",
        location: "Tiruchirappalli, Tamil Nadu",
        image: parentsIcon,
        text: `The academic team at our school have evaluated the learning solution from School Lift. It has chapter-wise videos, presentations, practice questions and mock exams. It is completely aligned to the syllabus.`,
    },
    {
        id: 2,
        name: "R.Ramasamy",
        role: "Principal, RN Matric HR Sec School, Madurai",
        location: "",
        image: parentsIcon,
        text: `We have evaluated many apps for our school. The School Lift digital learning provides unique opportunities for teachers to help students with learning even outside the classroom. The quizzes, learning material is aligned to the syllabus and the personalised feedback will helps students of all levels achieve greater proficiency in their subjects..`,
    },
    {
        id: 3,
        name: "R.Gnana Susikaran",
        role: "Principal, Bishop Heber Hr. Sec. School",
        location: "Teppakulam",
        image: parentsIcon,
        text: `School Lift StudyBuddy has videos, quizzes, games, presentations, etc. The syllabus-aligned learning resources will help teachers to not only excite interest in students in the class but also send assignments, notes and review their practice sessions. Very essential in this modern age to keep students excited and involved.`,
    },
];

const Home = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <StatsSection />
            <TechnologySection />
            <SolutionsSection />
            <BookNow />
            <InspireSection />
            <TechnologyEveryoneSection />
            <TechnologyAudienceSection />
            <HomeLearningSection />
            <KnowMoreBtn />
            <SchoolAdministrationSection />
            <SchoolLiftDifference />
            <WhatTheySay />
            <OurClients />
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative w-full bg-sbWhite overflow-hidden">

            {/* Floating Background Icons */}
            <img src={icon1} className="absolute top-16 left-20 w-25 opacity-40" />
            <img src={icon2} className="absolute top-40 left-[35%] w-24 opacity-40" />
            <img src={icon3} className="absolute top-24 right-32 w-24 opacity-40" />
            <img src={icon4} className="absolute bottom-32 left-32 w-24 opacity-40" />
            <img src={icon5} className="absolute bottom-20 left-[45%] w-20 opacity-40" />
            <img src={icon6} className="absolute bottom-40 right-20 w-22 opacity-40" />
            <img src={icon7} className="absolute top-[55%] right-[45%] w-30 opacity-40" />
            <img src={icon8} className="absolute top-10 right-[10%] w-25 opacity-40" />
            <img src={icon9} className="absolute bottom-10 right-[15%] w-124 opacity-40" />
            <img src={icon10} className="absolute top-[30%] left-[10%] w-21 opacity-40" />
            <img src={icon11} className="absolute bottom-[45%] left-[25%] w-24 opacity-40" />
            <img src={icon12} className="absolute top-[60%] left-[60%] w-22 opacity-40" />
            <img src={icon13} className="absolute top-[20%] right-[55%] w-24 opacity-40" />

            <div className="max-w-[1400px] mx-auto px-10 py-24 flex items-center justify-between relative z-10">

                {/* Left Content */}
                <div className="max-w-xl">
                    <h1 className="text-[94px] leading-[82px] font-bold text-sbText">
                        Empowering <br />
                        Future-ready <br />
                        Schools
                    </h1>

                    <p className="mt-10 text-[20px] text-sbTextLight font-extralight">
                        Trusted Technology Partner for Schools
                    </p>

                    <CommonButton
                        label="Know More"
                        className="mt-12 !justify-start"
                    />
                </div>


                {/* Inner White Circle */}
                <div className="w-[500px] h-[500px] rounded-full overflow-hidden">
                    <img
                        src={heroImg}
                        alt="Student"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

const StatsSection = () => {
    const stats = [
        {
            icon: schoolIcon,
            value: "1500+",
            label: "SCHOOLS",
        },
        {
            icon: studentIcon,
            value: "6 Lakh+",
            label: "STUDENTS",
        },
        {
            icon: teacherIcon,
            value: "25,000",
            label: "TEACHERS",
        },
        {
            icon: indiaIcon,
            value: "15",
            label: "STATES",
        },
    ];

    return (
        <section className="relative bg-sbWhite py-15 overflow-hidden">

            {/* Left Light Gradient Circle */}
            <div className="absolute -left-40 top-0 w-[300px] h-[300px] bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-40"></div>

            <div className="max-w-[1300px] mx-auto px-10 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">

                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">

                            {/* Icon */}
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-16 h-16 mb-8"
                            />

                            {/* Number */}
                            <h2 className="text-[42px] font-bold text-sbText leading-none">
                                {item.value}
                            </h2>

                            {/* Label */}
                            <p className="mt-2 text-[19px] tracking-wide font-semibold text-sbBlue">
                                {item.label}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

const TechnologySection = () => {
    return (
        <section className="relative bg-sbWhite py-15 overflow-hidden">

            {/* Content Container */}
            <div className="max-w-[1100px] mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-[32px] font-semibold text-sbText leading-[60px]">
                    One Technology Partner for all your school's needs
                </h2>

                {/* Underline */}
                <div className="w-16 h-[3px] bg-sbBlue mx-auto mt-2"></div>

                {/* Description */}
                <p className="mt-5 text-[18px] font-extralight text-sbTextLight leading-[35px]">
                    Technology can greatly transform the way you teach, manage and operate a school.
                    School Lift's technology solutions allow you to focus on delivering exceptional
                    learning outcomes by empowering teachers, engaging young minds, streamlining
                    administration and involving all stakeholders.
                </p>

            </div>

            {/* Left Faded Icon */}
            {/* <img
                src="/icons/hat.png"
                alt=""
                className="absolute left-32 top-40 w-20 opacity-20"
            /> */}

            {/* Right Faded Icon */}
            {/* <img
                src="/icons/mobile.png"
                alt=""
                className="absolute right-32 top-40 w-20 opacity-20"
            /> */}

        </section>
    );
};

const SolutionsSection = () => {
    const data = [
        { img: img1, title: "CLASSROOM SOLUTIONS" },
        { img: img2, title: "HOME LEARNING", highlight: true },
        { img: img3, title: "SCHOOL ADMINISTRATION" },
        { img: img4, title: "FEE MANAGEMENT" },
        { img: img5, title: "PARENT COMMUNICATION" },
        { img: img6, title: "NEP IMPLEMENTATION" },
    ];

    return (
        <section className="bg-sbWhite py-1">
            <div className="max-w-[1400px] mx-auto px-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-sbWhite rounded-3xl border border-gray-200 
                         h-[420px] flex flex-col items-center justify-center
                         transition-all duration-300
                         hover:shadow-sbHover hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[260px] h-[200px] object-contain mb-12"
                            />

                            {/* Title */}
                            <h3
                                className={`text-[17px] font-semibold tracking-wide ${item.highlight
                                    ? "text-sbBlue"
                                    : "text-sbText"
                                    }`}
                            >
                                {item.title}
                            </h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

const BookNow = () => {
    return (
        <CommonButton label="Book a call" className="mt-8" />
    );
};

const KnowMoreBtn = () => {
    return (
        <CommonButton label="Know More" className="mt-5" />
    );
};

const GetFreeDemo = () => {
    return (
        <CommonButton label="Get a Free Demo" variant="outline" className="mt-5" />
    );
};

const InspireSection = () => {
    return (
        <section className="bg-sbWhite py-15">
            <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between gap-16">

                {/* LEFT CONTENT */}
                <div className="max-w-[600px]">

                    <h2 className="text-[32px] font-semibold text-sbText leading-[60px]">
                        Inspire. Engage. Transform.
                    </h2>

                    <div className="w-14 h-[3px] bg-sbBlue mt-2 mb-5"></div>

                    <p className="text-[18px] font-normal text-sbText leading-[34px] mb-6">
                        It’s time for smarter classrooms!!
                    </p>

                    <p className="text-[18px] font-extralight text-sbTextLight leading-[34px] mb-4">
                        SkoolPlus integrated classroom solution comes with high-
                        resolution interactive panels and a repository of ready-to-use
                        content.
                    </p>

                    <p className="text-[18px] font-extralight text-sbTextLight leading-[34px] mb-6">
                        All content is organized according to chapters and questions
                        for each chapter is easily accessible in the classroom.
                    </p>

                    <div className="flex gap-6">
                        <KnowMoreBtn />
                        <GetFreeDemo />
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

const TechnologyEveryoneSection = () => {
    return (
        <section className="bg-sbWhite py-10">
            <div className="max-w-[1000px] mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-[32px] font-semibold text-sbText">
                    Technology for Everyone
                </h2>

                {/* Underline */}
                <div className="w-16 h-[3px] bg-sbBlue mx-auto mt-2 mb-5 rounded-full"></div>

                {/* Paragraph */}
                <p className="text-[18px] leading-[38px] text-sbTextLight font-extralight">
                    Technology can revolutionize the way you teach, manage and operate a school.
                    It can empower teachers, enhance learning experiences for students, keep parents
                    involved, and help schools become learning centers of excellence.
                </p>

            </div>
        </section>
    );
};

// const TechnologyAudienceSection = () => {
//     return (
//         <section className="bg-sbWhite pt-0 pb-10 rounded-b-3xl">
//             {/* TOP IMAGES */}
//             <div className="grid grid-cols-4">
//                 <img
//                     src=
//                     {schoolsIcon}
//                     className="w-full h-[260px] object-cover"
//                 />
//                 <img
//                     src={teachersIcon}
//                     className="w-full h-[260px] object-cover"
//                 />
//                 <img
//                     src={studentsIcon}
//                     className="w-full h-[260px] object-cover"
//                 />
//                 <img
//                     src={parentsIcon}
//                     className="w-full h-[260px] object-cover"
//                 />
//             </div>

//             {/* CONTENT */}
//             <div className="max-w-[1400px] mx-auto px-16 mt-16 grid grid-cols-4 gap-16">

//                 {/* COLUMN ITEM */}
//                 {[
//                     {
//                         title: "Schools",
//                         points: [
//                             "Simplify school administration",
//                             "Optimize fee collection",
//                             "Boost parent engagement",
//                             "Transform classroom learning",
//                             "Enhance student performance",
//                             "Achieve NEP Compliance",
//                         ],
//                     },
//                     {
//                         title: "Teachers",
//                         points: [
//                             "Interactive panels & Classroom solutions",
//                             "Multi-media teaching materials",
//                             "Syllabus-aligned content",
//                             "Online assessments",
//                             "Comprehensive question bank",
//                             "Easy report card generation",
//                             "Automate attendance",
//                         ],
//                     },
//                     {
//                         title: "Students",
//                         points: [
//                             "Anywhere, anytime access",
//                             "Online Diary to stay on track",
//                             "Learn at your own pace",
//                             "Fun gamified learning",
//                             "Extensive multimedia library",
//                             "Personalized learning path",
//                         ],
//                     },
//                     {
//                         title: "Parents",
//                         points: [
//                             "Easy communication",
//                             "Track child's performance",
//                             "Identify improvement areas",
//                             "Learning materials to reduce private tuition",
//                             "Loan options & alerts for fees",
//                             "Know location of school bus",
//                         ],
//                     },
//                 ].map((item, index) => (
//                     <div key={index} className="relative">

//                         {/* Decorative Left Shape */}
//                         <div className="absolute -left-10 top-0 w-14 h-14 overflow-hidden">
//                             <div className="w-14 h-14 rounded-full 
//                   bg-sbBlue 
//                   opacity-90
//                   translate-x-[-55%]">
//                             </div>
//                         </div>

//                         {/* Title */}
//                         <h3 className="text-[24px] font-semibold text-sbText mb-6">
//                             {item.title}
//                         </h3>

//                         {/* Points */}
//                         <ul className="space-y-4">
//                             {item.points.map((point, i) => (
//                                 <li key={i} className="flex items-start gap-3">

//                                     {/* Check Icon */}
//                                     <CircleCheckIcon />

//                                     <span className="text-[18px] leading-[25px] text-sbTextLight font-extralight">
//                                         {point}
//                                     </span>

//                                 </li>
//                             ))}
//                         </ul>

//                     </div>
//                 ))}

//             </div>
//         </section>
//     );
// };

const TechnologyAudienceSection = () => {
    const data = [
        {
            img: schoolsIcon,
            title: "Schools",
            points: [
                "Simplify school administration",
                "Optimize fee collection",
                "Boost parent engagement",
                "Transform classroom learning",
                "Enhance student performance",
                "Achieve NEP Compliance",
            ],
        },
        {
            img: teachersIcon,
            title: "Teachers",
            points: [
                "Interactive panels & Classroom solutions",
                "Multi-media teaching materials",
                "Syllabus-aligned content",
                "Online assessments",
                "Comprehensive question bank",
                "Easy report card generation",
                "Automate attendance",
            ],
        },
        {
            img: studentsIcon,
            title: "Students",
            points: [
                "Anywhere, anytime access",
                "Online Diary to stay on track",
                "Learn at your own pace",
                "Fun gamified learning",
                "Extensive multimedia library",
                "Personalized learning path",
            ],
        },
        {
            img: parentsIcon,
            title: "Parents",
            points: [
                "Easy communication",
                "Track child's performance",
                "Identify improvement areas",
                "Learning materials to reduce private tuition",
                "Loan options & alerts for fees",
                "Know location of school bus",
            ],
        },
    ];

    return (
        <section className="bg-sbWhite pb-10">

            {/* CONTAINER */}
            <div className="max-w-[1400px] mx-auto px-4">
                {/* GRID */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">

                    {data.map((item, index) => (
                        <div key={index} className="relative flex flex-col bg-sbWhite rounded-sbXl shadow-sb border border-gray-50 transition-all duration-300 hover:shadow-sbHover group">

                            {/* Decorative Half Circle
                            <div className="absolute -left-7 top-8 w-14 h-14 overflow-hidden z-20">
                                <div className="w-14 h-14 bg-sbBlue rounded-full translate-x-[-55%]" />
                            </div> */}

                            {/* IMAGE */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[240px] object-cover rounded-t-sbXl"
                            />

                            {/* CONTENT */}
                            <div className="px-8 py-8 flex-1">

                                {/* TITLE */}
                                <h3 className="text-[22px] font-semibold text-sbText mb-6 pl-2">
                                    {item.title}
                                </h3>

                                {/* POINTS */}
                                <ul className="space-y-4">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">

                                            {/* Check Icon */}
                                            <CircleCheckIcon className="w-5 h-5 text-sbBlue mt-1 flex-shrink-0" />

                                            <span className="text-[17px] leading-[24px] text-sbTextLight font-extralight">
                                                {point}
                                            </span>

                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

const CircleCheckIcon = () => {
    return (
        <div
            className="
        flex-shrink-0
        w-[22px] h-[22px]
        aspect-square
        rounded-full
        border border-sbBlue
        flex items-center justify-center
        mt-[4px]
      "
        >
            <svg
                className="w-[10px] h-[10px] text-sbBlue"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                />
            </svg>
        </div>
    );
};

const HomeLearningSection = () => {
    return (
        <section className="relative bg-sbWhite pt-[30px] pb-[30px] overflow-hidden">

            <div className="max-w-[1320px] mx-auto px-[60px] grid grid-cols-2 gap-[120px] items-center">

                {/* LEFT PHONES */}
                <div className="relative flex justify-center">

                    <img
                        src={phoneMockup}   // your combined phone image
                        className="w-[520px] object-contain"
                        alt="App Preview"
                    />

                </div>

                {/* RIGHT CONTENT */}
                <div>

                    {/* Heading */}
                    <h2 className="text-[32px] leading-[60px] font-semibold text-sbText mb-[5px]">
                        @Home Learning
                    </h2>

                    {/* Subtext */}
                    <p className="text-[18px] leading-[28px] font-extralight text-sbTextLight mb-[50px] max-w-[520px]">
                        The School Lift app brings everything a student needs to augment classroom learning at home.
                    </p>

                    {/* FEATURES */}
                    <div className="space-y-[42px]">

                        {/* Feature Item */}
                        <div className="flex gap-[22px] items-start">

                            <img src={extensive1} className="w-[64px] h-[64px] object-contain" />

                            <div>
                                <p className="text-[17px] font-semibold text-sbText mb-[5px]">
                                    Extensive Multimedia Library
                                </p>
                                <p className="text-[17px] font-extralight leading-[26px] text-sbTextLight max-w-[500px]">
                                    Huge repository of multi-media materials aligned to syllabus and access to material used in the classroom.
                                </p>
                            </div>

                        </div>

                        {/* Feature Item */}
                        <div className="flex gap-[22px] items-start">

                            <img src={extensive2} className="w-[64px] h-[64px] object-contain" />

                            <div>
                                <p className="text-[17px] font-semibold text-sbText mb-[5px]">
                                    Gamified Learning Modules
                                </p>
                                <p className="text-[17px] font-extralight leading-[26px] text-sbTextLight max-w-[500px]">
                                    Apply learning and enjoy an immersive experience with Gamified learning modules.
                                </p>
                            </div>

                        </div>

                        {/* Feature Item */}
                        <div className="flex gap-[22px] items-start">

                            <img src={extensive3} className="w-[64px] h-[64px] object-contain" />

                            <div>
                                <p className="text-[17px] font-semibold text-sbText mb-[5px]">
                                    Personalized Learning Path
                                </p>
                                <p className="text-[17px] font-extralight leading-[26px] text-sbTextLight max-w-[500px]">
                                    Measure progress, identify gaps & make course corrections continuously.
                                </p>
                            </div>

                        </div>

                        {/* Feature Item */}
                        <div className="flex gap-[22px] items-start">

                            <img src={extensive4} className="w-[64px] h-[64px] object-contain" />

                            <div>
                                <p className="text-[17px] font-semibold text-sbText mb-[5px]">
                                    Online Assessment
                                </p>
                                <p className="text-[17px] font-extralight leading-[26px] text-sbTextLight max-w-[500px]">
                                    Prepare for competitive exams with extensive question bank and comparative scoring.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Decorative Pencil Image (Right Side Background) */}
            {/* <img
                src={phoneMockup}
                className="absolute right-[120px] bottom-[40px] w-[200px] opacity-90"
                alt=""
            /> */}
        </section>
    );
};

const SchoolAdministrationSection = () => {
    return (
        <section className="relative bg-sbBlue py-[80px] overflow-hidden mt-15">

            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover bg-center" />

            <div className="relative max-w-[1280px] mx-auto px-6 text-center text-white">

                {/* Heading */}
                <h2 className="text-[32px] font-semibold mb-4 text-white">
                    School Administration, the School Lift Way
                </h2>

                {/* Divider */}
                <div className="w-[60px] h-[3px] bg-white mx-auto mb-6 rounded-full" />

                {/* Subtext */}
                <p className="text-[18px] font-extralight leading-[32px] max-w-[820px] mx-auto mb-[70px] text-white/90">
                    Take control of operations, streamline processes, get a bird's eye view of performance and use it
                    to create an exceptional learning organization.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-3 gap-10">

                    <FeatureCard
                        icon={<Users size={28} />}
                        title="Student Information System"
                    />

                    <FeatureCard
                        icon={<Wallet size={28} />}
                        title="Fee Management"
                    />

                    <FeatureCard
                        icon={<MessageCircle size={28} />}
                        title="Parent Communication Portal"
                    />

                    <FeatureCard
                        icon={<ClipboardList size={28} />}
                        title="Report Card Management"
                    />

                    <FeatureCard
                        icon={<Bus size={28} />}
                        title="Transport Management"
                    />

                    <FeatureCard
                        icon={<Boxes size={28} />}
                        title="Inventory Management"
                    />

                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title }) => {
    return (
        <div className="bg-sbWhite text-sbBlueDark rounded-[22px] px-7 py-5 flex items-center gap-6 shadow-md hover:shadow-lg transition">

            <div className="w-[50px] h-[50px] rounded-full bg-sbBlueLight flex items-center justify-center text-sbBlueDark">
                {icon}
            </div>

            <p className="text-[19px] font-medium text-start">
                {title}
            </p>

        </div>
    );
};


const SchoolLiftDifference = () => {
    return (
        <section className="bg-sbWhite py-[50px]">
            <div className="max-w-[1280px] mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-[32px] font-semibold text-sbText">
                    The SchoolLift Difference
                </h2>

                {/* Divider */}
                <div className="w-[70px] h-[4px] bg-sbBlue mx-auto mt-4 mb-[40px] rounded-full" />

                {/* Grid */}
                <div className="grid grid-cols-3 gap-y-[20px] gap-x-[60px]">

                    <Feature
                        icon={<Lightbulb size={50} />}
                        title="Comprehensive Technology Solutions"
                        desc="Engaging with different technology providers can be expensive, exhausting, and ineffective."
                    />

                    <Feature
                        icon={<Handshake size={50} />}
                        title="Reliable, Long-Term Partnership"
                        desc="Experienced, time-tested edtech company with a clear understanding of Indian schools."
                    />

                    <Feature
                        icon={<Sparkles size={50} />}
                        title="Ease of Use"
                        desc="Intuitive interfaces that require no previous know-how. Get started easily."
                    />

                    <Feature
                        icon={<IndianRupee size={50} />}
                        title="Affordable, High-Quality Solution"
                        desc="Equitable access to high-quality education is what drives us to keep our solutions affordable."
                    />

                    <Feature
                        icon={<Monitor size={50} />}
                        title="Teacher-Driven"
                        desc="Technology that empowers teachers with all the tools required to deliver an exceptional learning experience."
                    />

                    <Feature
                        icon={<Puzzle size={50} />}
                        title="Learner-Centric"
                        desc="Effective and enjoyable way to learn that honors the unique capabilities of every student."
                    />

                </div>
            </div>
        </section>
    );
};

const Feature = ({ icon, title, desc }) => {
    return (
        <div className="flex flex-col items-center text-center">

            {/* Icon Circle */}
            <div className="w-[130px] h-[130px] rounded-full bg-sbPurpleLight flex items-center justify-center text-sbPurpleDark mb-8">
                {icon}
            </div>

            {/* Title */}
            <p className="text-[16px] font-semibold text-sbText mb-2 max-w-[320px]">
                {title}
            </p>

            {/* Description */}
            <p className="text-[17px] font-extralight leading-[32px] text-sbTextLight max-w-[360px]">
                {desc}
            </p>

        </div>
    );
};

const WhatTheySay = () => {
    return (
        <section className="w-full bg-sbBgLight py-[28px]">
            <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
                <div className="mb-14 flex flex-col items-center">
                    {/* Heading */}
                    <h2 className="text-[32px] font-semibold text-sbText">
                        What They Say
                    </h2>
                    {/* Divider */}
                    <div className="w-[70px] h-[4px] bg-sbBlue mx-auto mt-4 mb-0 rounded-full" />
                </div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
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
        <div className="relative mx-auto flex min-h-[500px] w-full max-w-[440px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="relative flex-1 px-10 pt-14 pb-36">
                <div className="mb-6 text-[17px] leading-none tracking-[4px] text-[#f2c94c]">
                    ★★★★★
                </div>

                <p className="text-[16px] leading-[1.6] text-sbTextLight font-extralight italic">
                    “{item.text}”
                </p>

                <div className="pointer-events-none absolute top-5 right-7 text-[200px] font-bold leading-none text-[#f7f7f7]">
                    ”
                </div>
            </div>

            <div className="relative flex min-h-[170px] flex-col items-center justify-center bg-sbBlue px-8 pb-8 pt-16 text-center">
                <div className="absolute -top-[70px] left-1/2 -translate-x-1/2">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-[130px] w-[130px] rounded-full border border-[#d9d9d9] object-cover bg-white"
                    />
                </div>

                <p className="mt-5 font-primary text-[16px] font-normal text-white">
                    {item.name}
                </p>

                <p className="mt-1 font-primary text-[13px] leading-7 font-extralight text-white/80">
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
    );
};

const OurClients = () => {
    return (
        <section className="w-full bg-sbWhite py-[25px]">

            <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">
                <div className="mb-6 flex flex-col items-center justify-center">
                    {/* Heading */}
                    <h2 className="text-[32px] font-semibold text-sbText">
                        Our Clients
                    </h2>

                    {/* Divider */}
                    <div className="w-[70px] h-[4px] bg-sbBlue mx-auto mt-4 mb-0 rounded-full" />
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                        1536: { slidesPerView: 5 },
                    }}
                    pagination={{ clickable: true }}
                    className="pb-5"
                >
                    {clients.map((client) => (
                        <SwiperSlide key={client.name}>
                            <div className="flex min-h-[360px] flex-col items-center justify-start text-center">
                                <div className="flex h-[220px] items-center justify-center">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className={client.imgClass}
                                        draggable={false}
                                    />
                                </div>
                                {/* <h3 className="mt-5 font-primary text-[14px] font-semibold leading-snug text-sbText">
                                    {client.name}
                                </h3>
                                <p className="mt-2 font-primary text-[9px] font-normal text-sbTextLight">
                                    {client.location}
                                </p> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};


export default Home;