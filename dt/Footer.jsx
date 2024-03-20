import "./Footer.css" 
import React from 'react'

function Footer() {
  return (
    <div className=' bg-black p-4'>
      <div className=' text-light text-center'>
        <p>FOLLOW US ON</p>
      </div>
      <div>
        <ul className="nav justify-content-center" >
          <li className='nav-item justify-content-center'>
            <img src="data:image/png;base64,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" alt="" className='w-25 d-block mx-auto rounded-circle footer' />
            <p className="text-primary mt-3 mx-5 name">mechanic_official</p>
          </li>
          <li className='nav-item justify-content-center'>
            <img src="data:image/png;base64,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" alt="" className='w-25 rounded-circle d-block mx-auto footer' />
            <p className="text-primary mt-3 my-3 name ">mechanicalinst_official</p>
          </li>
         
          <li className='nav-item justify-content-center'>
            <img src="data:image/png;base64,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" alt="" className='w-25 rounded-circle d-block mx-auto footer' />
            <p className="text-primary mt-3 my-3 name">mechanicatwitter_official</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer