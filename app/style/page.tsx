"use client";
import { useRef, useState, useEffect } from "react";

export default function StyledImagePage() {
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [filter, setFilter] = useState("none");

    useEffect(() => {
        const img = imgRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!img || !canvas || !ctx) return;

        img.onload = () => draw();
        const draw = () => {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.filter = filter;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        };
        draw();
    }, [filter]);

    const exportImage = () => {
        const canvas = canvasRef.current!;
        canvas.toBlob((blob) => {
            if (!blob) return;
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `styled-${filter.replace(/[^a-z]/g, "") || "normal"}.png`;
            a.click();
        });
    };

    return (
        <div className="min-h-screen bg-gray-400 flex flex-col gap-8 items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6 text-indigo-800">
                🎨 Apply Filter & Export
            </h1>

            <div className="bg-white p-4 rounded-xl shadow-lg mb-6">
                <img
                    ref={imgRef}
                    src="/image.jpg"
                    alt="Preview"
                    className="max-w-md w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 shadow"
                    style={{ filter }}
                />
            </div>

            <div className="w-full max-w-md flex flex-col space-y-4 mb-6">
                <label className="font-medium text-gray-700">
                    Choose Filter:
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="mt-2 block w-full p-2 border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="none">Normal</option>
                        <option value="grayscale(100%)">Greyscale</option>
                        <option value="sepia(60%)">Sepia</option>
                        <option value="contrast(150%)">High Contrast</option>
                        <option value="saturate(200%)">High Saturation</option>
                        <option value="blur(2px)">Blur</option>
                    </select>
                </label>
            </div>

            <button
                onClick={exportImage}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7M16 3h-4m0 0V3a2 2 0 114 0v0zm-4 0H8"
                    />
                </svg>
                <span>Export as PNG</span>
            </button>

            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}