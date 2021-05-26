import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="py-4 px-8 relative">
      <div className="flex justify-between items-center max-w-screen-lg 2xl:max-w-screen-2xl mx-auto my-0 menu">
        <div className="italic font-bold text-xl">LIANHEART</div>
        <div className="relative">
          <div className="space-x-8 text-lg font-normal">
            <Link href="/">
              <a rel="noreferrer noopener" className="transition duration-200 ease-in-out active">首页</a>
            </Link>
            <Link href="https://unionmusic.freshdesk.com/">
              <a rel="noreferrer noopener" target="_blank" className="transition duration-500 ease-in-out hover:text-blue-500 active">
                帮助中心
              </a>
            </Link>
            <Link href="/contact">
              <a rel="noreferrer noopener" className="transition duration-500 ease-in-out hover:text-blue-500 active">
                联系我们
              </a>
            </Link>
            <Link href="https://www.lianhe.art/login">
              <a rel="noreferrer noopener" className="transition duration-500 ease-in-out hover:text-blue-500 active">
                登录
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 transform rotate-180" style={{ zIndex: -1 }}>
        <img src="/imgs/bg.png" alt="" style={{ width: '100vw' }} />
      </div>
      <style jsx>{`
        .active {
          position: relative;
          transition: 0.2s all linear;
        }
        .active:focus,
        .active:hover {
          color: #4571fc;
        }
        .active::before {
          width: 0;
          height: 100%;
          position: absolute;
          top: 10px;
          left: 100%;
          border-bottom: 2px solid #4571fc;
          content: '';
          transition: 0.2s all linear;
        }
        .active:hover::before {
          width: 100%;
          left: 0;
          transition-delay: 0.1s;
        }
        .active:hover ~ .active::before {
          left: 0;
        }
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
