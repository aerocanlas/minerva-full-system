import HeaderNavbarAuth from '@/components/headerNavAuth'
import React, { ReactNode} from 'react'

export default function HomePageLayout({children}: { children: ReactNode}) {
  return (
    <div>
        <HeaderNavbarAuth />
        {children}
    </div>
  )
}
