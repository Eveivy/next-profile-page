"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pic from "../../public/profile-pic.png"
import portfolio from "../../public/portfolio-sample.png"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { HiDotsHorizontal } from "react-icons/hi"

const EditPortfolio = () => {
  const [checked, setChecked] = useState(0);
  const [checkedProject, setCheckedProject] = useState(0);
  const playgrounds = [1, 2, 3, 4];
  const projects = [6, 9, 8, 7];

  return (
    <div className="container">
      <div className="my-10">
        <div className="grid-rows-1 mb-6 flex justify-between items-center">
          <h2 className="md:text-2xl text-xl font-bold">Playgrounds</h2>
          <Link href="/settings/update-socials" className="font-normal text-zinc-500 text-sm md:text-base"><span>See all</span></Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {
            playgrounds.map((el) => {
              return (
                <label key={el} htmlFor={el} className={`cursor-pointer transition-all ease-in duration-100 rounded-lg border flex justify-between p-4 h-32 ${checked == el ? 'bg-[#EEF2FF] border-indigo-700 border-2' : 'border-zinc-100 bg-zinc-50'}`}>
                  <div className="flex">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M38.1667 0.333359C38 0.166641 37.8334 0 37.5001 0H2.5C2.33336 0 2.00008 0.166641 1.83336 0.333359C1.66664 0.500078 1.66672 0.666719 1.66672 1L5.00008 34.3334C5.00008 34.6667 5.33344 35 5.5 35L20.5 40H20.8334H21.1667L34.5 35C34.8334 34.8334 34.9999 34.6666 34.9999 34.3334L38.3333 1C38.3334 0.833438 38.3334 0.5 38.1667 0.333359Z" fill="url(#paint0_linear_7639_2064)" />
                      <path d="M19.7917 30.1667C19.7917 30.3334 19.625 30.6667 19.4584 30.8334C19.2917 31 19.1152 31.0221 18.9486 31.0221L18.7918 31L12.9584 29.3334C12.6251 29.1667 12.4585 29 12.2918 28.6667L11.4584 24.5C11.2918 24.0001 11.6251 23.6666 12.1251 23.5C12.625 23.3334 12.9584 23.6666 13.1252 24.1666L13.7918 27.8333L18.1252 29V10.1667H8.95836C8.45844 10.1667 8.125 9.83336 8.125 9.33336C8.125 8.83344 8.45836 8.5 8.95836 8.5H18.9584C19.4583 8.5 19.7917 8.83336 19.7917 9.33336V30.1667ZM31.4584 9.5L30.625 12.8334C30.4584 13.3333 30.1186 13.5802 29.625 13.5C29.1048 13.4156 28.9056 12.9973 28.9584 12.4999C29.0212 11.9066 29.4583 10.1666 29.4583 10.1666H22.9583V18.5H28.7916C28.9583 18.5 29.2916 18.6666 29.4583 18.8334C29.6249 19 29.6249 19.3333 29.6249 19.5L27.9583 28.6666C27.9583 29 27.6249 29.1666 27.4584 29.3333L22.4584 30.9999C22.2917 30.9999 21.6862 31.2304 21.2916 30.5C21.125 30.0001 21.4583 29.6666 21.7916 29.4999L26.2916 27.9999L27.6249 20.3332H21.9582C21.4583 20.3332 21.1248 19.9998 21.1248 19.4998V9.49984C21.1248 8.99992 21.4582 8.66648 21.9582 8.66648H30.2916C30.6249 8.66648 30.853 8.73773 31.0709 8.82797C31.533 9.01945 31.4584 9.33336 31.4584 9.5Z" fill="url(#paint1_linear_7639_2064)" />
                      <defs>
                        <linearGradient id="paint0_linear_7639_2064" x1="27.5214" y1="4.85075e-08" x2="4.70457" y2="33.1024" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#131416" />
                          <stop offset="1" stopColor="#1A1B1F" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_7639_2064" x1="31.4628" y1="8.5" x2="6.34829" y2="22.5131" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#B0FF4D" />
                          <stop offset="1" stopColor="#FFE926" />
                        </linearGradient>
                      </defs>
                    </svg></span>
                    <div className="ml-3">
                      <h4 className="font-semibold md:text-lg text-base text-zinc-900 mb-2">Playground Title</h4>
                      <p className="flex items-center">
                        <span className="text-zinc-500 text-sm font-medium">HTML/CSS</span>
                        <span className="mx-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#71717A" />
                          </svg>
                        </span>
                        <span className="text-zinc-500 text-sm font-medium">1 min ago</span>
                      </p>
                      <div className="flex items-center pt-3">
                        <div className="relative w-12 flex items-center">
                          <div className="absolute z-auto">
                            <Image src={pic} alt="Image 1" className="h-6 w-6" />
                          </div>
                          <div className="absolute left-5 z-30">
                            <Image src={pic} alt="Image 2" className="h-6 w-6" />
                          </div>
                        </div>
                        <p className="text-zinc-500 text-xs font-medium">Shared with <span className="font-bold">Adam, Anna..</span> +7 more</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start span justify-center relative">
                    <input
                      checked={checked === el}
                      onChange={(ev) => setChecked(ev.target.value)}
                      id={el}
                      type="radio"
                      value={el}
                      name={el}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  </div>
                </label>
              )
            })
          }
        </div>
        <div className="mt-10">
          <div className="grid-rows-1 mb-6 flex justify-between items-center">
            <h2 className="md:text-2xl text-xl font-bold">Projects</h2>
            <Link href="/settings/update-socials" className="font-normal text-zinc-500 text-sm md:text-base"><span>See all</span></Link>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
            {
              projects.map(el =>
                <label key={el} htmlFor={el} className={`cursor-pointer rounded-lg border ${checkedProject == el ? 'bg-[#EEF2FF] border-indigo-700 border-2' : 'border-zinc-100 bg-zinc-50'} flex flex-col justify-center items-start p-4`}>
                  <div className="w-full">
                    <Image src={portfolio} alt="portfolio sample" className="w-full" />
                  </div>
                  <div className="mt-5 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold md:text-lg text-base text-zinc-900">Personal Portfolio Website</h3>
                      <BiDotsHorizontalRounded className="text-zinc-500 h-5 w-5" />
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-zinc-500 text-sm font-medium">HTML/CSS</span>
                      <span className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#71717A" />
                        </svg>
                      </span>
                      <span className="text-zinc-500 text-sm font-medium">Javascript</span>
                      <span className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#71717A" />
                        </svg>
                      </span>
                      <span className="text-zinc-500 text-sm font-medium">1 min ago</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative w-12 flex items-center">
                          <div className="absolute z-auto">
                            <Image src={pic} alt="Image 1" className="h-6 w-6" />
                          </div>
                          <div className="absolute left-5 z-30">
                            <Image src={pic} alt="Image 2" className="h-6 w-6" />
                          </div>
                          <div className="absolute left-2.5 z-20">
                            <Image src={pic} alt="Image 2" className="h-6 w-6" />
                          </div>
                        </div>
                        <p className="text-zinc-500 text-xs font-normal">3 Contributors</p>
                      </div>
                      <input id={el} type="radio" value={el} name={el} className="opacity-0" checked={checkedProject === el}
                        onChange={(ev) => setCheckedProject(ev.target.value)} />
                    </div>

                  </div>
                </label>
              )
            }
          </div>
        </div>
        <div className="mt-10 pb-10 flex justify-end items-start self-stretch">
          <button className='bg-gray-100 px-4 py-2 h-10 rounded-lg mr-3 text-zinc-900 font-semibold text-sm'>Cancel</button>
          <button className='bg-indigo-600 py-2 h-10 font-semibold px-4 rounded-lg text-white text-sm'>Save changes</button>
        </div>
      </div>
    </div>

  )
}

export default EditPortfolio;