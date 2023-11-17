import React, { FC} from 'react'
import Head from 'next/head'
import PageWithLayout from '@/layout/pagewithlayout'
import AdminPageLayout from '@/layout/adminpagelayout'

const Orders: FC = () => {
  return (
    <div>
        <Head>
            <title>Orders</title>
        </Head>
    </div>
  )
}

(Orders as PageWithLayout).layout = AdminPageLayout
export default Orders