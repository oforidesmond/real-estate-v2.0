import React from 'react';
import apartments from "../public/apartments.svg"

function Footer() {
  return (
    <footer className='flex justify-center items-end mt-5'>
    <div className='p-2 max-w-max mx-auto'>
      <img src={apartments} alt='apartments' className='w-full h-auto object-cover' />
    </div>
  </footer>  
  )
}

export default Footer