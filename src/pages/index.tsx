import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Head>
      <title>联合互娱</title>
      <script type="text/javascript" src="//at.alicdn.com/t/font_1831659_whzw0a9tkug.js" />
    </Head>

    <div className="flex flex-col max-w-screen-lg mx-auto my-0 2xl:max-w-screen-2xl">
      <div className="flex flex-col" style={{ marginTop: '6%' }}>
        <div className="flex items-center">
          <div>
            <p className="font-semibold text-4xl 2xl:text-7xl mt-12">数字版权管理平台</p>
            <div className="mb-10 mt-4 2xl:mb-24 font-thin text-xl 2xl:text-2xl">
              DIGITAL RIGHTS MANAGEMENT PLATFORM
            </div>
            <p className="font-light text-xl 2xl:text-2xl tracking-widest">
              提供企业 / 个人一站式版权管理
            </p>
            <p className="font-light mt-4 text-xl 2xl:text-2xl tracking-widest">发行 | 结算服务</p>
            <button className="mt-10 font-light text-xl px-8 py-2 transition duration-700 ease-in-out rounded text-white bg-primary hover:bg-opacity-80 center">
              选择我们
            </button>
          </div>
          <div className="ml-auto w-2/5 2xl:w-3/6">
            <img src="/imgs/index.png" alt="" />
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
        <div className="text-xl bg-primary text-white px-8 py-2 mt-40 mx-auto">我们能做什么</div>
        <div className="flex items-center">
          <div>
            <Image src="/imgs/content1.svg" alt="Picture of the author" width={500} height={500} />
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
            <Image src="/imgs/content2.svg" alt="Picture of the author" width={500} height={500} />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <Image src="/imgs/content3.svg" alt="Picture of the author" width={500} height={500} />
          </div>
          <div className="ml-auto w-2/5">
            <p className="text font-medium text-2xl mb-4">数字版权管理</p>
            <p className="font-extralight break-words">
              音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
              推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
