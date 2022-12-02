import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

//import { join } from 'node:path'
import { join } from 'path'
const inter = Inter({ subsets: ['latin'] })

import { Thumb } from '#/ui/thumb'
import {
  getOgImagePath,
  getOgImageUrl,
  getSortedPagesData,
  PageList
} from '#/lib/pages'

type Props = {
  titleImagePath: string
  titleImageUrl: string
  samples: { title: string; path: string; thumbPath: string }[]
}
export default function Home({
  titleImagePath,
  titleImageUrl,
  samples
}: Props) {
  return (
    <>
      <Head>
        <title>Marp で OGP 用の画像を生成</title>
        <meta
          name="description"
          content="Marp で OGP 用の画像を生成 - サンプルページの一覧"
        />
        <meta property="og:image" content={titleImageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Marp で OGP 用の画像を生成
            <br />
            <a href="https://zenn.dev/hankei6km/articles/generate-ogimage-by-using-marp">
              [詳細はこちら]
            </a>
          </p>
          <div>
            <a
              href="https://zenn.dev/hankei6km"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="https://github.com/hankei6km.png"
                alt="hankei6km avatar icon"
                className={styles.avatar}
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={titleImagePath}
            alt="Marp で OGP 用の画像を生成 - サンプルページの一覧"
            width={400}
            height={200}
            priority
          />
        </div>

        <div className={styles.grid}>
          {samples.map((s, i) => {
            return (
              <Thumb
                key={i}
                className={styles.card}
                title={s.title}
                path={s.path}
                thumbPath={s.thumbPath}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const ret: { props: Props } = {
    props: {
      titleImagePath: getOgImagePath('repo'),
      titleImageUrl: getOgImageUrl('repo'),
      samples: []
    }
  }
  const pageList = await getSortedPagesData()
  for (const p of pageList.samples) {
    ret.props.samples.push({
      path: join(pageList.samplesPath, p.name),
      title: p.title,
      thumbPath: p.ogImagePath
    })
  }
  return ret
}
