import React, { FC } from 'react'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import Head from 'next/head'

const Settings: FC = () => {
  return (
    <div>
      <Head>
        <title>Settings</title>
      </Head>
    </div>
  )
}


(Settings as PageWithLayout).layout = AdminPageLayout
export default Settings