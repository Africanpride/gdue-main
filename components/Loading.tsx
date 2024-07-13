import { bebas } from '@/config/fonts'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen min-h-dvh z-50'>
            <div className='flex items-center gap-x-2'>
                <div className={`${bebas.className} dark:text-white text-xl`}>Loading... </div>
                <div className="ripple"></div>
            </div>
        </div>
    )
}

export default Loading