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
import heroImg from "../assets/transport-icons/transport-management-banner.jpg"; // replace with your image
import check from "../assets/transport-icons/check.svg";
import crossed from "../assets/transport-icons/crossed.svg";
import driverLicense from "../assets/transport-icons/driver-license.svg";
import exploration from "../assets/transport-icons/exploration.svg";
import gps from "../assets/transport-icons/gps.svg";
import notif from "../assets/transport-icons/notif.svg";
import notification from "../assets/transport-icons/notification.svg";
import oilPrice from "../assets/transport-icons/oil-price.svg";
import quick from "../assets/transport-icons/quick.svg";
import road from "../assets/transport-icons/road.svg";
import route from "../assets/transport-icons/route.svg";
import search from "../assets/transport-icons/search.svg";
import shield from "../assets/transport-icons/shield.svg";
import talk from "../assets/transport-icons/talk.svg";
import parentsIcon from "../assets/home-icons/Parents.png";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";

const TransportManagement = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <SchoolBusManagementSection />
            <KnowMore />
            <SchoolBusTrackingSystem />
            <BookDemo />
            <EffortlessSchoolBusManagementSection />
            <GetTouch />
            <ExceptionalFeaturesSection />
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

const SchoolBusManagementSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 pt-15 md:px-10 lg:px-16">
            <div className="mx-auto max-w-[1400px] text-center">
                <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                    School Bus Management
                </h1>

                <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-sbBlue" />

                <p className="mx-auto mt-10 max-w-[1000px] font-primary text-[22px] font-semibold text-black leading-8">
                    School bus tracking system to improve student safety
                </p>

                <p className="mx-auto mt-4 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Track bus location of your entire bus fleet from a single dashboard. Your transport administrator can get real-time updates on location, driving patterns, delays, and breakdowns from a central location.
                </p>

                <p className="mx-auto mt-8 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    With detailed reports and analysis, you can reduce operational costs, ensure timely maintenance, and take control of student safety. Parents can monitor the real-time location and time of arrival using the SkoolBeep's school bus tracker
                </p>
            </div>
        </section>
    );
};

const BookDemo = () => {
    return (
        <CommonButton
            label="Book Demo"
            className="mt-10 flex !justify-center"
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

const GetTouch = () => {
    return (
        <CommonButton
            label="Get in Touch"
            className="mt-10 flex !justify-center"
        />
    );
};

function SchoolBusTrackingSystem() {
    const plans = [
        {
            title: "SkoolFleet Advanced",
            description:
                "Revolutionize your school bus fleet management with our state-of-the-art solution. Equipped with Govt of India Compliant AIS-140 GPS unit, certified by Dept. of Transport (MVD) of state govt, our system meets the mandatory requirement in various states across India.",
        },
        {
            title: "SkoolFleet Lite",
            description:
                "A simple, cost-effective solution that can provide real-time live tracking and proximity alert to parents using any available Android or iOS devices.",
        },
    ];

    const rows = [
        {
            feature: "Live Tracking",
            function:
                "Live location tracking of bus available to parents",
            advanced: true,
            lite: true,
        },
        {
            feature: "Proximity Notification",
            function:
                "When the bus enters within 1 or 2 kilometers of set pickup location, parents will receive an alert.",
            advanced: true,
            lite: true,
        },
        {
            feature: "24*7 Fleet tracking",
            function:
                "Bus location data can be tracked at all times, regardless of whether the ignition is on or off.",
            advanced: true,
            lite: false,
        },
        {
            feature: "Route Optimization",
            function:
                "Get regular mileage calculations with fuel sensors. Analyze data and identify the most efficient routes for each bus.",
            advanced: true,
            lite: false,
        },
        {
            feature: "RFID tracking",
            function:
                "RFID to mark student entering or leaving the bus",
            advanced: true,
            lite: false,
        },
        {
            feature: "Dashboard",
            function:
                "Dashboard view to see the entire fleet in motion, plan to delays and create backup plans",
            advanced: true,
            lite: false,
        },
    ];

    return (
        <section className="mt-10 relative overflow-hidden bg-[#fbf8fc] px-4 py-6 sm:px-6 lg:px-8">
            {/* doodle background */}
            <div
                className="absolute inset-0 opacity-[0.2]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill='none' stroke='%23d9a8df' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M36 58c16-11 38 7 28 27-5 10-19 15-28 7-12-10-12-25 0-34Z'/%3E%3Cpath d='M94 36l16 18 22-8-7 23 18 14-23 5-4 23-17-16-21 10 7-23-17-15 23-4 3-23Z'/%3E%3Cpath d='M178 34c10 3 18 12 19 24-11-8-24-10-35-3 1-11 6-18 16-21Z'/%3E%3Cpath d='M211 69c8-9 20-14 33-12-8 9-11 22-6 33-11-1-20-7-27-21Z'/%3E%3Cpath d='M44 118c9-10 25-12 36-4-11 3-19 11-21 23-9-3-14-8-15-19Z'/%3E%3Cpath d='M111 134c0-16 12-28 28-28s28 12 28 28c0 21-28 44-28 44s-28-23-28-44Z'/%3E%3Ccircle cx='139' cy='134' r='9'/%3E%3Cpath d='M198 124h24M210 112v24'/%3E%3Cpath d='M27 190c16-8 34 5 34 21-12-6-26-5-37 5-3-11-1-20 3-26Z'/%3E%3Cpath d='M83 211l11-26 11 26M88 201h12'/%3E%3Cpath d='M145 200c6-12 16-18 30-16-6 12-3 25 6 35-13 2-25-4-36-19Z'/%3E%3Cpath d='M203 204c9-10 24-11 35-3-12 2-20 10-23 22-8-4-12-10-12-19Z'/%3E%3Cpath d='M16 18l18 5M26 11l-5 18'/%3E%3Cpath d='M224 170l20 12M243 164l-12 20'/%3E%3Cpath d='M64 20c6 4 10 11 10 18-7-5-15-6-22-2 0-7 4-13 12-16Z'/%3E%3Cpath d='M70 87c5-6 12-8 20-6-6 3-10 9-11 16-5-2-8-5-9-10Z'/%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: "260px 260px",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative mx-auto max-w-[1300px]">
                {/* heading */}
                <div className="text-center">
                    <h2 className="mt-5 font-heading text-[32px] font-semibold leading-[1.15] text-[#a631ae] sm:text-[30px]">
                        SkoolBeep School Bus Tracking System
                    </h2>
                    <div className="mx-auto mt-2 h-[3px] w-[28px] bg-[#b63dbd]" />
                </div>

                {/* top plans */}
                <div className="mt-8 rounded-[22px] bg-white/95 px-8 py-12 shadow-[0_18px_50px_rgba(190,94,211,0.10)] sm:px-10">
                    <div className="grid grid-cols-1 divide-y divide-[#f8f8f8] md:grid-cols-2 md:divide-x md:divide-y-0">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`text-center ${index === 0 ? "md:pr-8" : "md:pl-8"} py-3 md:py-0`}
                            >
                                <p className="text-[26px] font-semibold leading-[1.35] text-black">
                                    {plan.title}
                                </p>
                                <p className="mt-3 text-[16px] leading-[1.55] text-sbTextLight font-extralight">
                                    {plan.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* comparison table */}
                <div className="mt-10 overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(201,103,216,0.20)]">
                    {/* header row */}
                    <div className="grid grid-cols-[300px_1fr_210px_180px]">
                        <div className="bg-[#b240b8] px-8 py-8">
                            <p className="text-[16px] font-semibold uppercase leading-[1.35] text-white">
                                Feature
                            </p>
                        </div>
                        <div className="bg-white px-5 py-8">
                            <p className="text-[16px] font-semibold uppercase leading-[1.35] text-black">
                                Function
                            </p>
                        </div>
                        <div className="bg-white px-5 py-8 text-center">
                            <p className="text-[16px] font-semibold uppercase leading-[1.35] text-black">
                                SkoolFleet Advanced
                            </p>
                        </div>
                        <div className="bg-white px-5 py-8 text-center">
                            <p className="text-[16px] font-semibold uppercase leading-[1.35] text-black">
                                SkoolFleet Lite
                            </p>
                        </div>
                    </div>

                    {/* body */}
                    {rows.map((row, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[300px_1fr_210px_180px]"
                        >
                            <div className="border-t border-white/10 bg-[#a41cab] px-8 py-9">
                                <p className="text-[16px] font-extralight leading-[1.4] text-white">
                                    {row.feature}
                                </p>
                            </div>

                            <div className="border-t border-[#f8f8f8] bg-[#fbfbfb] px-5 py-8">
                                <p className="text-[16px] leading-[1.55] text-[#4e4e4e] font-extralight">
                                    {row.function}
                                </p>
                            </div>

                            <div className="flex border-t border-[#f8f8f8] items-center justify-center bg-[#fbfbfb] px-5 py-8">
                                {row.advanced ? (
                                    <img src={check} alt="Included" className="w-[30px] h-[30px] object-contain" />
                                ) : (
                                    <img src={crossed} alt="Not Included" className="w-[30px] h-[30px] object-contain" />
                                )}
                            </div>

                            <div className="flex border-t border-[#f8f8f8] items-center justify-center bg-[#fbfbfb] px-5 py-8">
                                {row.lite ? (
                                    <img src={check} alt="Included" className="w-[30px] h-[30px] object-contain" />
                                ) : (
                                    <img src={crossed} alt="Not Included" className="w-[30px] h-[30px] object-contain" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function EffortlessSchoolBusManagementSection() {
    const learningFeatures = [
        {
            id: 1,
            title: "Improve Student Safety",
            description:
                "Monitor driving patterns, route deviations and ensure drivers are following safe driving practices.",
            icon: shield,
        },
        {
            id: 2,
            title: "Better communication with parents.",
            description:
                "No more frantic calls to the school office. Parents can get alerts on location of bus and delays.",
            icon: talk || parentsIcon,
        },
        {
            id: 3,
            title: "Route Optimization",
            description:
                "Streamline bus routes by analyzing data and identifying the most efficient routes for each bus.",
            icon: route || road,
        },
        {
            id: 4,
            title: "Increase Accountability & transparency",
            description:
                "Increase overall accountability and transparency by monitoring and capturing data.",
            icon: search || gps,
        },
        {
            id: 5,
            title: "Reduce fuel & maintenance costs",
            description:
                "Proactively service vehicles, check maintenance activities and analyse fuel consumption to reduce costs .",
            icon: oilPrice,
        },
        {
            id: 6,
            title: "Better Monitoring with detailed reporting",
            description:
                "Get a bird’s eye-view of your fleet or individual buses. Analyse distance covered, fuel consumed,cost involved, revenues generated etc",
            icon: exploration,
        },
        {
            id: 7,
            title: "Maintain Driver & Vehicle data",
            description:
                "Keep track of vehicle data such as insurance and fitness certificates. Maintain detailed records of your drivers, including their license and driving history.",
            icon: driverLicense
        },
        {
            id: 8,
            title: "Timely decisions with instant alerts",
            description:
                "Identify and address traffic congestion, delays and breakdowns quickly.",
            icon: notif || notification || quick,
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
                            Effortless School Bus Management
                        </h2>

                        <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-sbBlue" />
                    </div>
                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        SkoolBeep’s transport management solution simplifies fleet operations, giving you total control and visibility over student safety and bus efficiency.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="mt-10 grid grid-cols-1 gap-y-8 md:mt-10 md:grid-cols-2 md:gap-x-20 lg:gap-x-28 xl:gap-x-36">
                    {learningFeatures.map((item) => (
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

function ExceptionalFeaturesSection() {
    const features = [
        {
            title: "WIDE-RANGING COMPATIBILITY",
            description:
                "The bus tracking app is AIS140 certified and can easily connect with existing GPS devices. The integration with any AIS-140 hardware is smooth with no time loss.",
            icon: gps,
        },
        {
            title: "FLEXIBILITY",
            description:
                "Access to bus location tracking can be provided on any smartphone owned by teachers, staff or parents.",
            icon: notification,
        },
        {
            title: "ENHANCED SAFETY FEATURES",
            description:
                "Features such as speed monitoring, live feeds from buses, route deviation alerts, and traffic condition alerts provide enhanced safety.",
            icon: notif,
        },
        {
            title: "QUICK & EASY INSTALLATION",
            description:
                "The software integrates easily with existing systems and can be set up in minutes. Setting up routes, configuring stops, adding student and staff information can be done very easily.",
            icon: quick,
        },
    ];

    return (
        <section className="mt-12 relative overflow-hidden bg-sbBlue px-4 py-12 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            {/* Pattern background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `url(${homeLearningBg})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "420px auto",
                    backgroundPosition: "center top",
                }}
            />

            <div className="relative mx-auto max-w-[1280px]">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[32px] font-semibold text-white leading-[40px]">
                        Exceptional Features from SkoolBeep
                    </h2>
                    <div className="mx-auto mt-4 h-[3px] w-[60px] bg-white" />
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex min-h-[300px] flex-col items-center rounded-[28px] bg-[#f6f6f6] px-8 pb-10 pt-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:px-10 lg:min-h-[318px] lg:px-12"
                        >
                            <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#ececec]">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="h-[60px] w-[60px] object-contain"
                                />
                            </div>

                            <p className="mt-8 text-[16px] font-semibold leading-[1.35] text-black">
                                {item.title}
                            </p>

                            <p className="mt-5 max-w-[560px] text-[16px] font-extralight leading-[1.75] text-[#5a5a5a]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const FrequentlyAskedQuestions = () => {
    const [openId, setOpenId] = useState(1);
    const faqItems = [
        {
            id: 1,
            question: "What is a transport management system?",
            answer: `Transport management : has two components ; fleet management for transport managers. Live school bus tracker & alerts for parents

Bus tracker app provides a holistic view about all buses in a single dashboard. Will have detailed reports on each bus, about routes taken, time of arrival at each stop, and monthly reports on driving styles, distance covered, incidents etc

Parents can set their pick and drop points. Parents can live track the assigned bus when the route is activated for parent tracking. Parents can set proximity alerts to inform when the bus reaches within a set distance like say 1 km from pickup/drop point.`,
        },
        {
            id: 2,
            question: "How does SkoolBeep’s bus tracking system work?",
            answer: `Works with tracking unit ( Option1 : AIS 140 compliant hardware unit OR a mobile device)

Tracking unit periodically uploads the bus location data to a central server which is provided to parents for live location tracking. Any particular events of interest (like over-speeding, sudden braking etc) are also reported to the central server.`,
        },
        {
            id: 3,
            question: "Do all school buses require GPS?",
            answer: `To get fitness certificates for school buses many states in India have mandated AIS-140 certified GPS device fitting. In those states, AIS140 certified GPS devices are mandatory to track bus location.

Providing location feed to parents is an optional choice for school`,
        },
        {
            id: 4,
            question: "How can one track bus location using GPS?",
            answer: `The tracking device ( Hardware AIS1-40 device OR configured mobile phone) uploads the location information or any other interesting incident information to the central server. This is then collated for reports and providing live feed to parents.`,
        },
        {
            id: 5,
            question: "Who all benefit from a School bus tracking system?",
            answer: `Parents: They can see the location of the bus in real-time. They also get alerts notifications on arrival at school/home, delays or route diversions ensuring peace of mind.

Administration: Detailed dashboard and incident reports give schools better control and access to critical information that can improve efficiency and reduce running costs.

Students: Better safety, security and lesser time waiting at their pickup point.`,
        },
        {
            id: 6,
            question: "What are the different platforms supported by the bus tracker app?",
            answer: `We support live tracking from Android App, iOS App and web interface which can be accessed from all browsers.

The Transport dashboard is available on Android App and as a web interface which can be accessed from all browsers.`,
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
                    <div className="max-w-[1180px] relative z-10">
                        {faqItems.map((item) => (
                            <FaqRow
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
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

function FaqRow({ item, isOpen, onToggle }) {
    return (
        <div className="border-b border-[#e7e7e7]">
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
                    <p className="max-w-[1120px] pb-[10px] pr-12 text-[16px] leading-[1.9] font-extralight text-[#666666] whitespace-pre-line">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TransportManagement;