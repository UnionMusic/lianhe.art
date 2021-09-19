import { Layout } from '../components/Layout'
import { NextPage } from 'next'

const AboutPage: NextPage = () => (
  <Layout title="关于我们 - LIANHE.ART 联合音乐 数字版权管理发行合作平台" description="LIANHE.ART(联合音乐)是联合互娱(北京)文化有限公司旗下一款数字音乐版权综合服务平台，提供音乐发行上线、音乐营销与推广、词曲销售、版权保护与维权、版权结算、音乐数据监测分析等一套综合性的版权发行管理解决方案，LIANHEART你的音乐管家。">
    <div className="md:container md:mx-auto">
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="relative py-8">
            <div>
              <h1 className="text-7xl my-8">关于我们</h1>
              <img src="/imgs/logo.svg" className="h-7 sm:h-8" alt="LIANHEART Logo" />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <p>
                  LIANHE.ART(联合音乐)是联合互娱(北京)文化有限公司旗下一款数字音乐版权综合服务平台，提供音乐发行上线、音乐营销与推广、词曲销售、版权保护与维权、版权结算、音乐数据监测分析等一套综合性的版权发行管理解决方案，LIANHEART你的音乐管家。
                </p>
                <br />
                <p>
                  公司旗下产品：「LIANHE.ART -
                  数字版权管理发行合作平台」平台曾用名称「联合音乐」，目前已经合作数万+音乐人与厂牌公司，渠道发行覆盖全球200+国家地区。
                </p>
                <br />
                <b>不止发行，全新思路，开拓词曲投售市场！</b>
                <p>
                  为音乐人创造更多价值，是促进音乐人专心创作以及输出更多优秀音乐的基础！所以我们正在设计，词曲投售系统，目的是能够帮助音乐人将自己创作的词曲内容快速销售给我们，快速获得词曲变现，以及词曲权益分成，您只需专心创作，让我们为您音乐道路保驾护航！
                </p>
                <br />
                <b>摆脱传统唱片公司束缚，自己规划音乐道路！</b>
                <p>
                  我们致力于，让每一首歌曲都获得被关注的机会，不管你是创作新人，独立厂牌；都可以透过我们来为您发现音乐的新价值，LIANHE.ART（联合音乐）—
                  您的音乐管家。
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
