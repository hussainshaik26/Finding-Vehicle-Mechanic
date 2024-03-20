import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <img src="https://automechanics.in/wp-content/uploads/2023/03/Slider_img.jpeg" alt="" className='bgimage'/>
      <div className="text w-100">
        <div className="row row-cols-2 d-flex">
          <div className='ms-5'>
            <h1 className='mainhead'><b>High Quality Repair & Maintance</b></h1>
            <br />
            <h2>Our troubleshooting means no trouble for you.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home