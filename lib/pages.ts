import { siteServerSideConfig } from '#/src/site.server-side-config'
import nextConfig from '#/next.config'
const config = nextConfig()

import { readFile } from 'fs/promises'
import { join } from 'path'

export type Sample = { name: string; title: string }
export type Samples = Sample[]
export type PageList = {
  sourcePath: string
  samplesPath: string
  samples: {
    name: string
    title: string
    ogImagePath: string
    ogImageUrl: string
  }[]
}
export type SamplePageData = Sample & {
  source: string
  ogImagePath: string
  ogImageUrl: string
}

const ogImagePath = (() => '/ogimages')()
const sourcePath = (() => './md')()
const samplesPath = (() => 'samples')()

export function getOgImagePath(name: string): string {
  const assetPrefix = config.assetPrefix
  if (assetPrefix) {
    return `${join(assetPrefix, ogImagePath, name)}.png`
  }
  return `${join(ogImagePath, name)}.png`
}

export function getOgImageUrl(name: string): string {
  const pathName = getOgImagePath(name)
  if (siteServerSideConfig.baseUrl) {
    const url = new URL(siteServerSideConfig.baseUrl)
    url.pathname = pathName
    return url.toString()
  }
  return pathName
}

export async function getSortedPagesData(): Promise<PageList> {
  return {
    sourcePath,
    samplesPath,
    samples: siteServerSideConfig.samples.map(({ name, title }) => {
      return {
        name,
        title,
        ogImagePath: getOgImagePath(name),
        ogImageUrl: getOgImageUrl(name)
      }
    })
  }
}

export async function getSamplePageData(name: string): Promise<SamplePageData> {
  const idx = siteServerSideConfig.samples.findIndex((s) => s.name === name)
  if (idx < 0) {
    throw new Error(`${name} not found`)
  }
  const sourceFile = `${join(sourcePath, name)}.md`
  return {
    ...siteServerSideConfig.samples[idx],
    // 今回は読み込むだけで使わない(ソースを表示しようかと思ったが面倒なのでやめた)
    source: (await readFile(sourceFile)).toString('utf8'),
    ogImagePath: getOgImagePath(name),
    ogImageUrl: getOgImageUrl(name)
  }
}
