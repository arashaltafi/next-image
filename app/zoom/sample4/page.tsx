"use client";

import { useState, useRef } from "react";

export default function ZoomPage() {
    const [backgroundPosition, setBackgroundPosition] = useState("center");
    const [zoom, setZoom] = useState("1");
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
        setZoom("1.5");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    setBackgroundPosition("center")
                    setZoom("1")
                }}
                className="w-[400px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg shadow-lg border-2 border-gray-300 cursor-crosshair"
                style={{
                    backgroundImage: `url('/image.jpg')`,
                    backgroundSize: "200%",
                    backgroundPosition,
                    zoom,
                }}
            />
        </div>
    );
}
