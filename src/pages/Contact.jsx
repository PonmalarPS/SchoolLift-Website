import React, { useRef, useState } from "react";
import ContactButton from "../component/ContactButton";
import {
    Users,
    Wallet,
    MessageCircle,
    ClipboardList,
    Bus,
    Boxes,
    ArrowUp,
    Mail,
} from "lucide-react";
import banner from "../assets/contact-icons/contact-banner.jpg";
import locationLogo from "../assets/contact-icons/location 1.svg";
import mailLogo from "../assets/contact-icons/mail 1.svg";
import phoneLogo from "../assets/contact-icons/phone 1.svg";
import phoneBlueLogo from "../assets/contact-icons/phone-blue.svg";
import timeLogo from "../assets/contact-icons/time 1.svg";
import callLogo from "../assets/contact-icons/whatsapp 1.svg";
import whatsappLogo from "../assets/contact-icons/whatsapp 11.svg";

const Contact = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <ContactSection />
            <ContactFormSection />
            <GetInTouch />
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner})` }}
            />
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="bg-white py-10 px-6">
            <div className="max-w-[1200px] mx-auto">

                {/* ===== Header ===== */}
                <div className="text-center mb-20">
                    <h2 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                        Contact Us
                    </h2>

                    <div className="w-16 h-[3px] bg-sbBlue mx-auto mt-5 rounded-full"></div>

                    <p className="mt-8 text-lg leading-8 text-sbTextLight max-w-4xl mx-auto font-light">
                        Whether you're looking for Classroom Solutions, Home Learning Solutions or to Digitize School
                        Operations, we can help. Reach out to us for a Demo or Custom Quote.
                    </p>
                </div>

                {/* ===== Cards ===== */}
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                    {/* ================= Talk to Sales ================= */}
                    <div className="relative bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-12 pt-20 pb-12 text-center flex flex-col">

                        {/* Floating Icon */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sbBgLight w-16 h-16 rounded-full flex items-center justify-center">
                            <img src={phoneLogo} alt="phone" className="w-8 h-8" />
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-2xl font-semibold text-sbText mb-6">
                                Talk to Sales
                            </h3>

                            <p className="text-lg leading-8 text-sbTextLight font-light max-w-xl mx-auto">
                                Want to know more about how SkoolBeep's solution can help your
                                unique needs? Just pick up the phone to connect with a member of
                                our sales team.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                            <ContactButton
                                label="Request Call Back"
                                showArrow={false}
                                className="!justify-start"
                            />

                            <ContactButton
                                label={
                                    <div className="flex items-center gap-3">
                                        <img src={phoneBlueLogo} alt="call" className="w-5 h-5" />
                                        080 4568 0086
                                    </div>
                                }
                                variant="outline"
                                showArrow={false}
                                className="!justify-start"
                            />
                        </div>
                    </div>

                    {/* ================= Customer Support ================= */}
                    <div className="relative bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] px-12 pt-20 pb-12 text-center flex flex-col">

                        {/* Floating Icon */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sbBgLight w-16 h-16 rounded-full flex items-center justify-center">
                            <img src={callLogo} alt="call" className="w-8 h-8" />
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-2xl font-semibold text-sbText mb-6">
                                Contact Customer Support
                            </h3>

                            <p className="text-lg leading-8 text-sbTextLight font-light max-w-xl mx-auto">
                                Need help with SkoolBeep? Contact our Customer Support team for
                                a quick solution.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                            <ContactButton
                                label="Chat with Support"
                                showArrow={false}
                                className="!justify-start"
                            />

                            <ContactButton
                                label={
                                    <div className="flex items-center gap-3">
                                        <img src={phoneBlueLogo} alt="call" className="w-5 h-5" />
                                        080 4568 0808
                                    </div>
                                }
                                variant="outline"
                                showArrow={false}
                                className="!justify-start"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ContactFormSection = () => {
    return (
        <section className="bg-white pb-10 px-6">
            <div className="max-w-[1250px] mx-auto grid lg:grid-cols-2 gap-14 items-stretch">
                {/* ================= LEFT SIDE ================= */}
                <ContactForm />

                {/* ================= RIGHT SIDE ================= */}
                <LocationSection />
            </div>
        </section>
    );
};

const ContactForm = () => {
    return (
        <div className="flex flex-col h-full text-left">
            <h2 className="font-heading font-bold text-[30px] leading-tight text-sbText pb-5">
                Send us a Message
            </h2>

            <p className="text-sbTextLight mb-5 text-lg font-light text-left">
                Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-8 flex-grow">

                {/* Input */}
                {[
                    "Your Name *",
                    "Your School Name *",
                    "Your School Location *",
                ].map((label, i) => (
                    <div key={i} className="mb-6">
                        <label className="block mb-2 text-sbText font-semibold text-[15px]">
                            {label}
                        </label>
                        <input
                            type="text"
                            className="w-full bg-[#ecf0f4] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sbBlue text-[15px]"
                            placeholder={`Enter ${label.replace(" *", "").toLowerCase()}`}
                        />
                    </div>
                ))}

                {/* Service Dropdown */}
                <div className="mb-6">
                    <label className="block mb-2 text-sbText font-semibold text-[15px]">
                        Service Interested In
                    </label>
                    <div className="relative">
                        <select className="w-full bg-[#ecf0f4] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none text-[15px] appearance-none cursor-pointer">
                            <option>Select Service Interested In</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-[#ecf0f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-sbText text-[15px]">
                        Your Email *
                    </label>
                    <input
                        type="email"
                        className="w-full bg-[#ecf0f4] border border-gray-200 rounded-lg px-4 py-3 text-[15px]"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Phone + Role */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block mb-2 text-sbText font-semibold text-[15px]">
                            Your Phone Number *
                        </label>
                        <input
                            type="text"
                            className="w-full bg-[#ecf0f4] border border-gray-200 rounded-lg px-4 py-3 text-[15px]"
                            placeholder="Enter phone number"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sbText font-semibold text-[15px]">
                            Role *
                        </label>
                        <div className="relative">
                            <select className="w-full bg-[#ecf0f4] border border-gray-200 rounded-lg px-4 py-3 text-[15px] appearance-none cursor-pointer">
                                <option>Select Role</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-[#ecf0f4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fake Recaptcha Box */}
                <div className="border rounded-lg p-4 flex items-center justify-between mb-8 bg-[#fafafa]">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border border-gray-400 rounded"></div>
                        <span className="text-sm text-gray-600">I'm not a robot</span>
                    </div>
                    <span className="text-xs text-gray-400">reCAPTCHA</span>
                </div>

                {/* Submit Button */}
                <ContactButton
                    label="Send Message"
                    showArrow={false}
                    className="w-full !py-4"
                />
            </div>
        </div>
    );
};

const LocationSection = () => {
    return (
        <div className="flex flex-col h-full text-left">
            <h2 className="font-heading font-bold text-[30px] leading-tight text-sbText pb-5">
                Visit Our Office
            </h2>

            <p className="text-sbTextLight mb-5 text-lg font-light text-left">
                Come visit us at our office in Bengaluru. We'd love to meet you in person!
            </p>

            {/* Office Card */}
            <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-8 mb-8 space-y-6">

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-sbBgLight flex items-center justify-center flex-shrink-0">
                        <img src={locationLogo} alt="location" className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-medium text-sbText text-[18px]">SkoolBeep</p>
                        <p className="text-sbTextLight font-light pt-3 text-[17px]">
                            Tangsys Technologies Pvt Ltd<br />
                            1585, 4th Floor, 20th Main Rd, Agara Village,<br />
                            1st Sector, HSR Layout, Bengaluru,<br />
                            Karnataka 560102, India
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-sbBgLight flex items-center justify-center flex-shrink-0">
                        <img src={phoneLogo} alt="phone" className="w-5 h-5" />
                    </div>
                    <a href="#" className="text-sbBlue underline font-light text-[17px]">
                        080 4568 0086
                    </a>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-sbBgLight flex items-center justify-center flex-shrink-0">
                        <img src={mailLogo} alt="mail" className="w-5 h-5" />
                    </div>
                    <a href="#" className="text-sbBlue underline font-light text-[17px]">
                        info@skoolbeep.com
                    </a>
                </div>

                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-sbBgLight flex items-center justify-center flex-shrink-0">
                        <img src={timeLogo} alt="time" className="w-5 h-5" />
                    </div>
                    <div className="text-sbTextLight font-light text-[17px]">
                        Monday - Friday : 9:00 AM - 5:30 PM IST<br />
                        Saturday : 9:00 AM - 4:00 PM IST
                    </div>
                </div>

            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex-grow min-h-[350px]">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?q=HSR%20Layout%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    );
};

const GetInTouch = () => {
    return (
        <section className="bg-white pb-10 px-6">
            <div className="max-w-[1250px] mx-auto">

                {/* ===== Heading ===== */}
                <h2 className="text-center mb-20 font-heading font-bold text-[30px] leading-tight text-sbText mx-auto">
                    Get in Touch
                </h2>

                {/* ===== Cards Grid ===== */}
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* ================= Call Us ================= */}
                    <div className="relative bg-white rounded-[26px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] px-10 pt-20 pb-14 text-center">

                        {/* Floating Icon */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sbBgLight w-16 h-16 rounded-full flex items-center justify-center">
                            <img src={phoneLogo} alt="call" className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-semibold text-sbText mb-10">
                            Call Us
                        </h3>

                        <div className="grid grid-cols-2 mb-6 text-center font-light text-sbTextLight text-lg">
                            <span>Sales</span>
                            <span>Support</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 px-2">
                            <ContactButton
                                label="08045680808"
                                variant="outline"
                                showArrow={false}
                            />

                            <ContactButton
                                label="08045680808"
                                variant="outline"
                                showArrow={false}
                            />
                        </div>
                    </div>

                    {/* ================= WhatsApp ================= */}
                    <div className="relative bg-white rounded-[26px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] px-10 pt-20 pb-14 text-center">

                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sbBgLight w-16 h-16 rounded-full flex items-center justify-center">
                            <img src={whatsappLogo} alt="call" className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-semibold text-sbText mb-10">
                            WhatsApp
                        </h3>

                        {/* Center aligned Sales / Support */}
                        <div className="grid grid-cols-2 mb-6 text-center font-light text-sbTextLight text-lg">
                            <span>Sales</span>
                            <span>Support</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 px-2">
                            <ContactButton
                                label="Chat Now"
                                variant="outline"
                                showArrow={false}
                            />

                            <ContactButton
                                label="Chat Now"
                                variant="outline"
                                showArrow={false}
                            />
                        </div>
                    </div>

                    {/* ================= Email ================= */}
                    <div className="relative bg-white rounded-[26px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] px-10 pt-20 pb-14 text-center">

                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sbBgLight w-16 h-16 rounded-full flex items-center justify-center">
                            <img src={mailLogo} alt="call" className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-semibold text-sbText mb-10">
                            Email
                        </h3>

                        <div className="grid grid-cols-[80px_1fr] gap-y-6 text-lg px-2">
                            {/* Sales Row */}
                            <span className="text-sbTextLight font-light text-lg">Sales</span>
                            <span className="text-sbBlue font-medium break-all text-lg">
                                sales@skoolbeep.com
                            </span>

                            {/* Support Row */}
                            <span className="text-sbTextLight font-light text-lg">Support</span>
                            <span className="text-sbBlue font-medium break-all text-lg">
                                support@skoolbeep.com
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;