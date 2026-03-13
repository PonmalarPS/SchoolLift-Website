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
import heroImg from "../assets/student-info-system-icons/student-information-banner.jpg"; // replace with your image
import sis1 from "../assets/student-info-system-icons/sis-1.svg";
import sis2 from "../assets/student-info-system-icons/sis-2.svg";
import sis3 from "../assets/student-info-system-icons/sis-3.svg";
import sis4 from "../assets/student-info-system-icons/sis-4.svg";
import sis5 from "../assets/student-info-system-icons/sis-5.svg";
import sis6 from "../assets/student-info-system-icons/sis-6.svg";
import sis7 from "../assets/student-info-system-icons/sis-7.svg";
import sis8 from "../assets/student-info-system-icons/sis-8.svg";
import sISCustomizeScreen2 from "../assets/student-info-system-icons/SIS_Customize_ Screen2.gif";
import sISLifecycleScreen5 from "../assets/student-info-system-icons/SIS_lifecycle_ Screen5.gif";
import sISParentModifyScreen3 from "../assets/student-info-system-icons/SIS_Parent_Modify_ Screen3.gif";
import sISTemplatesScreen1 from "../assets/student-info-system-icons/SIS_Templates_ Screen1.gif";
import sISUpdateScreen4 from "../assets/student-info-system-icons/SIS_Update_ Screen4.gif";
import parentsIcon from "../assets/home-icons/Parents.png";
import homeLearningBg from "../assets/home-icons/home-learning-bg.png";

const testimonials = [
    {
        id: 1,
        name: "Ms V Subbulakshmi",
        role: "Principal, Sri Akilandeswari Vidyalaya",
        location: "Tiruchirappalli, Tamil Nadu",
        image: parentsIcon,
        text: `The academic team at our school have evaluated the learning solution from SkoolBeep. It has chapter-wise videos, presentations, practice questions and mock exams. It is completely aligned to the syllabus.`,
    },
    {
        id: 2,
        name: "R.Ramasamy",
        role: "Principal, RN Matric HR Sec School, Madurai",
        location: "",
        image: parentsIcon,
        text: `We have evaluated many apps for our school. The SkoolBeep digital learning provides unique opportunities for teachers to help students with learning even outside the classroom. The quizzes, learning material is aligned to the syllabus and the personalised feedback will helps students of all levels achieve greater proficiency in their subjects..`,
    },
    {
        id: 3,
        name: "R.Gnana Susikaran",
        role: "Principal, Bishop Heber Hr. Sec. School",
        location: "Teppakulam",
        image: parentsIcon,
        text: `SkoolBeep StudyBuddy has videos, quizzes, games, presentations, etc. The syllabus-aligned learning resources will help teachers to not only excite interest in students in the class but also send assignments, notes and review their practice sessions. Very essential in this modern age to keep students excited and involved.`,
    },
];

const StudentInformationSystem = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <StudentInfoSection />
            <StudentInfoCardsSection />
            <BookDemo />
            <FoundationOfSchoolSection />
            <KnowMore />
            <StudentInformationSection />
            <OurClients />
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

const StudentInfoSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 pt-15 md:px-10 lg:px-16">
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

            <div className="mx-auto max-w-[1400px] text-center">
                <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                    Student Information System
                </h1>

                <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-sbBlue" />

                <p className="mx-auto mt-10 max-w-[1000px] font-primary text-[22px] font-semibold text-black leading-8">
                    Centralized, secure and up-to-date student information management system for a great start to your school’s digital transformation.
                </p>

                <p className="mx-auto mt-4 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Collect and maintain student information in a central repository with our student information system. Keep track of their progress, activities, payments, attendance, and more in a single location. Getting parents to update student information is easy.
                </p>

                <p className="mx-auto mt-8 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Manage all records right from the time of a student’s admission to their academic performance, personal information, health records and more with ease.
                </p>
            </div>
        </section>
    );
};

const StudentInfoCardsSection = () => {
    const cards = [
        {
            title: "Central Student Repository",
            items: [
                "Personal Details",
                "Attendance",
                "Fee Collection",
                "Assignment Distribution",
                "Performance Evaluation",
                "Health Records",
            ],
        },
        {
            title: "Student Lifecycle\nManagement",
            items: [
                "Admission Management",
                "Academic and non-academic\nactivities",
                "Historical Data",
                "Attendance",
                "Exam Scores",
                "Behavior Records",
            ],
        },
        {
            title: "Decentralised Data Capture",
            items: [
                "Role-based access",
                "Student, teacher, parent &\nadministrator login",
                "Update in real-time",
                "Anytime access to up-to-date\ninformation",
                "360-degree information",
            ],
        },
    ];

    return (
        <section className="mt-7 w-full bg-white px-4 py-10 sm:px-6 lg:px-8 xl:px-10">
            <div className="mx-auto grid max-w-[2048px] grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-8">
                {cards.map((card, index) => (
                    <article
                        key={index}
                        className="rounded-[22px] bg-[#f6f6f6] px-6 py-4 shadow-none sm:px-8 lg:px-10 xl:px-[40px] xl:py-[20px]"
                    >
                        <p className="mx-auto font-primary text-[21px] font-semibold text-black leading-8">
                            {card.title}
                        </p>

                        <div className="mt-4 h-[3px] w-[60px] bg-sbBlue" />

                        <ul className="mt-5 space-y-2 xl:mt-[20px] xl:space-y-[8px]">
                            {card.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 xl:gap-[10px]">
                                    <span className="mt-[11px] h-[12px] w-[12px] shrink-0 rounded-full border border-[#777777]" />
                                    <span className="font-primary whitespace-pre-line text-lg text-sbTextLight font-extralight leading-8">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

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

function FoundationOfSchoolSection() {
    const learningFeatures = [
        {
            id: 1,
            title: "Access Data Anytime, Anywhere",
            description: "Student records right from the time of admission till they pass out in a centralized location for easy access.",
            image:
                sis1,
        },
        {
            id: 2,
            title: "Eliminate laborious paperwork",
            description: "Eliminate the headache of managing, storing and retrieving paper documents. All documents organized and stored in a secure database.",
            image:
                sis2,
        },
        {
            id: 3,
            title: "Streamlined Student Record Maintenance",
            description: "Maintain all student records - academic, health, personal information, awards, fees, and scholarships in one location.",
            image:
                sis3
        },
        {
            id: 4,
            title: "Access to all stakeholders",
            description: "Teachers, students and parents can view and/or edit data, based on their role. Administrators don’t have to function as mediators.",
            image:
                sis4
        },
        {
            id: 5,
            title: "Easy Document Generation",
            description: "Generate and maintain documents like id cards and certificates easily.",
            image:
                sis5
        },
        {
            id: 6,
            title: "Security of Personal Information",
            description: "Compile and access data for any time-frame or segment in pre-defined reporting formats in a matter of minutes.",
            image:
                sis6
        },
        {
            id: 7,
            title: "Effortlessly comply with regulatory requirements",
            description: "All the records you need to comply with NEP or government requirements are at your fingertips.",
            image:
                sis7
        },
        {
            id: 8,
            title: "Smarter data-backed decisions",
            description: "Get the accurate, up-to-date information you need in real-time for smarter, quicker decisions.",
            image:
                sis8
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
                            The foundation Of School Digital Transformation
                        </h2>

                        <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-[#4456d9]" />
                    </div>
                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        SkoolBeep’s Student Information System (SIS) is the foundation for the digitization of your school. Our comprehensive solution acts as a central hub to store, manage and access student data effortlessly.
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

function StudentInformationSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const accordionItems = [
        {
            title: "Choose templates from repository",
            description:
                "SkoolBeep has several pre-defined templates with different fields to capture student data.",
            image: sISTemplatesScreen1
        },
        {
            title: "Customise templates",
            description: "Add any additional fields to the template chosen based on your school’s particular requirements.",
            image: sISCustomizeScreen2
        },
        {
            title: "Give parents access to add/modify child’s information.",
            description: "At the time of admission or the beginning of the academic year, give parents time-bound access to input student details. This saves a lot of administrative time and improves accuracy of student data.",
            image: sISParentModifyScreen3
        },
        {
            title: "Update student attendance, participation and performance",
            description:
                "After the personal information is collected and locked, school can capture all student-related data for the entire year.",
            image: sISUpdateScreen4
        },
        {
            title: "Access entire student lifecycle data",
            description: "Stay prepared for any compliance requirements with historical data of the holistic performance of every single student during their tenure at your school.",
            image: sISLifecycleScreen5
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <div className="pointer-events-none absolute -left-24 top-[360px] h-[520px] w-[260px] rounded-r-full bg-[#efe8f6] opacity-30" />

            <div className="mx-auto max-w-[1250px]">
                <div className="mx-auto max-w-[1000px] text-center">

                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        Student Information Sorted The SkoolBeep Way
                    </h2>

                    <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-[#4456d9]" />

                    <p className="mx-auto mt-5 text-sbTextLight text-[18px] font-extralight leading-[1.75]">
                        With SkoolBeep's Student Information System (SIS), you can easily access and review crucial information about a student's academic progress and performance. From attendance records to grades, disciplinary actions, and even medical history, the SIS provides a centralized and secure location for storing and managing all essential student data.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[1fr_0.95fr] lg:gap-8 xl:gap-10">
                    <div>
                        {accordionItems.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className="border-b border-[#ececec]">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="flex w-full items-start justify-between gap-6 py-7 text-left"
                                    >
                                        <div className="pr-3">
                                            <p className="text-[17px] font-semibold leading-[1.35] text-black">
                                                {item.title}
                                            </p>

                                            {isOpen && (
                                                <p className="mt-1 text-[17px] text-sbTextLight leading-[1.8] font-extralight">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>

                                        <ChevronDown
                                            className={`mt-1 h-5 w-5 shrink-0 text-[#2e2e2e] transition-transform duration-200 sm:h-5 sm:w-5 ${isOpen ? "rotate-180" : ""
                                                }`}
                                            strokeWidth={2.2}
                                        />
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="h-full rounded-[18px] border border-[#e7e7e7] bg-white p-5 sm:p-6 lg:p-7 xl:p-8">
                        <img
                            src={openIndex !== -1 ? accordionItems[openIndex].image : sISUpdateScreen4}
                            alt="Student information dashboard"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const OurClients = () => {
    return (
        <section className="mt-20 w-full bg-sbBgLight py-[40px]">
            <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
                <div className="mb-15 flex flex-col items-center">
                    {/* Heading */}
                    <h2 className="text-[32px] font-semibold text-sbText">
                        What Our Clients Say
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

const FrequentlyAskedQuestions = () => {
    const [openId, setOpenId] = useState(null);
    const faqItems = [
        {
            id: 1,
            question: "What is a Student Information management system?",
            answer: `SkooolBeep’s Student Information management system gives a 360 degree overview of a student’s tenure at the school. It has the following sections:

Personal Information: This includes Student Name, Contact Details, Parent details etc.

Govt Specific compliance: Health Records & Govt Records

Student Performance: Academic Progress made during their tenure at the school

Administration records : Payments dues, Attendance, Transport, Activities, Certificates, ID card, Purchases.`,
        },
        {
            id: 2,
            question: "How does the student information management system work?",
            answer: `First, student’s personal information and records are set up as a base structure. From here all the academic and administrative activities of the child can be stored into the student information system. Documenting the student activities to the student information system helps to maintain a student history and digitizes the student record keeping.

To keep student/parent personal information up-to-date, Schools can periodically (once a year or half yearly) open personal records (Address, Phone number etc) editing to parents.

The Student Information Management System will save an enormous amount of time and laborious paper work for the school. It also makes record keeping easy and accurate. Efficient running of the school, compliance to government regulations and retrieving current/historical student information becomes a breeze.`,
        },
        {
            id: 3,
            question: "How long does it take to implement the student information management system?",
            answer: `It will take around 7 days to implement this system.

1 day for training and setup.

1 week for parent to update the records`,
        },
        {
            id: 4,
            question: "How is the student data protected?",
            answer: `We follow the best possible industry practices and standards to ensure data integrity and safety.

Please go through our data handling policy document our methodology and safety standards in detail.`,
        },
        {
            id: 5,
            question: "How is SkoolBeep’s student information system protected?",
            answer: `Our solution is hosted on Microsoft Azure which is trusted by enterprises, governments and startups worldwide.

Our internal practices ensure that data access is restricted and bound by stringent regulations.`,
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


export default StudentInformationSystem;