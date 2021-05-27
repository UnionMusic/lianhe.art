import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

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
            <div className="btn">开始使用</div>
          </div>
          <div className="button-spacer">
            <div className="btn btn-line btn-outline">申请入驻</div>
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
      {/*<img src="https://lhcdn.lanhuapp.com/home/img/HedaerWave.png" alt="" className="wave-bg" />*/}
    </div>
    <style jsx>
      {`
        .central-container {
          width: 100%;
          padding: 0 0 30px;
          //background: linear-gradient(180deg, #ffffff 0%, #f9fbff 100%);
          position: relative;
        }
        .intro-container {
          padding-top: 15rem;
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
