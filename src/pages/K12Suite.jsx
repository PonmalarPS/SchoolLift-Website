import React, { useState, useMemo, useRef, useEffect } from "react";
import FrequentlyAskedQuestions from "../component/FrequentlyAskedQuestions";
import CommonButton from "../component/CommonButton";
import {
    Users,
    Wallet,
    MessageCircle,
    ClipboardList,
    Bus,
    ArrowRightCircle,
    ArrowUp,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    CheckCircle,
    Check,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Smartphone
} from "lucide-react";
import k12SuiteImage from "../assets/k12-suite-icons/k-12-image.webp";
import k12SuiteBannerBg from "../assets/k12-suite-icons/k-12-suite-banner-bg.webp";
import k12SuiteBannerBg2 from "../assets/k12-suite-icons/k-12-banner.webp";
import k12SuiteBannerImg from "../assets/k12-suite-icons/k-12-suite-banner.webp";
import rocket from "../assets/k12-suite-icons/rocket.webp";
import base from "../assets/k12-suite-icons/base.webp";
import circle from "../assets/k12-suite-icons/circle.png";
import fire from "../assets/k12-suite-icons/fire.png";
import topShape from "../assets/k12-suite-icons/top-shape.png";
import smallIcon1 from "../assets/k12-suite-icons/small-icon-1.png";
import smallIcon2 from "../assets/k12-suite-icons/small-icon-2.png";
import smallIcon3 from "../assets/k12-suite-icons/small-icon-3.png";
import userfriendly from "../assets/k12-suite-icons/userfriendly.png";
import aiEnable from "../assets/k12-suite-icons/aIenabled.png";
import cloudFirst from "../assets/k12-suite-icons/cloudfirst.png";
import secureIntegrated from "../assets/k12-suite-icons/secureIntegrated.png";
import aiDrivenBuilder from "../assets/k12-suite-icons/ai-driven-builder.webp";
import amplifyAdmissions from "../assets/k12-suite-icons/amplify-admissions.webp";
import digitaliseAttendance from "../assets/k12-suite-icons/digitalise-attendance.webp";
import enrollmentConversion from "../assets/k12-suite-icons/enrollment-conversion.webp";
import feasibleAssignmentManagement from "../assets/k12-suite-icons/feasible-assignment-management.webp";
import handsOnLearning from "../assets/k12-suite-icons/hands-on-learning.webp";
import interactiveContent from "../assets/k12-suite-icons/interactive-content.webp";
import nextosSchoolFeedVideo from "../assets/k12-suite-icons/nextos-school-feed-video.mp4";
import noCodeWebsite from "../assets/k12-suite-icons/no-code-website.webp";
import paperlessFinance from "../assets/k12-suite-icons/paperless-finance.webp";
import unifiedDashboard from "../assets/k12-suite-icons/unified-dashboard.webp";
import appStore from "../assets/parent-communication-icons/app-store.svg";
import playStore from "../assets/parent-communication-icons/play-store.svg";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";
import slider2 from "../assets/kinder-suite-icons/slider-2.webp";
import slider3 from "../assets/kinder-suite-icons/slider-3.webp";
import slider4 from "../assets/kinder-suite-icons/slider-4.webp";
import slider5 from "../assets/kinder-suite-icons/slider-5.webp";
import slider6 from "../assets/kinder-suite-icons/slider-6.webp";
import slider7 from "../assets/kinder-suite-icons/slider-7.png";
import linePath1 from "../assets/kinder-suite-icons/line-path-1.png";
import actionBanner from "../assets/kinder-suite-icons/action-banner.webp";
import clientLogo1 from "../assets/kinder-suite-icons/client-logo-1.png";
import clientLogo2 from "../assets/kinder-suite-icons/client-logo-2.png";
import clientLogo4 from "../assets/kinder-suite-icons/client-logo-4.png";
import clientLogo5 from "../assets/kinder-suite-icons/client-logo-5.png";
import clientLogo6 from "../assets/kinder-suite-icons/client-logo-6.png";
import clientLogo7 from "../assets/kinder-suite-icons/client-logo-7.png";
import clientLogo8 from "../assets/kinder-suite-icons/client-logo-8.png";

const slides = [slider2, slider3, slider4, slider5, slider6];

const content = [
    {
        id: "enrolment-conversion",
        tab: "Enrolment Conversion",
        title:
            "Online Admissions. Streamlined from Enquiry to Enrollment.",
        description: "Create & analyse campaigns anytime to complete admissions faster — all from one centralised dashboard.",
        points: [
            "24/7 online admission forms - accessible from anywhere",
            "Ensure safety with OTP security for both walk-in & online enquiries",
            "Record & track prospective enrollments through a smart follow-up mechanism",
            "Simplify with a fully configurable multi-tier process",
            "Enjoy hassle-free fee collection with integrated payment gateways"
        ],
        image: enrollmentConversion,
    },

    {
        id: "amplify-admissions",
        tab: "Amplify Admissions",
        title:
            "Boost Admissions with Built-In SEO & Smart Digital Campaign Tools",
        description: "Launch impactful digital campaigns with a comprehensive dashboard, built-in SEO tools and real-time prospect tracking.",
        points: [
            "Create & Launch Custom Campaigns Instantly",
            "Auto-capture leads from every channel & campaign",
            "Boost reach with bulk campaign blasts",
            "Track leads in real time with follow-up insights"
        ],
        image: amplifyAdmissions,
    },

    {
        id: "digitalise-attendance",
        tab: "Digitalise Attendance",
        title: "Smarter Attendance. Safer Campus.",
        description: "Accurately mark attendance with location and face verification — without hardware, without hassle.",
        points: [
            "Mobile-Based Geo-Facial Recognition",
            "No RFID or Biometric Devices Required",
            "Geo-Fencing for Authentic Check-Ins",
            "Auto-Synced & Secure Attendance Logs"
        ],
        image: digitaliseAttendance,
    },

    {
        id: "paperless-finance",
        tab: "Paperless Finance",
        title: "Smart Fees Collection & Tally Integrated Accounting",
        description: "Simplify collections with configurable setups, flexible concessions, digital payments, and features that are easy & transparent.",
        points: [
            "Online & Walk-in Payment Support",
            "Customizable Fee Heads & Categories",
            "Fully Tailored Fee Reports",
            "Smart Pay with Auto Sibling Concessions"
        ],
        image: paperlessFinance,
    },

    {
        id: "no-code website",
        tab: "No-Code Website",
        title: "Personalise Templates That Fit Your Brand.",
        description: "Build a unique, SEO-ready website and social media assets that showcase your institute’s identity, all with easy-to-use templates.",
        points: [
            "Use customizable, ready-made templates — no coding needed",
            "Launch a professional, SEO-optimised site in minutes",
            "Custom banners for promotions & lead capture",
            "Integrate with the existing site or launch a new one",
            "Social media-ready posts with designer templates"

        ],
        image: noCodeWebsite,
    },

    {
        id: "unified-dashboard",
        tab: "Unified Dashboard",
        title: "Attendance. Performance. Discipline. 360° Student Analytics",
        description: "Get a complete overview of every student, from academics to attendance, and soft skills — all in one place.",
        points: [
            "Gain a 360° view of student information at a glance",
            "Monitor student attributes & discipline records",
            "Access & compare examination performance across the years",
            "Track attendance trends and spot irregularities instantly"
        ],
        image: unifiedDashboard,
    },
    {
        id: "ai-driven-test-builder",
        tab: "AI-driven Test Builder",
        title: "Assess Smarter. Adapt Better. Perform Higher.",
        description: "Create personalised, intelligent assessments in minutes — designed for next gen classrooms.",
        points: [
            "650,000+ question bank organised by difficulty, depth & Bloom’s Taxonomy levels",
            "AI-powered proctoring for secure online exams",
            "Instantly generate question papers for online, offline, or hybrid examinations"
        ],
        image: aiDrivenBuilder,
    },
    {
        id: "smart-assignment",
        tab: "Smart Assignment",
        title: "Homework Reinvented. Feedback Made Easy.",
        description: "Streamline homework & classwork effortlessly. Monitor submissions, keep parents informed, & provide feedback — with minimal clicks.",
        points: [
            "Assign tasks with attachments, notes, and deadlines",
            "Enable real-time parent notifications",
            "Track statuses like “Turned In”, “Returned” or “Feedback Given”",
            "Evaluate and grade online with helpful feedback tools",
        ],
        image: feasibleAssignmentManagement,
    },
    {
        id: "edTech-tools",
        tab: "EdTech Tools",
        title: "Curriculum-Aligned Digital Learning Tools",
        description: "From immersive labs to art rooms — equip your students with tools that turn complex lessons into memorable learning experiences.",
        points: [
            "Use simulations for Maths, Science, English & Social Studies",
            "Explore the Organism Encyclopedia and Periodic Table interactively",
            "Access tools like the 2D Graph Plotter, Log Table, and Abacus",
            "Teach art and creativity with drawing & painting tools",

        ],
        image: handsOnLearning,
    },
    {
        id: "interactive-content",
        tab: "Interactive Content",
        title: "Personalised Learning Paths for Every Student",
        description: "Tailor digital learning to meet the needs of diverse learners. With immersive learning tools make every classroom experience impactful and relevant.",
        points: [
            "Customise lessons by learning level or style",
            "Stay flexible while maintaining lesson structure",
            "Personalise remedial or enrichment content",
            "Ensure inclusive and differentiated instruction"
        ],
        image: interactiveContent,
    },
    {
        id: "school-feed",
        tab: "School Feed",
        title: "A digital window to schooling—watch them grow, guide them better.",
        description: "Share daily moments, announcements, and activities with parents in one personalised, interactive feed.",
        points: [
            "Share photos and videos of classroom activities with parents",
            "Teachers and students can comment and engage with posts instantly",
            "Record and organise classroom activities with ease",
            "School and Parents engage within their community through their own secure social media"
        ],
        image: nextosSchoolFeedVideo,
    },
];

const logos = [
    clientLogo1,
    clientLogo2,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
];

const faqItems = [
    {
        id: 1,
        question: "What is the K-12 Suite by School Lift?",
        answer: `The K-12 Suite is School Lift' cloud-first, comprehensive school management software. It is designed to streamline every school department—from feed, admissions, attendance, examinations, stakeholder's communication, and analytics—all through a unified, digital platform.`
    },
    {
        id: 2,
        question: "What is school management software?",
        answer: `School Management Software is a smart application tool dedicated to helping schools automate, organise, and manage their daily academic and administrative operations. It is like the school's remote control center that digitalises everything, from attendance, admissions, and timetable planning to accounting management, examinations, communication, and reports—all automated from one place. Some of the modern School Management Software also provides 360° dashboards and AI-powered tools to give schools data-backed insights, manage time, and improve efficiency for administrators, teachers, students, and parents.`
    },
    {
        id: 3,
        question: "What are the core modules and features of K-12 Suite?",
        answer: `The cloud-first K-12 Suite by School Lift offers a comprehensive range of applications and tools to manage schools efficiently. Key features include:

1. Student Information System (SIS): Centralised student profiles and records
2. Attendance Management: Daily tracking & reports for students and staff
3. Timetable & Scheduling - Easy creation & management of class schedules
4. Enrollments & Admissions: Digital forms, tracking, & automated processes
5. Fee Management - Automated billing, financial reports, & online payments
6. Examination & Report Cards - Online assessments, grading, and progress reports
7. Library Management - Catalogues, inventory tracking, and lending
8. Parent & Teacher Communication - Portals, mobile apps, notifications, and messaging
9. Transport Management - Route planning and student transport tracking
10. Online Learning Tools - Virtual classes, assignments, and resource sharing
11. Analytics & Reports - Powerful insights into school performance
The K-12 Suite by School Lift is modular, so its features can be configured to best fit school's needs.`
    },
    {
        id: 4,
        question: "Does K-12 Suite by School Lift offer a white-labeled mobile app for schools?",
        answer: `Yes, K-12 Suite by School Lift provides a fully functional white-labeled mobile app for both Android and iOS. School's name, brand colours, logo, can be customised into their personalised app, giving administration, parents, teachers, and students a user-friendly way to access, communicate, information, track progress, and receive real-time notifications and alerts, all under their school’s own brand name.`

    },
    {
        id: 5,
        question: "Does K-12 Suite by School Lift offer a white-labeled website for schools?",
        answer: `Yes, K-12 Suite by School Lift provides a customised white-labeled website solution, enabling schools to present their brand and value with their own domain, specific logo, colours, and customised content. It also helps schools manage admissions online, display academic information, share announcements, and engage parents and students — all through a professional, enterprise-standard, branded online presence.`
    },
    {
        id: 6,
        question: "Who can use School Lift K-12 Suite?",
        answer:
            `K-12 Suite facilitates the work efficiency of school principals, administrators, staff, teachers, and even parents. The K-12 suite by School Lift is capable of managing any institute, whether a small private school or a large institution; it scales to fit particular needs.`
    },
    {
        id: 7,
        question: "Is the K-12 Suite by School Lift cloud-based?",
        answer: `Yes, K-12 Suite is fully automatic and a cloud-first platform. We can access school data securely from anywhere, anytime, and on any device.`
    },
    {
        id: 8,
        question: "Does the K-12 Suite by School Lift integrate with other systems?",
        answer: `Yes, the K-12 Suite by School Lift can be seamlessly integrated with advanced ecosystems like accounting systems (Tally Prime), payment gateways, biometric devices, and more, to create a unified ecosystem.`
    }
];

const K12Suite = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <K12SuiteSection />
            <K12MarketingSection />
            <OneLoginSlider />
            <FrequentlyAskedQuestions faqItems={faqItems} title="K-12 Suite FAQ" />
            <SchoolLiftActionBanner />
        </div>
    );
};

const K12SuiteSection = () => {
    return (
        <section className="relative w-full overflow-hidden rounded-b-[26px]">
            <div className="relative mx-auto min-h-[1500px] w-full max-w-[1792px] overflow-hidden">
                <K12SuiteHero />
                <K12Clients />
                <K12EdtechSection />
            </div>
        </section>
    );
};

const K12SuiteHero = () => {
    return (
        <div className="relative h-[760px] w-full overflow-hidden bg-white">
            <img
                src={k12SuiteBannerBg}
                alt="K12 suite background"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            />


            <div className="px-10 relative z-10 grid h-full grid-cols-1 lg:grid-cols-[1.06fr_0.94fr]">
                {/* Left content */}
                <div className="relative">
                    <div className="ml-[110px] mt-[36px] max-w-[620px]">
                        <p className="mb-2 text-[13px] font-semibold text-[#38a34d]">
                            K-12 Suite
                        </p>

                        <p className="max-w-[950px] text-[37px] font-bold leading-[1.2] tracking-[-0.03em] text-black">
                            <span className="block">
                                The Launchpad of 21st-Century Skills.
                            </span>
                            <span className="mt-[4px] block">
                                The Takeoff for Smart{" "}
                                <span className="bg-gradient-to-r from-[#a9d83b] via-[#66bf3e] to-[#2d8e38] bg-clip-text text-transparent">
                                    Future.
                                </span>
                            </span>
                        </p>

                        <p className="mt-2 max-w-[950px] text-[14px] leading-[1.55] text-[#4b5563]">
                            Reboot schools with NextOS advanced K-12 Suite. Boost school's
                            real potential by automating finance, academic, administrative,
                            management, human resource, inventory, transport, and operational
                            requirements.
                        </p>

                        <button className="mt-[20px] inline-flex items-center gap-[12px] text-[16px] font-medium text-black">
                            <span>Learn more</span>
                            <ArrowRightCircle size={20} strokeWidth={2.15} className="shrink-0" />
                        </button>
                    </div>

                    <img
                        src={smallIcon1}
                        alt=""
                        className="pointer-events-none absolute left-[760px] top-[140px] h-[42px] w-[42px] object-contain opacity-40"
                    />
                </div>

                {/* Right composition */}
                <div className="relative hidden lg:block">

                    <img
                        src={smallIcon3}
                        alt=""
                        className="pointer-events-none absolute right-[10px] top-[128px] z-[2] h-[36px] w-[36px] object-contain opacity-30"
                    />

                    <img
                        src={k12SuiteBannerBg2}
                        alt=""
                        className="absolute right-[10px] top-[56px] z-[3] w-[560px] max-w-none object-contain"
                    />

                    <img
                        src={k12SuiteBannerImg}
                        alt="K-12 Suite preview"
                        className="absolute right-[36px] top-[20px] z-[5] w-[540px] max-w-none object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

const K12Clients = () => {
    return (
        <section className="relative w-full overflow-hidden py-[10px] bg-[#ffeb98]">
            <div className="relative overflow-hidden">
                {/* left fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[120px] bg-gradient-to-r from-white to-transparent" />

                {/* right fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[120px] bg-gradient-to-l from-white to-transparent" />

                {/* slider */}
                <div className="flex w-max animate-[clientMarquee_32s_linear_infinite] gap-[5px]">
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}>
                            <img
                                src={logo}
                                alt={`client-logo-${index + 1}`}
                                className="h-[150px] w-[150px] object-cover p-4"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @keyframes clientMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-186px * 14));
          }
        }
      `}</style>
        </section>
    );
};

const K12EdtechSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-transparent">

            <div
                className="
  relative mx-auto w-full max-w-[1792px]
  overflow-hidden rounded-b-[24px]
  min-h-[1200px]
"
            >

                {/* right gradient */}
                <div className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[55%] w-[28%]]" />

                {/* heading */}
                <div className="absolute left-0 right-0 top-0 z-[15] flex flex-col items-center bg-[#ffeb98] pt-8">
                    <p className="text-[33px] font-bold leading-tight text-black">
                        Next-Gen EdTech Starts Here
                    </p>
                    <p className="mt-4 text-[21px] font-medium tracking-wide text-sbTextLight">
                        Perseverance Personified
                    </p>
                </div>

                {/* orbit circles */}
                <div className="absolute left-1/2 top-[120px] z-[5] -translate-x-1/2 overflow-hidden w-[900px] h-[900px]">

                    <img
                        src={circle}
                        alt=""
                        className="
    absolute
    left-1/2
    top-[-300px]
    w-[900px]
    -translate-x-1/2
    object-contain
    opacity-[0.8]"
                    />

                </div>
                {/* main composition */}
                <div className="absolute inset-x-0 top-[22%] z-[10] flex justify-center">

                    <div className="relative w-[min(920px,94vw)] aspect-[16/10]">

                        {/* rocket stack */}
                        <div className="absolute left-[45%] top-[28%] -translate-x-1/2 flex flex-col items-center">

                            {/* rocket */}
                            <img
                                src={rocket}
                                alt="rocket"
                                className="mt-[50px] w-[clamp(260px,18vw,320px)] object-contain"
                            />

                            {/* fire */}
                            <img
                                src={fire}
                                alt="fire"
                                className="-mt-[120px] ml-[80px] z-20 w-[clamp(35px,4vw,60px)] object-contain"
                            />

                            {/* globe */}
                            <img
                                src={base}
                                alt="globe"
                                className="-mt-[40px] ml-[90px] z-10 w-[clamp(280px,15vw,320px)] object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.16)]"
                            />

                        </div>

                        {/* left label */}
                        <div className="absolute left-[3%] top-[44%] z-[13] text-center">

                            <div className="mx-auto mb-1.5 flex h-[24px] w-[44px] items-center justify-center">
                                <img src={secureIntegrated} alt="" className="h-full w-auto object-contain" />
                            </div>

                            <p className="text-[clamp(13px,1vw,15px)] font-semibold text-[#4C4C4C]">
                                Secure & Integrated
                            </p>

                        </div>

                        <div className="absolute left-[30%] top-[33%] z-[13] text-center">

                            <div className="mx-auto mb-1.5 flex h-[24px] w-[44px] items-center justify-center">
                                <img src={userfriendly} alt="" className="h-full w-auto object-contain" />
                            </div>

                            <p className="text-[clamp(13px,1vw,15px)] font-semibold text-[#4C4C4C]">
                                User Friendly
                            </p>

                        </div>

                        {/* right label */}
                        <div className="absolute right-[30.5%] top-[53%] z-[13] text-center">

                            <div className="mx-auto mb-1.5 flex h-[30px] w-[30px] items-center justify-center">
                                <img src={aiEnable} alt="" className="h-full w-auto object-contain" />
                            </div>

                            <p className="text-[clamp(13px,1vw,15px)] font-semibold text-[#4C4C4C]">
                                AI-enabled
                            </p>

                        </div>

                        <div className="absolute right-[4.2%] top-[40%] z-[13] text-center">

                            <div className="mx-auto mb-1.5 flex h-[30px] w-[30px] items-center justify-center">
                                <img src={cloudFirst} alt="" className="h-full w-auto object-contain" />
                            </div>

                            <p className="text-[clamp(13px,1vw,15px)] font-semibold text-[#4C4C4C]">
                                Cloud First
                            </p>

                        </div>
                    </div>

                </div>

                {/* wave shape */}
                <img
                    src={topShape}
                    alt=""
                    className="
  pointer-events-none
  absolute
  left-1/2
  top-[120px]
  z-[8]
  w-full
  min-w-[1500px]
  -translate-x-1/2
"
                />
            </div>

        </section>
    );
};

const K12MarketingSection = () => {
    const sectionRefs = useRef({});
    const [activeTab, setActiveTab] = useState(content[0]?.id || "");

    const scrollToSection = (id) => {
        setActiveTab(id);
        const el = sectionRefs.current[id];
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        const sections = content
            .map((item) => sectionRefs.current[item.id])
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top)
                    );

                if (visibleSections.length > 0) {
                    setActiveTab(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -55% 0px",
                threshold: [0.2, 0.4, 0.6],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full bg-white font-primary">
            {/* right warm glow */}
            <div className="pointer-events-none absolute right-[-120px] top-[210px] h-[620px] w-[430px] rounded-full bg-[radial-gradient(circle,_rgba(245,220,176,0.55)_0%,_rgba(245,220,176,0.22)_42%,_transparent_74%)] blur-[28px]" />

            <div className="mx-auto max-w-[1720px] px-[60px] pb-[60px] pt-[78px]">
                {/* top heading */}
                <div className="text-center">
                    <p className="text-[33px] font-bold leading-tight text-black">
                        Be Your Own Pilot - Navigate Your Space Station
                    </p>
                    <p className="mt-4 text-[21px] font-medium tracking-wide text-sbTextLight">
                        360° aerial view with AI-powered tools for full throttle school management.
                    </p>
                </div>

                <div className="relative mt-[35px] flex items-start gap-[20px]">
                    {/* left navigation */}
                    <div className="sticky top-[150px] z-20 w-[300px] shrink-0 self-start">

                        <div className="absolute left-[4px] top-[12px] bottom-[12px] w-px bg-[#d8d8d8]" />

                        <div className="space-y-[30px] pt-[7px]">
                            {content.map((item) => {
                                const isActive = activeTab === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative block pl-[36px] text-left text-[18px] leading-none tracking-[-0.02em] transition-colors duration-200 ${isActive
                                            ? "font-semibold text-[#38a447]"
                                            : "font-normal text-[#505050]"
                                            }`}
                                    >
                                        {isActive && (
                                            <span className="absolute left-0 top-[3px] h-[14px] w-[14px] rounded-full bg-[#efbc1b]" />
                                        )}
                                        {item.tab}
                                    </button>
                                );
                            })}
                        </div>

                    </div>

                    {/* right scroll sections */}
                    <div className="flex-1">
                        {content.map((item) => (
                            <div
                                key={item.id}
                                id={item.id}
                                ref={(el) => {
                                    if (el) sectionRefs.current[item.id] = el;
                                }}
                                className="mb-[100px] scroll-mt-[150px]"
                            >
                                <p className="text-[25px] font-semibold text-sbText">
                                    {item.title}
                                </p>

                                <p className="mt-[8px] text-[17px] font-normal leading-[1.56] text-sbText">
                                    {item.description}
                                </p>

                                <div className="mt-[20px] space-y-[8px]">
                                    {item.points.map((point) => (
                                        <div key={point} className="flex items-center gap-[14px]">
                                            <div className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#5dbb58]">
                                                <Check className="h-[10px] w-[10px] text-white stroke-[3]" />
                                            </div>
                                            <span className="text-[17px] font-normal leading-[1.56] text-sbText">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className="mt-[20px] inline-flex items-center gap-[12px] text-[20px] font-medium text-black">
                                    <span>Learn more</span>
                                    <ArrowRightCircle
                                        size={21}
                                        strokeWidth={2.15}
                                        className="shrink-0"
                                    />
                                </button>

                                {item.image?.includes('.mp4') ? (
                                    <video
                                        src={item.image}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="mt-[25px] w-[520px] h-[520px] max-w-none rounded-[14px]"
                                    />
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.tab}
                                        className="mt-[25px] w-[950px] max-w-none"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

function OneLoginSlider() {
    const [index, setIndex] = useState(2);

    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="relative overflow-hidden bg-[#f6ea86] py-[70px]">

            {/* patterned background */}
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: `url(${slider7})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "80px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1600px] text-center">

                {/* heading */}
                <p className="text-[33px] font-bold leading-tight text-black">
                    One Login. Endless Magic.
                </p>

                <p className="mt-4 text-[21px] font-medium tracking-wide text-sbText">
                    Manage academics, attendance, communication, and growth tools all in one app.
                </p>

                {/* slider */}
                <div className="relative mt-[60px] flex items-center justify-center gap-[40px]">

                    {/* left arrow */}
                    <button
                        onClick={prev}
                        className="absolute left-[38%] z-20 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#47b64f] text-white shadow-lg"
                    >
                        <ChevronLeft size={18} strokeWidth={2} />
                    </button>

                    {/* images */}
                    <div className="flex items-center gap-[35px] transition-all duration-500">

                        <img
                            src={slides[(index - 2 + slides.length) % slides.length]}
                            className="w-[140px] opacity-40"
                        />

                        <img
                            src={slides[(index - 1 + slides.length) % slides.length]}
                            className="w-[160px] opacity-70"
                        />

                        <img
                            src={slides[index]}
                            className="w-[210px] scale-105"
                        />

                        <img
                            src={slides[(index + 1) % slides.length]}
                            className="w-[160px] opacity-70"
                        />

                        <img
                            src={slides[(index + 2) % slides.length]}
                            className="w-[140px] opacity-40"
                        />

                    </div>

                    {/* right arrow */}
                    <button
                        onClick={next}
                        className="absolute right-[38%] z-20 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-[#47b64f] text-white shadow-lg"
                    >
                        <ChevronRight size={18} strokeWidth={2} />
                    </button>

                </div>

                {/* store buttons */}
                <div className="mt-[55px] flex justify-center gap-[18px]">
                    <img src={playStore} className="h-[40px]" />
                    <img src={appStore} className="h-[40px]" />
                </div>
            </div>
        </section>
    );
}




const SchoolLiftActionBanner = () => {
    return (
        <section className="w-full bg-white py-[40px]">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-14">

                {/* main container */}
                <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-[#f3c318] via-[#efd568] to-[#f5efe4] h-[380px] flex items-center">

                    {/* dotted circle */}
                    <div className="absolute right-[420px] top-[0px] w-[260px] h-[260px] rounded-full opacity-50"
                        style={{
                            backgroundImage:
                                "radial-gradient(#e7c64a 2px, transparent 2px)",
                            backgroundSize: "14px 14px"
                        }}
                    />

                    {/* decorative line */}
                    <img
                        src={linePath1}
                        alt=""
                        className="absolute bottom-[20px] left-[750px] w-[480px] opacity-20"
                    />

                    {/* left text */}
                    <div className="pl-[120px] max-w-[600px]">
                        <p className="text-[40px] font-extrabold leading-[1.3] tracking-[-0.03em] text-black">
                            Ready to see
                            <br />
                            SchoolLift in action?
                        </p>

                        {/* button */}
                        <button className="mt-[70px] flex items-center gap-[14px] bg-black text-white text-[16px] font-semibold px-[12px] py-[12px] rounded-[10px] shadow-lg">
                            Schedule a demo today
                            <span className="bg-white text-black rounded-full w-[20px] h-[20px] flex items-center justify-center">
                                <ArrowRight size={12} />
                            </span>
                        </button>
                    </div>

                    {/* right image */}
                    <img
                        src={actionBanner}
                        alt="Schoollift demo"
                        className="absolute right-[0px] top-[20px] w-[750px] max-w-none"
                    />

                </div>
            </div>
        </section>
    );
};

export default K12Suite;