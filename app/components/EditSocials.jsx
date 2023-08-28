const EditSocials = () => {
  return (
    <div className="container">
      <form>
        <div className="flex flex-col justify-center">
          <label htmlFor="github_url" className="block text-zinc-900 text-sm font-semibold mb-1.5">GitHub</label>
          <input id="github_url" name="github_url" placeholder="github/profile.com" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
        </div>
        <div className="flex flex-col justify-center mt-6">
          <label htmlFor="linkedIn_url" className="block text-zinc-900 text-sm font-semibold mb-1.5">Linkedin</label>
          <input id="linkedIn_url" placeholder="Linkedin profile URL" name="linkedIn_url" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
        </div>
        <div className="flex flex-col justify-center mt-6">
          <label htmlFor="facebook_url" className="block text-zinc-900 text-sm font-semibold mb-1.5">Facebook</label>
          <input id="facebook_url" placeholder="Facebook profile URL" name="facebook_url" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
        </div>
        <div className="flex flex-col justify-center mt-6">
          <label htmlFor="instagram_url" className="block text-zinc-900 text-sm font-semibold mb-1.5">Instagram</label>
          <input id="instagram_url" placeholder="Instagram profile URL" name="instagram_url" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
        </div>
        <div className="flex flex-col justify-center mt-6">
          <label htmlFor="dribbble_url" className="block text-zinc-900 text-sm font-semibold mb-1.5">Dribbble</label>
          <input id="dribbble_url" placeholder="Dribbble profile URL" name="dribbble_url" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
        </div>
        <div className="flex flex-col justify-center mt-6">
          <label htmlFor="behance_url" className="block text-zinc-900 text-sm font-semibold mb-1.5">Behance</label>
          <input id="behance_url" placeholder="Behance profile URL" name="behance_url" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
        </div>

        <div className="mt-10 flex justify-end items-start self-stretch">
          <button className='bg-gray-100 px-4 py-2 h-10 rounded-lg mr-3 text-zinc-900 font-semibold text-sm'>Cancel</button>
          <button className='bg-indigo-600 py-2 h-10 font-semibold px-4 rounded-lg text-white text-sm'>Save changes</button>
        </div>
      </form>
    </div>
  )
}

export default EditSocials;