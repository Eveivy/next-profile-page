"use client"

import { useState } from "react"
import Image from "next/image"
import harvardLogo from "@/public/harvard.png"
import Link from "next/link"

const EditResume = () => {

  const [checkedSkill, setCheckedSkill] = useState(0);
  const [checkedLang, setCheckedLang] = useState(0);
  const [checkedInterest, setCheckedInterest] = useState(0);
  const skills = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const interests = [5, 15, 25, 35, 45, 55, 65, 75];
  const languages = [11, 12, 13, 14, 16, 17];

  return (
    <div className="container">
      <form>
        <div className="flex flex-col justify-center">
          <label htmlFor="about_me" className="block text-zinc-900 mb-3 md:text-2xl text-lg font-bold">About Me</label>
          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex p-3 items-start self-stretch mt-3">
            <textarea value="A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done. A student who is passionate and with a keen eye for design" id="about_me" name="about_me" cols="20" rows="5"
              className="resize-none bg-transparent focus:border-none outline-none w-full py-3.5 px-3 text-zinc-500 text-base font-normal" />
          </div>
        </div>
        <div className="mt-10">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="md:text-2xl text-xl font-bold">Work Experience</h2>
            <Link href="" className="font-normal text-zinc-500 text-sm md:text-base"><span>See All</span></Link>
          </div>
          <div className="flex flex-col justify-center mt-3">
            <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex md:p-6 p-3 items-start self-stretch">
              <span className="mr-4 md:block hidden"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M36.6644 20.3695C36.6846 19.2233 36.5636 18.0771 36.3082 16.9639H20.3384V23.1494H29.7146C29.3584 25.343 28.1015 27.2929 26.2397 28.5576L26.2061 28.7619L31.2538 32.5957L31.6033 32.6286C34.8094 29.7236 36.6644 25.4484 36.6644 20.3695Z" fill="#4285F4" />
                <path d="M20.3384 36.6666C24.929 36.6666 28.787 35.1844 31.6033 32.6285L26.2397 28.5509C24.4988 29.6971 22.4354 30.2768 20.3451 30.2175C15.9359 30.1912 12.0375 27.3981 10.6664 23.2876L10.4647 23.3074L5.21541 27.2861L5.14819 27.4706C8.02491 33.116 13.9061 36.6732 20.3384 36.6666Z" fill="#34A853" />
                <path d="M10.6596 23.2942C10.2899 22.2337 10.095 21.1204 10.095 19.9939C10.1017 18.8741 10.2899 17.7608 10.6462 16.6937L10.6394 16.4763L5.32288 12.4316L5.14813 12.5107C2.72846 17.2207 2.72846 22.7672 5.14813 27.4772L10.6596 23.2942Z" fill="#FBBC05" />
                <path d="M20.3384 9.77695C22.7782 9.73743 25.1307 10.6267 26.9118 12.2604L31.7108 7.66899C28.6325 4.83642 24.5526 3.28839 20.3316 3.3345C13.8994 3.3345 8.01821 6.88509 5.13477 12.5239L10.6328 16.7069C12.0174 12.5963 15.9225 9.8033 20.3384 9.77695Z" fill="#EB4335" />
              </svg></span>
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <span className="mr-4 md:hidden block"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M36.6644 20.3695C36.6846 19.2233 36.5636 18.0771 36.3082 16.9639H20.3384V23.1494H29.7146C29.3584 25.343 28.1015 27.2929 26.2397 28.5576L26.2061 28.7619L31.2538 32.5957L31.6033 32.6286C34.8094 29.7236 36.6644 25.4484 36.6644 20.3695Z" fill="#4285F4" />
                    <path d="M20.3384 36.6666C24.929 36.6666 28.787 35.1844 31.6033 32.6285L26.2397 28.5509C24.4988 29.6971 22.4354 30.2768 20.3451 30.2175C15.9359 30.1912 12.0375 27.3981 10.6664 23.2876L10.4647 23.3074L5.21541 27.2861L5.14819 27.4706C8.02491 33.116 13.9061 36.6732 20.3384 36.6666Z" fill="#34A853" />
                    <path d="M10.6596 23.2942C10.2899 22.2337 10.095 21.1204 10.095 19.9939C10.1017 18.8741 10.2899 17.7608 10.6462 16.6937L10.6394 16.4763L5.32288 12.4316L5.14813 12.5107C2.72846 17.2207 2.72846 22.7672 5.14813 27.4772L10.6596 23.2942Z" fill="#FBBC05" />
                    <path d="M20.3384 9.77695C22.7782 9.73743 25.1307 10.6267 26.9118 12.2604L31.7108 7.66899C28.6325 4.83642 24.5526 3.28839 20.3316 3.3345C13.8994 3.3345 8.01821 6.88509 5.13477 12.5239L10.6328 16.7069C12.0174 12.5963 15.9225 9.8033 20.3384 9.77695Z" fill="#EB4335" />
                  </svg></span>
                  <h5 className="md:text-xl text-lg font-semibold">Front-end developer at Google</h5>
                </div>
                <div className="flex items-center justify-between text-base font-normal mb-6 mt-2 md:mt-0">
                  <p className="flex items-center">
                    <span>London</span>
                    <span className="mx-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#71717A" />
                      </svg>
                    </span>
                    <span>Google Inc.</span>
                  </p>
                  <p className="font-semibold">May 2021 - Present</p>
                </div>
                <p className="text-zinc-500 font-normal">This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.</p>
              </div>
            </div>
            <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex md:p-6 p-3 items-start self-stretch mt-6">
              <span className="mr-4 md:block hidden"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M36.6644 20.3695C36.6846 19.2233 36.5636 18.0771 36.3082 16.9639H20.3384V23.1494H29.7146C29.3584 25.343 28.1015 27.2929 26.2397 28.5576L26.2061 28.7619L31.2538 32.5957L31.6033 32.6286C34.8094 29.7236 36.6644 25.4484 36.6644 20.3695Z" fill="#4285F4" />
                <path d="M20.3384 36.6666C24.929 36.6666 28.787 35.1844 31.6033 32.6285L26.2397 28.5509C24.4988 29.6971 22.4354 30.2768 20.3451 30.2175C15.9359 30.1912 12.0375 27.3981 10.6664 23.2876L10.4647 23.3074L5.21541 27.2861L5.14819 27.4706C8.02491 33.116 13.9061 36.6732 20.3384 36.6666Z" fill="#34A853" />
                <path d="M10.6596 23.2942C10.2899 22.2337 10.095 21.1204 10.095 19.9939C10.1017 18.8741 10.2899 17.7608 10.6462 16.6937L10.6394 16.4763L5.32288 12.4316L5.14813 12.5107C2.72846 17.2207 2.72846 22.7672 5.14813 27.4772L10.6596 23.2942Z" fill="#FBBC05" />
                <path d="M20.3384 9.77695C22.7782 9.73743 25.1307 10.6267 26.9118 12.2604L31.7108 7.66899C28.6325 4.83642 24.5526 3.28839 20.3316 3.3345C13.8994 3.3345 8.01821 6.88509 5.13477 12.5239L10.6328 16.7069C12.0174 12.5963 15.9225 9.8033 20.3384 9.77695Z" fill="#EB4335" />
              </svg></span>
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <span className="mr-4 md:hidden block"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M36.6644 20.3695C36.6846 19.2233 36.5636 18.0771 36.3082 16.9639H20.3384V23.1494H29.7146C29.3584 25.343 28.1015 27.2929 26.2397 28.5576L26.2061 28.7619L31.2538 32.5957L31.6033 32.6286C34.8094 29.7236 36.6644 25.4484 36.6644 20.3695Z" fill="#4285F4" />
                    <path d="M20.3384 36.6666C24.929 36.6666 28.787 35.1844 31.6033 32.6285L26.2397 28.5509C24.4988 29.6971 22.4354 30.2768 20.3451 30.2175C15.9359 30.1912 12.0375 27.3981 10.6664 23.2876L10.4647 23.3074L5.21541 27.2861L5.14819 27.4706C8.02491 33.116 13.9061 36.6732 20.3384 36.6666Z" fill="#34A853" />
                    <path d="M10.6596 23.2942C10.2899 22.2337 10.095 21.1204 10.095 19.9939C10.1017 18.8741 10.2899 17.7608 10.6462 16.6937L10.6394 16.4763L5.32288 12.4316L5.14813 12.5107C2.72846 17.2207 2.72846 22.7672 5.14813 27.4772L10.6596 23.2942Z" fill="#FBBC05" />
                    <path d="M20.3384 9.77695C22.7782 9.73743 25.1307 10.6267 26.9118 12.2604L31.7108 7.66899C28.6325 4.83642 24.5526 3.28839 20.3316 3.3345C13.8994 3.3345 8.01821 6.88509 5.13477 12.5239L10.6328 16.7069C12.0174 12.5963 15.9225 9.8033 20.3384 9.77695Z" fill="#EB4335" />
                  </svg></span>
                  <h5 className="md:text-xl text-lg font-semibold">Front-end developer at Google</h5>
                </div>
                <div className="flex items-center justify-between text-base font-normal mb-6 mt-2 md:mt-0">
                  <p className="flex items-center">
                    <span>London</span>
                    <span className="mx-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#71717A" />
                      </svg>
                    </span>
                    <span>Google Inc.</span>
                  </p>
                  <p className="font-semibold">May 2021 - Present</p>
                </div>
                <p className="text-zinc-500 font-normal">This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-start mb-6">Education</h2>
            <Link href="" className="font-normal text-zinc-500 text-sm md:text-base"><span>See All</span></Link>
          </div>

          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex md:p-6 p-3 items-start self-stretch mb-5">
            <span className="mr-4 md:block hidden"> <Image src={harvardLogo} alt="logo" /></span>
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <span className="mr-4 md:hidden block">
                  <Image src={harvardLogo} alt="logo" />
                </span>
                <h5 className="md:text-xl text-lg font-semibold">Harvard university</h5>
              </div>
              <div className="flex flex-wrap items-center justify-between text-base font-normal mb-6 mt-2 md:mt-0">
                <p className="flex flex-wrap items-center">
                  <span>Cambridge, GA</span>
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="#71717A" />
                    </svg>
                  </span>
                  <span>Bachelor degree, Computer Science(Bsc)</span>
                </p>
                <p className="font-semibold">May 2021 - Present</p>
              </div>
              <p className="text-zinc-500 font-normal">Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website</p>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex md:p-6 p-3 items-start self-stretch mb-5">
            <span className="mr-4 md:block hidden"> <Image src={harvardLogo} alt="logo" /></span>
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <span className="mr-4 md:hidden block">
                  <Image src={harvardLogo} alt="logo" />
                </span>
                <h5 className="md:text-xl text-lg font-semibold">Mister Bim High School</h5>
              </div>
              <div className="flex flex-wrap items-center justify-between text-base font-normal mt-2 md:mt-0">
                <p className="flex flex-wrap items-center">
                  <span>Cambridge, GA</span>
                  <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="#71717A" />
                    </svg>
                  </span>
                  <span>Atlanta, GA</span>
                </p>
                <p className="font-semibold">September 2016 - 2020</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-start">Tech Skill</h2>
            <Link href="" className="font-normal text-zinc-500 text-sm md:text-base"><span>Add Skill</span></Link>
          </div>
          <div className="flex items-start flex-wrap">
            {
              skills.map(el =>
                <label htmlFor={el} key={el} className={`cursor-pointer transition-all ease-out duration-75 justify-between flex items-start p-2 pr-3 rounded-lg border ${checkedSkill == el ? 'bg-[#EEF2FF] border-indigo-700 border-2' : 'border-zinc-100 bg-zinc-50'} md:mr-5 md:mb-5 mr-2 mb-4`}>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_4_8297)">
                        <path d="M1.2593 0.66208L2.55734 17.2682C2.57682 17.5175 2.74561 17.7302 2.98406 17.8058L9.81437 19.9713C9.93516 20.0096 10.0648 20.0096 10.1856 19.9713L17.0159 17.8058C17.2544 17.7302 17.4232 17.5175 17.4427 17.2682L18.7407 0.66208C18.7686 0.305058 18.4865 0 18.1284 0H1.87167C1.51359 0 1.23143 0.305058 1.2593 0.66208Z" fill="url(#paint0_linear_4_8297)" />
                        <path d="M15.3674 5.90577H6.90783L7.16313 8.26004H15.1834L14.6588 14.9717L9.95546 16.4629L5.25217 14.9717L4.97807 11.4653H7.44672V13.1852L10.0214 13.8762L12.5807 13.1852L12.7793 10.4441H4.89823L4.375 3.75H15.5359L15.3674 5.90577Z" fill="url(#paint1_linear_4_8297)" />
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_4_8297" x1="13.5867" y1="2.42538e-08" x2="1.9959" y2="16.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#131416" />
                          <stop offset="1" stopColor="#1A1B1F" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_4_8297" x1="15.5359" y1="3.75" x2="2.66544" y2="9.83755" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#B0FF4D" />
                          <stop offset="1" stopColor="#FFE926" />
                        </linearGradient>
                        <clipPath id="clip0_4_8297">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="font-semibold pl-1 text-base">HTML 5</span>
                  </div>
                  <input
                    checked={checkedSkill === el}
                    onChange={(ev) => setCheckedSkill(ev.target.value)}
                    id={el}
                    type="radio"
                    value={el}
                    name={el}
                    className="opacity-0 w-2 h-2" />

                </label>
              )
            }
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-start">Interests</h2>
            <Link href="" className="font-normal text-zinc-500 text-sm md:text-base"><span>Add Interest</span></Link>
          </div>
          <div className="flex items-start flex-wrap">
            {
              interests.map(el =>
                <label key={el} className={`cursor-pointer transition-all ease-in duration-100 flex items-center p-2 pr-3 rounded-lg border ${checkedInterest == el ? 'bg-[#EEF2FF] border-indigo-700 border-2' : 'border-zinc-100 bg-zinc-50'} md:mr-5 md:mb-5 mr-2 mb-4`}>
                  <span className="font-semibold pl-2 text-base">Semantics</span>
                  <input
                    checked={checkedInterest === el}
                    onChange={(ev) => setCheckedInterest(ev.target.value)}
                    id={el}
                    type="radio"
                    value={el}
                    name={el}
                    className="opacity-0 w-2 h-2" />

                </label>
              )
            }
          </div>

        </div>
        <div className="mt-1 mb-5">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-start">Languages</h2>
            <Link href="" className="font-normal text-zinc-500 text-sm md:text-base"><span>Add Language</span></Link>
          </div>
          <div className="flex items-start flex-wrap">
            {
              languages.map(el =>
                <label key={el} className={`cursor-pointer transition-all ease-in duration-75 flex items-center p-2 pr-3 rounded-lg border ${checkedLang == el ? 'bg-[#EEF2FF] border-indigo-700 border-2' : 'border-zinc-100 bg-zinc-50'} md:mr-5 md:mb-5 mr-2 mb-4`}>
                  <span className="font-semibold text-base">English</span>
                  <input
                    checked={checkedLang === el}
                    onChange={(ev) => setCheckedLang(ev.target.value)}
                    id={el}
                    type="radio"
                    value={el}
                    name={el}
                    className="opacity-0 w-2 h-2" />
                </label>
              )
            }
          </div>

        </div>
        <div className="mt-10 flex justify-end items-start self-stretch">
          <button className='bg-gray-100 px-4 py-2 h-10 rounded-lg mr-3 text-zinc-900 font-semibold text-sm'>Cancel</button>
          <button className='bg-indigo-600 py-2 h-10 font-semibold px-4 rounded-lg text-white text-sm'>Save changes</button>
        </div>
      </form>
    </div>
  )
}

export default EditResume;