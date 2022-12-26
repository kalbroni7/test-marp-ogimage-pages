import { getBaseUrl } from '../utils/baseUrl'
type SiteServerSideConfig = {
  baseUrl: string
  samples: { name: string; title: string }[]
}

export const siteServerSideConfig: SiteServerSideConfig = (() => ({
  baseUrl: getBaseUrl(),
  samples: (() => [
    { name: 'simple01', title: '簡単なサンプル' },
    { name: 'class', title: 'class 名を変更' },
    { name: 'avatar', title: 'Avatar アイコンを配置' },
    { name: 'bgcolor', title: '背景色を調整する' },
    { name: 'image', title: '画像表示' },
    { name: 'bgimage', title: '背景画像(フレーム的な画像)' },
    { name: 'bgimage-filter', title: '背景画像(フィルター適用)' },
    { name: 'splitbg', title: '背景画像(分割表示)' },
    { name: 'bgimage-splitbg', title: '通常背景と分割表示' },
    { name: 'size', title: 'GitHub 用にサイズ指定' },
    { name: 'font', title: 'フォントをセリフ体へ変更' },
    { name: 'title-style', title: 'タイトルを傾ける' },
    { name: 'pie', title: '円グラグを表示(HTML + JavaScript)' }
  ])()
}))()
