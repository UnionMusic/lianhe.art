import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="py-4 px-8 relative">
      <div className="flex justify-between items-center max-w-screen-lg 2xl:max-w-screen-2xl mx-auto my-0 menu">
        <div className="italic font-bold text-xl">LIANHEART</div>
        <div className="space-x-8 text-lg">
          <Link href="/">
            <a className="font-light transition duration-500 ease-in-out hover:text-blue-500 hover:border-b-4">
              首页
            </a>
          </Link>
          <Link href="/">
            <a className="font-light transition duration-500 ease-in-out hover:text-blue-500">
              帮助中心
            </a>
          </Link>
          <Link href="/about">
            <a className="font-light transition duration-500 ease-in-out hover:text-blue-500">
              联系我们
            </a>
          </Link>
          <Link href="/about">
            <a className="font-light transition duration-500 ease-in-out hover:text-blue-500">
              登录
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 transform rotate-180" style={{ zIndex: -1 }}>
        <img src="/imgs/bg.png" alt="" />
      </div>
      <style jsx>{`
        @media (min-device-width: 200px) and (max-width: 480px) {
          .menu-icon {
            width: 30px;
            height: 25px;
            border-top: 5px solid #000;
            border-bottom: 5px solid #000;
            background-color: #000;
            padding: 5px 0;
            margin-left: auto;
            background-clip: content-box;
          }
        }
      `}</style>
    </div>
  )
}

export default Header
