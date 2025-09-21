"use client";

import React from "react";
import ReactImageMagnify from "react-image-magnify";

const Sample0 = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center p-10 bg-gray-400">
            <div className="w-[400px]">
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: "Sample product image",
                            isFluidWidth: true,
                            src: "/image.jpg", // put your image in /public/image.jpg
                        },
                        largeImage: {
                            src: "/image.jpg",
                            width: 1200,
                            height: 1800,
                        },
                        enlargedImageContainerDimensions: {
                            width: "150%",
                            height: "150%",
                        },
                        isHintEnabled: true, // shows hint when hovering
                    }}
                />
            </div>
        </div>
    );
};

export default Sample0;