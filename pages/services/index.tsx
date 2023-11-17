import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'

const Services: FC = () => {
  return (
    <div>Services</div>
  )
}

(Services as PageWithLayout).layout = HomePageLayout
export default Services