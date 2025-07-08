"use client";

import { useRef, useState } from "react";

export default function StylePage() {
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [filter, setFilter] = useState("grayscale(0%)");

    const applyAndExport = () => {
        const img = imgRef.current!;
        const canvas = canvasRef.current!;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.filter = filter;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob!);
            a.download = "styled-image.png";
            a.click();
        });
    };

    return (
        <div className="flex flex-col items-center p-10 space-y-4">
            <img
                ref={imgRef}
                src="/example.jpg"
                alt="To style"
                className="rounded shadow"
                style={{ filter }}
            />
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border rounded p-2"
            >
                <option value="none">Normal</option>
                <option value="grayscale(100%)">Greyscale</option>
                <option value="sepia(60%)">Sepia</option>
                <option value="contrast(150%)">High Contrast</option>
            </select>
            <button
                onClick={applyAndExport}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                Export Styled Image
            </button>
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}