import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'

const  About: FC = () => {
  return (
    <div>About</div>
  )
}

(About as PageWithLayout).layout = HomePageLayout
export default About