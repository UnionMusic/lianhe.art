import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import { SupportIcon, UserGroupIcon, DocumentSearchIcon } from '@heroicons/react/outline'
import React from 'react'

const AboutPage: NextPage = () => (
  <Layout title="产品中心 - LIANHE.ART 联合音乐 数字版权管理发行合作平台">
    <div className="md:container md:mx-auto">
      <div className="min-h-screen py-6 flex flex-col justify-start sm:py-12">
        <div className="relative px-4 py-10 sm:rounded-3xl sm:p-20">
          <div className="relative py-8">
            <h1 className="text-7xl my-8 flex inset-0 items-center justify-center">产品中心</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 auto-cols-max justify-items-center">
              <div className="px-4 py-10 mr-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="rounded-full bg-primary h-24 w-24 flex items-center justify-center my-8">
                  <SupportIcon className="h-14 w-14 text-white" />
                </div>

                <h3 className="text-4xl my-8">LIANHE.ART</h3>
                <p className="text-gray-700">
                  加入我们的合作伙伴生态系统，用 LIANHEART 加速你的业务。
                </p>
              </div>
              <div className="px-4 py-10 mr-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div>
                  <div className="rounded-full bg-primary h-24 w-24 flex items-center justify-center my-8">
                    <UserGroupIcon className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="text-4xl my-8">DIM云图</h3>
                  <p className="text-gray-700">帮助你全方位快速掌握最新音乐动向。</p>
                </div>
              </div>
              <div className="px-4 py-10 mr-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div>
                  <div className="rounded-full bg-primary h-24 w-24 flex items-center justify-center my-8">
                    <DocumentSearchIcon className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="text-4xl my-8">DIM云推</h3>
                  <p className="text-gray-700">让音乐推广更容易，帮助你快速建立长远收益。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
