import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import {
  SupportIcon,
  UserGroupIcon,
  ChevronRightIcon,
  DocumentSearchIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

const AboutPage: NextPage = () => (
  <Layout title="联系我们">
    <div className="md:container md:mx-auto">
      <div className="min-h-screen py-6 flex flex-col justify-start sm:py-12">
        <div className="relative px-4 py-10 sm:rounded-3xl sm:p-20">
          <div className="relative py-8">
            <h1 className="text-7xl my-8 flex inset-0 items-center justify-center">联系我们</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 auto-cols-max justify-items-center">
              <div className="px-4 py-10 mr-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="rounded-full bg-primary h-24 w-24 flex items-center justify-center my-8">
                  <SupportIcon className="h-14 w-14 text-white" />
                </div>

                <h3 className="text-4xl my-8">支持</h3>
                <p className="text-gray-700">我们在这里帮助您解决任何问题。</p>
                <div className="flex items-end">
                  <Link href="https://support.lianhe.art">
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      className="my-4 inline-flex items-center h-14 px-14 text-white transition-colors duration-150 bg-primary rounded-full focus:shadow-outline hover:bg-blue-800"
                    >
                      获取支持 <ChevronRightIcon className="h-4 w-4 text-white" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 py-10 mr-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div>
                  <div className="rounded-full bg-primary h-24 w-24 flex items-center justify-center my-8">
                    <UserGroupIcon className="h-14 w-14 text-white" />
                  </div>

                  <h3 className="text-4xl my-8">商务合作</h3>
                  <p className="text-gray-700">
                    加入我们的合作伙伴生态系统，用 LIANHEART 加速你的业务。
                  </p>
                  <Link href="https://support.lianhe.art">
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      className="my-4 inline-flex items-center h-14 px-14 text-white transition-colors duration-150 bg-primary rounded-full focus:shadow-outline hover:bg-blue-800"
                    >
                      立即联系 <ChevronRightIcon className="h-4 w-4 text-white" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="px-4 py-10 mr-8 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div>
                  <div className="rounded-full bg-primary h-24 w-24 flex items-center justify-center my-8">
                    <DocumentSearchIcon className="h-14 w-14 text-white" />
                  </div>

                  <h3 className="text-4xl my-8">帮助中心</h3>
                  <p className="text-gray-700">了解更多关于 LIANHEART 如何使你的创作更容易。</p>
                  <Link href="https://support.lianhe.art">
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      className="my-4 inline-flex items-center h-14 px-14 text-white transition-colors duration-150 bg-primary rounded-full focus:shadow-outline hover:bg-blue-800"
                    >
                      查看文档 <ChevronRightIcon className="h-4 w-4 text-white" />
                    </a>
                  </Link>
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
