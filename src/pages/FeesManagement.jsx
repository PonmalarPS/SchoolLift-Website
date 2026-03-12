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
import heroImg from "../assets/fees-icons/fee-management-banner.jpg"; // replace with your image
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
import sISCustomizeScreen2 from "../assets/student-info-system-icons/SIS_Customize_ Screen2.gif";
import sISLifecycleScreen5 from "../assets/student-info-system-icons/SIS_lifecycle_ Screen5.gif";
import sISParentModifyScreen3 from "../assets/student-info-system-icons/SIS_Parent_Modify_ Screen3.gif";
import sISTemplatesScreen1 from "../assets/student-info-system-icons/SIS_Templates_ Screen1.gif";
import sISUpdateScreen4 from "../assets/student-info-system-icons/SIS_Update_ Screen4.gif";

const FeesManagement = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <FeeManagementSection />
            <GetFreeDemo />
            <TakeChargeSection />
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

const FeeManagementSection = () => {
    return (
        <section className="relative overflow-hidden bg-white px-6 pt-15 md:px-10 lg:px-16">
            <div className="mx-auto max-w-[1400px] text-center">
                <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                    Fee Management Solutions
                </h1>

                <div className="mx-auto mt-4 h-[4px] w-[82px] rounded-full bg-sbBlue" />

                <p className="mx-auto mt-10 max-w-[1000px] font-primary text-[22px] font-semibold text-black leading-8">
                    Automate & Streamline with school fees payment app
                </p>

                <p className="mx-auto mt-4 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Simplify the fee management process and speed up collection with school fees payment app. A secure, efficient & hassle-free mechanism for fee scheduling, reminders, payment collection, receipt generation and bank reconciliation.
                </p>

                <p className="mx-auto mt-8 max-w-[1100px] font-primary font-extralight text-lg leading-8 text-sbTextLight">
                    Easy for parents, effortless for accountant, auditor and school management.
                </p>
            </div>
        </section>
    );
};

const GetFreeDemo = () => {
    return (
        <CommonButton
            label="Get a Free Demo"
            className="mt-10 flex !justify-center"
        />
    );
};


function TakeChargeSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const accordionItems = [
        {
            title: "Set custom fee structures",
            description:
                "Categorize and automate fee calculations factoring scholarships and discounts. Customize student fees and payment installments easily.",
            image: sISTemplatesScreen1
        },
        {
            title: "Send notifications & reminders",
            description: "Set pending fees-related reminders and notifications to parents. Enable timely collections.",
            image: sISCustomizeScreen2
        },
        {
            title: "Enable quick payment through loan and payment options",
            description: "Online Payment support for over 50+ banks & UPI apps integrated within SkoolBeep app. Loan Options also available.",
            image: sISParentModifyScreen3
        },
        {
            title: "Review real-time reports",
            description: "Real time summary, detailed reports, easy reminders, instant receipts, multiple accounts settlement to ensure effectiveness.",
            image: sISUpdateScreen4
        },
        {
            title: "Get ready for yearly audits",
            description: "Helps administrative staff in creating & managing internal documentation and records of all transactions. Payment reconciliation saves hours of manual audit work.",
            image: sISLifecycleScreen5
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-10 xl:px-12">
            <div className="pointer-events-none absolute -left-24 top-[360px] h-[520px] w-[260px] rounded-r-full bg-[#efe8f6] opacity-30" />

            <div className="mx-auto max-w-[1250px]">
                <div className="text-center">

                    <h2 className="text-[32px] font-semibold text-sbText leading-[40px]">
                        Take charge of your educational institution’s financial health
                    </h2>

                    <div className="mx-auto mt-6 h-[4px] w-[78px] rounded-full bg-[#4456d9]" />
                </div>

                <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-[1fr_0.95fr] lg:gap-8 xl:gap-10">
                    <div>
                        {accordionItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index}>
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="flex w-full items-start justify-between gap-6 py-3 text-left"
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


export default FeesManagement;