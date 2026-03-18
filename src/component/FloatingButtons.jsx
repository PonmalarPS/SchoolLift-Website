import React from 'react';
import whatsapp from "../assets/home-icons/whatsapp.svg";
import callIcon from "../assets/home-icons/call-icon.svg";
import arrowTopIcon from "../assets/home-icons/arrow-top.svg";

const FloatingButtons = () => {
    return (
        <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50">

            {/* OUTER CAPSULE */}
            <div className="bg-white rounded-[60px] py-2 md:py-3.5 px-2 md:px-3 flex flex-col items-center gap-3 md:gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-gray-100">

                {/* CALL BUTTON */}
                <a
                    href="tel:+911234567890"
                    className="flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                    <img
                        src={callIcon}
                        alt="Call"
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                </a>

                {/* WHATSAPP BUTTON */}
                <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                    <img
                        src={whatsapp}
                        alt="Whatsapp"
                        className="w-8 h-8 md:w-10 md:h-10"
                    />
                </a>

            </div>
        </div>
    );
};

export default FloatingButtons;