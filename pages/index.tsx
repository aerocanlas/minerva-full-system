import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import { FC } from 'react'


const Home: FC= () =>{
  return (
    <div>
      
    </div>
  )
}
(Home as PageWithLayout).layout = HomePageLayout
export default  Home