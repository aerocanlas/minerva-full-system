import React, { FC } from 'react'
import AdminPageLayout from '@/layout/adminpagelayout'
import PageWithLayout from '@/layout/pagewithlayout'


const Appointments: FC = () => {
  return (
    <div>Appointments</div>
  )
}

(Appointments as PageWithLayout).layout = AdminPageLayout
export default Appointments