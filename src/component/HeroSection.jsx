import React from 'react';

const HeroSection = ({
    imgSrc,
    heightClasses = "h-auto sm:h-[360px] md:h-[450px] lg:h-[650px]"
}) => {
    return (
        <section className={`relative w-full overflow-hidden ${heightClasses}`}>
            <img
                src={imgSrc}
                alt="Hero Banner"
                className="w-full h-auto sm:absolute sm:inset-0 sm:h-full sm:object-cover"
            />
        </section>
    );
};

export default HeroSection;
