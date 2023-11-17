import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import Head from 'next/head'
import React, { FC } from 'react'

const ServicePage: FC = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>
    </div>
  )
}

(ServicePage as PageWithLayout).layout = AdminPageLayout
export default ServicePage