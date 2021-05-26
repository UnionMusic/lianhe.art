import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-reveal'
import Typed from 'react-typed';

const words = [
  '?',
  '简单的',
  '方便的',
  '快捷的',
  'LIANHEART'
]

const IndexPage: NextPage = () => (
  <Layout title="联合互娱">
    <Head>
      <title>联合互娱</title>
      <script type="text/javascript" src="https://at.alicdn.com/t/font_1831659_3rznr4b64qk.js" />
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
              <div className="font-semibold text-4xl 2xl:text-7xl my-4 tracking-wider">
                应该是 <span><Typed strings={words} typeSpeed={180} /></span>
              </div>
              <button className="primaryColor text-xl font-medium border-2 hover:border-opacity-30 focus:outline-none border-primary px-10 py-1 transition duration-700 ease-in-out rounded-3xl">
                免费试用
              </button>
            </Fade>
          </div>
          <div className="ml-auto w-2/5 2xl:w-3/6">
            <img src="/imgs/main.png" alt={''} />
          </div>
        </div>
        <div className="flex justify-between" style={{ marginTop: '14%' }}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uniQQyinle" />
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#unikugouyinle"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#unikuwoyinle1"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uniqiepian"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#unispotify"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uniicon-diy-logo"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uniquanminKge"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uniapple"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uni1111-01"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uniamazoncolor"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#uniyou-tube"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#unijoox"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#unidouyin1"></use>
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
            <div>
              <img src="/imgs/content1.svg" style={{ width: '500px' }} alt="" />
            </div>
            <div className="ml-auto w-2/5">
              <p className="font-medium text-2xl mb-4">数字版权管理</p>
              <p className="font-extralight break-words">
                音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2/5">
              <p className="font-medium text-2xl mb-4">数字版权管理</p>
              <p className="font-extralight break-words">
                音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
            </div>
            <div className="ml-auto">
              <img src="/imgs/content2.svg" style={{ width: '500px' }} alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/imgs/content3.svg" style={{ width: '500px' }} alt="" />
            </div>
            <div className="ml-auto w-2/5">
              <p className="text font-medium text-2xl mb-4">数字版权管理</p>
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
