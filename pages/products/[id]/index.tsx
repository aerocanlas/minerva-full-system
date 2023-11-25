import { useRouter } from 'next/router'
import React from 'react'
import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import { GetStaticPathsContext, GetStaticPropsContext } from 'next'



export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/product/getAllProducts", {
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
    cache: "force-cache"
  });
  const repo = await res.json();


  const paths = await repo.map(({ productID }: any) => {
    return { params: { id: productID } }
  })
  return {
      paths,
      fallback: true
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`http://localhost:3001/product/getProductById/${context.params?.id}`, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
  })

  return {
      props: {
        products: res
      }
  }
}


export default function Page({ res }: any) {


  const router = useRouter();

  
  if(router.isFallback) {
    return ( <p>Loading.....</p>)
  }

  return <div>{JSON.stringify(res,null,2)}</div>

}
