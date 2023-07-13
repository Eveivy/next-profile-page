"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/profile-pic.png';
import { LuEdit, LuMapPin } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

const ProfilePortfolio = () => {
   const [active, setActive] = useState(true)

  return (
    <div className="container mx-auto flex items-center flex-col">
      <div className="w-full p-8">
        <div className="relative h-44 self-stretch rounded-t-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-800">
          <div className="flex justify-end">
            <button className="backdrop-blur-xl flex items-center bg-white/30 text-xs px-3 py-2 text-white rounded m-5">
              <LuEdit className='text-sm' />
              <span className='ps-1 mt-px'>Edit Cover </span>
            </button>
          </div>
          <div className="absolute top-28 left-0 h-32 w-32 ml-6 shrink-0 border-slate-50 border-2 rounded-full">
            <div className="relative">
              <Image src={profilePic} alt='profile image' />
              <div className="absolute bottom-0 right-0 bg-black rounded-full text-white text-lg font-bold w-8 h-8 p-2 flex items-center"><span className='ps-0.5 flex items-center'>5</span></div>
            </div>
          </div>
        </div>
        <div className="border-zinc-100 border-2 border-t-0 p-6 rounded-b-2xl items-start flex justify-start">
          <div className="ml-40">
            <div className="border-zinc-100 border-b-2 pb-8">
              <div className="flex items-center">
                <h1 className='text-3xl font-extrabold'>Anna Cheng</h1>
                <span className='ml-2 mt-1 bg-lime-400 rounded flex items-center px-3 py-0.5 font-bold text-black text-xs'>Pro</span>
                <span className='ml-2 mt-1 bg-sky-100 text-teal-955 rounded flex items-center px-3 py-1 font-bold text-xs'>Looking for job</span>
              </div>
              <div className="mt-3">
                <p className='text-zinc-500 text-base mb-2'>Full stack dev at codedamn | Harvard’22”</p>
                <p className="flex items-center text-zinc-500">
                  <span><LuMapPin className='text-sm' /></span>
                  <span className='text-sm px-1'>Mumbai, India</span>
                </p>
                <div className="flex items-center flex-wrap mt-8">
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>HTML 5</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>CSS 3</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>Bootstrap 5</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>Tailwind</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>JavaScript</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>React</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>NextJs</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>HTML 5</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>CSS 3</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>Bootstrap 5</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>Tailwind</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>JavaScript</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>React</span>
                  <span className='mr-3 mt-1 mb-2 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold text-black text-xs'>NextJs</span>
                </div>
              </div>

            </div>
            <div className="py-8 flex items-center justify-between">
              <div className="flex items-center">
                <Link href="" className="border-2 border-zinc-100 p-1 rounded-lg">
                  <FcGoogle className='w-5 h-5' />
                </Link>
                <Link href="" className="border-2 border-zinc-100 p-1 rounded-lg ms-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect width="20" height="20" rx="8" fill="white" />
                    <path d="M6.66747 10C6.66747 8.15912 8.15945 6.6664 10.0004 6.6664C11.8414 6.6664 13.3341 8.15912 13.3341 10C13.3341 11.8409 11.8414 13.3336 10.0004 13.3336C8.15945 13.3336 6.66747 11.8409 6.66747 10ZM4.86531 10C4.86531 12.836 7.16429 15.1349 10.0004 15.1349C12.8365 15.1349 15.1355 12.836 15.1355 10C15.1355 7.164 12.8365 4.86512 10.0004 4.86512C7.16429 4.86512 4.86531 7.164 4.86531 10ZM14.1387 4.66152C14.1386 4.89886 14.2089 5.13089 14.3407 5.32829C14.4725 5.52568 14.6598 5.67956 14.8791 5.77047C15.0983 5.86138 15.3396 5.88524 15.5724 5.83904C15.8052 5.79283 16.0191 5.67862 16.187 5.51087C16.3549 5.34311 16.4693 5.12934 16.5157 4.89658C16.5621 4.66382 16.5384 4.42253 16.4477 4.20322C16.3569 3.98392 16.2032 3.79644 16.0059 3.6645C15.8086 3.53257 15.5766 3.4621 15.3393 3.462H15.3388C15.0206 3.46215 14.7156 3.58856 14.4905 3.81347C14.2655 4.03837 14.139 4.34339 14.1387 4.66152ZM5.96024 18.1398C4.98524 18.0954 4.4553 17.933 4.10312 17.7958C3.63623 17.614 3.30309 17.3975 2.95284 17.0478C2.60258 16.698 2.38578 16.3652 2.20481 15.8983C2.06752 15.5463 1.90512 15.0162 1.86079 14.0413C1.81231 12.9872 1.80263 12.6706 1.80263 10.0001C1.80263 7.3296 1.81311 7.01384 1.86079 5.95888C1.9052 4.98392 2.0688 4.45488 2.20481 4.10184C2.38658 3.63496 2.60306 3.30184 2.95284 2.9516C3.30261 2.60136 3.63543 2.38456 4.10312 2.2036C4.45514 2.06632 4.98524 1.90392 5.96024 1.8596C7.01436 1.81112 7.33101 1.80144 10.0004 1.80144C12.6698 1.80144 12.9868 1.81192 14.0418 1.8596C15.0168 1.904 15.5458 2.0676 15.8989 2.2036C16.3658 2.38456 16.6989 2.60184 17.0492 2.9516C17.3994 3.30136 17.6154 3.63496 17.7972 4.10184C17.9345 4.45384 18.0969 4.98392 18.1412 5.95888C18.1897 7.01384 18.1994 7.3296 18.1994 10.0001C18.1994 12.6706 18.1897 12.9863 18.1412 14.0413C18.0968 15.0162 17.9336 15.5462 17.7972 15.8983C17.6154 16.3652 17.3989 16.6983 17.0492 17.0478C16.6994 17.3972 16.3658 17.614 15.8989 17.7958C15.5469 17.933 15.0168 18.0954 14.0418 18.1398C12.9876 18.1882 12.671 18.1979 10.0004 18.1979C7.32981 18.1979 7.01404 18.1882 5.96024 18.1398ZM5.87744 0.06056C4.81283 0.10904 4.08536 0.27784 3.45006 0.52504C2.79211 0.78032 2.23513 1.1228 1.67855 1.67848C1.12196 2.23416 0.780351 2.792 0.525061 3.44992C0.277851 4.0856 0.109044 4.81264 0.0605624 5.8772C0.0112805 6.94344 0 7.28432 0 10C0 12.7157 0.0112805 13.0566 0.0605624 14.1228C0.109044 15.1874 0.277851 15.9144 0.525061 16.5501C0.780351 17.2076 1.12205 17.7661 1.67855 18.3215C2.23505 18.877 2.79211 19.219 3.45006 19.475C4.08656 19.7222 4.81283 19.891 5.87744 19.9394C6.94428 19.9879 7.28461 20 10.0004 20C12.7162 20 13.0571 19.9887 14.1234 19.9394C15.188 19.891 15.915 19.7222 16.5507 19.475C17.2083 19.219 17.7657 18.8772 18.3223 18.3215C18.8788 17.7658 19.2197 17.2076 19.4757 16.5501C19.723 15.9144 19.8926 15.1874 19.9402 14.1228C19.9887 13.0558 20 12.7157 20 10C20 7.28432 19.9887 6.94344 19.9402 5.8772C19.8918 4.81256 19.723 4.0852 19.4757 3.44992C19.2197 2.7924 18.878 2.23504 18.3223 1.67848C17.7666 1.12192 17.2083 0.78032 16.5515 0.52504C15.915 0.27784 15.188 0.10824 14.1242 0.06056C13.0579 0.01208 12.717 0 10.0012 0C7.28541 0 6.94428 0.01128 5.87744 0.06056Z" fill="url(#paint0_radial_4_8215)" />
                    <path d="M6.66747 10C6.66747 8.15912 8.15945 6.6664 10.0004 6.6664C11.8414 6.6664 13.3341 8.15912 13.3341 10C13.3341 11.8409 11.8414 13.3336 10.0004 13.3336C8.15945 13.3336 6.66747 11.8409 6.66747 10ZM4.86531 10C4.86531 12.836 7.16429 15.1349 10.0004 15.1349C12.8365 15.1349 15.1355 12.836 15.1355 10C15.1355 7.164 12.8365 4.86512 10.0004 4.86512C7.16429 4.86512 4.86531 7.164 4.86531 10ZM14.1387 4.66152C14.1386 4.89886 14.2089 5.13089 14.3407 5.32829C14.4725 5.52568 14.6598 5.67956 14.8791 5.77047C15.0983 5.86138 15.3396 5.88524 15.5724 5.83904C15.8052 5.79283 16.0191 5.67862 16.187 5.51087C16.3549 5.34311 16.4693 5.12934 16.5157 4.89658C16.5621 4.66382 16.5384 4.42253 16.4477 4.20322C16.3569 3.98392 16.2032 3.79644 16.0059 3.6645C15.8086 3.53257 15.5766 3.4621 15.3393 3.462H15.3388C15.0206 3.46215 14.7156 3.58856 14.4905 3.81347C14.2655 4.03837 14.139 4.34339 14.1387 4.66152ZM5.96024 18.1398C4.98524 18.0954 4.4553 17.933 4.10312 17.7958C3.63623 17.614 3.30309 17.3975 2.95284 17.0478C2.60258 16.698 2.38578 16.3652 2.20481 15.8983C2.06752 15.5463 1.90512 15.0162 1.86079 14.0413C1.81231 12.9872 1.80263 12.6706 1.80263 10.0001C1.80263 7.3296 1.81311 7.01384 1.86079 5.95888C1.9052 4.98392 2.0688 4.45488 2.20481 4.10184C2.38658 3.63496 2.60306 3.30184 2.95284 2.9516C3.30261 2.60136 3.63543 2.38456 4.10312 2.2036C4.45514 2.06632 4.98524 1.90392 5.96024 1.8596C7.01436 1.81112 7.33101 1.80144 10.0004 1.80144C12.6698 1.80144 12.9868 1.81192 14.0418 1.8596C15.0168 1.904 15.5458 2.0676 15.8989 2.2036C16.3658 2.38456 16.6989 2.60184 17.0492 2.9516C17.3994 3.30136 17.6154 3.63496 17.7972 4.10184C17.9345 4.45384 18.0969 4.98392 18.1412 5.95888C18.1897 7.01384 18.1994 7.3296 18.1994 10.0001C18.1994 12.6706 18.1897 12.9863 18.1412 14.0413C18.0968 15.0162 17.9336 15.5462 17.7972 15.8983C17.6154 16.3652 17.3989 16.6983 17.0492 17.0478C16.6994 17.3972 16.3658 17.614 15.8989 17.7958C15.5469 17.933 15.0168 18.0954 14.0418 18.1398C12.9876 18.1882 12.671 18.1979 10.0004 18.1979C7.32981 18.1979 7.01404 18.1882 5.96024 18.1398ZM5.87744 0.06056C4.81283 0.10904 4.08536 0.27784 3.45006 0.52504C2.79211 0.78032 2.23513 1.1228 1.67855 1.67848C1.12196 2.23416 0.780351 2.792 0.525061 3.44992C0.277851 4.0856 0.109044 4.81264 0.0605624 5.8772C0.0112805 6.94344 0 7.28432 0 10C0 12.7157 0.0112805 13.0566 0.0605624 14.1228C0.109044 15.1874 0.277851 15.9144 0.525061 16.5501C0.780351 17.2076 1.12205 17.7661 1.67855 18.3215C2.23505 18.877 2.79211 19.219 3.45006 19.475C4.08656 19.7222 4.81283 19.891 5.87744 19.9394C6.94428 19.9879 7.28461 20 10.0004 20C12.7162 20 13.0571 19.9887 14.1234 19.9394C15.188 19.891 15.915 19.7222 16.5507 19.475C17.2083 19.219 17.7657 18.8772 18.3223 18.3215C18.8788 17.7658 19.2197 17.2076 19.4757 16.5501C19.723 15.9144 19.8926 15.1874 19.9402 14.1228C19.9887 13.0558 20 12.7157 20 10C20 7.28432 19.9887 6.94344 19.9402 5.8772C19.8918 4.81256 19.723 4.0852 19.4757 3.44992C19.2197 2.7924 18.878 2.23504 18.3223 1.67848C17.7666 1.12192 17.2083 0.78032 16.5515 0.52504C15.915 0.27784 15.188 0.10824 14.1242 0.06056C13.0579 0.01208 12.717 0 10.0012 0C7.28541 0 6.94428 0.01128 5.87744 0.06056Z" fill="url(#paint1_radial_4_8215)" />
                    <defs>
                      <radialGradient id="paint0_radial_4_8215" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.65723 20.0945) scale(26.1094 26.1083)">
                        <stop offset="0.09" stop-color="#FA8F21" />
                        <stop offset="0.78" stop-color="#D82D7E" />
                      </radialGradient>
                      <radialGradient id="paint1_radial_4_8215" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.1296 20.9905) scale(20.5778 20.577)">
                        <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
                        <stop offset="1" stop-color="#8C3AAA" />
                      </radialGradient>
                    </defs>
                  </svg>
                </Link>
                <Link href="" className="border-2 border-zinc-100 p-1 rounded-lg ms-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20 10C20 4.47717 15.5229 2.28882e-05 10 2.28882e-05C4.47715 2.28882e-05 0 4.47717 0 10C0 14.9913 3.65686 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.7969C8.4375 5.29065 9.93043 3.90627 12.2146 3.90627C13.3087 3.90627 14.4531 4.10159 14.4531 4.10159V6.56252H13.1921C11.9499 6.56252 11.5625 7.33336 11.5625 8.12418V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1283 20 14.9913 20 10Z" fill="#1877F2" />
                    <path d="M13.8926 12.8906L14.3359 10H11.5625V8.12416C11.5625 7.33334 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3087 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29062 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94662 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z" fill="white" />
                  </svg>
                </Link>
                <Link href="" className="border-2 border-zinc-100 p-1 rounded-lg ms-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0 1.43266C0 0.641875 0.662031 0 1.47812 0H18.5219C19.3383 0 20 0.641875 20 1.43266V18.5676C20 19.3586 19.3383 20 18.5219 20H1.47812C0.662109 20 0 19.3587 0 18.5678V1.43242V1.43266Z" fill="#2867B2" />
                    <path d="M6.07782 16.7374V7.73329H3.08501V16.7374H6.07813H6.07782ZM4.58204 6.50415C5.62547 6.50415 6.27508 5.81274 6.27508 4.94868C6.25555 4.06493 5.62547 3.39282 4.60188 3.39282C3.57758 3.39282 2.9086 4.06493 2.9086 4.9486C2.9086 5.81267 3.55797 6.50407 4.56243 6.50407H4.5818L4.58204 6.50415ZM7.73438 16.7374H10.727V11.7096C10.727 11.4409 10.7465 11.1714 10.8256 10.9795C11.0418 10.4416 11.5342 9.88478 12.3612 9.88478C13.4438 9.88478 13.8772 10.7104 13.8772 11.9209V16.7374H16.8697V11.5747C16.8697 8.80915 15.3934 7.5222 13.4245 7.5222C11.8102 7.5222 11.1012 8.42446 10.7073 9.03899H10.7272V7.7336H7.73454C7.7736 8.57829 7.7343 16.7377 7.7343 16.7377L7.73438 16.7374Z" fill="white" />
                  </svg>
                </Link>
                <Link href="" className="border-2 border-zinc-100 p-1 rounded-lg ms-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.582 5.51991C19.352 4.65946 18.6744 3.98171 17.8139 3.75174C16.2541 3.3338 9.99995 3.3338 9.99995 3.3338C9.99995 3.3338 3.74583 3.3338 2.1861 3.75174C1.32565 3.98171 0.647907 4.65946 0.41794 5.51991C0 7.07964 0 10.3338 0 10.3338C0 10.3338 0 13.588 0.41794 15.1477C0.647907 16.0081 1.32565 16.6859 2.1861 16.9158C3.74583 17.3339 9.99995 17.3339 9.99995 17.3339C9.99995 17.3339 16.2541 17.3339 17.8139 16.9158C18.6744 16.6859 19.352 16.0081 19.582 15.1477C20 13.588 20 10.3338 20 10.3338C20 10.3338 20 7.07964 19.582 5.51991Z" fill="#ED1D24" />
                    <path d="M7.99997 13.3337L13.196 10.3338L7.99997 7.33371V13.3337Z" fill="white" />
                  </svg>
                </Link>
              </div>
              <div className="flex items-center">
                <button className='bg-gray-100 p-3 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.59332 3.92004H3.40664C2.26664 3.92004 1.33331 4.85337 1.33331 5.99337V13.5667C1.33331 14.5334 2.02664 14.9467 2.87331 14.4734L5.49331 13.0134C5.77331 12.86 6.22665 12.86 6.49998 13.0134L9.11998 14.4734C9.96664 14.9467 10.66 14.5334 10.66 13.5667V5.99337C10.6666 4.85337 9.73332 3.92004 8.59332 3.92004Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.6666 5.99337V13.5667C10.6666 14.5334 9.97331 14.94 9.12665 14.4734L6.50665 13.0134C6.22665 12.86 5.77331 12.86 5.49331 13.0134L2.87331 14.4734C2.02664 14.94 1.33331 14.5334 1.33331 13.5667V5.99337C1.33331 4.85337 2.26664 3.92004 3.40664 3.92004H8.59332C9.73332 3.92004 10.6666 4.85337 10.6666 5.99337Z" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6666 3.4067V10.98C14.6666 11.9467 13.9733 12.3534 13.1266 11.8867L10.6666 10.5134V5.99337C10.6666 4.85337 9.73332 3.92004 8.59332 3.92004H5.33331V3.4067C5.33331 2.2667 6.26664 1.33337 7.40664 1.33337H12.5933C13.7333 1.33337 14.6666 2.2667 14.6666 3.4067Z" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button className='bg-indigo-600 py-2 px-4 rounded-lg text-white text-sm ms-4'>Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-zinc-100 border-2 p-6 rounded-2xl flex justify-start items-center my-10">
          <span onClick={() => setActive(true)} className={`mr-6 bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold ${active ? 'text-indigo-700': 'text-black'} text-xs cursor-pointer`}>Portfolio</span>
          <span onClick={() => setActive(false)} className={`bg-zinc-100 rounded-lg flex items-center px-3 py-2 font-bold ${!active ? 'text-indigo-700': 'text-black'} text-xs cursor-pointer`}>Resume</span>
        </div>
        {
          active ? <Portfolio/> : <Resume/>
        }
      </div>
    </div>
  )
}

export default ProfilePortfolio;
