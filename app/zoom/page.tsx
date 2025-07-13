import Link from "next/link"

const ZoomPage = () => {
    return (
        <div className='flex flex-col gap-12 items-center justify-center w-full min-h-screen'>
            <Link href='/zoom/sample1' className='text-3xl text-center'>Sample 1</Link>
            <Link href='/zoom/sample2' className='text-3xl text-center'>Sample 2</Link>
            <Link href='/zoom/sample3' className='text-3xl text-center'>Sample 3</Link>
        </div>
    )
}

export default ZoomPage