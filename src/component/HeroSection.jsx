import React from 'react';

const HeroSection = ({
    imgSrc,
    heightClasses = "h-[220px] sm:h-[320px] md:h-[450px] lg:h-[650px]"
}) => {
    return (
        <section className={`relative w-full overflow-hidden ${heightClasses}`}>
            <img
                src={imgSrc}
                alt="Hero Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </section>
    );
};

export default HeroSection;
