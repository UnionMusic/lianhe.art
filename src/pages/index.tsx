import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-reveal'
import Typed from 'react-typed';
import Link from 'next/link'

const words = [
  '版权发行',
  '数据监测',
  '侵权维权',
  '版税结算'
]

const IndexPage: NextPage = () => (
  <Layout title="LIANHEART">
    <Head>
      <title>LIANHEART - 数字版权管理发行合作平台</title>
    </Head>

    <div className="max-w-screen-lg mx-auto my-0 2xl:max-w-screen-2xl">
      <div className="flex flex-col" style={{ marginTop: '6%' }}>
        <div className="flex items-center">
          <div>
            <Fade left cascade>
              <div className="font-semibold text-4xl 2xl:text-7xl my-4 tracking-wider">
                我们是一家
              </div>
              <div className="primaryColor font-semibold text-4xl 2xl:text-7xl my-4 tracking-wider">
                数字版权管理平台
              </div>
              <div className="font-semibold text-4xl 2xl:text-6xl my-4 tracking-wider">
                可提供 <span><Typed strings={words} typeSpeed={120} backSpeed={120} loop/></span>
              </div>
              <div className="my-8">
                <p className="my-3 font-light text-xl 2xl:text-3xl">覆盖全球 150+ 地区数字版权发行渠道</p>
                <p className="font-light text-xl 2xl:text-3xl">提供一站式版权管理、发行与结算服务</p>
              </div>
              <Link href="https://www.lianhe.art/login">
                <button className="primaryColor text-xl font-medium border-2 hover:border-opacity-30 focus:outline-none border-primary px-10 py-1 transition duration-700 ease-in-out rounded-3xl">
                  开始使用
                </button>
              </Link>
            </Fade>
          </div>
          <div className="ml-auto w-2/5 2xl:w-3/6">
            <img src="/imgs/main.png" alt={''} />
          </div>
        </div>
        <div className="flex justify-between" style={{ marginTop: '14%' }}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uni-qqmusic" />
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
            <use xlinkHref='#uni-spotify'/>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref='#uni-google-play'/>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref='#uni-quanminKge'/>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref='#uni-apple'/>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref='#uni-5sing'/>
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
          <svg className="icon" aria-hidden="true">
            <use xlinkHref='#uni-douyin'/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <Fade left cascade>
          <div className="text-xl 2xl:text-3xl bg-primary text-white px-24 py-4 mt-40 mx-auto">
            我们能做什么
          </div>
        </Fade>
        <Fade left>
          <div className="flex items-center">
            <div className="ml-auto">
              <img src="/imgs/content1.svg" style={{ width: '500px' }} alt="" />
            </div>
            <div className="ml-auto w-2/5">
              <p className="font-medium text-2xl mb-4">一站式数字版权管理</p>
              <p className="font-extralight break-words">
                平台提供一站式音乐版权上传管理、电子合约签署、版权时间戳认证服务。您可以通过后台自主创建版权发行与我们快速建立合作 <br/>
                LIANHEART 平台提供 10:00-6:30 (北京时间 周一至周五)工单处理服务，为您解决音乐版权发行所会遇上的种种问题。
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-auto w-2/5">
              <p className="font-medium text-2xl mb-4">全球数字版权发行</p>
              <p className="font-extralight break-words">
                通过 LIANHEART 将您的作品迅速的发行到全球 200+ 国家与地区，<br/>
                我们为您的作品免费提供了UPC编码与ISRC编码用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
            </div>
            <div className="ml-auto">
              <img src="/imgs/content2.svg" style={{ width: '500px' }} alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-auto">
              <img src="/imgs/content3.svg" style={{ width: '500px' }} alt="" />
            </div>
            <div className="ml-auto w-2/5">
              <p className="text font-medium text-2xl mb-4">方便快捷的结算</p>
              <p className="font-extralight break-words">
                LIANHEART 平台会为您收集全球发行平台上所有产生的版权收益，并为您提供详细收入账单。<br/>
                您可以通过管理平台一键下载账单进行审阅，并申请版税提现即可快速获得您应有的版权收益。
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </Layout>
)

export default IndexPage
