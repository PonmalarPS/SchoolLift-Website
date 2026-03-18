import {
    MessageCircle
} from "lucide-react";
import appLogo from "../assets/home-icons/SkoolBeep-logo.png";
import faceBook from "../assets/home-icons/facebook.svg";
import instagram from "../assets/home-icons/instagram-icon.svg";
import twitterLogo from "../assets/home-icons/twitter-x.svg";
import linkedIn from "../assets/home-icons/linkedin.svg";
import whatsapp from "../assets/home-icons/whatsapp.svg";
import callIcon from "../assets/home-icons/call-icon.svg";
import arrowIcon from "../assets/home-icons/arrow-top.svg";
import appStore from "../assets/home-icons/appstore.svg";
import playStore from "../assets/home-icons/playstore.svg";

const Footer = () => {
    return (
        <footer className="relative bg-sbBgLight pt-10 md:pt-[40px] pb-8 md:pb-[30px]">

            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-[80px]">

                {/* COLUMN 1 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
                    <img
                        src={appLogo}  // your School Lift logo
                        alt="App Logo"
                        className="w-[160px] md:w-[190px] mb-6"
                    />

                    <p className="text-sm md:text-[16px] font-extralight leading-relaxed md:leading-[30px] text-sbTextLight mb-6 md:mb-8">
                        We are a technology company committed to helping schools deliver
                        exceptional learning outcomes through innovative and customizable solutions.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 md:gap-5 justify-center sm:justify-start">
                        {[faceBook, instagram, twitterLogo, linkedIn].map((icon, idx) => (
                            <div key={idx} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <img src={icon} className="w-6 h-6 object-contain" alt="Social Icon" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className="text-center sm:text-start">
                    <p className="text-[17px] font-semibold mb-4 md:mb-6">Solutions</p>

                    <ul className="space-y-3 text-sm md:text-[16px] font-extralight text-sbTextLight">
                        <li className="hover:text-sbBlue transition-colors cursor-pointer">Classroom Solutions</li>
                        <li className="hover:text-sbBlue transition-colors cursor-pointer">Home Learning Solutions</li>
                        <li className="hover:text-sbBlue transition-colors cursor-pointer">School Management Solutions</li>
                    </ul>
                </div>

                {/* COLUMN 3 */}
                <div className="text-center sm:text-start">
                    <p className="text-[17px] font-semibold mb-4 md:mb-6">Contact</p>

                    <ul className="space-y-3 text-sm md:text-[16px] font-extralight text-sbTextLight mb-8 md:mb-10">
                        <li>080 4568 0808</li>
                        <li>support@schoollift.com</li>
                        <li>080 4568 0086</li>
                        <li>sales@schoollift.com</li>
                    </ul>

                    <p className="text-[17px] font-semibold mb-4">
                        CSR Partnership Contact
                    </p>

                    <ul className="space-y-3 text-sm md:text-[16px] text-sbTextLight font-extralight">
                        <li>080 4568 0360</li>
                        <li>partnerships@schoollift.com</li>
                    </ul>
                </div>

                {/* COLUMN 4 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
                    <p className="text-[17px] font-semibold mb-6">Download</p>

                    <div className="flex flex-row sm:flex-col gap-4 md:gap-5">
                        <img
                            src={playStore}
                            alt="Google Play"
                            className="w-[115px] md:w-[130px] cursor-pointer"
                        />
                        <img
                            src={appStore}
                            alt="App Store"
                            className="w-[115px] md:w-[130px] cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="border-t border-gray-200 mt-12 md:mt-[70px] pt-6 text-center md:text-start text-sbTextLight text-sm md:text-[16px] font-extralight">
                    © Copyrights 2026 All rights reserved.
                </div>
            </div>

        </footer>
    );
};

export default Footer;
