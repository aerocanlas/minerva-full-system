import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'


export default function Page({ res }: any) {


  const router = useRouter();
  const [ products, setProducts ] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/product/getProductById/${router.query.id}`, {
        method: "GET",
        cache: "force-cache"
      })


      const result = await res.json();

      setProducts(result)
    }



    fetchData();
  }, [ router ])

  if (router.isFallback) {
    return (<p>Loading.....</p>)
  }

  return <div>{JSON.stringify(products, null, 2)}</div>

}
