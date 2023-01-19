import React from 'react'

const handleClick = () => {
    window.scrollTo(0, 0);
}

export const BTNToTheTopOpenHouse = () => {
  return (
    <>
        <svg onClick={handleClick} className='fixed bottom-5 left-10 cursor-pointer z-[1000]' width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_505_6994)">
            <circle cx="21.5" cy="21.5" r="21.5" fill="white"/>
            </g>
            <circle cx="21.5" cy="21.5" r="20.5" stroke="#606060" stroke-width="2"/>
            <path d="M23.0607 9.93934C22.4749 9.35355 21.5251 9.35355 20.9393 9.93934L11.3934 19.4853C10.8076 20.0711 10.8076 21.0208 11.3934 21.6066C11.9792 22.1924 12.9289 22.1924 13.5147 21.6066L22 13.1213L30.4853 21.6066C31.0711 22.1924 32.0208 22.1924 32.6066 21.6066C33.1924 21.0208 33.1924 20.0711 32.6066 19.4853L23.0607 9.93934ZM23.5 31L23.5 11L20.5 11L20.5 31L23.5 31Z" fill="black"/>
            <defs>
                <filter id="filter0_i_505_6994" x="0" y="0" width="43" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_505_6994"/>
                </filter>
            </defs>
        </svg>
    </>
  )
}