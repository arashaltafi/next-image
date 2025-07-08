"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomPage() {
    return (
        <div className="flex justify-center p-10">
            <Zoom>
                <img
                    src="/example.jpg"
                    alt="Zoomable"
                    className="max-w-full h-auto rounded-lg shadow"
                />
            </Zoom>
        </div>
    );
}