import Link from 'next/link'
import Image from 'next/image'

export const Thumb = ({
  path,
  title,
  thumbPath,
  className
}: {
  path: string
  title: string
  thumbPath: string
  className?: string | undefined
}) => {
  return (
    <Link href={path} className={className}>
      <Image
        src={thumbPath}
        alt={'test'}
        width={200}
        height={200}
        style={{ objectFit: 'contain' }}
      />
      <h2>{title}</h2>
    </Link>
  )
}
