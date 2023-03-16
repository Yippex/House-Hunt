import React from 'react'

const Search = () => {
  return (
    <div className='w-full'>
        <div className='w-full md:px-24 px-4 justify-between items-center pt-[2%] hidden md:visible'>
            <div>
                <input type="search" placeholder='search...' className='p-3 w-[600px] bg-slate-100 rounded-lg border' />
            </div>
            <div>
                <input type="search" className='p-3 w-[200px] bg-slate-100 rounded-lg border' />
                
            </div>
            <div>
                <button>Search</button>
            </div>


        </div>
    </div>
  )
}

export default Search