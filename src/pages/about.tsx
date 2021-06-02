import { Layout } from '../components/Layout'
import { NextPage } from 'next'

const AboutPage: NextPage = () => (
  <Layout title="关于我们">
    <div className="md:container md:mx-auto">
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="relative py-8">
            <div>
              <h1 className="text-7xl my-8">关于我们</h1>
              <img src="/imgs/logo.svg" className="h-7 sm:h-8"  alt="LIANHEART Logo"/>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>
                  我们是，联合互娱（北京）文化有限公司旗下平台「LIANHEART」，我们是一家数字版权管理平台，更是一家强大的联合全球流媒体 48 小时快速上线的发行平台，面向国内全网音乐人为您提供，免费无任何限制的申请、全球免费音乐上线、免费国际 ISRC 条码，除了帮您快速上线国内外的 QQ 音乐、酷狗音乐、酷我音乐、网易云音乐、虾米音乐、Apple Music、iTune Store、Google Play、Spotify、JOOX…等等以外，还可以让音乐人获得这些音乐平台的收入，更重要的是，发行地区覆盖了全球200多个国家地区！让您的音乐急速传递至世界每一处。
                </p>

                <b>不止发行，全新思路，开拓词曲投售市场！</b>
                <p>
                  为音乐人赚到更多的钱，是促进音乐人专心创作以及输出更多优秀音乐的基础！所以我们想到了，词曲投售的功能便是能够让音乐人将自己创作的词曲便捷销售给我们，一经审核采用的即刻可获得词曲收益，音乐人更可通过平台签约我们获得保底的收益真正为音乐人实现，您专心创作，我们为您音乐道路保驾护航！
                </p>

                <b>摆脱传统唱片公司束缚，自己规划音乐道路！</b>

                <p>我们致力于，让每一首歌曲都获得被关注的机会，不管你是创作新人，独立乐团，只要是好音乐，都可以透过我们来为您发现音乐的新价值-联合音乐，您的音乐道路管家。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
