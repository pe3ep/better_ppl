import { useState } from 'react'
import Image from 'next/image'

interface BlurImageProps {
  src: string
  width: number
  height: number
  fit: any
  priority: boolean
}

function BlurImage({ src, width, height, fit, priority }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      alt=""
      src={src}
      width={width}
      height={height}
      objectFit={fit}
      className={`duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'}`}
      onLoadingComplete={() => setLoading(false)}
      priority={priority}
    />
  )
}

export default BlurImage
