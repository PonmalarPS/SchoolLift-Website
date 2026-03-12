import React from 'react';

const CommonButton = ({ label, className = "", onClick, showArrow = true, variant = "primary" }) => {
    const baseStyles = "px-8 py-2.5 rounded-full text-[16px] font-medium flex items-center gap-3 transition duration-300 cursor-pointer shadow-sb hover:shadow-sbHover";
    const variants = {
        primary: "bg-sbBlue hover:bg-sbBlue/90 text-white",
        outline: "bg-transparent border border-sbBlue text-sbBlue hover:bg-sbBlue hover:text-white"
    };

    return (
        <div className={`flex justify-center ${className}`}>
            <button
                onClick={onClick}
                className={`${baseStyles} ${variants[variant] || variants.primary}`}
            >
                {label}
                {showArrow && <span className="text-2xl">→</span>}
            </button>
        </div>
    );
};

export default CommonButton;
