import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import styles from '@/styles/customer/customer.module.scss'
import { TbMessage } from 'react-icons/tb'


const Chat: FC = () => {

  return (
    
  <div className={styles.bodyProducts}>
                <section className="relative mt-4 h-screen pb-12 mb-48 flex flex-col items-center justify-center text-center text-black ">
                
                <div className={styles.containerEdit}>
        <div className={styles.titleEdit}><TbMessage size={50} className="mr-4"/>Chats</div>
          <div className={styles.dividerEdit}></div>

                <div className="absolute top-16 mb-16 px-8 py-8 container mx-auto" >
            <div className="py-6 h-[650px]">
                <div className="flex border border-grey rounded shadow-lg h-full">

                    <div className="w-1/3 border flex flex-col">
                        <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center border-b-2">
                            <div>
                                <h1></h1>
                            </div>

                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                                </div>
                                <div className="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                                </div>
                                <div className="ml-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-grey-lighter flex-1 overflow-auto mt-2">
                            <div className="px-3 flex items-center bg-grey-light cursor-pointer">
                                <div>
                                    <img className="h-12 w-12 rounded-full"
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQC6JGtsOoLd15nf_VIiJc5yFkiyn08wgre6wYIol&s"/>
                                </div>
                                <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                    <div className="flex items-bottom justify-between">
                                        <p className="text-grey-darkest">
                                            Admin Minerva
                                        </p>
                                        <p className="text-xs text-grey-darkest">
                                            12:45 pm
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-2/3 border flex flex-col">
                        <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center ">
                            <div className="flex items-center">
                                <div>
                                    <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQC6JGtsOoLd15nf_VIiJc5yFkiyn08wgre6wYIol&s"/>
                                </div>
                                <div className="ml-4">
                                    <p className="text-grey-darkest">
                                        Admin Minerva
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
                                </div>
                                <div className="ml-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".5" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
                                </div>
                                <div className="ml-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-auto " >
                        <div className="h-[500px] py-2 px-3 bg-[#ffbd59]">

                            <div className="flex justify-center mb-2">
                                <div className="rounded py-2 px-4 bg-indigo-200 ">
                                    <p className="text-sm uppercase">
                                        November 23, 2023
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center mb-4">
                                <div className="rounded py-2 px-4">
                                    <p className="text-xs">
                                        Messages to this chat and calls are now secured with end-to-end encryption. Tap for more info.
                                    </p>
                                </div>
                            </div>

                            <div className="flex mb-2">
                                <div className="rounded py-2 px-3  bg-indigo-200">
                                    <p className="text-sm mt-1 ">
                                        Hi customer Juan, what can we do for you today?
                                    </p>
                                    <p className="text-right text-xs text-grey-dark mt-1">
                                        12:45 pm
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end mb-2">
                                <div className="rounded py-2 px-3 bg-white" >
                                    <p className="text-sm mt-1">
                                        Hi I love you
                                    </p>
                                    <p className="text-right text-xs text-grey-dark mt-1">
                                        12:45 pm
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end mb-2">
                                <div className="rounded py-2 px-3  bg-white" >
                                    <p className="text-sm mt-1">
                                        Suri wrong send po
                                    </p>
                                    <p className="text-right text-xs text-grey-dark mt-1">
                                        12:45 pm
                                    </p>
                                </div>
                            </div>

                            <div className="flex mb-2">
                                <div className="rounded py-2 px-3  bg-indigo-200">
                                    <p className="text-sm mt-1">
                                        Thank you, we hope to do business with you
                                    </p>
                                    <p className="text-right text-xs text-grey-dark mt-1">
                                        12:45 pm
                                    </p>
                                </div>
                            </div>

                            
                        </div>
                        </div>
                            <div className="bg-grey-lighter px-4 py-4 flex items-center">
                            <div className="flex-1 mx-4">
                                <input className="w-full border rounded px-2 py-2" type="text"/>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fill-opacity=".45" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            </div>
            </div>
                </section>
                            {/*  */}
                        <section className="relative -top-32 flex flex-col items-center justify-center text-center text-white ">
                        <footer className="h-62 bg-gradient-to-r w-full from-gray-100 via-[#FFBD59] to-gray-100">
                <div className="max-w-screen-xl mt-2 px-2 py-8 mx-auto sm:px-6 lg:px-8">
                    <div className="relative top-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                    <img src="/logo.png" className="mr-5 h-6 sm:h-6" alt="logo" />
                        <p className="max-w-xs mt-4 text-sm text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                        </p>
                        <div className="flex mt-8 space-x-6 text-gray-600">
                        <a href="https://www.facebook.com/MinervaSalesCorp" className="hover:opacity-75" target="_blank" rel="noreferrer">
                            <span className="sr-only"> Facebook </span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-1 lg:grid-cols-4">
                        <div>
                        <p className="font-medium text-black">
                        <a href="/products" className="hover:opacity-75">Products</a>
                        </p>
                        <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
                            <a href="" className="hover:opacity-75"> Tires </a>
                            <a href="" className="hover:opacity-75"> Car Battery </a>
                            <a href="" className="hover:opacity-75"> Oils </a>
                            <a href="" className="hover:opacity-75"> Tire Mags </a>
                            <a href="" className="hover:opacity-75"> Car Filters </a>
                        </nav>
                        </div>
                        <div>
                        <p className="font-medium text-black">
                        <a href="/services" className="hover:opacity-75 "> Services </a>
                        </p>
                        <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
                            <a href="" className="hover:opacity-75"> Oil Change </a>
                            <a href="" className="hover:opacity-75"> Change Tire </a>
                            <a href="" className="hover:opacity-75"> Alignment </a>
                        </nav>
                        </div>
                        <div>
                        <p className="font-medium text-black">
                            Helpful Links
                        </p>
                        <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
                            <a href="" className="hover:opacity-75"> Contact </a>
                            <a href="" className="hover:opacity-75"> About </a>
                            <a href="" className="hover:opacity-75"> Live Chat </a>
                        </nav>
                        </div>
                        <div>
                        <p className="font-medium text-black">
                            Legal
                        </p>
                        <nav className="flex flex-col mt-1 space-y-1 text-sm text-black">
                            <a href="" className="hover:opacity-75" > Privacy Policy </a>
                            <a href="" className="hover:opacity-75" > Terms &amp; Conditions </a>
                            <a href="" className="hover:opacity-75" > Returns Policy </a>
                        </nav>
                        </div>
                    </div>
                    </div>
                    <p className="mt-9 text-xs text-gray-800">
                    © 2023 Minerva Sales Corporation
                    </p>
                </div>
                </footer>
                </section>
                        
          </div>
            
  )
}

(Chat as PageWithLayout).layout = HomePageLayout
export default Chat