import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'


const  Contacts: FC= () => {
  return (
    <div>Contacts</div>
  )
}

(Contacts as PageWithLayout).layout = HomePageLayout
export default Contacts