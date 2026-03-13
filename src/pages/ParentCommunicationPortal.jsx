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
import heroImg from "../assets/parent-communication-icons/parent-communication.jpg"; // replace with your image
import img1 from "../assets/parent-communication-icons/1.svg"; // replace with your image
import img2 from "../assets/parent-communication-icons/2.svg"; // replace with your image
import img3 from "../assets/parent-communication-icons/3.svg"; // replace with your image
import img4 from "../assets/parent-communication-icons/4.svg"; // replace with your image
import img5 from "../assets/parent-communication-icons/5.svg"; // replace with your image
import img6 from "../assets/parent-communication-icons/6.svg"; // replace with your image
import img7 from "../assets/parent-communication-icons/7.svg"; // replace with your image
import img8 from "../assets/parent-communication-icons/8.svg"; // replace with your image
import phoneMockup from "../assets/parent-communication-icons/app-center.png"; // replace with your image
import announcements from "../assets/parent-communication-icons/announcements.svg"; // replace with your image
import appNotifications from "../assets/parent-communication-icons/app-notifications.png"; // replace with your image
import adminstrationEase1 from "../assets/parent-communication-icons/adminstration-ease1.png";
import adminstrationEase2 from "../assets/parent-communication-icons/adminstration-ease2.png";
import customFee from "../assets/parent-communication-icons/custom-fee.gif";
import notificationsReminders from "../assets/parent-communication-icons/notifications-reminders.gif";
import sendUpdates from "../assets/parent-communication-icons/send-updates.gif";
import sharePictures from "../assets/parent-communication-icons/share-pictures.gif";
import trackEffectiveness from "../assets/parent-communication-icons/track-effectiveness.gif";
import appStore from "../assets/parent-communication-icons/app-store.svg";
import playStore from "../assets/parent-communication-icons/play-store.svg";
import parentsIcon from "../assets/home-icons/Parents.png";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";
import schoolFees from "../assets/parent-communication-icons/school-fees.svg"; // replace with your image
import schoolBus from "../assets/parent-communication-icons/school-bus.svg"; // replace with your image
import studentPerformance from "../assets/parent-communication-icons/student-performance.svg"; // replace with your image
import personalInfo from "../assets/parent-communication-icons/personal-info.svg"; // replace with your image
import announcement from "../assets/parent-communication-icons/announcements.svg"; // replace with your image
import boardCompilance from "../assets/parent-communication-icons/board-compliance.svg"; // replace with your image
import privacy1 from "../assets/parent-communication-icons/privacy1.png"; // replace with your image
import privacy2 from "../assets/parent-communication-icons/privacy2.png"; // replace with your image
import clutteredInfo1 from "../assets/parent-communication-icons/cluttered-information1.png"; // replace with your image
import clutteredInfo2 from "../assets/parent-communication-icons/cluttered-information2.png"; // replace with your image
import customizationOptions from "../assets/parent-communication-icons/customization-options.png"; // replace with your image
import block from "../assets/parent-communication-icons/suited-school-echosystem1.png"; // replace with your image
import book from "../assets/parent-communication-icons/suited-school-echosystem2.png"; // replace with your image

const ParentCommunicationPortal = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <ParentCommunicationPortalSection />
            <UnifyingSimplifyingParentCommunication />
            <FreeDemo />
            <EverythingSchoolInOneApp />
            <BetterInvolvementSection />
            <GetEveryoneOnTheSamePageSection />
            <StudentInformationSortedTheSkoolBeepWay />
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

const ParentCommunicationPortalSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 pt-15 md:px-10 lg:px-16">
            <div className="mx-auto max-w-[1400px] text-center">
                <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                    Parent Communication Portal
                </h1>

                <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-sbBlue" />

                <p className="mx-auto mt-10 max-w-[1000px] font-primary text-[22px] font-semibold text-black leading-8">
                    School app for parents for timely communication and seamless tracking.
                </p>

                <p className="mx-auto mt-4 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Increased parental involvement can lead to academic gains for students: higher grades, better attendance, more proactive participation, and a better relationship with teachers.
                </p>

                <p className="mx-auto mt-8 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    SkoolBeep’s school app for parents makes it easier for parents to stay involved in their child's education and ensures they have all the information they need to make informed decisions in one location.
                </p>
            </div>
        </section>
    );
};

function UnifyingSimplifyingParentCommunication() {
    const leftCards = [
        { title: "School Fees", icon: schoolFees },
        { title: "School Bus", icon: schoolBus },
        { title: "Student Performance", icon: studentPerformance },
    ];

    const rightCards = [
        { title: "Personal Information", icon: personalInfo },
        { title: "Announcements", icon: announcement },
        { title: "Govt. or board Compliance", icon: boardCompilance },
    ];

    return (
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-10 xl:px-12">
            <div className="mx-auto max-w-[1320px]">
                {/* heading */}
                <div className="text-center">
                    <h2 className="text-[32px] font-semibold leading-[1.2] text-black">
                        Unifying & Simplifying Parent Communication
                    </h2>
                    <div className="mx-auto mt-4 h-[4px] w-[58px] rounded-full bg-[#4456d9]" />
                </div>

                {/* desktop layout */}
                <div className="mt-14 hidden lg:grid lg:grid-cols-[1fr_320px_1fr] lg:grid-rows-3 lg:items-center lg:gap-x-8 xl:grid-cols-[1fr_340px_1fr] xl:gap-x-10">
                    {/* left side */}
                    <div className="flex justify-end self-start pr-2">
                        <FeatureCard title={leftCards[0].title} icon={leftCards[0].icon} />
                    </div>
                    <div className="row-span-3 flex items-center justify-center">
                        <img
                            src={phoneMockup}
                            alt="Parent communication mobile app"
                            className="h-auto w-full max-w-[290px] object-contain xl:max-w-[310px]"
                        />
                    </div>
                    <div className="flex justify-start self-start pl-2">
                        <FeatureCard title={rightCards[0].title} icon={rightCards[0].icon} />
                    </div>

                    <div className="flex justify-end pr-10">
                        <FeatureCard title={leftCards[1].title} icon={leftCards[1].icon} />
                    </div>
                    <div className="flex justify-start pl-10">
                        <FeatureCard title={rightCards[1].title} icon={rightCards[1].icon} />
                    </div>

                    <div className="flex justify-end self-end pr-2">
                        <FeatureCard title={leftCards[2].title} icon={leftCards[2].icon} />
                    </div>
                    <div className="flex justify-start self-end pl-2">
                        <FeatureCard title={rightCards[2].title} icon={rightCards[2].icon} />
                    </div>
                </div>

                {/* mobile / tablet layout */}
                <div className="mt-14 grid grid-cols-1 gap-10 lg:hidden">
                    <div className="flex flex-col items-center gap-16">
                        <FeatureCard title={leftCards[0].title} icon={leftCards[0].icon} />
                        <FeatureCard title={leftCards[1].title} icon={leftCards[1].icon} />
                        <FeatureCard title={leftCards[2].title} icon={leftCards[2].icon} />
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={phoneMockup}
                            alt="Parent communication mobile app"
                            className="h-auto w-full max-w-[290px] object-contain"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-16">
                        <FeatureCard title={rightCards[0].title} icon={rightCards[0].icon} />
                        <FeatureCard title={rightCards[1].title} icon={rightCards[1].icon} />
                        <FeatureCard title={rightCards[2].title} icon={rightCards[2].icon} />
                    </div>
                </div>
            </div>
        </section>
    );
}

const FeatureCard = ({ title, icon }) => {
    return (
        <div className="relative flex w-full max-w-[295px] justify-center pt-[50px]">
            <img
                src={icon}
                alt={title}
                className="absolute top-0 left-1/2 z-10 h-[86px] w-auto -translate-x-1/2 object-contain"
            />

            <div className="flex h-[105px] w-full items-end justify-center rounded-[14px] bg-[#f3e8f5] px-4 pb-5 text-center">
                <p className="text-[17px] font-semibold leading-[1.35] text-[#b03ab2]">
                    {title}
                </p>
            </div>
        </div>
    );
};

function EverythingSchoolInOneApp() {
    return (
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <div className="mx-auto max-w-[1280px]">
                <div className="overflow-hidden rounded-[34px] bg-gradient-to-b from-[#a81fb0] via-[#971fa9] to-[#7e2b8f] px-8 py-10 sm:px-10 sm:py-12 md:px-14 lg:px-16 lg:py-14 xl:px-16 xl:py-16">
                    <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-6 xl:grid-cols-[1fr_1fr]">
                        {/* Left content */}
                        <div className="max-w-[620px] text-white">
                            <h2 className="text-[32px] font-semibold leading-[1.15] text-white">
                                Everything School in One App
                            </h2>

                            <div className="mt-4 h-[3px] w-[56px] rounded-full bg-white" />

                            <p className="mt-8 max-w-[620px] text-[17px] font-extralight leading-[1.8] text-white/90">
                                No more tracking communication across websites, student paper
                                diaries, SMS, paper circulars, Facebook pages, and bus-tracking
                                apps! With the SkoolBeep app, all school-related communication and
                                student information is centralized. All the information you need,
                                any time you need at your fingertips.
                            </p>

                            {/* store buttons */}
                            <div className="mt-10 flex flex-wrap items-center gap-5">
                                <img
                                    src={appStore}
                                    alt="Download on the App Store"
                                    className="h-[46px] w-auto object-contain"
                                />
                                <img
                                    src={playStore}
                                    alt="Get it on Google Play"
                                    className="h-[46px] w-auto object-contain"
                                />
                            </div>

                            {/* CTA */}
                            <button
                                type="button"
                                className="mt-12 inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-5 text-[16px] font-semibold text-[#a424ad] shadow-sm transition hover:opacity-95"
                            >
                                <span>Book a Demo</span>
                                <span className="text-[30px] font-light leading-none">→</span>
                            </button>
                        </div>

                        {/* Right image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={appNotifications}
                                alt="App notifications preview"
                                className="h-auto w-full max-w-[620px] object-contain lg:max-w-[660px] xl:max-w-[700px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const BetterInvolvementSection = () => {
    const features = [
        {
            id: 1,
            title: "One place for everything school",
            description: "Parents can access all important student information with just a few clicks, including schedules, fee payments, homework, report cards, attendance, and more.",
            icon: img1,
        },
        {
            id: 2,
            title: "Easy reminders & notifications",
            description: "Quick SMS/email reminders for pending assignments, upcoming exams, open house days and other events to help busy parents stay on top of school activities.",
            icon: img2,
        },
        {
            id: 3,
            title: "Secure Communication",
            description: "Parents can connect with teachers and play an active role in the child’s academic and non academic activities.",
            icon: img3,
        },
        {
            id: 4,
            title: "Avoid late fees",
            description: "Never miss a payment deadline with timely reminders via SMS and Email . Auto-generated receipts on fee payment.",
            icon: img4,
        },
        {
            id: 5,
            title: "Pay Fees at your convenient time",
            description: "No more waiting in queues during office hours. Pay fees online at your convenience using the SkoolBeep app. Loan options available.",
            icon: img5,
        },
        {
            id: 6,
            title: "Track Child’s Performance",
            description: "Be more involved in your child’s academic progress. Access assignment list. marks, report cards, exam dates etc. for any time period easily.",
            icon: img6,
        },
        {
            id: 7,
            title: "Keep student information updated",
            description: "Upload personal details or documents securely through user-friendly screen anytime or anywhere",
            icon: img7,
        },
        {
            id: 8,
            title: "Improved parent school relationship",
            description: "By involving parents in the school community, they become more invested in their child's education and feel a sense of ownership in the success of the school.",
            icon: img8,
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
                            Better Involvement, Better Outcomes                        </h2>

                        <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-sbBlue" />
                    </div>
                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        SkoolBeep’s parent communication module makes it easier for parents to stay involved in their child's education and ensures they have all the information they need to make informed decisions.
                    </p>
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
                                    className="max-h-[85px] max-w-[85px] object-contain"
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

function GetEveryoneOnTheSamePageSection() {
    const [openIndex, setOpenIndex] = useState(1);

    const accordionItems = [
        {
            title: "Set custom fee structures",
            description:
                "Categorize & and automate fee calculations factoring scholarships and discounts. Customize student fees and payment installments easily.",
            image: customFee,
        },
        {
            title: "Send notifications & reminders",
            description:
                "Instant messaging, announcements, and calendar integration keep everyone informed.",
            image: notificationsReminders,
        },
        {
            title: "Share pictures/videos of school events",
            description:
                "Share photos, videos, voice calls, documents (PDF & Word).",
            image: sendUpdates,
        },
        {
            title: "Send updates on student performance",
            description:
                "Update diary, assessments, report cards, assignments and more. A single dahboard view ensures no communication is missed.",
            image: sharePictures,
        },
        {
            title: "Track effectiveness",
            description:
                "Read receipts to understand the reach of messages. Bridging solutions like voice call & SMS",
            image: trackEffectiveness,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-10 xl:px-12">

            <div className="mx-auto max-w-[1280px]">

                {/* heading */}
                <div className="mx-auto max-w-[940px] text-center">
                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        Get Everyone On The Same Page
                    </h2>

                    <div className="mx-auto mt-5 h-[4px] w-[74px] rounded-full bg-[#4456d9]" />

                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        Effective parent teacher communication is crucial for a vibrant school community.
                        Bringing teachers, students, parents, and administrators onto a secure platform
                        ensures everyone is up-to-date and connected, preventing important messages
                        and updates from being missed.
                    </p>
                </div>

                {/* layout */}
                <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">

                    {/* LEFT SIDE */}
                    <div className="pt-2">
                        {accordionItems.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index}>
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                                    >
                                        <div className="pr-3">
                                            <p className="text-[17px] font-semibold leading-[1.35] text-black">
                                                {item.title}
                                            </p>

                                            {isOpen && (
                                                <p className="mt-3 text-[17px] text-sbTextLight leading-[1.8] font-extralight">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>

                                        <ChevronDown
                                            className={`mt-[2px] h-5 w-5 shrink-0 text-[#2e2e2e] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                }`}
                                            strokeWidth={2.2}
                                        />
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-[420px] rounded-[18px] border border-[#ededed] bg-white p-4 shadow-[0_8px_28px_rgba(0,0,0,0.05)]">

                            <img
                                src={
                                    openIndex !== -1
                                        ? accordionItems[openIndex].image
                                        : sendUpdates
                                }
                                alt="Parent Communication Portal"
                                className="mx-auto w-full max-w-[320px] object-contain"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const StudentInformationSortedTheSkoolBeepWay = () => {
    const comparisonRows = [
        {
            feature: "Privacy",
            otherIcon: privacy1,
            otherText:
                "All phone numbers can be accessed by any group member resulting in unsolicited reach-outs.",
            plusIcon: privacy2,
            plusText: `Member credentials are verified and added.

Numbers are hidden from group members.`,
        },
        {
            feature: "Cluttered Information",
            otherIcon: clutteredInfo1,
            otherText: "Important messages could go unnoticed in general conversation.",
            plusIcon: clutteredInfo2,
            plusText: `Communicate to the entire school, a particular class or a segment of students/parents or teachers.

No hassle to manage and track communication with multiple seperate groups`
        },
        {
            feature: "Administration Ease",
            otherIcon: adminstrationEase1,
            otherText: "Managing multiple WhatsApp groups can be a daunting task and some groups may miss out on key information.",
            plusIcon: adminstrationEase2,
            plusText: `Manage changes in schedule, online classes, transportation updates, unexpected holidays etc with real-time notifications.`,
        },
        {
            feature: "Suited to School ecosystem",
            otherIcon: block,
            otherText: "Not designed for the communication needs of schools like attendance alerts, report card, fee management notifications, etc.",
            plusIcon: book,
            plusText: `Send timely notifications on fees, attendance, events, timetable, bus routes etc. easily.`
        },
        {
            feature: "Work-life balance for teachers",
            otherIcon: block,
            otherText: "Messaging and calls from parents after work hours can be an additional burden for teachers.",
            plusIcon: customizationOptions,
            plusText: `Respond to messages at their own convenience.`
        },
        {
            feature: "Customization Options",
            otherIcon: block,
            otherText: "Doesn't support the standardization of format or nature of messaging required from a professional organization.",
            plusIcon: customizationOptions,
            plusText: `Create custom templates, ensure compliance with regulations and maintain a professional image.`
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#fcf7fc] w-full py-12 md:py-16 lg:py-20">
            {/* background pattern */}
            <div className="absolute inset-0 opacity-[0.14]">
                <div className="h-full w-full bg-[radial-gradient(circle_at_20px_20px,#d78adf_1.2px,transparent_1.2px)] bg-[length:38px_38px]" />
            </div>

            <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-8">
                {/* heading */}
                <div className="mb-8 flex flex-col items-center">
                    <h2 className="text-[32px] font-semibold text-sbPurple leading-[40px]">
                        Student Information sorted the SkoolBeep Way
                    </h2>
                    <div className="mt-4 h-[4px] w-[52px] rounded-full bg-sbPurple" />
                    <p className="mx-auto mt-5 text-center text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        Schools need a centralized and secure channel of communication to build relationships, communicate effectively, and increase engagement without compromising privacy. While WhatsApp may be a popular communication tool among friends and family, it is not designed for educational purposes.
                    </p>
                    <p className="mx-auto mt-5 text-center text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        Here is why investing in a trusted education communication platform like SkoolBeep is the best choice for schools:
                    </p>
                </div>

                {/* table */}
                <div className="overflow-hidden rounded-[24px] bg-sbWhite shadow-[0_20px_50px_rgba(170,46,177,0.10)]">
                    {/* header */}
                    <div className="grid grid-cols-[1.05fr_1.05fr_1fr]">
                        <div className="border-r border-gray-200 bg-white px-10 py-14 font-primary text-[15px] font-bold uppercase tracking-[0.02em] text-sbText">
                            FEATURE
                        </div>
                        <div className="border-r border-gray-200 bg-white px-10 py-14 font-primary text-center text-[15px] font-bold uppercase tracking-[0.02em] text-sbText">
                            WHATSAPP
                        </div>
                        <div className="bg-sbPurple px-10 py-14 font-primary text-center text-[15px] font-bold uppercase tracking-[0.02em] text-white">
                            SKOOLBEEP PARENT PORTAL
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

const FrequentlyAskedQuestions = () => {
    const [openId, setOpenId] = useState(null);
    const faqItems = [
        {
            id: 1,
            question: "What is the advantage of using SkoolBeep’s school app for parents?",
            answer: `The school app for parents centralizes access to different communication threads related to a student in a single location. Apart from centralization of communication, it also:
1.consolidated all information for parents
2.streamlines school operations and digitization
3.protects personal information from unauthorized access
4.ensures one point access for all parent teacher communication`
        },
        {
            id: 2,
            question: "How can the school enable access for parents?",
            answer: `
1.Based on class and section, access can be enabled for father/mother/guardian.
2.Access can be one-way or two-way based on school’s discretion
3.School can configure the point of contact for two-way access model`
        },
        {
            id: 3,
            question: "How does a parent create an account and login?",
            answer: "To ensure security and prevent unauthorized access, login has to be created by the school and provided to parents."
        },
        {
            id: 4,
            question: "How does SkoolBeep's school app for parents benefit teachers?",
            answer: "It empowers teachers with an interface to communicate with parents regarding classroom performance and activities. This ensures that all communication is tracked and helps ensure work-life balance for teachers as they don't have to continuously monitor Whatsapp chats or messages"
        },
        {
            id: 5,
            question: "What kind of support will SkoolBeep provide for the set up?",
            answer: `The SkoolBeep support team will set up the school parent/student enrolment system. The team will also set up the parent portal to facilitate parent access, school operations management and enable role-based staff access.`
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


export default ParentCommunicationPortal;