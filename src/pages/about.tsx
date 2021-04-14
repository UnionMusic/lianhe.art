import Link from 'next/link'
import { Layout } from '../components/Layout'
import { NextPage } from 'next'

const AboutPage: NextPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
