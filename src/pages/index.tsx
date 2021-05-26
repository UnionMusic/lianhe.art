import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-reveal'
import Typed from 'react-typed';
import Link from 'next/link'

const words = [
  '?',
  '简单的',
  '方便的',
  '快捷的',
  'LIANHEART'
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
                新一代的全新
              </div>
              <div className="primaryColor font-semibold text-4xl 2xl:text-7xl my-4 tracking-wider">
                数字版权管理平台
              </div>
              <div className="font-semibold text-4xl 2xl:text-6xl my-4 tracking-wider">
                应该是 <span><Typed strings={words} typeSpeed={120} backSpeed={120} loop/></span>
              </div>
              <div className="my-8">
                <p className="my-3 font-light text-xl 2xl:text-3xl">全新一代数字版权管理平台，方便快捷</p>
                <p className="font-light text-xl 2xl:text-3xl">提供一站式版权管理、发行与结算服务</p>
              </div>
              <Link href="https://www.lianhe.art/login">
                <button className="primaryColor text-xl font-medium border-2 hover:border-opacity-30 focus:outline-none border-primary px-10 py-1 transition duration-700 ease-in-out rounded-3xl">
                  免费试用
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
                音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-auto w-2/5">
              <p className="font-medium text-2xl mb-4">全球数字版权发行</p>
              <p className="font-extralight break-words">
                通过 LIANHEART 将您的作品迅速的发行到全球 200+ 国家与地区，
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
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
                音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </Layout>
)

export default IndexPage
