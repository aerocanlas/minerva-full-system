import PageWithLayout from '@/layout/pagewithlayout'
import '@/styles/globals.scss'

type AppProps=  {
  Component: PageWithLayout
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  const Layout = Component.layout || (({children}) => <>{children}</>)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
