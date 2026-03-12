import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <main className="flex flex-col h-full py-40 items-center justify-center px-4 text-center bg-sbWhite">
            <h1 className="text-6xl font-extrabold text-sbBlue mb-4 font-heading">
                404
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sbText font-heading">
                Oops! Page Under Construction
            </h2>

            <p className="text-sbTextLight max-w-md mb-8">
                Sorry, the page you are looking for is either under construction or doesn't exist yet.
                Please check back soon or return to the homepage.
            </p>

            <Link
                to="/"
                className="inline-block px-8 py-3 bg-sbBlue text-white font-semibold rounded-full hover:bg-sbBlue/90 transition duration-300"
            >
                Go to Homepage
            </Link>
        </main>
    );
};

export default NotFoundPage;