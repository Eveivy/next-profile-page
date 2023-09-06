import Image from "next/image"
import harvardLogo from "@/public/harvard.png"

const Resume = () => {
  return (
    <>
      <div className="grid-rows-1 text-zinc-900">
        <h2 className="text-2xl font-bold text-center mb-6">About me</h2>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col md:p-6 p-3 items-start self-stretch">
          <div className="font-medium w-full md:w-3/4 text-zinc-900">
            <p className="">A self-driven, versatile, reliable, diligent individual who is calm and
              cheerful with a team-minded approach to work and getting things done.</p>
            <p className="py-6 ">A student who is passionate and with a keen eye for design ...</p>
            <button className="px-4 py-2 rounded-lg bg-zinc-100">Read more</button>
          </div>
        </div>
      </div>
      <div className="grid-rows-1 mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">Work experience</h2>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex md:p-6 p-3 items-start self-stretch mb-5">
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
              <p className="flex items-center ">
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
      <div className="grid-rows-1 mt-10">
        <h2 className="text-2xl font-bold text-start mb-6">Education</h2>
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
      <div className="grid-rows-1 mt-10">
        <h2 className="text-2xl font-bold text-start mb-6">Tech Skill</h2>
        <div className="flex items-start flex-wrap">
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
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
            </svg><span className="font-semibold pl-2 text-base">HTML 5</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_4_8301)">
                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" strokeWidth="0.5" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_4_8301" x1="14.1026" y1="2.42538e-08" x2="3.07773" y2="17.4489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#131416" />
                  <stop offset="1" stopColor="#1A1B1F" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_8301" x1="11.4576" y1="8.56543" x2="8.26944" y2="10.2831" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_8301" x1="17.8125" y1="7.05957" x2="10.4572" y2="17.4557" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_8301" x1="14.6471" y1="3.125" x2="3.04297" y2="7.33548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_8301" x1="14.6761" y1="3.14087" x2="3.05004" y2="7.37365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <clipPath id="clip0_4_8301">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold pl-2 text-base">React</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
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
            </svg><span className="font-semibold pl-2 text-base">HTML 5</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_4_8301)">
                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" strokeWidth="0.5" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_4_8301" x1="14.1026" y1="2.42538e-08" x2="3.07773" y2="17.4489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#131416" />
                  <stop offset="1" stopColor="#1A1B1F" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_8301" x1="11.4576" y1="8.56543" x2="8.26944" y2="10.2831" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_8301" x1="17.8125" y1="7.05957" x2="10.4572" y2="17.4557" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_8301" x1="14.6471" y1="3.125" x2="3.04297" y2="7.33548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_8301" x1="14.6761" y1="3.14087" x2="3.05004" y2="7.37365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <clipPath id="clip0_4_8301">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold pl-2 text-base">React</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
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
            </svg><span className="font-semibold pl-2 text-base">HTML 5</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_4_8301)">
                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" strokeWidth="0.5" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_4_8301" x1="14.1026" y1="2.42538e-08" x2="3.07773" y2="17.4489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#131416" />
                  <stop offset="1" stopColor="#1A1B1F" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_8301" x1="11.4576" y1="8.56543" x2="8.26944" y2="10.2831" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_8301" x1="17.8125" y1="7.05957" x2="10.4572" y2="17.4557" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_8301" x1="14.6471" y1="3.125" x2="3.04297" y2="7.33548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_8301" x1="14.6761" y1="3.14087" x2="3.05004" y2="7.37365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <clipPath id="clip0_4_8301">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold pl-2 text-base">React</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
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
            </svg><span className="font-semibold pl-2 text-base">HTML 5</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_4_8301)">
                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" strokeWidth="0.5" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_4_8301" x1="14.1026" y1="2.42538e-08" x2="3.07773" y2="17.4489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#131416" />
                  <stop offset="1" stopColor="#1A1B1F" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_8301" x1="11.4576" y1="8.56543" x2="8.26944" y2="10.2831" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_8301" x1="17.8125" y1="7.05957" x2="10.4572" y2="17.4557" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_8301" x1="14.6471" y1="3.125" x2="3.04297" y2="7.33548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_8301" x1="14.6761" y1="3.14087" x2="3.05004" y2="7.37365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <clipPath id="clip0_4_8301">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold pl-2 text-base">React</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
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
            </svg><span className="font-semibold pl-2 text-base">HTML 5</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_4_8301)">
                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" strokeWidth="0.5" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_4_8301" x1="14.1026" y1="2.42538e-08" x2="3.07773" y2="17.4489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#131416" />
                  <stop offset="1" stopColor="#1A1B1F" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_8301" x1="11.4576" y1="8.56543" x2="8.26944" y2="10.2831" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_8301" x1="17.8125" y1="7.05957" x2="10.4572" y2="17.4557" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_8301" x1="14.6471" y1="3.125" x2="3.04297" y2="7.33548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_8301" x1="14.6761" y1="3.14087" x2="3.05004" y2="7.37365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <clipPath id="clip0_4_8301">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold pl-2 text-base">React</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
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
            </svg><span className="font-semibold pl-2 text-base">HTML 5</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_4_8301)">
                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" strokeWidth="0.5" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_4_8301" x1="14.1026" y1="2.42538e-08" x2="3.07773" y2="17.4489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#131416" />
                  <stop offset="1" stopColor="#1A1B1F" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_8301" x1="11.4576" y1="8.56543" x2="8.26944" y2="10.2831" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_8301" x1="17.8125" y1="7.05957" x2="10.4572" y2="17.4557" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_8301" x1="14.6471" y1="3.125" x2="3.04297" y2="7.33548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_8301" x1="14.6761" y1="3.14087" x2="3.05004" y2="7.37365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <clipPath id="clip0_4_8301">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold pl-2 text-base">React</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
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
            </svg><span className="font-semibold pl-2 text-base">HTML 5</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#clip0_4_8301)">
                <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" strokeWidth="0.5" />
                <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" strokeWidth="0.5" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_4_8301" x1="14.1026" y1="2.42538e-08" x2="3.07773" y2="17.4489" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#131416" />
                  <stop offset="1" stopColor="#1A1B1F" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_8301" x1="11.4576" y1="8.56543" x2="8.26944" y2="10.2831" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_8301" x1="17.8125" y1="7.05957" x2="10.4572" y2="17.4557" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_8301" x1="14.6471" y1="3.125" x2="3.04297" y2="7.33548" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_8301" x1="14.6761" y1="3.14087" x2="3.05004" y2="7.37365" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B0FF4D" />
                  <stop offset="1" stopColor="#FFE926" />
                </linearGradient>
                <clipPath id="clip0_4_8301">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-semibold pl-2 text-base">React</span>
          </div>
        </div>
      </div>
      <div className="grid-rows-1 mt-5">
        <h2 className="text-2xl font-bold text-start mb-6">Interests</h2>
        <div className="flex items-start flex-wrap">
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">Semantics</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">TED Talks</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">Udemy</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">Behavioral</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">Economics</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">Hiking</span>
          </div>

        </div>

      </div>
      <div className="grid-rows-1 mt-5 mb-10">
        <h2 className="text-2xl font-bold text-start mb-6">Languages</h2>
        <div className="flex items-start flex-wrap">
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">English</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">French</span>
          </div>
          <div className="flex items-center p-2 pr-3 rounded-lg border border-zinc-100 bg-zinc-50 md:mr-5 md:mb-5 mr-2 mb-4">
            <span className="font-semibold pl-2 text-base">Chinese</span>
          </div>
        </div>

      </div>

    </>
  )
}

export default Resume