"use client";

import Image from "next/image";
import { useRef } from "react";

export default function QualityPage() {
    const ref = useRef<HTMLAnchorElement>(null);

    return (
        <div className="flex flex-col items-center p-10 space-y-4">
            <Image
                src="/example.jpg"
                alt="Quality Control"
                width={600}
                height={400}
                quality={30}
                className="rounded shadow"
            />
            <a
                ref={ref}
                href="/example.jpg?q=30"
                download="image-q30.jpg"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Download Low Quality
            </a>
        </div>
    );
}