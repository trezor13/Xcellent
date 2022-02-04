import React from 'react';
import image from '../images/image.jpg'

function Content() {
  return( 
      <>
      
      <div className='flex flex-col justify-center items-center
  bg-white h-screen font-mono py-40'>
      <img src={image} alt='image' className=' h-full rounded mb=20 shadow'/>
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-2xl mb-2'>Fear the Beard</h2>
     <p className='mb-2'>Got the best Crossovers</p>
   <span>13</span>
    </div>
 </div>

<div className='flex flex-col justify-center items-center
bg-white h-screen font-mono py-40'>
    <img src={image} alt='image' className=' h-full rounded mb=20 shadow'/>
  <div className='flex flex-col justify-center items-center'>
    <h2 className='text-2xl mb-2'>Fear the Beard</h2>
   <p className='mb-2'>Got the best Crossovers</p>
 <span>13</span>
  </div>
</div>


      </>


  );
}

export default Content;
