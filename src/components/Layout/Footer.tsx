import React from 'react'
import { Fade } from 'react-reveal'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="px-8 mt-40">
      <div className="flex justify-between items-center mx-auto max-w-screen-lg">
        <div className="pb-16">
          <Fade left cascade>
            <div className="font-semibold text-3xl my-8 2xl:text-6xl">CHOOSE US</div>
            <div className="font-light text-xl">全新一代数字版权管理平台，方便快捷</div>
            <div className="font-light text-xl">提供一站式版权管理、发行与结算服务</div>
            <div className="font-light text-xl my-8"></div>
            <Link href="/contact">
              <button className="primaryColor text-xl font-medium hover:text-opacity-30 border-2 hover:border-opacity-30 focus:outline-none border-primary px-10 py-1 transition duration-700 ease-in-out rounded-3xl">
                联系我们
              </button>
            </Link>
          </Fade>
        </div>

        <div className="bg-primary w-5/12 px-6 py-32 respon">
          <div className="flex justify-center mb-32 items-center">
            <span className="text-base sm:text-xl md:text-6xl text-white italic font-bold uppercase">LIANHEART</span>
          </div>

          <div className="flex justify-end font-light text-white my-4 center">
            <div className={'ml-2'}>
              <Link href="/about">
                关于我们
              </Link>
            </div>
            <div className={'ml-2'}>
              <Link href="https://open.lianhehuyu.com">
                开放资源
              </Link>
            </div>
            <div className={'ml-2'}>
              <Link href="/#">
                用户协议
              </Link>
            </div>
            <div className={'ml-2'}>
              <Link href="/#">
                隐私政策
              </Link>
            </div>
            <div className={'ml-2'}>
              <Link href="https://unionmusic.freshdesk.com/support/tickets/new">
                侵权投诉
              </Link>
            </div>
          </div>
          <div className="font-light text-right center uppercase text-blue-50 text-opacity-75">
            <p className="tracking-tight md:tracking-wide">&copy; 2017 - 2021 <span className="italic font-bold tracking-tight md:tracking-wide">LIANHEART</span></p>
            <p className="tracking-tight md:tracking-wide">All rights reserved</p>
          </div>
          <div className="font-light text-right center text-blue-50 text-opacity-75">京 ICP 备 17045054 号-10</div>
        </div>
      </div>
      <style jsx>{`
        @media (min-device-width: 200px) and (max-width: 767px) {
          .respon {
            width: 80vw;
            font-size: 12px;
          }
          .main {
            display: flex;
            flex-direction: column;
            padding: 0;
            font-size: 12px;
          }
          .center {
            margin: 0.2rem auto;
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer
