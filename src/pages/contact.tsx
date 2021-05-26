import { Layout } from '../components/Layout'
import { NextPage } from 'next'

const AboutPage: NextPage = () => (
  <Layout title="联系我们">
    <div className="md:container md:mx-auto">
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="relative py-8">
            <div>
              <h1 className="text-7xl my-8">联系我们</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
