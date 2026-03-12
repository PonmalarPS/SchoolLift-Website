import React from 'react';

const ContactButton = ({ label, className = "", onClick, showArrow = true, variant = "primary" }) => {
    const baseStyles = "px-6 py-2.5 rounded-[14px] text-[16px] font-medium flex items-center gap-3 transition duration-300 cursor-pointer shadow-sb hover:shadow-sbHover";
    const variants = {
        primary: "bg-sbBlue hover:bg-sbBlue/90 text-white",
        outline: "bg-transparent border border-sbBlue text-sbBlue hover:bg-sbBlue hover:text-white"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
        >
            <div className="flex items-center justify-center gap-2 w-full text-center">
                {label}
                {showArrow && <span className="text-2xl">→</span>}
            </div>
        </button>
    );
};

export default ContactButton;
