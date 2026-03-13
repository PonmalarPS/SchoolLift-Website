import React from "react";
import { useState } from "react";
import CommonButton from "../component/CommonButton";
import {
    Users,
    Wallet,
    MessageCircle,
    ClipboardList,
    Bus,
    Boxes,
    CheckCircle2,
    ChevronDown,
    ChevronUp
} from "lucide-react";
// ── Background floating icons ──────────────────────────────────────────────
import banner from "../assets/classroom-icons/classroom.jpg";
import interactiveIcon from "../assets/classroom-icons/interactive-panel.png";
import warrantyIcon from "../assets/classroom-icons/warranty_support.png";
import syllabusIcon from "../assets/classroom-icons/syllabus.png";
import semiCircle from "../assets/home-icons/img_semicircle.png";
import ramIcon from "../assets/classroom-icons/4GB_ram.png";
import androidIcon from "../assets/classroom-icons/built-in-android-os.png";
import supportWindowIcon from "../assets/classroom-icons/support_window.png";
import ultraHdIcon from "../assets/classroom-icons/ultra_4k_display.png";
import antiScratchIcon from "../assets/classroom-icons/anti_scratch.png";
import pointTouch from "../assets/classroom-icons/point_touch.png";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";

import tv1 from "../assets/classroom-icons/65in-tv.svg";
import tv2 from "../assets/classroom-icons/75in-tv.svg";
import tv3 from "../assets/classroom-icons/86in-tv.svg";
import androidPanel from "../assets/classroom-icons/android-panel.jpg";

import icon1 from "../assets/classroom-icons/icon1.png";
import icon2 from "../assets/classroom-icons/icon2.png";
import icon3 from "../assets/classroom-icons/icon3.png";
import icon4 from "../assets/classroom-icons/icon4.png";
import icon5 from "../assets/classroom-icons/icon5.png";
import icon6 from "../assets/classroom-icons/icon6.png";

import icAngry from "../assets/classroom-icons/ic_angry.png";
import icBlock from "../assets/classroom-icons/ic_block.png";
import icCorrect from "../assets/classroom-icons/ic_correct.png";
import icHappy from "../assets/classroom-icons/ic_happy.png";
import icHigh from "../assets/classroom-icons/ic_high.png";
import icNotes from "../assets/classroom-icons/ic_notes.png";
import icOnline from "../assets/classroom-icons/ic_online_support.png";
import icTeacher from "../assets/classroom-icons/ic_teacher.png";
import icWrong from "../assets/classroom-icons/ic_wrong.png";

import gif1 from "../assets/classroom-icons/Assess_Screen3.gif";
import gif2 from "../assets/classroom-icons/Attendance_Screen1.gif";
import gif3 from "../assets/classroom-icons/Homework_Screen5.gif";
import gif4 from "../assets/classroom-icons/Learn_Screen2.gif";
import gif5 from "../assets/classroom-icons/Notes_Screen4.gif";

const accordionItems = [
    {
        id: 1,
        title: "Take attendance using the SkoolBeep app",
        content:
            "A few clicks and all data is captured and organized in the student database. Save on teaching time.",
        gif: gif2,
    },
    {
        id: 2,
        title: "Teach using our multi-media repository",
        content:
            "Access chapter-wise videos, presentations, quizzes, and other rich classroom content in one place for smoother teaching.",
        gif: gif4,
    },
    {
        id: 3,
        title: "Test understanding",
        content:
            "Conduct quick assessments, quizzes, and tests to measure student understanding and identify learning gaps instantly.",
        gif: gif1,
    },
    {
        id: 4,
        title: "Save & share Classnotes",
        content:
            "Create and share class notes easily so students can revisit lesson material anytime from home.",
        gif: gif5,
    },
    {
        id: 5,
        title: "Assign homework right from the classroom",
        content:
            "Assign homework instantly during class and make sure students receive the same material without extra effort.",
        gif: gif3,
    },
];

const Classroom = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <ClassroomSolutions />
            <GetDemoButton />
            <EmpoweredTeachersSection />
            <InteractiveBoard />
            <InteractiveBoardsForClassrooms />
            <ContentRepository />
            <WhySkoolPlus />
            <TeacherEmpowermentAccordion />
            <FrequentlyAskedQuestions />
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative w-full h-[550px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}
            />
        </section>
    );
};

const ClassroomSolutions = () => {
    const solutions = [
        {
            id: 1,
            title: "Interactive Flat Panel",
            image: interactiveIcon,
            imageBg: "bg-sbPurple",
            points: [
                "In-built Android 11 OS",
                "Eliminates need for multiple equipment",
                "No SmartPhone requirement",
            ],
        },
        {
            id: 2,
            title: "Syllabus-aligned Content",
            image: syllabusIcon,
            imageBg: "bg-sbBlueLight",
            points: [
                "Video content and presentations",
                "Gamified learning modules",
                "Quizzes and question banks",
            ],
        },
        {
            id: 3,
            title: "Warranty & Support",
            image: warrantyIcon,
            imageBg: "bg-sbPurpleLight",
            points: [
                "3 years Warranty* on Equipment",
                "EMI Option",
                "Optional Annual Maintenance Contract (AMC)",
            ],
        },
    ];
    return (
        <section className="bg-white py-10 px-6">
            <div className="mx-auto max-w-[1520px] px-5 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-[1320px] text-center">
                    <h2 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                        SkoolPlus Classroom Solutions
                    </h2>

                    <div className="mx-auto mt-5 h-[4px] w-[62px] rounded-full bg-sbBlue" />

                    <p className="mt-7 font-primary text-[24px] font-semibold leading-[1.35] text-sbText">
                        The next-gen solution for enhanced learning and better engagement
                    </p>

                    <p className="mx-auto mt-4 max-w-[1000px] font-extralight font-primary text-[18px] leading-[1.7] text-sbTextLight">
                        SkoolPlus integrated classroom solution allows for class participation, truly active
                        learning and an entirely new level of student collaboration. Our solution comes not
                        only with high-resolution digital panels but also ready-to-use content aligned to the
                        syllabus so teachers can get started immediately.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0">
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
                                            <p className="font-primary text-[19px] leading-[1.5] text-sbText font-extralight">
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

const GetDemoButton = () => {
    return (
        <CommonButton
            label="Get a Demo"
            className="mt-3 !justify-center"
        />
    );
};

const EmpoweredTeachersSection = () => {
    return (
        <section className="bg-sbWhite py-15">
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-16">

                {/* LEFT CONTENT */}
                <div className="max-w-[500px]">

                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        Empowered Teachers.<br />
                        Engaged Students.<br />
                        Better Learning.
                    </h2>

                    <div className="w-14 h-[3px] bg-sbBlue mt-2 mb-5"></div>

                    <p className="text-[18px] font-extralight text-sbTextLight leading-[34px] mb-4">
                        Transform any lesson into an engaging learning experience. From multimedia videos to collaborative exercises and on- the-fly assessments,SkoolPlus equips teachers with everything they need to deliver effective lessons every single day.
                    </p>

                    <p className="text-[18px] font-extralight text-sbTextLight leading-[34px] mb-6">
                        Transform your classrooms into vibrant learning spaces that fuel tomorrow's dreams.
                    </p>

                    <div className="flex gap-6">
                        <GetInTouch />
                    </div>

                </div>


                {/* RIGHT VIDEO CARD */}
                <div className="w-[800px] rounded-3xl overflow-hidden shadow-sb bg-black">
                    <iframe src="https://player.vimeo.com/video/1123084258?h=8372105d9e&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;loop=1&amp;app_id=122963" width="708.711" height="398.633" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Home-and-Classroom-Solutions" data-ready="true"></iframe>
                </div>

            </div>
        </section>
    );
};

const GetInTouch = () => {
    return (
        <CommonButton
            label="Get in Touch"
            className="mt-3 !justify-center"
        />
    );
};

const InteractiveBoard = () => {
    const features = [
        {
            title: "Ultra HD 4K Display",
            icon: ultraHdIcon,
        },
        {
            title: "Built-In Android OS",
            icon: androidIcon,
        },
        {
            title: "Supports Windows/Android",
            icon: supportWindowIcon,
        },
        {
            title: "4GB RAM, 32 GB ROM",
            icon: ramIcon,
        },
        {
            title: "Anti-Scratch, Anti-Collision Tempered Glass",
            icon: antiScratchIcon,
        },
        {
            title: "40-Point Touch",
            icon: pointTouch,
        },
    ];
    return (
        <section className="bg-white py-18">
            <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        Interactive Board For Teaching
                    </h2>

                    <div className="mx-auto mt-4 h-[4px] w-[70px] rounded bg-sbBlue"></div>

                    <p className="mt-6 text-[18px] font-extralight text-sbTextLight leading-[34px] mb-6">
                        Intuitive, versatile and multi-function digital panels that
                        eliminate the need for multiple equipment
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-sbLg border border-gray-200 bg-sbWhite p-10 text-center shadow-sb transition-all duration-300 hover:-translate-y-2 hover:shadow-sbHover"
                            >
                                {/* Icon */}
                                <div className="flex justify-center">
                                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full transition-all duration-300">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="h-[55px] w-[55px] object-contain transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <p className="mt-6 font-primary text-[16px] font-semibold text-sbText transition-colors duration-300 group-hover:text-sbBlue">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Button */}
                <GetFreeDemo />

            </div>
        </section>
    );
}

const GetFreeDemo = () => {
    return (
        <CommonButton
            label="Get a Free Demo"
            className="flex mt-16 !justify-center"
        />
    );
};

const InteractiveBoardsForClassrooms = () => {
    const panelSizes = [
        {
            icon: tv1,
            title: "65 inch Panel",
            description: "Most suited for classrooms with 45 students or less",
        },
        {
            icon: tv2,
            title: "75 inch Panel",
            description: "Most suited for classrooms with upto 75 students",
        },
        {
            icon: tv3,
            title: "86 inch Panel",
            description: "Most suited for classrooms with upto 125 students",
        },
    ];
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-[1700px] px-4 lg:px-10">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="flex justify-center">
                        <img
                            src={androidPanel}
                            alt="Interactive board"
                            className="w-full max-w-[820px] h-auto"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                            Interactive Boards for Classrooms
                        </h2>

                        <div className="mt-4 h-[5px] w-[70px] rounded bg-sbPurple"></div>

                        <p className="mt-6 text-[18px] font-extralight text-sbTextLight leading-[34px]">
                            Choose from 3 models engineered to suit your learning
                            environment and budget.
                        </p>

                        <div className="mt-4 space-y-5">
                            {panelSizes.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">

                                    {/* Icon Box */}
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="h-[70px] w-[70px]"
                                    />

                                    {/* Text */}
                                    <div>
                                        <p className="font-primary text-[17px] font-semibold text-sbText">
                                            {item.title}
                                        </p>

                                        <p className="mt-2 font-primary text-[17px] text-sbTextLight font-extralight">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

const ContentRepository = () => {
    const repositoryItems = [
        {
            id: 1,
            title: "Syllabus-Aligned Learning Material",
            image: icon6,
        },
        {
            id: 2,
            title: "Multi-media content organized by chapters",
            image: icon1,
            highlight: true,
        },
        {
            id: 3,
            title: "Videos, Presentations, Gamified quizzes",
            image: icon2,
        },
        {
            id: 4,
            title: "Group assessments, short quizzes, mock exams",
            image: icon3,
        },
        {
            id: 5,
            title: "Classroom tests & online home assessments",
            image: icon4,
        },
        {
            id: 6,
            title: "Apps for STEM, humanities & language learning",
            image: icon5,
        },
    ];

    return (
        <section className="bg-white pt-16 pb-10">
            <div className="mx-auto max-w-[1520px] px-5 sm:px-8 lg:px-12">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        Content Repository
                    </h2>

                    <div className="mx-auto mt-4 h-[4px] w-[48px] rounded-full bg-sbBlue" />

                    <p className="mt-6 text-[18px] font-extralight text-sbTextLight leading-[34px] mb-6">
                        Syllabus-aligned content created, reviewed and updated by a highly
                        qualified panel of principals and teachers.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {repositoryItems.map((item) => (
                        <div
                            key={item.id}
                            className="group flex min-h-[280px] flex-col items-center rounded-[18px] border border-gray-200 bg-sbWhite px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-sbHover"
                        >
                            {/* Image */}
                            <div className="flex h-[120px] items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-[115px] w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Title */}
                            <div className="mt-8 flex flex-1 items-start justify-center">
                                <p className="font-primary text-[17px] font-semibold leading-[1.25] text-sbText transition-colors duration-300 group-hover:text-sbBlue">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <GetDemoButton />
                </div>

            </div>
        </section>
    );
}

const WhySkoolPlus = () => {
    const comparisonRows = [
        {
            feature: "Equipment",
            otherIcon: icHigh,
            otherText:
                "Projectors, speakers, local server, LAN, computers and multiple cables",
            plusIcon: icHappy,
            plusText: "Wiff, Power Socket",
        },
        {
            feature: "Content Repository",
            otherIcon: icWrong,
            otherText: "Content has to be curated",
            plusIcon: icCorrect,
            plusText: "Syllabus aligned multi-media content and quizzes organized by chapter",
        },
        {
            feature: "Teacher Workload",
            otherIcon: icAngry,
            otherText: "High",
            plusIcon: icTeacher,
            plusText:
                "Supports the teacher every step of the way. Attendance, Classroom material, Quiz & Home assignments. Can start from Day 1.",
        },
        {
            feature: "Accessibility at Home",
            otherIcon: icBlock,
            otherText: "Not accessible",
            plusIcon: icNotes,
            plusText:
                "Accessible using SkoolBeep app. Students can submit homework and access same material used in class.",
        },
        {
            feature: "Support",
            otherIcon: icWrong,
            otherText: "None or Limited",
            plusIcon: icOnline,
            plusText: "Online support & 3 years Warranty",
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
                        WhySkoolPlus
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
                            Other Smart Boards
                        </div>
                        <div className="bg-sbPurple px-10 py-14 font-primary text-center text-[15px] font-bold uppercase tracking-[0.02em] text-white">
                            SkoolPlus Classroom Solution
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

const TeacherEmpowermentAccordion = () => {
    const [openId, setOpenId] = useState(1);

    return (
        <section className="w-full bg-sbBgLight pb-8 lg:py-12">
            <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-14">
                <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
                    {/* Left Content */}
                    <div className="pt-2">
                        <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                            Empowering The Teacher At Every Step In The Classroom
                        </h2>

                        <div className="mt-4 h-[6px] w-[86px] rounded-full bg-sbBlue" />

                        <div className="mt-3">
                            {accordionItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isOpen={openId === item.id}
                                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <img
                            src={accordionItems.find((item) => item.id === openId)?.gif || gif2}
                            alt="Teacher empowerment screen"
                            className="h-[400px] w-full max-w-[820px] object-contain border-[22px] border-black shadow-sb"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const AccordionItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-transparent">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between gap-2 py-3 text-left"
            >
                <span className="font-primary text-[17px] font-semibold leading-[1.35] text-sbText">
                    {item.title}
                </span>

                <span className="shrink-0 text-sbBlue">
                    {isOpen ? (
                        <ChevronUp className="h-7 w-7 stroke-[1.8]" />
                    ) : (
                        <ChevronDown className="h-7 w-7 stroke-[1.8]" />
                    )}
                </span>
            </button>

            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="max-w-[900px] pr-12 font-primary text-[16px] leading-[1.8] text-sbTextLight font-extralight">
                        {item.content}
                    </p>
                </div>
            </div>
        </div>
    );
}

const FrequentlyAskedQuestions = () => {
    const [openId, setOpenId] = useState(null);
    const faqItems = [
        {
            id: 1,
            question: "Why do we need interactive flat panels?",
            answer: `Interactive flat panels open up access to a wide variety of world-class learning resources and applications. It facilitates multisensory learning and keeps students engaged and involved. Combined with up-to-date curated content, it can be truly transformational for teachers and learners.`,
        },
        {
            id: 2,
            question: "How is SkoolBeep's classroom solution different from smart classes?",
            answer: `Our interactive flat panels have built-in wifi solutions eliminating the need for local servers, LAN, computers, and projectors. Purchase options, installation, maintenance, and support make it hassle-free for schools.

SkoolBeep's classroom solutions empower the teacher with a multimedia content repository and assessments organized by chapters. The content is updated weekly saving hours spent on research.

The ability to continue learning with the same resources at home and personalization instills confidence and supports skill development in students.`,
        },
        {
            id: 3,
            question: "How does SkoolPlus help teachers?",
            answer: `SkoolPlus has been created with a teacher's primary responsibilities in mind, thereby significantly reducing their workload.

It helps teachers with their key functions:

Teaching: A huge repository of syllabus-aligned multi-media resources and learning material organized by chapters.

Assessments: Previous year Exam papers, quizzes, practice questions and more. Share assessments and activities easily right from the classroom. This saves a teacher many hours of work.

Feedback: Check understanding of individual students or the entire class with insights. Help students who need extra help with individualized feedback and extra lessons or repeat concepts not grasped by the entire class.`,
        },
        {
            id: 4,
            question: "How do you ensure the quality of the content?",
            answer: `Digital resources aligned to the syllabus and organized chapter-wise.

A variety of digital resources including videos, presentations, textbooks and reference materials.

Mock exams, practice questions, and gamified quizzing.

Personalized difficulty level settings for questions.

Feedback on learning outcomes, concepts and progress.`,
        },
        {
            id: 5,
            question: "Is the content aligned to the syllabus?",
            answer: `Yes. It is mapped to the curriculum followed by your school and the chapters are organized in the same order followed in textbooks.`,
        },
        {
            id: 6,
            question: "How many questions are there in the question bank?",
            answer: `SkoolBeep has curated more than 1 lakh unique questions across all subjects. For each class, we have 100+ questions per chapter and 1500 questions per subject.`,
        },
        {
            id: 7,
            question: "Apart from the SkoolBeep content, what other content can I use in the classroom?",
            answer: `SkoolBeep has curated and made available some very useful apps for different streams:

STEM
Geometry, Anatomy, Robotics/Coding

Humanities
Atlas, Wikipedia, History, Places/Events

Languages
Dictionary, Children's news, Rhymes, Spoken English

General
Youtube, Browser, Activity kits, Language learning

In addition, any app from Playstore can be used to enhance classroom learning.`,
        },
        {
            id: 8,
            question: "What does the in-built content repository contain?",
            answer: `The content is created, reviewed, and updated by a highly qualified panel of principals and teachers. It is mapped to the curriculum and syllabus followed by the prominent national and state boards.`,
        },
        {
            id: 9,
            question: "How can the questions be used?",
            answer: `In various ways both in the classroom and at home.

Teachers can use short quizzes in class for checking understanding or revising concepts. They can also create question papers, give homework or assign practice sheets.

Students can use it for practice, mock exams and gamified learning etc. Access to question papers from the last 10 years makes board exam preparation easier.`,
        },
    ];
    return (
        <section className="relative overflow-hidden bg-[#f7f7f7]">
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

export default Classroom;