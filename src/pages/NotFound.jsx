
import React from "react";
import {Link, useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigateTo = useNavigate();

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 class="text-5xl font-bold">Error 404</h1>
            <div class="text-5xl font-bold">Page not found</div>
        </div>
    );
}

export default NotFound;
