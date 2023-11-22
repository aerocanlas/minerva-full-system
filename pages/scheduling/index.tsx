import HomePageLayout from '@/layout/homepagelayout'
import PageWithLayout from '@/layout/pagewithlayout'
import React, { FC } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const  Scheduling: FC= () => {
    return (
    <div> 
<div className="w-screen relative top-20">
  <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-yellow-100/60 py-32 text-center shadow-xl shadow-gray-300">
    <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">Book a Service</h1>
    <p className="mt-6 text-lg text-white">Get an appointment with our experienced accountants</p>
    <img className="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
  </div>

  <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
  <div className="">
      <p className="font-serif text-xl font-bold text-black-900">Name</p>
      </div>
      <div className="relative mt-4 w-56 mb-5">
      <input type="name" id="name" className="bg-yellow-50 border border-[#FFBD59] p-2 text-gray-900 sm:text-xs rounded-lg border-yellow-100 bg-yellow-50 p-2.5 w-60 text-black-800 outline-none ring-opacity-30 placeholder:text-black-800 focus:ring focus:ring-[#FFBD59]" ></input>
</div>

    <div className="">
      <p className="font-serif text-xl font-bold text-black-900">Select a Service</p>
      <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
            <div className="relative">
                <input className="peer hidden" id="radio_1" type="radio" name="radio" />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-amber-300"></span>
                <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-[#FFBD59] peer-checked:text-white" htmlFor="radio_1">
                <span className="mt-2- font-medium">Service 1</span>
                <span className="text-xs uppercase">1 Hour</span>
                </label>
            </div>
        
        <div className="relative">
          <input className="peer hidden" id="radio_2" type="radio" name="radio" />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-amber-300"></span>

          <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-[#FFBD59] peer-checked:text-white" htmlFor="radio_2">
            <span className="mt-2 font-medium">Service 2</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>

        <div className="relative">
          <input className="peer hidden" id="radio_3" type="radio" name="radio" />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-amber-300"></span>

          <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-[#FFBD59] peer-checked:text-white" htmlFor="radio_3">
            <span className="mt-2 font-medium">Service 3</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>

        <div className="relative">
          <input className="peer hidden" id="radio_4" type="radio" name="radio" />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-amber-300"></span>

          <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-[#FFBD59] peer-checked:text-white" htmlFor="radio_4">
            <span className="mt-2 font-medium">Service 4</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>

        <div className="relative">
          <input className="peer hidden" id="radio_5" type="radio" name="radio" />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-amber-300"></span>

          <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-[#FFBD59] peer-checked:text-white" htmlFor="radio_5">
            <span className="mt-2 font-medium">Service 5</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>

        <div className="relative">
          <input className="peer hidden" id="radio_6" type="radio" name="radio" />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-amber-300"></span>

          <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-[#FFBD59] peer-checked:text-white" htmlFor="radio_6">
            <span className="mt-2 font-medium">Service 6</span>
            <span className="text-xs uppercase">1 Hour</span>
          </label>
        </div>

      </div>
    </div>
    

    <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-black-900">Select a Date</p>
      <div className="relative mt-4 w-56">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg aria-hidden="true" className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        
        <div className="relative max-w-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg aria-hidden="true" className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker="" datepicker-orientation="bottom" autofocus="autofocus" type="text" class="datepicker-input block w-full rounded-lg border border-yellow-100 bg-yellow-50 p-2.5 pl-10 text-black-800 outline-none ring-opacity-30 placeholder:text-black-800 focus:ring focus:ring-[#FFBD59] sm:text-sm" placeholder="Select date" />

</div>
      </div>
    </div>

    <div className="">
      <p className="mt-8 font-serif text-xl font-bold text-black-900">Select a Time</p>
      <div className="mt-4 grid grid-cols-3 gap-2 lg:max-w-xl">
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">08:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">09:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">10:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">11:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">12:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">1:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">2:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">3:00</button>
        <button className="rounded-lg bg-yellow-100 px-4 py-2 font-medium text-black-900 active:scale-95 hover:bg-[#FFBD59] hover:text-white border-2 focus:outline-none">4:00</button>
      </div>
    </div>
    <button className="mt-8 w-56 rounded-full border-6 border-yellow-100 bg-[#FFBD59] px-16 py-4 text-base font-bold text-white transition hover:translate-y-1">Schedule</button>
  </div>
</div>
<script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>

</div>
    )
    
}

(Scheduling as PageWithLayout).layout = HomePageLayout
export default Scheduling
