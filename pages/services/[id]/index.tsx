import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'


export default function Page({ res }: any) {


  const router = useRouter();
  const [ services, setServices ] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/services/getServicesById/${router.query.id}`, {
        method: "GET",
        cache: "force-cache"
      })


      const result = await res.json();

      setServices(result)
    }



    fetchData();
  }, [ router ])

  if (router.isFallback) {
    return (<p>Loading.....</p>)
  }

  return <div>{JSON.stringify(services, null, 2)}</div>

}
