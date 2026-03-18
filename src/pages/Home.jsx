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
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
            <HeaderSection />
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

const HeaderSection = () => {
    return (
        <section className="relative w-full bg-sbWhite overflow-hidden">

            {/* Floating Background Icons - Hidden on smaller screens for cleaner UI */}
            <div className="hidden lg:block">
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
                <img src={icon12} className="absolute top-[8%] left-[50%] w-28 opacity-40" />
                <img src={icon13} className="absolute top-[43%] right-[50%] w-20 opacity-40" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-15 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-0">

                {/* Left Content */}
                <div className="max-w-xl text-center lg:text-start flex flex-col items-center lg:items-start">
                    <h1 className="text-5xl md:text-7xl lg:text-[94px] leading-[1.1] md:leading-[82px] font-bold text-sbText">
                        Empowering <br className="hidden md:block" />
                        Future-ready <br className="hidden md:block" />
                        Schools
                    </h1>

                    <p className="mt-6 md:mt-10 text-lg md:text-[20px] text-sbTextLight font-extralight">
                        Trusted Technology Partner for Schools
                    </p>

                    <CommonButton
                        label="Know More"
                        className="mt-8 md:mt-12 !justify-center lg:!justify-start"
                    />
                </div>


                {/* Inner White Circle */}
                <div className="w-[320px] h-[320px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden shrink-0">
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
        <section className="relative bg-sbWhite py-10 md:py-15 overflow-hidden">

            {/* Left Light Gradient Circle */}
            <div className="absolute -left-40 top-0 w-[300px] h-[300px] bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-40"></div>

            <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center">

                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">

                            {/* Icon */}
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-8"
                            />

                            {/* Number */}
                            <h2 className="text-3xl md:text-[42px] font-bold text-sbText leading-none">
                                {item.value}
                            </h2>

                            {/* Label */}
                            <p className="mt-2 text-base md:text-[19px] tracking-wide font-semibold text-sbBlue">
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
        <section className="relative bg-sbWhite py-10 md:py-15 overflow-hidden">

            {/* Content Container */}
            <div className="max-w-[1100px] mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-[32px] font-semibold text-sbText leading-snug md:leading-[60px]">
                    One Technology Partner for all your school's needs
                </h2>

                {/* Underline */}
                <div className="w-16 h-[3px] bg-sbBlue mx-auto mt-2"></div>

                {/* Description */}
                <p className="mt-5 text-base md:text-[18px] font-extralight text-sbTextLight leading-relaxed md:leading-[35px]">
                    Technology can greatly transform the way you teach, manage and operate a school.
                    School Lift's technology solutions allow you to focus on delivering exceptional
                    learning outcomes by empowering teachers, engaging young minds, streamlining
                    administration and involving all stakeholders.
                </p>

            </div>

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
        <section className="bg-sbWhite py-5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-sbWhite rounded-3xl border border-gray-200 
                         h-[350px] md:h-[420px] flex flex-col items-center justify-center
                         transition-all duration-300
                         hover:shadow-sbHover hover:-translate-y-2 cursor-pointer p-6"
                        >
                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[180px] h-[150px] md:w-[260px] md:h-[200px] object-contain mb-8 md:mb-12"
                            />

                            {/* Title */}
                            <h3
                                className={`text-[15px] md:text-[17px] font-semibold tracking-wide text-center ${item.highlight
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
        <section className="bg-sbWhite py-10 md:py-15">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                {/* LEFT CONTENT */}
                <div className="max-w-full lg:max-w-[600px] text-center lg:text-start">

                    <h2 className="text-2xl md:text-[32px] font-semibold text-sbText leading-snug md:leading-[60px]">
                        Inspire. Engage. Transform.
                    </h2>

                    <div className="w-14 h-[3px] bg-sbBlue mt-2 mb-5 mx-auto lg:mx-0"></div>

                    <p className="text-base md:text-[18px] font-normal text-sbText leading-relaxed md:leading-[34px] mb-4 md:mb-6">
                        It’s time for smarter classrooms!!
                    </p>

                    <p className="text-base md:text-[18px] font-extralight text-sbTextLight leading-relaxed md:leading-[34px] mb-3 md:mb-4">
                        SkoolPlus integrated classroom solution comes with high-
                        resolution interactive panels and a repository of ready-to-use
                        content.
                    </p>

                    <p className="text-base md:text-[18px] font-extralight text-sbTextLight leading-relaxed md:leading-[34px] mb-6 md:mb-8">
                        All content is organized according to chapters and questions
                        for each chapter is easily accessible in the classroom.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                        <KnowMoreBtn />
                        <GetFreeDemo />
                    </div>

                </div>


                {/* RIGHT VIDEO CARD */}
                <div className="w-full lg:w-[720px] rounded-3xl overflow-hidden shadow-sb bg-black aspect-video">
                    <iframe
                        src="https://player.vimeo.com/video/1123084258?h=8372105d9e&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;loop=1&amp;app_id=122963"
                        className="w-full h-full"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        title="Home-and-Classroom-Solutions"
                        data-ready="true"
                    ></iframe>
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
                <h2 className="text-2xl md:text-[32px] font-semibold text-sbText">
                    Technology for Everyone
                </h2>

                {/* Underline */}
                <div className="w-16 h-[3px] bg-sbBlue mx-auto mt-2 mb-5 rounded-full"></div>

                {/* Paragraph */}
                <p className="text-base md:text-[18px] leading-relaxed md:leading-[38px] text-sbTextLight font-extralight">
                    Technology can revolutionize the way you teach, manage and operate a school.
                    It can empower teachers, enhance learning experiences for students, keep parents
                    involved, and help schools become learning centers of excellence.
                </p>

            </div>
        </section>
    );
};

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
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-4">
                {/* GRID */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:gap-5">

                    {data.map((item, index) => (
                        <div key={index} className="relative flex flex-col bg-sbWhite rounded-sbXl shadow-sb border border-gray-50 transition-all duration-300 hover:shadow-sbHover group overflow-hidden">

                            {/* IMAGE */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[200px] md:h-[240px] object-cover"
                            />

                            {/* CONTENT */}
                            <div className="px-6 md:px-8 py-6 md:py-8 flex-1">

                                {/* TITLE */}
                                <h3 className="text-xl md:text-[22px] font-semibold text-sbText mb-4 md:mb-6 pl-2">
                                    {item.title}
                                </h3>

                                {/* POINTS */}
                                <ul className="space-y-3 md:space-y-4">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">

                                            {/* Check Icon */}
                                            <CircleCheckIcon className="w-5 h-5 text-sbBlue mt-1 flex-shrink-0" />

                                            <span className="text-base md:text-[17px] leading-relaxed md:leading-[24px] text-sbTextLight font-extralight">
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
        <section className="relative bg-sbWhite py-10 md:py-[30px] overflow-hidden">

            <div className="max-w-[1320px] mx-auto px-6 md:px-10 lg:px-[60px] flex flex-col lg:flex-row gap-10 lg:gap-[120px] items-center">

                {/* LEFT PHONES */}
                <div className="relative flex justify-center w-full lg:w-auto">

                    <img
                        src={phoneMockup}   // your combined phone image
                        className="w-full max-w-[320px] md:max-w-[450px] lg:w-[520px] object-contain"
                        alt="App Preview"
                    />

                </div>

                {/* RIGHT CONTENT */}
                <div className="text-center lg:text-start">

                    {/* Heading */}
                    <h2 className="text-2xl md:text-[32px] leading-snug md:leading-[60px] font-semibold text-sbText mb-[5px]">
                        @Home Learning
                    </h2>

                    {/* Subtext */}
                    <p className="text-base md:text-[18px] leading-relaxed md:leading-[28px] font-extralight text-sbTextLight mb-8 md:mb-[50px] max-w-[520px] mx-auto lg:mx-0">
                        The School Lift app brings everything a student needs to augment classroom learning at home.
                    </p>

                    {/* FEATURES */}
                    <div className="space-y-8 md:space-y-[42px]">

                        {/* Feature Items - Mapping for cleaner code and responsiveness */}
                        {[
                            { icon: extensive1, title: "Extensive Multimedia Library", desc: "Huge repository of multi-media materials aligned to syllabus and access to material used in the classroom." },
                            { icon: extensive2, title: "Gamified Learning Modules", desc: "Apply learning and enjoy an immersive experience with Gamified learning modules." },
                            { icon: extensive3, title: "Personalized Learning Path", desc: "Measure progress, identify gaps & make course corrections continuously." },
                            { icon: extensive4, title: "Online Assessment", desc: "Prepare for competitive exams with extensive question bank and comparative scoring." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-4 md:gap-[22px] items-center sm:items-start text-center sm:text-start">
                                <img src={item.icon} className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-contain" alt={item.title} />
                                <div>
                                    <p className="text-base md:text-[17px] font-semibold text-sbText mb-1 md:mb-[5px]">
                                        {item.title}
                                    </p>
                                    <p className="text-sm md:text-[17px] font-extralight leading-relaxed md:leading-[26px] text-sbTextLight max-w-[500px]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

        </section>
    );
};

const SchoolAdministrationSection = () => {
    return (
        <section className="relative bg-sbBlue py-16 md:py-[80px] overflow-hidden mt-10 md:mt-15">

            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-cover bg-center" />

            <div className="relative max-w-[1280px] mx-auto px-6 text-center text-white">

                {/* Heading */}
                <h2 className="text-2xl md:text-[32px] font-semibold mb-4 text-white leading-snug">
                    School Administration, the School Lift Way
                </h2>

                {/* Divider */}
                <div className="w-[60px] h-[3px] bg-white mx-auto mb-6 rounded-full" />

                {/* Subtext */}
                <p className="text-base md:text-[18px] font-extralight leading-relaxed md:leading-[32px] max-w-[820px] mx-auto mb-12 md:mb-[70px] text-white/90">
                    Take control of operations, streamline processes, get a bird's eye view of performance and use it
                    to create an exceptional learning organization.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

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
        <section className="bg-sbWhite py-12 md:py-[50px]">
            <div className="max-w-[1280px] mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-[32px] font-semibold text-sbText">
                    The SchoolLift Difference
                </h2>

                {/* Divider */}
                <div className="w-[70px] h-[4px] bg-sbBlue mx-auto mt-4 mb-10 md:mb-[40px] rounded-full" />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-[20px] gap-x-10 md:gap-x-[60px]">

                    <Feature
                        icon={<Lightbulb className="w-8 h-8 md:w-[50px] md:h-[50px]" />}
                        title="Comprehensive Technology Solutions"
                        desc="Engaging with different technology providers can be expensive, exhausting, and ineffective."
                    />

                    <Feature
                        icon={<Handshake className="w-8 h-8 md:w-[50px] md:h-[50px]" />}
                        title="Reliable, Long-Term Partnership"
                        desc="Experienced, time-tested edtech company with a clear understanding of Indian schools."
                    />

                    <Feature
                        icon={<Sparkles className="w-8 h-8 md:w-[50px] md:h-[50px]" />}
                        title="Ease of Use"
                        desc="Intuitive interfaces that require no previous know-how. Get started easily."
                    />

                    <Feature
                        icon={<IndianRupee className="w-8 h-8 md:w-[50px] md:h-[50px]" />}
                        title="Affordable, High-Quality Solution"
                        desc="Equitable access to high-quality education is what drives us to keep our solutions affordable."
                    />

                    <Feature
                        icon={<Monitor className="w-8 h-8 md:w-[50px] md:h-[50px]" />}
                        title="Teacher-Driven"
                        desc="Technology that empowers teachers with all the tools required to deliver an exceptional learning experience."
                    />

                    <Feature
                        icon={<Puzzle className="w-8 h-8 md:w-[50px] md:h-[50px]" />}
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
            <div className="w-24 h-24 md:w-[130px] md:h-[130px] rounded-full bg-sbPurpleLight flex items-center justify-center text-sbPurpleDark mb-6 md:mb-8">
                {icon}
            </div>

            {/* Title */}
            <p className="text-base font-semibold text-sbText mb-2 max-w-[320px]">
                {title}
            </p>

            {/* Description */}
            <p className="text-sm md:text-[17px] font-extralight leading-relaxed md:leading-[32px] text-sbTextLight max-w-[360px]">
                {desc}
            </p>

        </div>
    );
};

const WhatTheySay = () => {
    return (
        <section className="w-full bg-sbBgLight py-10 md:py-14 lg:py-18">
            <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
                <div className="mb-10 md:mb-14 flex flex-col items-center">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-[32px] font-semibold text-sbText">
                        What They Say
                    </h2>

                    {/* Divider */}
                    <div className="w-[70px] h-[4px] bg-sbBlue mx-auto mt-4 mb-0 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
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
        <div className="relative mx-auto flex min-h-[500px] md:min-h-[550px] w-full max-w-[440px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <div className="relative flex-1 px-6 md:px-10 pt-12 md:pt-16 pb-36 md:pb-44">
                <div className="mb-4 md:mb-6 text-[15px] md:text-[17px] leading-none tracking-[4px] text-[#f2c94c]">
                    ★★★★★
                </div>

                <p className="text-sm md:text-[16px] leading-relaxed md:leading-[1.6] text-sbTextLight font-extralight italic">
                    “{item.text}”
                </p>

                <div className="pointer-events-none absolute top-5 right-7 text-6xl md:text-[200px] font-bold leading-none text-[#f7f7f7] opacity-20 md:opacity-100">
                    ”
                </div>
            </div>

            <div className="relative flex min-h-[160px] md:min-h-[200px] flex-col items-center justify-center bg-sbBlue px-6 md:px-8 pb-8 md:pb-10 pt-16 md:pt-20 text-center">
                <div className="absolute -top-[50px] md:-top-[70px] left-1/2 -translate-x-1/2">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-[100px] w-[100px] md:h-[130px] md:w-[130px] rounded-full border border-[#d9d9d9] object-cover bg-white"
                    />
                </div>

                <p className="mt-4 md:mt-5 font-primary text-sm md:text-[16px] font-normal text-white">
                    {item.name}
                </p>

                <p className="mt-1 font-primary text-[12px] md:text-[13px] leading-snug md:leading-7 font-extralight text-white/80">
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
        <section className="w-full bg-sbWhite py-10 md:py-[25px]">

            <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-16">
                <div className="mb-8 md:mb-6 flex flex-col items-center justify-center">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-[32px] font-semibold text-sbText">
                        Our Clients
                    </h2>

                    {/* Divider */}
                    <div className="w-[70px] h-[4px] bg-sbBlue mx-auto mt-4 mb-0 rounded-full" />
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={true}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                    className="pb-5 marquee-swiper"
                >
                    {clients.map((client) => (
                        <SwiperSlide key={client.name}>
                            <div className="flex min-h-[250px] md:min-h-[360px] flex-col items-center justify-center text-center px-4">
                                <div className="flex h-[150px] md:h-[220px] items-center justify-center">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className={`${client.imgClass} max-h-full`}
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};


export default Home;