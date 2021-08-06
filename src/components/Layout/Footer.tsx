import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="footer px-4 xl:px-0">
      <div className="footer-bottom-container">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-screen-lg mx-auto justify-between grid grid-cols-2 md:flex">
            <div className="flex flex-col mb-8">
              <h4 className="font-bold">资源</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="https://status.lianhe.art">
                  <a rel="noreferrer noopener" target="_blank">
                    服务状态
                  </a>
                </Link>
                <Link href="https://support.lianhe.art/support/tickets/new">
                  <a rel="noreferrer noopener" target="_blank">
                    提交工单
                  </a>
                </Link>
                <Link href="https://support.lianhe.art">
                  <a rel="noreferrer noopener" target="_blank">
                    帮助中心
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col mb-8">
              <h4 className="font-bold">关于</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="/about">
                  <a rel="noreferrer noopener">关于我们</a>
                </Link>
                <Link href="/contact">
                  <a rel="noreferrer noopener">联系我们</a>
                </Link>
                <Link href="/">
                  <a rel="noreferrer noopener" target="_blank">
                    用户协议
                  </a>
                </Link>
                <Link href="/">
                  <a rel="noreferrer noopener" target="_blank">
                    隐私政策
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col mb-8">
              <h4 className="font-bold">社交媒体</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="https://github.com/UnionMusic">
                  <a rel="noreferrer noopener" target="_blank">
                    GitHub
                  </a>
                </Link>
                <Link href="/">
                  <a rel="noreferrer noopener" target="_blank">
                    抖音
                  </a>
                </Link>
                <Link href="https://weibo.com/u/6215288462">
                  <a rel="noreferrer noopener" target="_blank">
                    微博
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col mb-8">
              <h4 className="font-bold">合作平台</h4>
              <div className="flex flex-col mt-3 space-y-1">
                <Link href="https://www.tencentmusic.com">
                  <a rel="noreferrer noopener" target="_blank">
                    腾讯音乐
                  </a>
                </Link>
                <Link href="https://music.163.com">
                  <a rel="noreferrer noopener" target="_blank">
                    网易云
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom-container-logo mt-5">
            <embed src="/imgs/logo.svg" type="image/svg+xml" />
            <div className="footer-bottom-container-logo-description">
              版权所有: 联合互娱（北京）文化有限公司; 平台曾用名: 联合音乐
            </div>
            <div className="footer-bottom-container-logo-description">
              Copyright © 2017 - 2021 LIANHE.ART All Rights Reserved. 京 ICP 备 17045054 号-10
            </div>
          </div>
        </div>
      </div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177377361-2" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-177377361-2', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <style jsx>{`
        .footer {
          background-color: #fafafa;
          border-top: 1px solid #eaeaea;
          margin-top: 50px;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        a {
          color: #666666 !important;
        }
        .footer-bottom-container-logo embed {
          width: 140px;
          margin-bottom: 10px;
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
