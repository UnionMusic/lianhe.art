import React from 'react'
import { Fade } from 'react-reveal'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-bottom-container">
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-screen-lg mx-auto flex justify-between">
          </div>
          <div className="footer-bottom-container-logo">
            <div className="italic font-bold text-xl">LIANHE.ART</div>
            <div className="footer-bottom-container-logo-description">© 2017 - 2021 LIANHEART ALL RIGHTS RESERVED 京 ICP 备 17045054 号-10</div>
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
