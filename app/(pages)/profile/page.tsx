import React from 'react'

export default function page() {
  return (
    <section className="w-full flex justify-center">
      <div className="gap-5 flex 2xl:flex-row xl:flex-row flex-col min-h-[100vh] w-full 2xl:w-[1400px] xl:w-[1400px] py-5 sm:px-[50px] px-[5vw]">
        <aside className="xl:w-[300px] w-full min-h-[10vh]">
          <div className="w-full rounded bg-white p-[20px] flex flex-col items-center border border-slate-300 gap-2">
            <div className="w-[100px] h-[100px] bg-slate-400 rounded-full"></div>
            <h1 className="text-xl text-center font-semibold">Your Name</h1>
            <div className="flex flex-col gap-2 items-center leading-none">
              <p>my number</p>
              <p>email</p>
            </div>

          </div>    
        </aside>
        <main className="flex-1 min-h-[10vh]">
          <div className="w-full rounded bg-white p-[20px] flex justify-center border border-slate-300 ">

          </div>      
        </main>
      </div> 
    </section>
  )
}
