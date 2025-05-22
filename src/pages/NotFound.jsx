// src/pages/NotFound.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/"), 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-6 text-center">
            {/* Large 404 */}
            <h1 className="text-[8rem] font-extrabold text-[#0047ab] drop-shadow-lg leading-none">
                404
            </h1>

            {/* Message */}
            <p className="text-2xl font-semibold text-gray-800 mt-2">
                Page Not Found
            </p>

            <p className="mt-3 text-gray-600 max-w-md">
                The page you are looking for doesn't exist or has been moved.
                You will be redirected to the homepage shortly.
            </p>

            {/* Button */}
            <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 bg-[#0047ab] text-white font-medium rounded-md hover:bg-blue-800 transition duration-300 cursor-pointer
                select-none"
            >
                Back to Home
            </button>
        </div>
    );
};

export default NotFound;
