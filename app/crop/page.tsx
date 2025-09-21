import Link from "next/link"

//npm i react-easy-crop
const ImageCrop = () => {
    return (
        <div className='flex flex-col gap-12 items-center justify-center w-full min-h-screen'>
            <Link href='/crop/sample0' className='text-3xl text-center'>Sample 0</Link>
            <Link href='/crop/sample1' className='text-3xl text-center'>Sample 1</Link>
            <Link href='/crop/sample2' className='text-3xl text-center'>Sample 2</Link>
            <Link href='/crop/sample3' className='text-3xl text-center'>Sample 3</Link>
        </div>
    )
}

export default ImageCrop