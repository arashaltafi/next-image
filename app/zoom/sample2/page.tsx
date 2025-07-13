"use client";

import React from 'react'
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const Sample2 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <div className="bg-white p-4 rounded-xl shadow-lg">
                <InnerImageZoom
                    src="/image.jpg"
                    zoomSrc="/image.jpg"
                    width={500}
                    height={400}
                    zoomScale={1.5}
                    zoomType="hover"
                    moveType="drag"
                    fadeDuration={200}
                    imgAttributes={{
                        className: "rounded-lg shadow-md",
                        alt: "Zoomable image",
                    }}
                />
            </div>
        </div>
    );
}

export default Sample2