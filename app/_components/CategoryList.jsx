import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function CategoryList({categoryList}) {
  return (
    <div className='mt-5 '>
        <h2 className='font-bold text-2xl text-amber-500'>Shop By Category</h2>
   
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6  justify-items-center items-center mt-5'>
        {categoryList.map((category,index) => (
            <Link href="products-category/"  className='  w-30 h-35 mt-3  bg-amber-100  p-3 flex flex-col items-center text-center group' key={index}> 
                <Image   ssrc={slider?.image[0]?.url}/>
              <small className='text-amber-500 font-bold capitalize'>{category.name} </small>  
            </Link>
        ))}
    </div>
    </div>
    
  )
}

export default CategoryList
