import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { Fade, Slide } from 'react-reveal'

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Head>
      <title>联合互娱</title>
      <script type="text/javascript" src="//at.alicdn.com/t/font_1831659_whzw0a9tkug.js" />
    </Head>

    <div className="max-w-screen-lg mx-auto my-0 2xl:max-w-screen-2xl">
      <div className="flex flex-col" style={{ marginTop: '6%' }}>
        <div className="flex items-center">
          <div>
            <Fade left cascade>
              <div className="primaryColor font-semibold text-4xl 2xl:text-7xl tracking-wider">
                更快更好更安全
              </div>
              <p className="font-light mt-12 2xl:mt-24 text-xl 2xl:text-3xl">数字版权管理平台</p>
              <div className="mb-10 font-light">DIGITAL RIGHTS MANAGEMENT PLATFORM</div>
              <p className="font-light text-xl 2xl:text-3xl">提供企业 / 个人一站式版权管理</p>
              <p className="font-light mb-16 text-xl 2xl:text-3xl">发行 | 结算服务</p>
              <button className="primaryColor text-lg font-medium border-2 hover:border-opacity-30 focus:outline-none border-primary px-10 py-1 transition duration-700 ease-in-out rounded-3xl">
                免费使用
              </button>
            </Fade>
          </div>
          <div className="ml-auto w-2/5 2xl:w-3/6">
            <img src="/imgs/index.png" alt={''} />
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
          <div className="text-3xl bg-primary text-white px-24 py-4 mt-40 mx-auto">
            我们能做什么
          </div>
        </Fade>
        <Slide left cascade>
          <div className="flex items-center">
            <div>
              <Image
                src="/imgs/content1.svg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
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
              <Image
                src="/imgs/content2.svg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <Image
                src="/imgs/content3.svg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="ml-auto w-2/5">
              <p className="text font-medium text-2xl mb-4">数字版权管理</p>
              <p className="font-extralight break-words">
                音乐平台数据自主监控统计，可视化的监控歌手每日作品播放量评论量、粉丝数据的增幅情况、以及音乐上榜单监控并
                推送通知歌手在平台所授权的原创音乐作品将免费拥有国际标准音像制「ISRC」编码，用于港澳台、海外地区的音乐/专辑出版销售。
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  </Layout>
)

export default IndexPage
