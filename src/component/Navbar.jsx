import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/home-icons/SkoolBeep-logo.png";
import callIcon from "../assets/home-icons/call.svg";
import userIcon from "../assets/home-icons/user.svg";

const schoolManagementItems = [
    "Student Information System",
    "Fee Management",
    "Transport Management",
    "Parent Communication Portal",
    "Report Card Management",
    "Kinder Suite",
    "K-12 Suite"
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="App logo" className="h-11 object-contain" />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-10">
                    {/* Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-8 text-[15px] font-bold uppercase text-sbText">
                        <Link to="/" className="transition duration-300 hover:text-sbBlue">
                            Home
                        </Link>

                        {/* Solutions Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenMenu(true)}
                            onMouseLeave={() => setOpenMenu(false)}
                        >
                            <button
                                type="button"
                                onClick={() => setOpenMenu((prev) => !prev)}
                                className={`flex items-center gap-1 transition-colors duration-300 ${openMenu ? "text-[#9c1fad]" : "text-sbText hover:text-sbBlue"
                                    }`}
                            >
                                <span>SOLUTIONS</span>
                                <ChevronDown
                                    size={18}
                                    strokeWidth={2.8}
                                    className={`transition-transform duration-200 ${openMenu ? "rotate-180 text-[#9c1fad]" : ""
                                        }`}
                                />
                            </button>

                            {openMenu && (
                                <>
                                    {/* Invisible bridge to prevent onMouseLeave when moving from button to menu */}
                                    <div className="absolute left-0 right-0 top-full h-[15px] bg-transparent" />

                                    <div className="absolute left-1/2 top-[calc(100%+8px)] w-[560px] -translate-x-1/2 rounded-b-[20px] bg-white px-[50px] pb-[36px] pt-[34px] shadow-[0_18px_40px_rgba(201,119,210,0.28)]">
                                        <div className="space-y-[34px]">
                                            <Link
                                                to="/classroom"
                                                onClick={() => setOpenMenu(false)}
                                                className="block text-[16px] font-semibold leading-[1.2] text-[#23272f] hover:text-sbBlue transition-colors"
                                            >
                                                Classroom Solutions
                                            </Link>

                                            <Link
                                                to="/homeLearning"
                                                onClick={() => setOpenMenu(false)}
                                                className="block text-[16px] font-semibold leading-[1.2] text-[#23272f] hover:text-sbBlue transition-colors"
                                            >
                                                Home Learning Solutions
                                            </Link>

                                            <div>
                                                <Link
                                                    to="/studentInformationSystem"
                                                    onClick={() => setOpenMenu(false)}
                                                    className="block text-[16px] font-semibold leading-[1.2] text-[#23272f] hover:text-sbBlue transition-colors"
                                                >
                                                    School Management Solutions
                                                </Link>

                                                <div className="mt-[34px] space-y-[28px] pl-[40px]">
                                                    {schoolManagementItems.map((item, index) => {
                                                        const routes = [
                                                            "/studentInformationSystem",
                                                            "/feeManagement",
                                                            "/transport",
                                                            "/parentCommunicationPortal",
                                                            "/reportCardManagement",
                                                            "/kinderSuite",
                                                            "/k12Suite",
                                                        ];

                                                        return (
                                                            <Link
                                                                key={item}
                                                                to={routes[index]}
                                                                onClick={() => setOpenMenu(false)}
                                                                className="block text-[16px] font-normal leading-[1.35] text-[#23272f] hover:text-sbBlue transition-colors"
                                                            >
                                                                {item}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <Link
                            to="/about"
                            className="transition duration-300 hover:text-sbBlue"
                        >
                            About Us
                        </Link>

                        <Link
                            to="/contact"
                            className="transition duration-300 hover:text-sbBlue"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-full bg-sbBlue px-6 py-2.5 text-[14px] font-extralight text-white transition duration-300 hover:bg-sbBlue/90">
                            <img src={userIcon} alt="User" className="h-4 w-4" />
                            Login
                        </button>

                        <a
                            href="tel:+911234567890"
                            className="flex items-center justify-center rounded-full bg-sbBlue p-2.5 text-white transition duration-300 hover:bg-sbBlue/90"
                        >
                            <img src={callIcon} alt="Call" className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;