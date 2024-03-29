import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo
        title="LIANHE.ART 数字版权管理发行合作平台"
        description="联合音乐数字音乐制作上线合作平台，是由联合互娱（北京）文化有限公司出品的一款包含歌曲发行、歌曲制作、词曲销售、免费制作、歌曲推广、服务平台，歌曲上线覆盖国内外知名音乐平台：腾讯音乐集团QQ音乐、酷狗音乐、酷我音乐、网易云音乐、百度音乐、虾米音乐；以及国际知名音乐平台：AppleMusic苹果音乐、Spotify、谷歌音乐、亚马逊音乐、KKBOX、YOUTUBE、等二十余家，除此之外，平台提供音乐真实热度粉丝数据多维度查询，以及榜单监控，版税结算的服务，和免费申报ISRC国际标准音像制品编码，为致力于让音乐人往更好的方向发展，我们一直在努力"
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'LIANHEART,联合音乐,联合互娱,词曲销售,歌曲制作,数字发行,数字音乐,音乐发行,歌曲推广,歌曲入库,音乐入库,北京联合互娱,歌曲上线,音乐上线,全网上线平台,歌曲全网上线,原创音乐,音乐人,ISRC,isrc免费申请,腾讯音乐人,虾米音乐人,网易云音乐人,lianheart,art,lianhe.art,歌曲上线平台',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
