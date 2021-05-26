import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="msapplication-TileColor" content="#4571FC" />
      <meta name="theme-color" content="#4571FC" />
    </Head>
    <Header />
    <div className="px-8">{children}</div>
    <Footer />
    <script async src="//at.alicdn.com/t/font_1831659_dtpb15crl0i.js" />
  </div>
)

export default Layout
