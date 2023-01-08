import React from 'react'

const handleClick = () => {
    window.scrollTo(0, 0);
}

const BTNToTheTop = () => {
  return (
    <>
        <svg onClick={handleClick} className='fixed bottom-5 left-10 cursor-pointer ' width="51" height="49" viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="GoToTop BTN">
                <path id="Ellipse 1" d="M50.5 24.5311C50.5 37.6381 39.3306 48.305 25.5 48.305C11.6694 48.305 0.5 37.6381 0.5 24.5311C0.5 11.424 11.6694 0.75708 25.5 0.75708C39.3306 0.75708 50.5 11.424 50.5 24.5311Z" fill="white" stroke="#5D0505"/>
                <g id="Ellipse 2" filter="url(#filter0_i_830_253)">
                    <ellipse cx="26" cy="24.0551" rx="21" ry="19.9903" fill="white"/>
                </g>
                <path id="Polygon 2" d="M25.5 16.4397L37.1913 29.2907L13.8087 29.2907L25.5 16.4397Z" fill="#5D0505"/>
            </g>
            <defs>
                <filter id="filter0_i_830_253" x="5" y="4.06476" width="42" height="43.9807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_830_253"/>
                </filter>
            </defs>
        </svg>
    </>
  )
}

export default BTNToTheTop