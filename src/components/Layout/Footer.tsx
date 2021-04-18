import React from 'react'
import { Fade } from 'react-reveal'

const Footer: React.FC = () => {
  return (
    <div className="px-8 mt-40 bg-footer-texture bg-cover bg-no-repeat bg-center">
      <div className="flex items-center justify-between relative max-w-screen-lg mx-auto my-0 py-8">
        <div className="pb-16">
          <Fade left cascade>
            <div className="font-semibold text-3xl 2xl:text-6xl">CHOOSE US</div>
          </Fade>
          <div className="font-thin my-8">NEW DIGITAL RIGHTS MANAGEMENT</div>
          <div className="font-light text-xl">全新数字版权管理平台，为你提供数字</div>
          <div className="font-light text-xl">监控平台出品以及版税收益等一切服务</div>
          <div className="font-light text-xl my-8">是一家服务 | 个人 | 数据为一体的平台</div>
          <button className="primaryColor font-medium hover:text-opacity-30 border-2 hover:border-opacity-30 focus:outline-none border-primary px-12 py-2 transition duration-700 ease-in-out rounded-3xl">
            关于我们
          </button>
        </div>

        <div
          className="flex flex-col bg-primary absolute right-0 bottom-0 respon"
          style={{ padding: '110px 2%' }}
        >
          <div className="font-light text-white text-right center">
            © 2017 - 2020 UNIONMUSIC ALL RIGHTS RESERVED.
          </div>
          <div className="font-light text-white text-right center">京ICP备17045054号-10</div>
          <div className="flex justify-end font-light text-white my-4 center">
            <div className="mr-4">关于我们</div>
            <div>开放资源</div>
          </div>
          <div className="flex justify-end font-light text-white center">
            <div>用户协议</div>
            <div className="mx-4">隐私协议</div>
            <div>侵权投诉</div>
          </div>
          <div className="flex justify-end items-center space-x-4" style={{ marginTop: '14%' }}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#unidouyin1" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uniweixin1" />
            </svg>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#uniweibo" />
            </svg>
            <svg className="icon" aria-hidden="true" style={{ fontSize: '13px' }}>
              <use xlinkHref="#unigithub" />
            </svg>
          </div>
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
