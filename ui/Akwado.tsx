import Image from 'next/image'
import React from 'react'

type Props = {}

const Akwado = (props: Props) => {
  return (
    <Image alt='Akwado Logo' src={'/images/logo.png'} width={90} height={90} className='' />
  )
}

export default Akwado