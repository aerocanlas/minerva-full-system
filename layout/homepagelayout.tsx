import HeaderNavbar from '@/components/headerNav'
import React, { ReactNode} from 'react'

export default function HomePageLayout({children}: { children: ReactNode}) {
  return (
    <div>
        <HeaderNavbar />
        {children}
    </div>
  )
}
