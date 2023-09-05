import Link from "next/link"
import Image from "next/image"
import portfolio from "@/public/portfolio-sample.png"
import blankSample from "@/public/blank-sample.png"
import pic from "@/public/profile-pic.png"

const Portfolio = () => {
  return (
    <>
      <div className="grid-rows-1 mb-6">
        <h2 className="md:text-2xl text-xl font-bold">Stats</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-5 py-3">
          <div className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="63" viewBox="0 0 55 63" fill="none">
              <g filter="url(#filter0_d_4_8255)">
                <path d="M38.9745 26.7752C38.9374 26.6141 38.8609 26.4646 38.7518 26.3402C38.6427 26.2159 38.5045 26.1206 38.3495 26.0627L31.1495 23.3627L32.9745 14.2002C33.0165 13.988 32.9894 13.7679 32.8972 13.5722C32.8049 13.3765 32.6524 13.2155 32.462 13.1127C32.2698 13.0105 32.049 12.9746 31.8343 13.0108C31.6195 13.047 31.4227 13.1531 31.2745 13.3127L17.2745 28.3127C17.1598 28.4318 17.0768 28.5777 17.0331 28.7371C16.9895 28.8965 16.9865 29.0644 17.0245 29.2252C17.0637 29.3855 17.1409 29.534 17.2497 29.6581C17.3586 29.7821 17.4957 29.8781 17.6495 29.9377L24.8495 32.6377L23.0245 41.8002C22.9826 42.0125 23.0097 42.2326 23.1019 42.4283C23.1941 42.624 23.3466 42.785 23.537 42.8877C23.6806 42.9602 23.8388 42.9986 23.9995 43.0002C24.1354 43.0008 24.2699 42.9734 24.3946 42.9196C24.5194 42.8658 24.6317 42.7869 24.7245 42.6877L38.7245 27.6877C38.8393 27.5687 38.9223 27.4228 38.9659 27.2634C39.0096 27.104 39.0126 26.9361 38.9745 26.7752Z" fill="#6366F1" />
              </g>
              <defs>
                <filter id="filter0_d_4_8255" x="0.998047" y="0.99707" width="54.003" height="62.0032" filterUnits="userSpaceOnUse" colorInterpolationfilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.354425 0 0 0 0 0.254063 0 0 0 0 0.970937 0 0 0 0.48 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_8255" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_8255" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-xl">2</span>
            <span className="font-normal text-zinc-500">Longest Streak</span>
          </div>
        </div>
        <div className="bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-5 py-3">
          <div className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
              <g filter="url(#filter0_d_4_8262)">
                <path d="M45.0749 27.0001C45.0779 27.4102 44.9531 27.8111 44.7179 28.1471C44.4827 28.4831 44.1488 28.7376 43.7624 28.8751L35.7749 31.7751L32.8749 39.7626C32.7328 40.1454 32.477 40.4755 32.1418 40.7086C31.8066 40.9417 31.4081 41.0667 30.9999 41.0667C30.5916 41.0667 30.1931 40.9417 29.8579 40.7086C29.5228 40.4755 29.267 40.1454 29.1249 39.7626L26.2249 31.7751L18.2374 28.8751C17.8546 28.7331 17.5245 28.4772 17.2914 28.1421C17.0583 27.8069 16.9333 27.4084 16.9333 27.0001C16.9333 26.5919 17.0583 26.1934 17.2914 25.8582C17.5245 25.523 17.8546 25.2672 18.2374 25.1251L26.2249 22.2251L29.1249 14.2376C29.267 13.8549 29.5228 13.5248 29.8579 13.2917C30.1931 13.0585 30.5916 12.9336 30.9999 12.9336C31.4081 12.9336 31.8066 13.0585 32.1418 13.2917C32.477 13.5248 32.7328 13.8549 32.8749 14.2376L35.7749 22.2251L43.7624 25.1251C44.1488 25.2627 44.4827 25.5171 44.7179 25.8531C44.9531 26.1891 45.0779 26.59 45.0749 27.0001Z" fill="#0EA5E9" />
              </g>
              <defs>
                <filter id="filter0_d_4_8262" x="0.93335" y="0.933594" width="60.1416" height="60.1331" filterUnits="userSpaceOnUse" colorInterpolationfilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.254063 0 0 0 0 0.798887 0 0 0 0 0.970937 0 0 0 0.48 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_8262" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_8262" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-xl">1200</span>
            <span className="font-normal text-zinc-500">Experience points</span>
          </div>
        </div>
        <div className="bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-5 py-3">
          <div className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="60" viewBox="0 0 58 60" fill="none">
              <g filter="url(#filter0_d_4_8268)">
                <path d="M28 34.3334H25C23.5333 34.3334 22.3333 35.5334 22.3333 37V37.3334H21C20.4533 37.3334 20 37.7867 20 38.3334C20 38.88 20.4533 39.3334 21 39.3334H37C37.5467 39.3334 38 38.88 38 38.3334C38 37.7867 37.5467 37.3334 37 37.3334H35.6667V37C35.6667 35.5334 34.4667 34.3334 33 34.3334H30V31.28C29.6667 31.32 29.3333 31.3334 29 31.3334C28.6667 31.3334 28.3333 31.32 28 31.28V34.3334Z" fill="#FE6712" />
                <path d="M37.64 25.5201C38.52 25.1867 39.2933 24.6401 39.9067 24.0267C41.1467 22.6534 41.96 21.0134 41.96 19.0934C41.96 17.1734 40.4533 15.6667 38.5333 15.6667H37.7867C36.92 13.8934 35.1067 12.6667 33 12.6667H25C22.8933 12.6667 21.08 13.8934 20.2133 15.6667H19.4667C17.5467 15.6667 16.04 17.1734 16.04 19.0934C16.04 21.0134 16.8533 22.6534 18.0933 24.0267C18.7067 24.6401 19.48 25.1867 20.36 25.5201C21.7467 28.9334 25.08 31.3334 29 31.3334C32.92 31.3334 36.2533 28.9334 37.64 25.5201ZM32.7867 21.2667L31.96 22.2801C31.8267 22.4267 31.7333 22.7201 31.7467 22.9201L31.8267 24.2267C31.88 25.0267 31.3067 25.4401 30.56 25.1467L29.3467 24.6667C29.16 24.6001 28.84 24.6001 28.6533 24.6667L27.44 25.1467C26.6933 25.4401 26.12 25.0267 26.1733 24.2267L26.2533 22.9201C26.2667 22.7201 26.1733 22.4267 26.04 22.2801L25.2133 21.2667C24.6933 20.6534 24.92 19.9734 25.6933 19.7734L26.96 19.4534C27.16 19.4001 27.4 19.2134 27.5067 19.0401L28.2133 17.9467C28.6533 17.2667 29.3467 17.2667 29.7867 17.9467L30.4933 19.0401C30.6 19.2134 30.84 19.4001 31.04 19.4534L32.3067 19.7734C33.08 19.9734 33.3067 20.6534 32.7867 21.2667Z" fill="#FE6712" />
              </g>
              <defs>
                <filter id="filter0_d_4_8268" x="-3" y="-2" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationfilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.970937 0 0 0 0 0.598163 0 0 0 0 0.254063 0 0 0 0.48 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_8268" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_8268" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-xl">Novice</span>
            <span className="font-normal text-zinc-500">Current league</span>
          </div>
        </div>
        <div className="bg-zinc-50 rounded-xl border border-zinc-100 flex items-center px-5 py-3">
          <div className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="56" viewBox="0 0 59 56" fill="none">
              <g filter="url(#filter0_d_4_8276)">
                <path d="M43 19.5C43 23.325 40.7875 27.25 36.425 31.175C34.444 32.9559 32.2871 34.5306 29.9875 35.875C29.8381 35.9571 29.6704 36.0001 29.5 36.0001C29.3296 36.0001 29.1619 35.9571 29.0125 35.875C28.6125 35.65 21.4625 31.5875 17.9375 25.7625C17.8908 25.6868 17.8651 25.6 17.8632 25.5111C17.8612 25.4221 17.883 25.3343 17.9263 25.2566C17.9696 25.1789 18.0329 25.1141 18.1095 25.069C18.1862 25.0239 18.2735 25.0001 18.3625 25H22.5C22.6662 25.0015 22.8301 24.9611 22.9765 24.8824C23.1229 24.8038 23.247 24.6894 23.3375 24.55L24.5 22.8L27.6625 27.55C27.7849 27.7324 27.9632 27.87 28.1707 27.9422C28.3781 28.0143 28.6034 28.0171 28.8125 27.95C29.0306 27.8725 29.2187 27.7281 29.35 27.5375L31.0375 25H33.4625C33.722 25.0041 33.9734 24.9096 34.1659 24.7356C34.3585 24.5616 34.4779 24.3211 34.5 24.0625C34.5085 23.926 34.489 23.7892 34.4426 23.6606C34.3962 23.532 34.3239 23.4142 34.2302 23.3146C34.1364 23.2151 34.0233 23.1358 33.8977 23.0816C33.7721 23.0275 33.6368 22.9997 33.5 23H30.5C30.3338 22.9985 30.1699 23.0389 30.0235 23.1176C29.8771 23.1962 29.753 23.3106 29.6625 23.45L28.5 25.2L25.3375 20.45C25.2151 20.2676 25.0368 20.13 24.8293 20.0578C24.6219 19.9857 24.3966 19.9829 24.1875 20.05C23.9694 20.1275 23.7813 20.2719 23.65 20.4625L21.9625 23H16.975C16.8689 22.9996 16.7658 22.9654 16.6804 22.9025C16.595 22.8396 16.5318 22.7512 16.5 22.65C16.178 21.6306 16.0095 20.569 16 19.5C16 17.9259 16.4953 16.3917 17.4157 15.1147C18.3361 13.8377 19.635 12.8827 21.1283 12.3849C22.6216 11.8871 24.2337 11.8718 25.7363 12.3411C27.2388 12.8105 28.5555 13.7407 29.5 15C30.4445 13.7407 31.7612 12.8105 33.2637 12.3411C34.7663 11.8718 36.3784 11.8871 37.8717 12.3849C39.365 12.8827 40.6639 13.8377 41.5843 15.1147C42.5047 16.3917 43 17.9259 43 19.5Z" fill="#EC4899" />
              </g>
              <defs>
                <filter id="filter0_d_4_8276" x="0" y="0" width="59" height="56" filterUnits="userSpaceOnUse" colorInterpolationfilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.970937 0 0 0 0 0.254063 0 0 0 0 0.813225 0 0 0 0.48 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_8276" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_8276" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-xl">120</span>
            <span className="font-normal text-zinc-500">Karma points</span>
          </div>
        </div>

      </div>
      <div className="my-10">
        <div className="grid-rows-1 mb-6 flex justify-between items-center">
          <h2 className="md:text-2xl text-xl font-bold">Projects</h2>
          <Link href="/settings/update-profile" className="font-semibold text-indigo-600 text-sm md:text-base"><span>Create new project</span></Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-center items-start p-4">
            <div className="w-full">
              <Image src={portfolio} alt="portfolio sample" className="w-full" />
            </div>
            <div className="mt-5">
              <h3 className="font-bold md:text-lg text-base text-zinc-900 mb-2">Personal Portfolio Website</h3>
              <div className="flex items-center flex-wrap">
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8297)">
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">HTML/CSS</span>
                </p>
                <span className="mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#71717A" />
                  </svg>
                </span>
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8301)">
                        <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                        <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                        <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" stroke-width="0.5" />
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">React</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-center items-start p-4">
            <div className="w-full">
              <Image src={blankSample} alt="portfolio sample" className="w-full" />
            </div>
            <div className="mt-5">
              <h3 className="font-bold md:text-lg text-base text-zinc-900 mb-2">Personal Portfolio Website</h3>
              <div className="flex items-center flex-wrap">
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8297)">
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">HTML/CSS</span>
                </p>
                <span className="mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#71717A" />
                  </svg>
                </span>
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8301)">
                        <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                        <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                        <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" stroke-width="0.5" />
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">React</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-center items-start p-4">
            <div className="w-full">
              <Image src={blankSample} alt="portfolio sample" className="w-full" />
            </div>
            <div className="mt-5">
              <h3 className="font-bold md:text-lg text-base text-zinc-900 mb-2">Personal Portfolio Website</h3>
              <div className="flex items-center flex-wrap">
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8297)">
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">HTML/CSS</span>
                </p>
                <span className="mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#71717A" />
                  </svg>
                </span>
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8301)">
                        <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                        <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                        <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" stroke-width="0.5" />
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">React</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-center items-start p-4">
            <div className="w-full">
              <Image src={blankSample} alt="portfolio sample" className="w-full" />
            </div>
            <div className="mt-5">
              <h3 className="font-bold md:text-lg text-base text-zinc-900 mb-2">Personal Portfolio Website</h3>
              <div className="flex items-center flex-wrap">
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8297)">
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">HTML/CSS</span>
                </p>
                <span className="mx-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#71717A" />
                  </svg>
                </span>
                <p className="flex items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_4_8301)">
                        <path d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z" fill="url(#paint0_linear_4_8301)" />
                        <path d="M10.0001 11.4804C10.8051 11.4804 11.4576 10.8279 11.4576 10.0229C11.4576 9.21801 10.8051 8.56543 10.0001 8.56543C9.19515 8.56543 8.54257 9.21801 8.54257 10.0229C8.54257 10.8279 9.19515 11.4804 10.0001 11.4804Z" fill="url(#paint1_linear_4_8301)" />
                        <path d="M15.0642 8.04869L15.0643 8.04869C15.8707 8.32632 16.5079 8.6711 16.9382 9.03016C17.3754 9.39497 17.5625 9.74194 17.5625 10.023C17.5625 10.3192 17.3617 10.6876 16.8939 11.0728C16.4335 11.4518 15.7511 11.8148 14.8843 12.102C13.5765 12.5353 11.8404 12.7654 10.0002 12.7654C8.11025 12.7654 6.33704 12.5489 5.01701 12.0978C4.1806 11.812 3.52374 11.4471 3.08115 11.0681C2.6315 10.683 2.4375 10.3149 2.4375 10.023C2.4375 9.74167 2.61709 9.39752 3.03832 9.03713C3.45392 8.68157 4.07322 8.33914 4.86761 8.0622L4.86762 8.0622C6.21094 7.59383 8.0447 7.30957 9.99984 7.30957H10.0002C11.9359 7.30957 13.7253 7.58767 15.0642 8.04869Z" stroke="url(#paint2_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.58659 8.76206C6.63737 10.4278 5.98581 12.123 5.72498 13.4967L5.47937 13.4501L5.72498 13.4967C5.56803 14.3232 5.55526 15.0308 5.65564 15.5685C5.75739 16.1135 5.96579 16.4409 6.20943 16.5813L6.2095 16.5813C6.46236 16.7271 6.87816 16.743 7.43641 16.5458C7.9859 16.3518 8.63012 15.965 9.29562 15.3833L9.29563 15.3833C10.3457 14.4654 11.419 13.0375 12.3632 11.4003C13.2826 9.80609 13.9507 8.18733 14.2285 6.83803L14.2285 6.838C14.4127 5.94364 14.4391 5.17108 14.3408 4.58293C14.2408 3.98522 14.022 3.6272 13.7654 3.47923L7.58659 8.76206ZM7.58659 8.76206L7.63695 8.67474C8.60407 6.99787 9.73882 5.5867 10.8071 4.65719L10.8071 4.65717C11.4505 4.09723 12.0675 3.71752 12.5935 3.52411C13.128 3.3276 13.522 3.33886 13.7654 3.47922L7.58659 8.76206Z" stroke="url(#paint3_linear_4_8301)" stroke-width="0.5" />
                        <path d="M7.63916 11.4043L7.63916 11.4043C8.61878 13.0964 9.78357 14.541 10.8619 15.4689L10.8619 15.4689C11.4996 16.0177 12.1062 16.3821 12.6222 16.5636C13.1451 16.7476 13.5329 16.7306 13.7764 16.5896L13.7764 16.5896C14.029 16.4434 14.2504 16.0911 14.3584 15.509C14.4647 14.9361 14.4513 14.1848 14.2797 13.3177C14.0088 11.9496 13.3079 10.3065 12.361 8.67085C11.4389 7.07817 10.3701 5.69112 9.33979 4.77637L9.33978 4.77636C8.65697 4.17006 8.00086 3.76136 7.44222 3.55283C6.87451 3.34091 6.45506 3.35172 6.19869 3.50015L6.19867 3.50016C5.95543 3.64096 5.74888 3.97668 5.6522 4.53785C5.55705 5.09014 5.57788 5.81431 5.74166 6.65138L7.63916 11.4043ZM7.63916 11.4043C6.66939 9.72937 6.01382 8.04117 5.74167 6.65141L7.63916 11.4043Z" stroke="url(#paint4_linear_4_8301)" stroke-width="0.5" />
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
                  </span>
                  <span className="text-zinc-500 text-sm font-medium ml-2">React</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="grid-rows-1 mb-6 flex justify-between items-center">
          <h2 className="md:text-2xl text-xl font-bold">Playgrounds</h2>
          <Link href="/settings/update-socials" className="font-semibold text-indigo-600 text-sm md:text-base"><span>Create new playground</span></Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex justify-start p-4">
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
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex justify-start p-4">
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
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex justify-start p-4">
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
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex justify-start p-4">
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
        </div>
      </div>
      <div className="mb-10">
        <div className="grid-rows-1 mb-6 flex justify-between items-center">
          <h2 className="md:text-2xl text-xl font-bold">Certificates</h2>
          <Link href="" className="font-semibold text-indigo-600 text-sm md:text-base"><span>Add new certificate</span></Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-start p-5">
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
            <div className="mt-6">
              <h4 className="font-semibold text-base text-zinc-900 mb-2">Advanced theoretical Javascript</h4>
              <p className="text-sm text-zinc-500 font-normal mb-3">Issued on Dec 16th, 2022</p>
              <Link href="" className="font-semibold text-sm text-zinc-500"><span>See credentials</span></Link>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-start p-5">
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
            <div className="mt-6">
              <h4 className="font-semibold text-base text-zinc-900 mb-2">Advanced theoretical Javascript</h4>
              <p className="text-sm text-zinc-500 font-normal mb-3">Issued on Dec 16th, 2022</p>
              <Link href="" className="font-semibold text-sm text-zinc-500"><span>See credentials</span></Link>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-start p-5">
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
            <div className="mt-6">
              <h4 className="font-semibold text-base text-zinc-900 mb-2">Advanced theoretical Javascript</h4>
              <p className="text-sm text-zinc-500 font-normal mb-3">Issued on Dec 16th, 2022</p>
              <Link href="" className="font-semibold text-sm text-zinc-500"><span>See credentials</span></Link>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-lg border border-zinc-100 flex flex-col justify-start p-5">
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
            <div className="mt-6">
              <h4 className="font-semibold text-base text-zinc-900 mb-2">Advanced theoretical Javascript</h4>
              <p className="text-sm text-zinc-500 font-normal mb-3">Issued on Dec 16th, 2022</p>
              <Link href="" className="font-semibold text-sm text-zinc-500"><span>See credentials</span></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Portfolio