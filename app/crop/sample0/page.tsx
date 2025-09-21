"use client";

import React, { useRef, useState, useEffect } from "react";
import ReactCrop, { Crop, PixelCrop, PercentCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function Sample0() {
    const [crop, setCrop] = useState<Crop>({
        unit: "%",
        x: 10,
        y: 10,
        width: 30,
        height: 30,
    });

    const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

    // Handle file upload
    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setImageSrc(reader.result as string)
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // Draw cropped image to canvas whenever completedCrop changes
    useEffect(() => {
        if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
            return;
        }

        const image = imgRef.current;
        const canvas = previewCanvasRef.current;
        const crop = completedCrop;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = crop.width;
        canvas.height = crop.height;

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
    }, [completedCrop]);

    // Download cropped image as PNG
    const downloadImage = () => {
        if (!previewCanvasRef.current) return;

        const link = document.createElement("a");
        link.download = "cropped.png";
        link.href = previewCanvasRef.current.toDataURL("image/png");
        link.click();
    };

    return (
        <div className="w-full min-h-screen p-10 bg-gray-900 flex flex-col gap-6 items-center">
            <h1 className="text-2xl font-bold text-white">React Image Crop Example</h1>

            {/* Upload */}
            <input
                className="cursor-pointer mt-6 text-lg bg-red-500 px-3 py-2 rounded-lg text-white"
                type="file"
                accept="image/*"
                onChange={onSelectFile}
            />

            {/* Cropper */}
            {imageSrc && (
                <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(pixelCrop /* ✅ first arg is PixelCrop */) => {
                        setCompletedCrop(pixelCrop);
                    }}
                    aspect={16 / 9}
                >
                    <img ref={imgRef} src={imageSrc} alt="Crop source" />
                </ReactCrop>
            )}

            {/* Preview */}
            {completedCrop && (
                <div className="mt-6 flex flex-col items-center gap-4">
                    <h2 className="text-lg font-semibold mb-2 text-white">
                        Cropped Preview
                    </h2>
                    <canvas
                        ref={previewCanvasRef}
                        style={{
                            border: "1px solid white",
                            objectFit: "contain",
                        }}
                    />
                    <button
                        onClick={downloadImage}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg"
                    >
                        Download Cropped Image
                    </button>
                </div>
            )}
        </div>
    );
}