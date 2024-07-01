import React from 'react'

type Props = {}

const IDCard = (props: Props) => {
  return (
    <div className='bg-green-500 w-1/2'>
        <div className='w-1/4 bg-yellow-500'>Image</div>
        <div className='w-3/4 bg-red-500'>data</div>
    </div>
  )
}

export default IDCard