import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import Head from 'next/head'


const Inventory: FC = () => {
  return (
    <div>
      <Head>
        <title> Inventory </title>
      </Head>
    </div>
  )
}

(Inventory as PageWithLayout).layout = AdminPageLayout
export default Inventory