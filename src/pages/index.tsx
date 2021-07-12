import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const IndexPage: NextPage = () => (
  <Layout title="LIANHE.ART 数字版权管理发行合作平台">
    <div className="central-container">
      <div className="intro-container max-w-screen-lg mx-auto flex flex-col justify-center items-center">
        <h1>数字版权管理平台</h1>
        <h3>
          为您提供便捷的版权管理服务，包括提供覆盖至海内外播放渠道的歌曲发行，方便快捷的全球收益结算，及数据监控，侵权维权等服务。
        </h3>
        <div className="flex grid grid-cols-1 md:grid-cols-2">
          <div className="button-spacer">
            <Link href="https://d.lianhe.art/account/login">
              <a className="btn">开始使用</a>
            </Link>
          </div>
          <div className="button-spacer">
            <Link href="https://d.lianhe.art/account/register">
              <a className="btn btn-line btn-outline">申请入驻</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="platform-container">
        <div className="platform-lists-slide">
          <div className="platform-lists justify-between">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-QQyinle" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-kugou" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-kuwo" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-netease" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-douyin" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-quanminKge" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-5sing" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-spotify" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-apple" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-google-play" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-amazon" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-youtube" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uni-joox" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="central-container central-container-item">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
        <h2>我们能做什么</h2>
        <h3>选择 LIANHE.ART 的理由是？</h3>
        <div className="desc-container">
          <div className="desc-container-item">
            <div className="desc-container-icon">
              <span className="iconfont UniIcontianchongxing-"></span>
            </div>
            <div className="desc-container-left text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              一站式数字版权管理
            </div>
            <div className="desc-container-right">
              平台提供一站式音乐版权上传管理、电子合约签署、版权时间戳认证服务。您可以通过后台自主创建版权发行与我们快速建立合作
              LIANHE.ART 平台提供 10:00-18:30 (北京时间 周一至周五)
              工单处理服务，为您解决音乐版权发行所会遇上的种种问题。
            </div>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc-container-item">
            <div className="desc-container-icon">
              <span className="iconfont UniIconquanqiu"></span>
            </div>
            <div className="desc-container-left text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              全球数字版权发行
            </div>
            <div className="desc-container-right">
              通过 LIANHE.ART 将您的作品迅速的发行到全球 200+ 国家与地区， 我们为您的作品免费提供了
              UPC 编码与 ISRC 编码用于港澳台、海外地区的音乐/专辑出版销售。
            </div>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc-container-item">
            <div className="desc-container-icon">
              <span className="iconfont UniIconmoney"></span>
            </div>
            <div className="desc-container-left text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
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
            <div className="desc-container-left text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              数据维度监控
            </div>
            <div className="desc-container-right">
              音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量、评论量、粉丝数据的增幅情况、以及音乐上榜单监控并推送通知。
            </div>
          </div>
        </div>
        <div className="desc-container">
          <div className="desc-container-item items-center mx-auto grid grid-cols-1 md:grid-cols-none md:flex">
            <div className="desc-container-left flex-1 text-center md:text-left">
              <p className="text-3xl sm:text-5xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-3 max-w-[40.23rem]">
                LIANHE.ART 每天都在进步，不要错过所有动作。
              </p>
              <p className="gray">加入 LIANHE.ART，用最便捷的解决方案管理您的数字版权。</p>
            </div>
            <div className="main-button mt-5 md:mt-0 justify-center md:justify-start">
              <div className="btn">
                <Link href="https://d.lianhe.art/account/login">
                  <a>立刻体验</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .desc-container {
          width: 100%;
          margin-bottom: 4rem;
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
        }
        .desc-container-right {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
          margin: 0 0 45px;
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
        .desc-container-icon span {
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
          margin-top: 5rem;
        }
        .central-container-item h2 {
          font-size: 2rem;
          letter-spacing: -1px;
          line-height: 1.3;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .central-container-item h3 {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
          text-align: center;
          margin-bottom: 4rem;
        }
        .gray {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
        }
        .intro-container {
          padding-top: 13rem;
        }
        .intro-container h1 {
          font-size: 55px;
          line-height: 1;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.35em;
          font-weight: 800;
        }
        .intro-container h3 {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: #666666;
          margin: 0 0 45px;
          text-align: center;
        }
        .platform-container {
          padding-top: 5rem;
          overflow: hidden;
          white-space: nowrap;
          margin: 0 -1rem;
        }
        .platform-lists {
          display: inline-block;
          white-space: nowrap;
        }
        .platform-lists svg {
          width: 100px;
          display: inline-block;
          vertical-align: middle;
        }
        .platform-lists-slide {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: slide 80s linear infinite normal;
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
        @media (min-width: 780px) {
          .intro-container h1 {
            font-size: 70px;
            letter-spacing: -0.05em;
          }
        }
        @media (min-width: 1024px) {
          .platform-lists-slide {
            animation: none;
            width: 100%;
          }
          .intro-container h1 {
            font-size: 100px;
            letter-spacing: -0.05em;
          }
          .intro-container h3 {
            font-size: 20px;
          }
          .gray {
            font-size: 20px;
          }
          .desc-container-right {
            font-size: 20px;
            padding-right: 8.5rem;
          }
          .desc-container:nth-child(2n) .desc-container-item .desc-container-right {
            padding-right: 0;
            padding-left: 8.5rem;
          }
          .desc-container {
            margin-bottom: 8rem;
          }
          .intro-container {
            padding-top: 17rem;
          }
          .platform-container {
            padding-top: 10rem;
            max-width: 1024px;
            margin-left: auto;
            margin-right: auto;
          }
          .platform-lists {
            display: flex;
            width: 100%;
          }
          .platform-lists svg {
            width: 48px;
          }
          .central-container-item {
            margin-top: 9rem;
          }
          .central-container-item h3 {
            padding-bottom: 7rem;
          }
        }
        @keyframes slide {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            -webkit-transform: translate3d(-50%, 0, 0);
            -ms-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}
    </style>
  </Layout>
)

export default IndexPage
