import React from 'react'
import women from "../img/woman_hero.png"

export default function Hero() {
  return (
    <div>
      <div className="h-[500px] w-[100%] bg-hero bg-no-repeat bg-cover bg-center py-4">
        <div className='container mx-auto flex justify-around h-full'>
          <div className='flex flex-col justify-center'>
            <div className='font-semibold uppercase flex items-center'>
              <div className='w-10 h-[2px] bg-red-600'></div> new trend
            </div>
            <h1 className='text-[53px] font-light leading-[1.1]'>AUTUMN SALE STYLISH <br/>
            <span className='font-semibold'>WOMENS</span>
            </h1>
          </div>
          <div className='hidden lg:block'>
            <img className='h-[484px]' src={women} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}


