"use client";

import getCroppedImg from "@/app/getCroppedImg";
import { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";

export default function CropPage() {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [area, setArea] = useState<Area | null>(null);

    const onCropComplete = useCallback(
        (_: Area, cropped: Area) => setArea(cropped),
        []
    );

    const download = useCallback(async () => {
        if (!area) return;
        const blob = await getCroppedImg("/image.jpg", area);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "cropped.jpg";
        a.click();
    }, [area]);

    return (
        <div className="flex flex-col items-center p-10 space-y-4">
            <div className="relative w-80 h-80 bg-gray-200">
                <Cropper
                    image="/image.jpg"
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                />
            </div>
            <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-80"
            />
            <button
                onClick={download}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
                Export Cropped
            </button>
        </div>
    );
}