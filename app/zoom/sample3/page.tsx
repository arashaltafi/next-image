"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from 'react'

const Sample3 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={3}
                wheel={{ step: 0.1 }}
                doubleClick={{ mode: "zoomIn", step: 0.5 }}
                pinch={{ step: 5 }}
            >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <div className="flex flex-col items-center space-y-4">
                        <div className="bg-white p-4 rounded-xl shadow-lg">
                            <TransformComponent>
                                <img
                                    src="/image.jpg"
                                    alt="Zoomable"
                                    className="max-w-md rounded-md shadow-md"
                                />
                            </TransformComponent>
                        </div>

                        <div className="flex space-x-2">
                            <button
                                onClick={() => zoomIn()}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Zoom In
                            </button>
                            <button
                                onClick={() => zoomOut()}
                                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                Zoom Out
                            </button>
                            <button
                                onClick={() => resetTransform()}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                )}
            </TransformWrapper>
        </div>
    );
}

export default Sample3