import React from 'react'
import { bebas, playfair_display } from "@/config/fonts";
import { title } from '../components/primitives';


type Props = {
    title?: string | null;
}

const Divider = (props: Props) => {
  return (
    <div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
    <span className={`${bebas.className} text-2xl md:text-4xl`}>{props.title ?? 'title'}</span>
  </div>
  )
}

export default Divider