"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import React from 'react'

const Sample1 = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center p-10 bg-gray-400">
            <Zoom>
                <img
                    src="/image.jpg"
                    alt="Zoomable"
                    className="max-w-full h-auto rounded-lg shadow"
                />
            </Zoom>
        </div>
    );
}

export default Sample1