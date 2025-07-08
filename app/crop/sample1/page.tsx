"use client"

import React, { useState } from 'react'
import ImageCropComponent from '@/components/ImageCropComponent'
import { Area } from 'react-easy-crop'
import getCroppedImg from '@/components/CropImage'

const ImageCrop1 = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
    const [cropImage, setCropImage] = useState<any>(null)
    const image = 'https://arashaltafi.ir/arash.jpg'

    const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                image,
                croppedAreaPixels,
                rotation
            )
            setCropImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className='flex flex-col gap-32 items-center justify-center'>
            <button
                className='w-full bg-red-500 text-white font-bold py-2 px-4 rounded'
                onClick={showCroppedImage}
            >
                Show Result
            </button>

            {
                cropImage &&
                <img src={cropImage} alt="Cropped" className='size-20' />
            }

            <div className='w-full h-96 relative'>
                <ImageCropComponent
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    minZoom={1}
                    maxZoom={10}
                    aspect={4 / 3}
                    zoomWithScroll={true}
                    showGrid={false}
                    cropShape='rect'
                    zoomSpeed={0.1}
                    rotation={rotation}
                    onRotationChange={setRotation}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
        </div>
    )
}

export default ImageCrop1