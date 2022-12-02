import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '#/styles/Home.module.css'
import {
  getSamplePageData,
  getSortedPagesData,
  SamplePageData
} from '#/lib/pages'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Thumb } from '#/ui/thumb'

type Props = SamplePageData

export default function Sample(sample: Props) {
  return (
    <>
      <Head>
        <title>{`${sample.title} - Marp で OGP 用の画像を生成 - サンプル`}</title>
        <meta
          name="description"
          content={`${sample.title} - Marp で OGP 用の画像を生成 - サンプル`}
        />
        <meta property="og:image" content={sample.ogImageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Marp で OGP 用の画像を生成</h1>
        <p>
          <a href="https://zenn.dev/hankei6km/articles/generate-ogimage-by-using-marp">
            [詳細はこちら]
          </a>
        </p>
        <div className={styles.card}>
          <Image
            src={sample.ogImagePath}
            alt={sample.title}
            width={300}
            height={300}
            style={{ objectFit: 'contain' }}
          />
          <h2>{sample.title}</h2>
        </div>
        <Link href="../">[Home]</Link>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getSortedPagesData()).samples.map(({ name }) => ({
      params: {
        id: name
      }
    })),

    //fallback: process.env.STATIC_BUILD ? false : true
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const s = await getSamplePageData((context.params?.id as string) || '')
  return { props: s }
}
