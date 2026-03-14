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
        <footer className="relative bg-sbBgLight pt-[40px] pb-[30px]">

            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-4 gap-[80px]">

                {/* COLUMN 1 */}
                <div>
                    <img
                        src={appLogo}  // your School Lift logo
                        alt="App Logo"
                        className="w-[190px] mb-6"
                    />

                    <p className="text-[16px] font-extralight leading-[30px] text-sbTextLight mb-8">
                        We are a technology company committed to helping schools deliver
                        exceptional learning outcomes through innovative and customizable solutions.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-5">
                        <img src={faceBook} className="w-10 h-10 object-contain" alt="Facebook" />
                        <img src={instagram} className="w-10 h-10 object-contain" alt="Instagram" />
                        <img src={twitterLogo} className="w-10 h-10 object-contain" alt="Twitter" />
                        <img src={linkedIn} className="w-10 h-10 object-contain" alt="LinkedIn" />
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div>
                    <p className="text-[17px] font-semibold mb-4">Solutions</p>

                    <ul className="space-y-3 text-[16px] font-extralight text-sbTextLight">
                        <li>Classroom Solutions</li>
                        <li>Home Learning Solutions</li>
                        <li>School Management Solutions</li>
                    </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                    <p className="text-[17px] font-semibold mb-4">Contact</p>

                    <ul className="space-y-3 text-[16px] font-extralight text-sbTextLight mb-10">
                        <li>080 4568 0808</li>
                        <li>support@schoollift.com</li>
                        <li>080 4568 0086</li>
                        <li>sales@schoollift.com</li>
                    </ul>

                    <p className="text-[17px] font-semibold mb-4">
                        CSR Partnership Contact
                    </p>

                    <ul className="space-y-3 text-[16px] text-sbTextLight font-extralight">
                        <li>080 4568 0360</li>
                        <li>partnerships@schoollift.com</li>
                    </ul>
                </div>

                {/* COLUMN 4 */}
                <div>
                    <p className="text-[17px] font-semibold mb-6">Download</p>

                    <div className="space-y-5">
                        <img
                            src={playStore}
                            alt="Google Play"
                            className="w-[160px]"
                        />
                        <img
                            src={appStore}
                            alt="App Store"
                            className="w-[160px]"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="border-t border-gray-200 mt-[70px] pt-6 text-start text-sbTextLight text-[16px] font-extralight">
                    © Copyrights 2026 All rights reserved.
                </div>
            </div>

            {/* Floating Buttons (Right Side) */}
            <div className="fixed right-6 bottom-28 z-50">
                <div className="w-[55px] h-[55px] bg-white border border-sbPurple/20 rounded-full flex items-center justify-center shadow-md">
                    <img src={arrowIcon} className="w-5 h-5 object-contain text-sbPurple" alt="Arrow" />
                </div>
            </div>

            <div className="fixed right-6 bottom-8 z-50">
                <div className="w-[70px] h-[70px] bg-[#1CC5C9] rounded-full flex items-center justify-center shadow-xl">
                    <MessageCircle className="text-white" />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
