import profilePic from "@/public/profile-pic.png"
import Image from "next/image";

const EditProfile = () => {
    return (
        <div className="container">
            <div className="flex items-center">
                <div className="md:h-18 md:w-18 w-24 h-24 shrink-0 border-slate-50 border-2 rounded-full">
                    <Image src={profilePic} alt='profile image' />
                </div>
                <button className='bg-indigo-600 py-2 h-10 font-semibold px-4 rounded-lg text-white text-sm ms-6'>Upload new picture</button>
                <button className='bg-gray-100 px-4 py-2 h-10 rounded-lg ms-3 text-zinc-900 font-semibold text-sm'>Delete</button>
            </div>
            <div className="mt-10">
                <form>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="displayName" className="block text-zinc-900 text-sm font-semibold mb-1.5">Display Name</label>
                        <input id="displayName"  name="displayName" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3" />
                        <span className="text-sm font-normal text-zinc-500 block mt-2">Name entered above will be used for all issued certificates</span>
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="about" className="block text-zinc-900 text-sm font-semibold mb-1.5">About</label>
                        <textarea name="about" id="about" cols="10" rows="2" className="resize-none focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3"></textarea>
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="profession" className="block text-zinc-900 text-sm font-semibold mb-1.5">Profession</label>
                        <input id="profession"  name="profession" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3" />
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="dob" className="block text-zinc-900 text-sm font-semibold mb-1.5">Date of Birth</label>
                        <input id="dob"  name="dob" type="date" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3" />
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="gender" className="block text-zinc-900 text-sm font-semibold mb-1.5">Gender</label>
                        <select name="gender" id="gender" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3">
                            <option value="">What is your gender</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;