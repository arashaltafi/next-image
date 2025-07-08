import { Point } from 'framer-motion'
import React from 'react'
import Cropper, { Area } from 'react-easy-crop'

interface ImageCropProps {
    image: string,
    crop: Point,
    zoom?: number | undefined,
    aspect: number,
    maxZoom: number,
    minZoom: number,
    zoomWithScroll: boolean,
    showGrid: boolean,
    cropShape: 'rect' | 'round',
    zoomSpeed?: number | undefined,
    rotation?: number | undefined
    onZoomChange: React.Dispatch<React.SetStateAction<number>>,
    onCropChange: (location: Point) => void,
    onRotationChange?: ((rotation: number) => void) | undefined
    onCropComplete?: ((croppedArea: Area, croppedAreaPixels: Area) => void) | undefined
}

const ImageCropComponent = (props: ImageCropProps) => {
    return (
        <div>
            <Cropper
                image={props.image}
                crop={props.crop}
                zoom={props.zoom}
                minZoom={props.minZoom}
                maxZoom={props.maxZoom}
                aspect={props.aspect}
                zoomWithScroll={props.zoomWithScroll}
                showGrid={props.showGrid}
                cropShape={props.cropShape}
                zoomSpeed={props.zoomSpeed}
                rotation={props.rotation}
                onRotationChange={props.onRotationChange}
                onCropChange={props.onCropChange}
                onCropComplete={props.onCropComplete}
                onZoomChange={props.onZoomChange}
            />
        </div>
    )
}

export default ImageCropComponent