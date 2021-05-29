import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

const IndexPage: NextPage = () => (
  <Layout title="联合互娱">
    <Head>
      <title>LIANHE.ART 数字版权管理平台</title>
    </Head>
    <div className="central-container">
      <div className="intro-container max-w-screen-lg mx-auto flex flex-col justify-center items-center">
        <h1>数字版权管理平台</h1>
        <h3>为您提供最佳的版权管理服务，包括覆盖至海内外播放渠道的歌曲发行，业内领先的方便快捷的收益结算，以及数据监控，侵权维权等服务。</h3>
        <div className="main-button">
          <div className="button-spacer">
            <Link href="https://www.lianhe.art/login">
              <a className="btn">开始使用</a>
            </Link>
          </div>
          <div className="button-spacer">
            <Link href="https://www.lianhe.art/login">
              <a className="btn btn-line btn-outline">申请入驻</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="platform-lists max-w-screen-lg mx-auto flex justify-between">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#uni-QQyinle" />
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-kugou'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-kuwo'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-netease'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-douyin'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-quanminKge'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-5sing'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-spotify'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-apple'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-google-play'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-amazon'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-youtube'/>
        </svg>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref='#uni-joox'/>
        </svg>
      </div>
    </div>
    <div className="central-container central-container-item">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
        <h2>我们能做什么</h2>
        <h3>选择 LIANHE.ART 助您的音乐道路更加辉煌</h3>
        <div className="desc-container">
          <div className="desc-container-item">
            <div className="desc-container-icon">
              <span className="iconfont UniIcontianchongxing-"></span>
            </div>
            <div className="desc-container-left text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              一站式数字版权管理
            </div>
            <div className="desc-container-right">
              平台提供一站式音乐版权上传管理、电子合约签署、版权时间戳认证服务。您可以通过后台自主创建版权发行与我们快速建立合作
              LIANHE.ART 平台提供 10:00-18:30 (北京时间 周一至周五) 工单处理服务，为您解决音乐版权发行所会遇上的种种问题。
            </div>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc-container-item">
            <div className="desc-container-icon">
              <span className="iconfont UniIconquanqiu"></span>
            </div>
            <div className="desc-container-left text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              全球数字版权发行
            </div>
            <div className="desc-container-right">
              通过 LIANHE.ART 将您的作品迅速的发行到全球 200+ 国家与地区，
              我们为您的作品免费提供了 UPC 编码与 ISRC 编码用于港澳台、海外地区的音乐/专辑出版销售。
            </div>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc-container-item">
            <div className="desc-container-icon">
              <span className="iconfont UniIconmoney"></span>
            </div>
            <div className="desc-container-left text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              方便快捷的结算
            </div>
            <div className="desc-container-right">
              LIANHE.ART 平台会为您收集全球发行平台上所有产生的版权收益，并为您提供详细收入账单，
              您可以通过管理平台一键下载账单进行审阅，并申请版税提现即可快速获得您应有的版权收益。
            </div>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc-container-item">
            <div className="desc-container-icon">
              <span className="iconfont UniIconshuju"></span>
            </div>
            <div className="desc-container-left text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              数据维度监控
            </div>
            <div className="desc-container-right">
              音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量、评论量、粉丝数据的增幅情况、以及音乐上榜单监控并推送通知。
            </div>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc-container-item flex items-center">
            <div className="desc-container-left flex-1">
              <p className="text-3xl sm:text-5xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-3 max-w-[40.23rem]">LIANHE.ART 每天都在进步，不要错过所有动作。</p>
              <p className="gray text-1xl sm:text-1xl leading-none tracking-tight max-w-[40.23rem]">加入 LIANHE.ART，用最好的解决方案管理您的数字版权。</p>
            </div>
            <div className="main-button">
              <div className="btn">立刻体验</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .desc-container {
          width: 100%;
          margin-bottom: 8rem;
        }
        .desc-container:last-child {
          margin-bottom: 1rem;
        }
        .desc-container:nth-child(2n) .desc-container-item { 
          text-align: right;
        }
        .desc-container:nth-child(2n) .desc-container-item .desc-container-icon {
          float: right;
        }
        .desc-container:nth-child(2n) .desc-container-item .desc-container-left { 
          display: inline-block;
          width: 100%;
          text-align: right;
        }
        .desc-container:nth-child(2n) .desc-container-item .desc-container-right { 
          padding-right: 0;
          padding-left: 8.5rem;
        }
        .desc-container-right {
          font-weight: 400;
          font-size: 20px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
          margin: 0 0 45px;
          padding-right: 8.5rem;
          box-sizing: border-box;
        }
        .desc-container-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: rgb(53 131 251 / 17%);
          margin-bottom: 2rem;
        }
        .desc-container-icon span{
          color: #3583fb;
          font-size: 26px;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .central-container {
          width: 100%;
          position: relative;
        }
        .central-container-item { 
          margin-top: 9rem;
        }
        .central-container-item h2 {
          font-size: 2rem;
          letter-spacing: -1px;
          line-height: 1.3;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .central-container-item h3 {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
          text-align: center;
          margin-bottom: 8rem;
        }
        .gray {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
        }
        .intro-container {
          padding-top: 17rem;
        }
        .intro-container h1{
          font-size: 100px;
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.35em;
        }
        .intro-container h3{
          font-weight: 400;
          font-size: 20px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
          margin: 0 0 45px;
          text-align: center;
        }
        .platform-lists {
          padding-top: 10rem;
        }
        .platform-lists svg {
          filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
          -webkit-filter: grayscale(100%);
          opacity: 0.4;
        }
        .platform-lists svg:hover {
          filter: none;
          -webkit-filter: none;
          opacity: 1;
        }
        .wave-bg {
          width: 2560px;
          position: absolute;
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          left: 50%;
          bottom: 0;
          z-index: 1;
        }
      `}
    </style>
  </Layout>
)

export default IndexPage
