import React from 'react'

const Hero1 = () => {
  return (
    <div style={{ zIndex: 1 }} class=" z-0 ">
    <svg
          width="100vw"
          height="900"
          viewBox="0 0 100vw 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100vw" height="900" fill="url(#paint0_linear_1_905)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_905"
              x1="2295.5"
              y1="-405"
              x2="623.5"
              y2="1162"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F197F4" />
              <stop offset="1" stop-color="#5B6AAA" />
            </linearGradient>
          </defs>
        </svg>
    </div>
  )
}

export default Hero1