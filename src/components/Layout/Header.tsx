import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-container flex items-center">
        <div className="header-container-logo">
          <div className="italic font-bold text-xl">LIANHE.ART</div>
        </div>
        <div className="header-container-menu">
          <div className="space-x-8 text-lg font-normal">
            <Link href="/">
              <a className="transition duration-200 ease-in-out active">首页</a>
            </Link>
            <Link href="/">
              <a className="transition duration-200 ease-in-out active">支持</a>
            </Link>
            <Link href="/">
              <a className="transition duration-200 ease-in-out active">合作</a>
            </Link>
            <Link href="https://support.lianhe.art">
              <a className="transition duration-500 ease-in-out hover:text-blue-500 active">
                帮助
              </a>
            </Link>
          </div>
        </div>
        <div className="main-button">
          <div className="button-spacer">
            <div className="btn btn-primary">登录</div>
          </div>
          <div className="button-spacer">
            <div className="btn btn-line btn-outline btn-primary">注册</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          width: 100%;
          position: fixed;
          z-index: 999;
          background: #ffffff;
        }
        .header-container{
          padding: 1rem 1rem;
          max-width: 1064px;
          text-align: center;
          margin: 0 auto;
        }
        .header-container-logo {
          padding: 10px;
        }
        .header-container-menu {
          color: #696969;
          display: flex;
          flex: 1;
          justify-content: flex-end;
          margin-right: 2rem;
        }
        .header-container-menu a {
          font-size: 16px;
        }
        .active:focus,
        .active:hover {
          color: #3583fb;
        }
      `}</style>
    </div>
  )
}

export default Header
