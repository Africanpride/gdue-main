/* eslint-disable @next/next/no-img-element */
import { bebas } from '@/config/fonts'
import React from 'react'

type Props = {}

const News = (props: Props) => {
  return (

    <div>
      <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-neutral-600">
        <span className={`${bebas.className} text-4xl`}>News</span>
      </div>
    </div>

  )
}

export default News