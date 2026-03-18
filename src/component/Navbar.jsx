import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, User, Phone, LogIn } from "lucide-react";
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const [mobileSchoolMgmtOpen, setMobileSchoolMgmtOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "SOLUTIONS", path: "#", hasDropdown: true },
        { name: "ABOUT US", path: "/about" },
        { name: "CONTACT", path: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="App logo" className="h-9 md:h-11 object-contain" />
                </div>

                {/* Right Section (Desktop) */}
                <div className="flex items-center gap-10">
                    {/* Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-8 text-[15px] font-bold uppercase text-sbText">
                        {navLinks.filter(link => !link.hasDropdown || link.name === "SOLUTIONS").map((link) => {
                            if (link.name === "SOLUTIONS") {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => setOpenMenu(true)}
                                        onMouseLeave={() => setOpenMenu(false)}
                                    >
                                        <button
                                            type="button"
                                            className={`flex items-center gap-1 transition-colors duration-300 ${openMenu ? "text-[#9c1fad]" : "text-sbText hover:text-sbBlue"}`}
                                        >
                                            <span>SOLUTIONS</span>
                                            <ChevronDown
                                                size={18}
                                                strokeWidth={2.8}
                                                className={`transition-transform duration-200 ${openMenu ? "rotate-180 text-[#9c1fad]" : ""}`}
                                            />
                                        </button>

                                        {openMenu && (
                                            <>
                                                <div className="absolute left-0 right-0 top-full h-[15px] bg-transparent" />
                                                <div className="absolute left-1/2 top-[calc(100%+8px)] w-[560px] -translate-x-1/2 rounded-b-[20px] bg-white px-[50px] pb-[36px] pt-[34px] shadow-[0_18px_40px_rgba(201,119,210,0.28)]">
                                                    <div className="space-y-[34px]">
                                                        <Link to="/classroom" onClick={() => setOpenMenu(false)} className="block text-[16px] font-semibold text-[#23272f] hover:text-sbBlue transition-colors text-left uppercase">Classroom Solutions</Link>
                                                        <Link to="/homeLearning" onClick={() => setOpenMenu(false)} className="block text-[16px] font-semibold text-[#23272f] hover:text-sbBlue transition-colors text-left uppercase">Home Learning Solutions</Link>
                                                        <div className="text-left">
                                                            <Link to="/studentInformationSystem" onClick={() => setOpenMenu(false)} className="block text-[16px] font-semibold text-[#23272f] hover:text-sbBlue transition-colors uppercase">School Management Solutions</Link>
                                                            <div className="mt-[34px] space-y-[28px] pl-[40px]">
                                                                {schoolManagementItems.map((item, index) => {
                                                                    const routes = ["/studentInformationSystem", "/feeManagement", "/transport", "/parentCommunicationPortal", "/reportCardManagement", "/kinderSuite", "/k12Suite"];
                                                                    return (
                                                                        <Link key={item} to={routes[index]} onClick={() => setOpenMenu(false)} className="block text-[16px] font-normal text-[#23272f] hover:text-sbBlue transition-colors uppercase">{item}</Link>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <Link key={link.name} to={link.path} className="transition duration-300 hover:text-sbBlue">
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Buttons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-full bg-sbBlue px-6 py-2.5 text-[14px] font-extralight text-white transition duration-300 hover:bg-sbBlue/90">
                            <img src={userIcon} alt="User" className="h-4 w-4" />
                            Login
                        </button>
                        <a href="tel:+911234567890" className="flex items-center justify-center rounded-full bg-sbBlue p-2.5 text-white transition duration-300 hover:bg-sbBlue/90">
                            <img src={callIcon} alt="Call" className="h-5 w-5" />
                        </a>
                    </div>

                    {/* Hamburger Menu (Mobile/Tablet) */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMobileMenu} className="text-sbText p-2 focus:outline-none">
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-0 z-[60] transform lg:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu} />
                <div className="absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl flex flex-col p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-10">
                        <img src={logo} alt="App logo" className="h-9 object-contain" />
                        <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-sbBlue p-1">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-6 text-[15px] font-bold uppercase text-sbText overflow-y-auto flex-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col">
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                                            className="flex items-center justify-between text-left hover:text-sbBlue transition-colors group"
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {mobileSolutionsOpen && (
                                            <div className="mt-4 ml-4 flex flex-col gap-4 border-l border-gray-100 pl-4 animate-fadeIn">
                                                <Link to="/classroom" onClick={toggleMobileMenu} className="text-sm font-medium hover:text-sbBlue">CLASSROOM SOLUTIONS</Link>
                                                <Link to="/homeLearning" onClick={toggleMobileMenu} className="text-sm font-medium hover:text-sbBlue">HOME LEARNING SOLUTIONS</Link>
                                                <div className="flex flex-col gap-4">
                                                    <button
                                                        onClick={() => setMobileSchoolMgmtOpen(!mobileSchoolMgmtOpen)}
                                                        className="flex items-center justify-between text-sm font-medium hover:text-sbBlue transition-colors group"
                                                    >
                                                        <span>SCHOOL MANAGEMENT SOLUTIONS</span>
                                                        <ChevronDown
                                                            size={16}
                                                            className={`transition-transform duration-200 ${mobileSchoolMgmtOpen ? "rotate-180" : ""}`}
                                                        />
                                                    </button>
                                                    {mobileSchoolMgmtOpen && (
                                                        <div className="ml-4 flex flex-col gap-4 border-l border-gray-100 pl-4 animate-fadeIn">
                                                            {schoolManagementItems.map((item, index) => {
                                                                const routes = ["/studentInformationSystem", "/feeManagement", "/transport", "/parentCommunicationPortal", "/reportCardManagement", "/kinderSuite", "/k12Suite"];
                                                                return (
                                                                    <Link
                                                                        key={item}
                                                                        to={routes[index]}
                                                                        onClick={toggleMobileMenu}
                                                                        className="text-[13px] font-normal hover:text-sbBlue uppercase"
                                                                    >
                                                                        {item}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link to={link.path} onClick={toggleMobileMenu} className="hover:text-sbBlue transition-colors">
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
                        <button className="flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-full bg-sbBlue py-3 text-sm font-medium text-white transition duration-300 hover:bg-sbBlue/90 shadow-md shadow-sbBlue/20">
                            <User size={16} />
                            Login
                        </button>
                        <a href="tel:+911234567890" className="flex items-center justify-center rounded-full bg-sbBlue p-3 text-white transition duration-300 hover:bg-sbBlue/90 shadow-md shadow-sbBlue/20">
                            <Phone size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;