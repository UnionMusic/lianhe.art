import React from 'react'
import { Fade } from 'react-reveal'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-bottom-container">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-screen-lg mx-auto flex justify-between mb-8">

            <div className="flex flex-col">
              <h4 className="font-bold">资源</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="/">
                  <a>支持</a>
                </Link>
                <Link href="/">
                  <a>帮助中心</a>
                </Link>
                <Link href="/">
                  <a>侵权投诉</a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold">XX</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="/">
                  <a>关于</a>
                </Link>
                <Link href="/">
                  <a>联系我们</a>
                </Link>
                <Link href="/">
                  <a>商务洽谈</a>
                </Link>
                <Link href="/">
                  <a>平台协议</a>
                </Link>
                <Link href="/">
                  <a>内容准入</a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold">合作平台</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="/">
                  <a>腾讯音乐</a>
                </Link>
                <Link href="/">
                  <a>网易云</a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold">社交媒体</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="/">
                  <a>GitHub</a>
                </Link>
                <Link href="/">
                  <a>抖音</a>
                </Link>
                <Link href="/">
                  <a>微博</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom-container-logo">
            <div className="italic font-bold text-xl">LIANHE.ART</div>
            <div className="footer-bottom-container-logo-description">Copyright © 2017 - 2021 LIANHE.ART Inc. All Rights Reserved. 京 ICP 备 17045054 号-10</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #fafafa;
          border-top: 1px solid #eaeaea;
          margin-top: 40px;
          padding: 40px 0;
        }
        a {
          color: #666666 !important;
        }
        .footer-bottom-container-logo-description {
          font-size: 12px;
          color: #8c8c8c;
        }
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
