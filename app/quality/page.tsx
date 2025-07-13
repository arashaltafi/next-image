"use client";

import { useRef, useState, useEffect } from "react";

export default function ImageQualityPage() {
    const [quality, setQuality] = useState(80);
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Redraw canvas whenever quality or image loads
    useEffect(() => {
        const img = imgRef.current;
        const canvas = canvasRef.current;
        if (!img || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        img.onload = () => drawToCanvas();
        drawToCanvas();

        function drawToCanvas() {
            if (!img || !canvas || !ctx) return;

            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        }
    }, [quality]);

    const handleDownload = () => {
        const canvas = canvasRef.current!;
        canvas.toBlob((blob) => {
            if (!blob) return;
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `image-q${quality}.jpg`;
            a.click();
        }, "image/jpeg", quality / 100);
    };

    return (
        <div className="min-h-screen flex flex-col gap-8 items-center justify-center space-y-6 p-6 bg-gray-400">
            <h1 className="text-2xl font-semibold text-black">Adjust Image Quality</h1>

            <div>
                <img
                    ref={imgRef}
                    src="/image.jpg"
                    alt="Source"
                    className="max-w-xs rounded shadow-lg"
                />
            </div>

            <div className="w-full max-w-md flex items-center space-x-3 text-black">
                <label htmlFor="quality" className="font-medium">
                    Quality: {quality}%
                </label>
                <input
                    id="quality"
                    type="range"
                    min="1"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="flex-1"
                />
            </div>

            <div>
                <canvas ref={canvasRef} className="border rounded shadow-lg hidden"></canvas>
                <button
                    onClick={handleDownload}
                    className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Download JPEG @{quality}%
                </button>
            </div>
        </div>
    );
}