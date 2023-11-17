import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'

const Products: FC= () =>{ 
  return (
    <div>Products</div>
  )
}

(Products as PageWithLayout).layout = HomePageLayout
export default Products