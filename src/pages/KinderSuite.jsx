import React, { useState, useMemo, useRef, useEffect } from "react";
import CommonButton from "../component/CommonButton";
import {
    ArrowRightCircle,
    ArrowUp,
    Check,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import FrequentlyAskedQuestions from "../component/FrequentlyAskedQuestions";
import bannerImgBackground from "../assets/kinder-suite-icons/kinder-suite-banner-bg.webp";
import bannerImg from "../assets/kinder-suite-icons/kinder-suite-banner.webp";
import actionBanner from "../assets/kinder-suite-icons/action-banner.webp";
import automateLeadGeneration from "../assets/kinder-suite-icons/automateLeadGeneration.webp";
import brandVisibility from "../assets/kinder-suite-icons/brandVisibility.webp";
import marketingTools from "../assets/kinder-suite-icons/marketing-tools.webp";
import parentConnect from "../assets/kinder-suite-icons/parentConnect.webp";
import seamlessCommunication from "../assets/kinder-suite-icons/seamlessCommunication.webp";
import slider2 from "../assets/kinder-suite-icons/slider-2.webp";
import slider3 from "../assets/kinder-suite-icons/slider-3.webp";
import slider4 from "../assets/kinder-suite-icons/slider-4.webp";
import slider5 from "../assets/kinder-suite-icons/slider-5.webp";
import slider6 from "../assets/kinder-suite-icons/slider-6.webp";
import slider7 from "../assets/kinder-suite-icons/slider-7.png";
import unifiedDashboard from "../assets/kinder-suite-icons/unifiedDashboard.webp";
import clientLogo1 from "../assets/kinder-suite-icons/client-logo-1.png";
import clientLogo2 from "../assets/kinder-suite-icons/client-logo-2.png";
import clientLogo4 from "../assets/kinder-suite-icons/client-logo-4.png";
import clientLogo5 from "../assets/kinder-suite-icons/client-logo-5.png";
import clientLogo6 from "../assets/kinder-suite-icons/client-logo-6.png";
import clientLogo7 from "../assets/kinder-suite-icons/client-logo-7.png";
import clientLogo8 from "../assets/kinder-suite-icons/client-logo-8.png";
import appStore from "../assets/parent-communication-icons/app-store.svg";
import playStore from "../assets/parent-communication-icons/play-store.svg";
import nextGenVideo from "../assets/kinder-suite-icons/NextGenEdTech.mp4";
import coachProIcon from "../assets/kinder-suite-icons/coachPro.png";
import k12SuiteIcon from "../assets/kinder-suite-icons/k12Suite.png";
import kinderSuiteIcon from "../assets/kinder-suite-icons/kinderSuite.png";
import tutorEdgeIcon from "../assets/kinder-suite-icons/tutorEdge.png";
import linePath1 from "../assets/kinder-suite-icons/line-path-1.png";

const faqItems = [
    {
        id: 1,
        question: "What is Kinder Suite?",
        answer: `Kinder Suite is an all-in-one AI-powered preschool management software offered by School Lift. It helps kindergartens, creches, playschools, preschools, kindergartens, daycare centers, and early learning institutions streamline academic and administrative tasks, manage student data, communicate with parents, and deliver engaging schooling experiences, to name a few.`
    },
    {
        id: 2,
        question: "What is preschool management software?",
        answer: `Preschool management software is a digitalised tool that is designed to help daycares centers, playschools, preschools, creches, and kindergartens efficiently operate and manage their daily operations. The software is dedicated to streamlining academic and administrative, and communication-related tasks through a centralised platform.`
    },
    {
        id: 3,
        question: "Who can best use Kinder Suite?",
        answer: "The integrated Kinder Suite by School Lift is the go-to suite for preschool owners and playschool administrators. The suite also empowers preschool teachers, playschool educators, and related stakeholders to automate their daily activities. Additionally, the Kinder Suite also extends its expertise to daycare and creches, kindergarten franchises, and early childhood schooling chains.",
    },
    {
        id: 4,
        question: "What are the key features of Kinder Suite?",
        answer: `
Some of the unique features of School Lift' Kinder Suite include:

1.Intuitive mobile app access
2.Student admission & enrollment
3.Automatic attendance tracking
4.Invoicing & fee management
5.Instant parent connect portal
6.Digital course planning
7.Holistic progress reports
8.Personalised remedial action planning tools
9.Live school feed sharing with parents
10.Transport tracking
11.Staff & inventory management`
    },
    {
        id: 5,
        question: "Is Kinder Suite by School Lift a cloud-based platform?",
        answer: `Yes! KinderSuite is a cloud-first platform for anywhere and anytime access. Any and every academic and administrative operation can be managed securely from anywhere, on any device — desktop, mobile, or tab.`
    },
    {
        id: 6,
        question: "Is the Kinder Suite by School Lift secure?",
        answer: `Absolutely, the Kinder Suite by School Lift is compliant with advanced data encryption and security protocols to guarantee the safety and privacy of all data related to students, staff, and parents, or the institutions.`
    },
    {
        id: 7,
        question: "Is Kinder Suite by School Lift capable of improving parent engagement?",
        answer: `Yes. Kinder Suite by School Lift includes seamless parent communication tools like messaging, photo/video (multimedia) sharing, digital alerts/notifications, and progress updates, keeping parents involved in their child’s crucial early educational journey.`,
    },
    {
        id: 8,
        question: "Does Kinder Suite provide any mobile app?",
        answer: `Yes, Kinder Suite by School Lift offers an intuitive mobile app available for both iOS and Android. The app is adaptable for user-friendly navigation by teachers, students, and parents to provide seamless communication, management, and operations on the go.`
    },
    {
        id: 9,
        question: "Does Kinder Suite by School Lift support the management of multiple branches?",
        answer: `Yes, Kinder Suite by School Lift is a niche cloud-based application that is designed to manage multiple branches or franchises from an integrated, unified dashboard, ideal for preschool chains or play school franchises.`
    },
    {
        id: 10,
        question: "Do we have the provision to customise the Kinder Suite as per our preschool’s needs?",
        answer: `Yes. The Kinder Suite by School Lift aims to streamline institutes’ unique workflows, branches, branding, and operational needs.`
    },
    {
        id: 11,
        question: "How can I get a free demo of the Kinder Suite by School Lift?",
        answer: `Visit the School Lift website and fill out the free demo request form to get started with the Kinder Suite. You can also contact our team; we will be happy to schedule a personalised walkthrough for you.`
    },
    {
        id: 12,
        question: "What are the crucial benefits of Preschool Management Software?",
        answer: `A highly adaptable and configurable preschool management system should be able to provide some of the major highlights, such as:

1.Safeguarding Time: Saves up to an hour or two per day per staff member
2.Economic: Automate your school, work with any device anywhere, anytime
3.Boosts School's Growth: Increase enrollment rates, brand visibility and stakeholder satisfaction
4.Hybrid Mode Learning: Equip educators and learners with online, offline and blended learning options
5.Aggregates the efficiency of staff, management, educators, and learners alike
6.Harnesses an easier mode of communication and collaboration with stakeholders`
    }
];

const slides = [slider2, slider3, slider4, slider5, slider6];

const features = [
    { title: "Secure & Integrated", x: "720px", y: "280px" },
    { title: "User-friendly", x: "1160px", y: "390px" },
    { title: "AI-enabled", x: "1360px", y: "525px" },
    { title: "Cloud-first", x: "900px", y: "660px" },
];

const content = [
    {
        id: "brand-visibility",
        tab: "Brand Visibility",
        title: "Build a consistent online presence for your brand",
        description:
            "Create your own no-code, customised, SEO-ready website and social media assets that reflect your institute’s identity — no designer needed.",
        points: [
            "SEO-friendly website with ready-made templates",
            "Integrate with the existing site or launch a new one",
            "Custom banners for promotions & lead capture",
            "Social media-ready posts with designer templates",
        ],
        image: brandVisibility,
    },
    {
        id: "lead-generation",
        tab: "Automate Lead Generation",
        title: "Track every lead, analyse every campaign – never miss an admission opportunity",
        description: "Boost more enrolments with AI-driven integrated tools to capture, track, and convert every enquiry — all from one platform.",
        points: [
            "Capture & track campaign leads from websites & social media",
            "Real-time analytics to track campaign performance",
            "Integrated fee collection to confirm admissions instantly",
            "Centralized dashboard for complete admission insights",
        ],
        image: automateLeadGeneration,
    },
    {
        id: "seamless-communication",
        tab: "Seamless Communication",
        title: "Keep communication open and contacts private—smarter than free tools",
        description: "Equip teachers and management to connect with parents securely, without revealing personal contact details.",
        points: [
            "In-app chat between teachers and parents — no contact sharing needed",
            "Reach everyone instantly via SMS, Email, Push Notifications & WhatsApp",
            "Smart Compose to reduce SMS cost with intelligent messaging",
            "Ready-to-use templates for circulars, updates & reminders"

        ],
        image: seamlessCommunication,
    },
    {
        id: "parent-connect",
        tab: "Parent Connect",
        title: "Sharing daily progress, partnering with parents in every step of the learning journey",
        description: "Provide real-time classroom updates — from activities to assessments — keeping parents informed without extra effort.",
        points: [
            "Auto-publish daily classroom work in a centralized feed",
            "Real time display of activities, assignments, lectures & resources",
            "Teachers can post images, videos, food, nap & learning updates.",
            "Parents stay effortlessly updated on their child’s daily learning"

        ],
        image: parentConnect,
    },
    {
        id: "unified-dashboard",
        tab: "Unified Dashboard",
        title: "One dashboard for all franchisee centres - track the growth and performance of each center in your franchise network",
        description: "Manage all your franchise branch network with a single login and unified functioning across academics, admissions, and finances.",
        points: [
            "Unified dashboard to monitor all institutions",
            "Cross-branch performance & trend tracking",
            "Centralized admission, fee & data management",
            "Easy student & staff transfer between branches"
        ],
        image: unifiedDashboard,
    },
    {
        id: "next-gen-marketing",
        tab: "Next Gen Marketing",
        title: "Boost Admissions with Built-In SEO & Smart Digital Campaign Tools",
        description:
            "Launch lead generation campaigns, capture leads, and track their performance — all from a single dashboard.",
        points: [
            "Create & Launch Custom Campaigns Instantly",
            "Auto-Capture Leads from Every Campaign",
            "Real-Time Lead Tracking & Follow-Up Insights"
        ],
        image: marketingTools,
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
    clientLogo1,
    clientLogo2,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
];

const KinderSuite = () => {
    return (
        <div className="font-primary bg-white text-sbText overflow-x-hidden">
            <KinderSuiteHero />
            <KinderSuiteClients />
            <EdTechTreeSection />
            <KinderMarketingSection />
            <OneLoginSlider />
            <FrequentlyAskedQuestions faqItems={faqItems} title="Kinder Suite FAQ" />
            <SchoolLiftActionBanner />
        </div>
    );
};

const KinderSuiteHero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white mt-10">
            <div className="relative mx-auto min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-14">
                <img
                    src={bannerImgBackground}
                    alt="Kinder Suite background"
                    className="pointer-events-none absolute inset-0 h-full w-full object-contain sm:object-cover object-bottom"
                />

                {/* Main content */}
                <div className="relative z-10 pt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Left text */}
                    <div className="max-w-3xl text-left lg:text-left lg:mx-0">
                        <p className="mb-2 text-[14px] font-semibold text-[#38a34d]">
                            Kinder Suite
                        </p>

                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[1.2] tracking-[-0.03em] text-black">
                            The Digital Sky for Preschool <span className="bg-gradient-to-r from-[#9ad73a] via-[#57b63b] to-[#267a2d] bg-clip-text text-transparent">Exploration.</span> The Personalised Wind to Steer Free.
                        </h1>

                        <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#4b5563]">
                            Reinvent preschools with School Lift one-of-a-kind Kinder Suite. Fit
                            educators real needs, automate fees, admissions, classes, and
                            parent communication seamlessly with AI-powered tools.
                        </p>

                        <button className="mt-8 inline-flex items-center gap-3 text-[16px] font-medium text-black hover:text-[#38a34d] transition-colors">
                            <span>Learn more</span>
                            <ArrowRightCircle size={20} strokeWidth={2.15} className="shrink-0" />
                        </button>
                    </div>

                    {/* Right image */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <img
                            src={bannerImg}
                            alt="Kinder Suite devices"
                            className="relative z-10 w-full max-w-[320px] sm:max-w-[550px] lg:max-w-[750px] object-contain drop-shadow-[0_24px_36px_rgba(0,0,0,0.16)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const KinderSuiteClients = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white py-4 md:py-10">
            <div className="relative overflow-hidden">
                {/* left fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[60px] md:w-[120px] bg-gradient-to-r from-white to-transparent" />

                {/* right fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[60px] md:w-[120px] bg-gradient-to-l from-white to-transparent" />

                {/* slider */}
                <div className="flex w-max animate-[clientMarquee_32s_linear_infinite] gap-2 md:gap-5">
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index}>
                            <img
                                src={logo}
                                alt={`client-logo-${index + 1}`}
                                className="h-24 w-24 md:h-[150px] md:w-[150px] object-cover p-2 md:p-4"
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
            transform: translateX(calc(-100px * 14)); /* Adjusted for mobile width */
          }
        }
        @media (min-width: 768px) {
            @keyframes clientMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-186px * 14)); }
            }
        }
      `}</style>
        </section>
    );
};

const EdTechTreeSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white mt-10">
            {/* Title */}
            <div className="mx-auto max-w-[1600px] px-4 pt-8 pb-10 sm:px-6 lg:px-10 xl:px-14 text-center relative z-10">
                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight text-black">
                    Next-Gen EdTech Starts Here
                </h2>
                <p className="text-[18px] sm:text-[20px] md:text-[22px] mt-4 text-[#666] font-medium tracking-wide">Perseverance Personified</p>
            </div>
            <div className="relative w-full overflow-hidden">
                <video
                    src={nextGenVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    );
};

const Badge = ({ title, x, y }) => {
    return (
        <div
            className="absolute flex items-center gap-3"
            style={{ left: x, top: y }}
        >
            <div className="relative h-[70px] w-[70px]">
                <div className="absolute left-0 top-[8px] h-[55px] w-[55px] rounded-full bg-[#f2c311]" />
                <div className="absolute left-[10px] top-0 h-[60px] w-[60px] rounded-full bg-[#f2c311]" />

                <div className="absolute left-[15px] top-[9px] flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#7b6500] text-[18px] font-bold text-[#7b6500]">
                    •
                </div>

                <div className="absolute left-[25px] top-[48px] h-0 w-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#f2c311]" />
            </div>

            <span className="font-primary text-[24px] font-semibold text-[#5a5a5a]">
                {title}
            </span>
        </div>
    );
};

const KinderMarketingSection = () => {
    const sectionRefs = useRef({});
    const rightScrollRef = useRef(null);
    const [activeTab, setActiveTab] = useState(content[0]?.id || "");

    const scrollToSection = (id) => {
        const container = rightScrollRef.current;
        const target = sectionRefs.current[id];

        if (!container || !target) return;

        setActiveTab(id);

        const top = target.offsetTop - 16;

        container.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const container = rightScrollRef.current;
        const sections = content
            .map((item) => sectionRefs.current[item.id])
            .filter(Boolean);

        if (!container || !sections.length) return;

        const handleScroll = () => {
            const containerTop = container.getBoundingClientRect().top;

            let closestSection = null;
            let closestDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top - containerTop - 20);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            if (closestSection?.id) {
                setActiveTab(closestSection.id);
            }
        };

        handleScroll();
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="relative w-full bg-white font-primary overflow-visible">
            {/* right warm glow */}
            <div className="pointer-events-none absolute right-[-120px] top-[210px] h-[620px] w-[430px] rounded-full bg-[radial-gradient(circle,_rgba(245,220,176,0.55)_0%,_rgba(245,220,176,0.22)_42%,_transparent_74%)] blur-[28px]" />

            <div className="mx-auto max-w-[1600px] px-4 pb-16 pt-16 sm:px-6 lg:px-10 xl:px-14">
                {/* heading */}
                <div className="text-center">
                    <h2 className="text-[26px] font-bold leading-tight text-black sm:text-[32px] md:text-[36px] lg:text-[40px]">
                        Swing It with AI – 360° Preschool Brilliance Unlocked!
                    </h2>
                    <p className="mt-4 text-[18px] font-medium tracking-wide text-sbTextLight sm:text-[20px] md:text-[21px]">
                        Leap into the world of possibilities for early education.
                    </p>
                </div>

                <div className="relative mt-12 flex flex-col items-start gap-10 lg:flex-row">
                    {/* left side nav */}
                    <div className="hidden shrink-0 self-start lg:sticky lg:top-[120px] lg:block lg:w-[300px] z-20">
                        <div className="absolute left-[4px] top-[12px] bottom-[12px] w-px bg-[#d8d8d8]" />
                        <div className="space-y-[30px] pt-[7px]">
                            {content.map((item) => {
                                const isActive = activeTab === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative block pl-[36px] text-left text-[18px] leading-none tracking-[-0.02em] transition-all duration-200 ${isActive
                                            ? "font-normal text-[#38a447]"
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

                    {/* right side scroll area */}
                    <div
                        ref={rightScrollRef}
                        className="flex-1 lg:max-h-[78vh] lg:overflow-y-auto lg:pr-3"
                    >
                        <div className="space-y-8">
                            {content.map((item) => (
                                <div
                                    key={item.id}
                                    id={item.id}
                                    ref={(el) => {
                                        if (el) sectionRefs.current[item.id] = el;
                                    }}
                                >
                                    <FeatureCard item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Limit characters for truncated description
    const characterLimit = 120;
    const isDescriptionLong = item.description.length > characterLimit;
    const truncatedDescription = isDescriptionLong
        ? item.description.slice(0, characterLimit) + "..."
        : item.description;

    // Limit points to first 2 when collapsed (mobile only)
    const displayedPoints = isExpanded ? item.points : item.points.slice(0, 2);

    return (
        <div className="mb-[100px] scroll-mt-[150px]">
            {/* Title */}
            <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold leading-tight text-black mb-4">
                {item.title}
            </h3>

            {/* Description - Truncated on mobile, Full on desktop */}
            <div className="mt-2 text-[16px] sm:text-[18px] font-normal leading-relaxed text-[#4b5563]">
                {/* Mobile/Tablet view */}
                <div className="lg:hidden">
                    {isExpanded ? item.description : truncatedDescription}
                    {isDescriptionLong && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="ml-2 font-bold text-black border-none bg-transparent p-0 cursor-pointer hover:underline"
                        >
                            {isExpanded ? "less" : "more"}
                        </button>
                    )}
                </div>

                {/* Desktop view (always full) */}
                <div className="hidden lg:block">
                    {item.description}
                </div>
            </div>

            {/* Points - Limited on mobile toggle, Full on desktop */}
            <div className="mt-6 space-y-3">
                {/* Mobile/Tablet view */}
                <div className="lg:hidden space-y-3">
                    {displayedPoints.map((point) => (
                        <FeaturePoint key={point} point={point} />
                    ))}
                </div>

                {/* Desktop view (always full) */}
                <div className="hidden lg:block space-y-3">
                    {item.points.map((point) => (
                        <FeaturePoint key={point} point={point} />
                    ))}
                </div>
            </div>

            <div className="mt-8 flex flex-col items-start justify-start text-left w-full">
                <button className="inline-flex items-center gap-3 text-[16px] sm:text-[18px] font-medium text-black hover:text-[#38a447] transition-colors">
                    <span>Learn more</span>
                    <ArrowRightCircle size={21} strokeWidth={2.15} className="shrink-0" />
                </button>

                <div className="mt-8 overflow-hidden w-full lg:max-w-[750px] bg-transparent text-left flex justify-start">
                    <img
                        src={item.image}
                        alt={item.tab}
                        className="w-full h-auto object-cover object-left"
                    />
                </div>
            </div>
        </div>
    );
};

const FeaturePoint = ({ point }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1.5 flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#5dbb58]">
            <Check className="h-2.5 w-2.5 text-white stroke-[4]" />
        </div>
        <span className="text-[15px] sm:text-[17px] font-normal leading-relaxed text-[#4b5563]">
            {point}
        </span>
    </div>
);

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

            <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-10 xl:px-14 text-center">

                {/* heading */}
                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight text-black">
                    One Login. Endless Magic.
                </h2>

                <p className="mt-4 text-[18px] sm:text-[20px] md:text-[21px] font-medium tracking-wide text-sbText">
                    Manage academics, attendance, communication, and growth tools all in one app.
                </p>

                {/* slider */}
                <div className="relative mt-12 flex items-center justify-center gap-10">

                    {/* left arrow */}
                    <button
                        onClick={prev}
                        className="absolute left-4 md:left-[30%] lg:left-[35%] xl:left-[38%] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#47b64f] text-white shadow-lg hover:scale-110 transition-transform"
                    >
                        <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>

                    {/* images */}
                    <div className="flex items-center gap-6 sm:gap-10 transition-all duration-500 overflow-hidden px-14">

                        <img
                            src={slides[(index - 2 + slides.length) % slides.length]}
                            className="hidden xl:block w-[140px] opacity-40 shrink-0"
                        />

                        <img
                            src={slides[(index - 1 + slides.length) % slides.length]}
                            className="hidden md:block w-[160px] opacity-70 shrink-0"
                        />

                        <img
                            src={slides[index]}
                            className="w-[180px] sm:w-[210px] scale-105 shrink-0"
                        />

                        <img
                            src={slides[(index + 1) % slides.length]}
                            className="hidden md:block w-[160px] opacity-70 shrink-0"
                        />

                        <img
                            src={slides[(index + 2) % slides.length]}
                            className="hidden xl:block w-[140px] opacity-40 shrink-0"
                        />

                    </div>

                    {/* right arrow */}
                    <button
                        onClick={next}
                        className="absolute right-4 md:right-[30%] lg:right-[35%] xl:right-[38%] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#47b64f] text-white shadow-lg hover:scale-110 transition-transform"
                    >
                        <ChevronRight size={20} strokeWidth={2.5} />
                    </button>

                </div>

                {/* store buttons */}
                <div className="mt-12 flex justify-center gap-5">
                    <img src={playStore} className="h-10 sm:h-12" />
                    <img src={appStore} className="h-10 sm:h-12" />
                </div>

            </div>
        </section>
    );
}

const SchoolLiftActionBanner = () => {
    return (
        <section className="w-full bg-white mt-10 overflow-hidden">
            <div className="mx-auto max-w-[1600px] px-4 pb-16 pt-8 sm:px-6 lg:px-10 xl:px-14">

                {/* main container */}
                <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-r from-[#f3c318] via-[#efd568] to-[#f5efe4] min-h-[380px] flex flex-col lg:flex-row items-center justify-between p-10 lg:p-0 lg:pl-[120px]">

                    {/* dotted circle */}
                    <div className="hidden lg:block absolute right-[420px] top-0 w-[260px] h-[260px] rounded-full opacity-50"
                        style={{
                            backgroundImage:
                                "radial-gradient(#e7c64a 2px, transparent 2px)",
                            backgroundSize: "14px 14px"
                        }}
                    />

                    {/* left text */}
                    <div className="relative z-10 max-w-[600px] text-center lg:text-left">
                        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-extrabold leading-[1.3] tracking-[-0.03em] text-black">
                            Ready to see
                            <br className="hidden sm:block" />
                            SchoolLift in action?
                        </h2>

                        {/* button */}
                        <button className="mt-10 mx-auto lg:mx-0 flex items-center gap-4 bg-black text-white text-[16px] font-semibold px-4 py-3 rounded-[12px] shadow-lg hover:scale-105 transition-transform group">
                            Schedule a demo today
                            <ArrowRightCircle size={22} strokeWidth={2.15} className="shrink-0" />
                        </button>
                    </div>

                    {/* right image */}
                    <div className="relative mt-10 lg:mt-0 w-full lg:w-auto flex justify-center lg:justify-end">
                        <img
                            src={actionBanner}
                            alt="Schoollift demo"
                            className="w-full max-w-[650px] lg:w-[750px] lg:max-w-none object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KinderSuite;