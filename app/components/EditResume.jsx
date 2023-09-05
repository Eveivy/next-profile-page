import Image from "next/image"
import harvardLogo from "@/public/harvard.png"
import Link from "next/link"

const EditResume = () => {
  return (
    <div className="container">
      <form>
        <div className="flex flex-col justify-center">
          <label htmlFor="about_me" className="block text-zinc-900 mb-3 md:text-2xl text-lg font-bold">About Me</label>
          <textarea value="A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done. A student who is passionate and with a keen eye for design" id="about_me" name="about_me" cols="20" rows="5" className="resize-none focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
        </div>
        <div className="mt-10">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="md:text-2xl text-xl font-bold">Work Experience</h2>
            <Link href="" className="font-normal text-zinc-500 text-sm md:text-base"><span>Add Experience</span></Link>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-zinc-50 rounded-2xl border border-zinc-100 flex md:p-6 p-3 items-start self-stretch mt-3">
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

        <div className="mt-10 flex justify-end items-start self-stretch">
          <button className='bg-gray-100 px-4 py-2 h-10 rounded-lg mr-3 text-zinc-900 font-semibold text-sm'>Cancel</button>
          <button className='bg-indigo-600 py-2 h-10 font-semibold px-4 rounded-lg text-white text-sm'>Save changes</button>
        </div>
      </form>
    </div>
  )
}

export default EditResume;