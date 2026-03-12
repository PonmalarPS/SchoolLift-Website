import React, { useRef, useState } from "react";
import CommonButton from "../component/CommonButton";
import {
    Users,
    Wallet,
    MessageCircle,
    ClipboardList,
    Bus,
    Boxes,
    ArrowUp,
    Mail,
    Linkedin
} from "lucide-react";
import banner from "../assets/about-icons/about-page-banner.jpg";
import visionImage from "../assets/about-icons/our-vison-bg.jpg";
import ov1Logo from "../assets/about-icons/ov-1.svg";
import ov2Logo from "../assets/about-icons/ov-2.svg";
import ov3Logo from "../assets/about-icons/ov-3.svg";
import ov4Logo from "../assets/about-icons/ov-4.svg";
import ov5Logo from "../assets/about-icons/ov-5.svg";
import ov6Logo from "../assets/about-icons/ov-6.svg";
import happyLogo from "../assets/about-icons/happy.svg";
import problemSolveIcon from "../assets/about-icons/problem-solve.svg";
import webinarIcon from "../assets/about-icons/webinar.svg";
import worldIcon from "../assets/about-icons/world-globe.svg";

const journeyData = [
    {
        year: "2015",
        text: "Idea/Prototype",
    },
    {
        year: "2016",
        text: "Communication platform launched for preschools in Bangalore."
    },
    {
        year: "2018",
        text: "Communication platform launched for k-12 schools. Service expanded to Karnataka, Tamil Nadu and Kerala.",
    },
    {
        year: "2019",
        text: "Launch of ERP/School Operation modules.",
    },
    {
        year: "2020",
        text: "Launch of Home Learning Solutions.",
    },
    {
        year: "2023",
        text: "Launch of Classroom Solutions.",
    },
];

const AboutUs = () => {
    return (
        <div className="font-primary bg-white text-sbText">
            <HeroSection />
            <AboutSection />
            <VisionSection />
            <JourneySection />
            <OurValuesSection />
            <OurTeamSection />
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

const AboutSection = () => {
    return (
        <section className="bg-sbBgLight py-15 px-6 text-center">

            {/* Main Heading */}
            <h1 className="font-heading font-bold text-[40px] leading-tight text-sbText mx-auto">
                Enabling equitable access to high-quality education
            </h1>

            {/* Blue Divider */}
            <div className="w-16 h-[3px] bg-sbBlueDark mx-auto mt-6 mb-14 rounded-full"></div>

            {/* About Title */}
            <p className="font-bold text-[30px] text-sbText mb-4">
                About SkoolBeep
            </p>

            {/* About Paragraph */}
            <p className="font-primary font-extralight text-lg leading-8 text-sbTextLight max-w-4xl mx-auto">
                We are an edtech company building solutions that empower schools & teachers,
                make the learning process enjoyable for students and enable parental
                aspirations. We strive to break the digital divide in the Indian school
                education system and create a brighter future for all children
                irrespective of their background.
            </p>

            {/* What We Do */}
            <p className="font-bold text-[30px] text-sbText mb-4 mt-16">
                What We Do
            </p>

            <p className="font-primary font-extralight text-lg leading-8 text-sbTextLight max-w-4xl mx-auto mb-6">
                SkoolBeep is a trusted technology partner offering high-quality,
                affordable and scalable solutions to schools across India. As a company,
                we are equally passionate about education and technology. Our solutions
                can empower teachers, enhance learning experiences for students, keep
                parents involved, and help Indian schools become future-ready.
            </p>

            <p className="font-primary font-extralight text-lg leading-8 text-sbTextLight max-w-4xl mx-auto mb-6">
                SkoolBeep has a whole range of technology solutions that revolutionize
                every aspect of running a school from integrated classroom solutions to
                home learning solutions and school management software.
            </p>

            <p className="font-primary font-extralight text-lg leading-8 text-sbTextLight max-w-4xl mx-auto">
                In our journey of 10 years, we have constantly invested in developing new
                solutions and advancing our existing offerings to support the schools
                we've partnered with. We aspire to build long-term relationships with
                schools and become a trusted one-stop technology partner enabling Indian
                schools to become vibrant, world-class learning centers of excellence.
            </p>

            <CommonButton
                label="Get in Touch"
                className="mt-14"
            />

        </section>
    );
};

const VisionSection = () => {
    const visionPoints = [
        {
            icon: worldIcon,
            text: "Build world-class technology solutions",
        },
        {
            icon: problemSolveIcon,
            text: "Personalized, stress-free and effective learning options",
        },
        {
            icon: happyLogo,
            text: "Partner with schools to make technology-fuelled education affordable and accessible",
        },
        {
            icon: webinarIcon,
            text: "Equitable access to high-quality education anywhere",
        }
    ];

    return (
        <section
            className="relative py-14 px-6 bg-cover bg-center text-center"
            style={{ backgroundImage: `url(${visionImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Heading */}
                <h1 className="font-heading text-4xl md:text-4xl text-sbWhite">
                    Our Vision
                </h1>

                {/* Underline */}
                <div className="w-14 h-[3px] bg-sbWhite mx-auto mt-4 mb-8 rounded-full"></div>

                {/* Quote */}
                <p className="font-primary font-extralight text-xl/[30px] md:text-xl/[30px] text-sbWhite/90 max-w-5xl mx-auto mb-10 tracking-wide">
                    "Provide equal opportunity to realize the unfulfilled aspirations of
                    the under-served students of Bharat."
                </p>

                {/* Vision Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {visionPoints.map((item, index) => (
                        <div
                            key={index}
                            className="bg-sbWhite/95 rounded-sbXl shadow-sb p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-sbHover hover:-translate-y-1"
                        >
                            <img
                                src={item.icon}
                                alt="vision icon"
                                className="w-13 h-13 mb-4 object-contain"
                            />

                            <p className="font-primary font-thin text-[16px] text-sbTextLight leading-7">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const JourneySection = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);

        const container = scrollRef.current;
        const card = container.children[index];

        container.scrollTo({
            left:
                card.offsetLeft -
                container.offsetWidth / 2 +
                card.offsetWidth / 2,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative py-15 bg-sbWhite overflow-hidden">

            {/* Content Wrapper */}
            <div className="relative z-10">

                {/* Heading */}
                <div className="text-center mb-10 px-6">
                    <h2 className="font-bold font-heading text-3xl text-sbText">
                        Our Journey so far
                    </h2>
                    <div className="w-16 h-[3px] bg-sbBlueDark mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto px-10 py-7 scroll-smooth snap-x snap-mandatory no-scrollbar"
                >
                    {journeyData.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                className="
                                    group
                                    cursor-pointer
                                    snap-center
                                    min-w-[280px]
                                    max-w-[280px]
                                    p-6
                                    rounded-sbXl
                                    transition-all duration-500
                                    bg-sbPurpleLight border border-sbPurple/20 text-sbText
                                    hover:bg-gradient-to-br hover:from-sbPurple hover:to-sbAccentPurple hover:text-sbWhite hover:shadow-sbHover hover:scale-105
                                "
                            >
                                {/* Year Badge */}
                                <div
                                    className="
                                        inline-block
                                        px-6 py-2
                                        rounded-sbLg
                                        text-[18px]
                                        font-primary
                                        font-semibold
                                        mb-3
                                        leading-7
                                        bg-sbPurple/20 text-sbPurpleDark
                                        group-hover:bg-sbWhite/20 group-hover:text-sbWhite
                                        transition-colors duration-300
                                    "
                                >
                                    {item.year}
                                </div>

                                {/* Text */}
                                <p className="font-primary text-sbTextLight group-hover:text-sbWhite font-thin text-[16px] leading-7 transition-colors duration-300">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const OurValuesSection = () => {
    const values = [
        {
            icon: ov1Logo,
            title: "Better Together",
            desc: "Teamwork, trust and positivity help us succeed together",
        },
        {
            icon: ov2Logo,
            title: "Equal Opportunity",
            desc: "Experienced, time-tested edtech company with a clear understanding of Indian schools.",
        },
        {
            icon: ov3Logo,
            title: "Excellence",
            desc: "We take great pride in our work and pursue excellence in everything we do",
        },
        {
            icon: ov4Logo,
            title: "Transparency",
            desc: "We are open, honest, and straightforward in all our communications.",
        },
        {
            icon: ov5Logo,
            title: "Persistence",
            desc: "We are responsible and accountable to everyone who has placed their trust in us.",
        },
        {
            icon: ov6Logo,
            title: "Recognition",
            desc: "We understand the motivational power of recognition and give credit where due.",
        },
    ];

    return (
        <section className="bg-sbWhite pb-15">

            {/* Heading */}
            <div className="text-center mb-10 px-6">
                <h2 className="font-bold font-heading text-3xl text-sbText">
                    Our Values
                </h2>

                <div className="w-16 h-[3px] bg-sbBlueDark mx-auto mt-4 rounded-full"></div>

                <p className="mt-6 font-primary font-extralight text-base leading-7 text-sbTextLight max-w-4xl mx-auto">
                    They serve as a compass guiding who we are, how we work, and what we’re focused on next.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-[1300px] mx-auto px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-18 gap-x-16">

                {values.map((item, index) => (
                    <div
                        key={index}
                        className="group text-center transition-all duration-300"
                    >
                        {/* Icon Circle */}
                        <div className="
              w-[120px] h-[120px] mx-auto rounded-full
              bg-sbPurpleLight
              flex items-center justify-center
              mb-8
              transition-all duration-300
              group-hover:bg-sbPurple/20
              group-hover:-translate-y-2
              group-hover:shadow-lg
            ">

                            <img
                                src={item.icon}
                                alt={item.title}
                                className="
                  w-[50px] h-[50px] object-contain
                  transition-transform duration-300
                  group-hover:scale-110
                "
                            />

                        </div>

                        {/* Title */}
                        <p className="
              text-[17px] font-semibold text-sbText mb-5
              transition-colors duration-300
              group-hover:text-sbPurpleDark
            ">
                            {item.title}
                        </p>

                        {/* Description */}
                        <p className="font-primary font-extralight text-base leading-7 text-sbTextLight max-w-4xl mx-auto">
                            {item.desc}
                        </p>

                    </div>
                ))}

            </div>
        </section>
    );
};

const OurTeamSection = () => {
    const leaders = [
        {
            name: "Anurag Gopinath",
            role: "CO-FOUNDER & CEO",
            img: "https://www.skoolbeep.com/new/images/team/Anurag.jpg",
            email: "#",
            linkedin: "#",
        },
        {
            name: "Prasanna Kaliamoorthy",
            role: "CO-FOUNDER & COO",
            img: "https://www.skoolbeep.com/new/images/team/Prasanna.jpg",
            email: "#",
            linkedin: "#",
        },
    ];

    const advisors = [
        {
            name: "Rajesh Rege",
            img: "https://www.skoolbeep.com/new/images/team/Rajesh.jpg",
        },
        {
            name: "Ponnappa PG",
            img: "https://www.skoolbeep.com/new/images/team/Ponnappa.jpg",
        },
    ];

    return (
        <section className="bg-sbWhite">
            {/* Header */}
            <div className="text-center pt-12 pb-14 px-6">
                <h2 className="font-bold font-heading text-3xl text-sbText">
                    Our Team
                </h2>

                <div className="w-16 h-[3px] bg-sbBlueDark mx-auto mt-4 rounded-full" />

                <p className="mt-6 font-primary font-extralight text-base leading-7 text-sbTextLight max-w-4xl mx-auto">
                    We’re a team of purpose-driven individuals on a collective mission to
                    transform the future of Indian school education.
                </p>
            </div>

            {/* Blue Section */}
            <div className="bg-sbBlue pt-16 pb-20 px-6">
                <div className="max-w-[1100px] mx-auto space-y-12">

                    {/* ================= TOP ROW ================= */}
                    <div className="grid lg:grid-cols-3 gap-8 items-stretch">

                        {/* Leadership Cards */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                            {leaders.map((member, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-[16px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-white">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-6 z-10">
                                            <a
                                                href={member.email}
                                                className="bg-white p-2.5 rounded-full hover:scale-110 transition"
                                            >
                                                <Mail className="w-4 h-4 text-sbBlue" />
                                            </a>
                                            <a
                                                href={member.linkedin}
                                                className="bg-white p-2.5 rounded-full hover:scale-110 transition"
                                            >
                                                <Linkedin className="w-4 h-4 text-sbBlue" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="py-5 px-5 text-center">
                                        <p className="text-[17px] font-semibold text-sbText">
                                            {member.name}
                                        </p>
                                        <p className="text-[13px] font-light text-sbTextLight mt-1 tracking-wide">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Leadership Label */}
                        <div className="flex items-center justify-center rounded-[16px] bg-white/10 backdrop-blur-md text-white text-[27px] font-medium font-heading">
                            Leadership
                        </div>
                    </div>

                    {/* ================= BOTTOM ROW ================= */}
                    <div className="grid lg:grid-cols-3 gap-8 items-stretch">

                        {/* Board Label */}
                        <div className="flex items-center justify-center rounded-[16px] bg-white/10 backdrop-blur-md text-white text-[27px] font-medium font-heading">
                            Board of Advisors
                        </div>

                        {/* Advisor Cards */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                            {advisors.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-[16px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-white">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="py-5 px-5 text-center">
                                        <p className="text-[17px] font-semibold text-sbText">
                                            {member.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;