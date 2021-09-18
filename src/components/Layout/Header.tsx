import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-container flex items-center">
        <div className="header-container-logo">
          <embed src="/imgs/logo.svg" type="image/svg+xml" />
        </div>
        <div className="header-container-menu flex-1 justify-between">
          <Link href="/">
            <a rel="noreferrer noopener" className="transition duration-200 ease-in-out active">
              首页
            </a>
          </Link>
          <Link href="https://support.lianhe.art/support/tickets/new">
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="transition duration-200 ease-in-out active"
            >
              商务合作
            </a>
          </Link>
          <Link href="https://support.lianhe.art/support/tickets/new">
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="transition duration-200 ease-in-out active"
            >
              侵权投诉
            </a>
          </Link>
          <Link href="https://support.lianhe.art">
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="transition duration-500 ease-in-out hover:text-blue-500 active"
            >
              帮助中心
            </a>
          </Link>
        </div>
        <div className="main-button">
          <div className="button-spacer">
            <Link href="https://d.lianhe.art/account/login">
              <a rel="noreferrer noopener" className="btn btn-primary">
                登录
              </a>
            </Link>
          </div>
          <div className="button-spacer">
            <Link href="https://d.lianhe.art/account/register">
              <a rel="noreferrer noopener" className="btn btn-line btn-outline btn-primary">
                注册
              </a>
            </Link>
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
        .header-container {
          padding: 1rem 1rem;
          max-width: 1064px;
          text-align: center;
          margin: 0 auto;
        }
        .header-container-logo {
          padding: 10px;
        }
        .header-container-logo embed {
          width: 140px;
          height: 15.81px;
        }
        .header-container-menu {
          color: #696969;
          display: flex;
          flex: 1;
          margin: 0 5rem;
          width: 100%;
        }
        .header-container-menu a {
          font-size: 16px;
        }
        .active:hover {
          color: #3583fb;
        }
        @media (max-width: 768px) {
          .header {
            height: 125px;
          }
          .header-container {
            width: 100%;
            box-sizing: border-box;
          }
          .header-container-logo {
            flex: 1;
            padding: 0;
          }
          .header-container-menu {
            position: absolute;
            left: 1rem;
            right: 1rem;
            top: 80px;
            margin: 0 0;
            width: calc(100vw - 2rem);
          }
          .header-container-menu a {
            font-size: 14px;
          }
          .header-container-menu {
          }
        }
      `}</style>
    </div>
  )
}

export default Header
