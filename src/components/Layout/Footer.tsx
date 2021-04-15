import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="px-8 mt-40 bg-header relative">
      <div className="flex items-center relative max-w-screen-lg mx-auto my-0 py-8 main">
        <div className="pb-16">
          <div className="font-semibold text-6xl">CHOOSE US</div>
          <div className="font-extralight my-8">NEW DIGITAL RIGHTS MANAGEMENT</div>
          <div className="font-light">全新数字版权管理平台，为你提供数字</div>
          <div className="font-light">监控平台出品以及版税收益等一切服务</div>
          <div className="font-light my-8">是一家服务 | 个人 | 数据为一体的平台</div>
          <button className="px-8 py-2 font-light text-xl transition duration-700 ease-in-out rounded text-white bg-primary hover:bg-opacity-80 center">
            选择我们
          </button>
        </div>

        <div className="flex flex-col px-4 py-48 bg-primary max-w-screen-lg w-80 absolute right-0 bottom-0 ml-auto respon">
          <div className="italic font-bold text-white mb-4 text-right center">LIANHEART</div>
          <div className="font-light text-sm text-white text-right center">
            © 2017 - 2020 UNIONMUSIC ALL RIGHTS RESERVED.
          </div>
          <div className="font-light text-sm text-white text-right center">
            京ICP备17045054号-10
          </div>
          <div className="flex justify-end font-light text-white text-sm mt-4 center">
            <div className="mr-4">关于我们</div>
            <div>开放资源</div>
          </div>
          <div className="flex justify-end font-light text-white text-sm center">
            <div>用户协议</div>
            <div className="mx-4">隐私协议</div>
            <div>侵权投诉</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-device-width: 200px) and (max-width: 767px) {
          .respon {
            position: unset;
            width: 100%;
            padding: 2rem;
            margin-top: 2rem;
          }
          .main {
            display: flex;
            flex-direction: column;
            padding: 0;
            font-size: 12px;
          }
          .center {
            margin: 0.2rem auto;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}

export default Footer
