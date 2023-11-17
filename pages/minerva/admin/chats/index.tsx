import React, { FC } from 'react'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import Head from 'next/head'


const Chats: FC = () => {
  return (
    <div>
      <Head>
        <title>Chats</title>
      </Head>
    </div>
  )
}

(Chats as PageWithLayout).layout = AdminPageLayout
export default Chats
