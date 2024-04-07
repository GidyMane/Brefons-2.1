import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/ui/avatar';
import { Button } from '@/shadcn/ui/button';
import React from 'react'
import { HamBurgerButton, SearchInput } from './HandleNavBarActions';
import Image from 'next/image';
import { ModeToggle } from './ThemeToggler';
import Link from 'next/link';

const NavBar = () => {

  return (
    <div className='w-full border-b'>
      <div className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-8 flex items-center justify-between py-4">
        <div className="flex flex-1 items-center justify-start gap-4 min-[375px]:gap-4 lg:gap-4">
          <HamBurgerButton />
          <Link href="https://flowbite.com/" className="flex items-center mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Brefons</span>
          </Link>        
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 min-[375px]:gap-4 md:gap-6">
          <SearchInput />
          
          <div className='md:h-10 md:w-10 rounded-full mx-2 outline-1'>
            <Avatar className='rounded-full'>
              <AvatarImage src="/maps.png" className='rounded-full h-8 w-8' />
              <AvatarFallback>maps</AvatarFallback>
            </Avatar>
          </div>
          <div className='md:h-10 md:w-10 rounded-full outline-1'>
            <Avatar className='rounded-full'>
              <AvatarImage src="https://github.com/shadcn.png" className='rounded-full h-8 w-8' />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
          </div>

          <ModeToggle />

        </div>
      </div>
    </div>
  )
}

export default NavBar


/**
 * Logo svgs
 */

function LogoText() {
  return (
    <svg width="149" height="42" viewBox="0 0 149 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_dd_3302_6976)">
        <path
          d="M6.02873 16.4468C4.90829 12.2653 7.3898 7.96719 11.5713 6.84676L29.5532 2.02852C33.7348 0.908086 38.0328 3.38959 39.1533 7.57112L43.9715 25.553C45.092 29.7345 42.6104 34.0326 38.4289 35.1531L20.447 39.9713C16.2655 41.0917 11.9674 38.6102 10.847 34.4287L6.02873 16.4468Z"
          fill="url(#linear-gradient-id-3017)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.2295 4.5523L12.2476 9.37053C9.45988 10.1175 7.80555 12.9829 8.55251 15.7706L13.3707 33.7525C14.1177 36.5402 16.9831 38.1945 19.7708 37.4475L37.7527 32.6293C40.5404 31.8823 42.1947 29.0169 41.4477 26.2293L36.6295 8.24736C35.8825 5.45968 33.0172 3.80534 30.2295 4.5523ZM11.5713 6.84676C7.3898 7.96719 4.90829 12.2653 6.02873 16.4468L10.847 34.4287C11.9674 38.6102 16.2655 41.0917 20.447 39.9713L38.4289 35.1531C42.6104 34.0326 45.092 29.7345 43.9715 25.553L39.1533 7.57112C38.0328 3.38959 33.7348 0.908085 29.5532 2.02852L11.5713 6.84676Z"
        fill="white"
      />
      <g filter="url(#filter1_dd_3302_6976)">
        <path
          d="M28.7698 11.1306L29.9856 15.668L24.5131 17.1344L29.9968 21.4011L25.0716 22.7208L26.8173 29.2361L22.4393 30.4092L20.6936 23.8939L25.0716 22.7208L19.2596 18.5421L18.0438 14.0046L28.7698 11.1306Z"
          fill="white"
        />
      </g>
      <path
        d="M64.5602 12V14.64H60.7802V26H58.0202V14.64H54.2602V12H64.5602ZM71.7646 16H74.3446V26H71.7646V24.82C70.9913 25.7933 69.9046 26.28 68.5046 26.28C67.1713 26.28 66.0246 25.7733 65.0646 24.76C64.118 23.7333 63.6446 22.48 63.6446 21C63.6446 19.52 64.118 18.2733 65.0646 17.26C66.0246 16.2333 67.1713 15.72 68.5046 15.72C69.9046 15.72 70.9913 16.2067 71.7646 17.18V16ZM67.0046 23.04C67.5246 23.56 68.1846 23.82 68.9846 23.82C69.7846 23.82 70.4446 23.56 70.9646 23.04C71.498 22.5067 71.7646 21.8267 71.7646 21C71.7646 20.1733 71.498 19.5 70.9646 18.98C70.4446 18.4467 69.7846 18.18 68.9846 18.18C68.1846 18.18 67.5246 18.4467 67.0046 18.98C66.4846 19.5 66.2246 20.1733 66.2246 21C66.2246 21.8267 66.4846 22.5067 67.0046 23.04ZM77.9642 14.8C77.5375 14.8 77.1642 14.6467 76.8442 14.34C76.5375 14.02 76.3842 13.6467 76.3842 13.22C76.3842 12.7933 76.5375 12.42 76.8442 12.1C77.1642 11.78 77.5375 11.62 77.9642 11.62C78.4042 11.62 78.7775 11.78 79.0842 12.1C79.4042 12.42 79.5642 12.7933 79.5642 13.22C79.5642 13.6467 79.4042 14.02 79.0842 14.34C78.7775 14.6467 78.4042 14.8 77.9642 14.8ZM76.6842 26V16H79.2642V26H76.6842ZM81.6256 26V11.4H84.2056V26H81.6256ZM91.947 14.2C90.5336 14.0933 89.827 14.66 89.827 15.9V16H91.947V18.48H89.827V26H87.247V18.48H85.807V16H87.247V15.9C87.247 14.4867 87.6403 13.4133 88.427 12.68C89.2136 11.9467 90.387 11.6267 91.947 11.72V14.2ZM95.7095 17.72C95.9495 17.08 96.3428 16.6 96.8895 16.28C97.4495 15.96 98.0695 15.8 98.7495 15.8V18.68C97.9628 18.5867 97.2561 18.7467 96.6295 19.16C96.0161 19.5733 95.7095 20.26 95.7095 21.22V26H93.1295V16H95.7095V17.72ZM107.487 16H110.067V26H107.487V24.82C106.714 25.7933 105.627 26.28 104.227 26.28C102.894 26.28 101.747 25.7733 100.787 24.76C99.8406 23.7333 99.3673 22.48 99.3673 21C99.3673 19.52 99.8406 18.2733 100.787 17.26C101.747 16.2333 102.894 15.72 104.227 15.72C105.627 15.72 106.714 16.2067 107.487 17.18V16ZM102.727 23.04C103.247 23.56 103.907 23.82 104.707 23.82C105.507 23.82 106.167 23.56 106.687 23.04C107.221 22.5067 107.487 21.8267 107.487 21C107.487 20.1733 107.221 19.5 106.687 18.98C106.167 18.4467 105.507 18.18 104.707 18.18C103.907 18.18 103.247 18.4467 102.727 18.98C102.207 19.5 101.947 20.1733 101.947 21C101.947 21.8267 102.207 22.5067 102.727 23.04ZM123.467 15.72C124.613 15.72 125.527 16.0933 126.207 16.84C126.9 17.5867 127.247 18.5867 127.247 19.84V26H124.667V20.02C124.667 19.42 124.52 18.9533 124.227 18.62C123.933 18.2867 123.52 18.12 122.987 18.12C122.4 18.12 121.94 18.3133 121.607 18.7C121.287 19.0867 121.127 19.6467 121.127 20.38V26H118.547V20.02C118.547 19.42 118.4 18.9533 118.107 18.62C117.813 18.2867 117.4 18.12 116.867 18.12C116.293 18.12 115.833 18.3133 115.487 18.7C115.153 19.0867 114.987 19.6467 114.987 20.38V26H112.407V16H114.987V17.06C115.587 16.1667 116.513 15.72 117.767 15.72C118.993 15.72 119.9 16.2 120.487 17.16C121.153 16.2 122.147 15.72 123.467 15.72ZM131.618 22.06C131.965 23.3133 132.905 23.94 134.438 23.94C135.425 23.94 136.171 23.6067 136.678 22.94L138.758 24.14C137.771 25.5667 136.318 26.28 134.398 26.28C132.745 26.28 131.418 25.78 130.418 24.78C129.418 23.78 128.918 22.52 128.918 21C128.918 19.4933 129.411 18.24 130.398 17.24C131.385 16.2267 132.651 15.72 134.198 15.72C135.665 15.72 136.871 16.2267 137.818 17.24C138.778 18.2533 139.258 19.5067 139.258 21C139.258 21.3333 139.225 21.6867 139.158 22.06H131.618ZM131.578 20.06H136.678C136.531 19.38 136.225 18.8733 135.758 18.54C135.305 18.2067 134.785 18.04 134.198 18.04C133.505 18.04 132.931 18.22 132.478 18.58C132.025 18.9267 131.725 19.42 131.578 20.06ZM143.049 18.84C143.049 19.1067 143.222 19.3267 143.569 19.5C143.929 19.66 144.362 19.8067 144.869 19.94C145.375 20.06 145.882 20.22 146.389 20.42C146.895 20.6067 147.322 20.9267 147.669 21.38C148.029 21.8333 148.209 22.4 148.209 23.08C148.209 24.1067 147.822 24.9 147.049 25.46C146.289 26.0067 145.335 26.28 144.189 26.28C142.135 26.28 140.735 25.4867 139.989 23.9L142.229 22.64C142.522 23.5067 143.175 23.94 144.189 23.94C145.109 23.94 145.569 23.6533 145.569 23.08C145.569 22.8133 145.389 22.6 145.029 22.44C144.682 22.2667 144.255 22.1133 143.749 21.98C143.242 21.8467 142.735 21.68 142.229 21.48C141.722 21.28 141.289 20.9667 140.929 20.54C140.582 20.1 140.409 19.5533 140.409 18.9C140.409 17.9133 140.769 17.14 141.489 16.58C142.222 16.0067 143.129 15.72 144.209 15.72C145.022 15.72 145.762 15.9067 146.429 16.28C147.095 16.64 147.622 17.16 148.009 17.84L145.809 19.04C145.489 18.36 144.955 18.02 144.209 18.02C143.875 18.02 143.595 18.0933 143.369 18.24C143.155 18.3867 143.049 18.5867 143.049 18.84Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_dd_3302_6976"
          x="0.759705"
          y="0.759521"
          width="48.4808"
          height="48.4807"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3302_6976" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_3302_6976" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_3302_6976" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_3302_6976" result="effect2_dropShadow_3302_6976" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3302_6976" result="shape" />
        </filter>
        <filter
          id="filter1_dd_3302_6976"
          x="13.0438"
          y="10.1306"
          width="21.953"
          height="29.2786"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3302_6976" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_3302_6976" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_3302_6976" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_3302_6976" result="effect2_dropShadow_3302_6976" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_3302_6976" result="shape" />
        </filter>
        <linearGradient
          id="linear-gradient-id-3017"
          x1="35.517"
          y1="32.8232"
          x2="27.6785"
          y2="4.89887"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2050D9" />
          <stop offset="1" stopColor="#6FA1F3" />
        </linearGradient>
      </defs>
    </svg>
  );
};
