import profilePic from "@/public/profile-pic.png"
import Image from "next/image";

const EditProfile = () => {
    return (
        <div className="container">
            <div className="flex items-center">
                <div className="md:h-18 md:w-18 w-24 h-24 shrink-0 border-slate-50 border-2 rounded-full">
                    <Image src={profilePic} alt='profile image' />
                </div>
                <button className='bg-indigo-600 py-2 h-10 font-semibold px-4 rounded-lg text-white text-sm ml-6'>Upload new picture</button>
                <button className='bg-gray-100 px-4 py-2 h-10 rounded-lg ml-3 text-zinc-900 font-semibold text-sm'>Delete</button>
            </div>
            <div className="mt-10">
                <form>
                    <div className="flex flex-col justify-center">
                        <label htmlFor="displayName" className="block text-zinc-900 text-sm font-semibold mb-1.5">Display Name</label>
                        <input id="displayName" name="displayName" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
                        <span className="text-sm font-normal text-zinc-500 block mt-2">Name entered above will be used for all issued certificates</span>
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="about" className="block text-zinc-900 text-sm font-semibold mb-1.5">About</label>
                        <textarea name="about" id="about" cols="10" rows="2" className="resize-none focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal"></textarea>
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="profession" className="block text-zinc-900 text-sm font-semibold mb-1.5">Profession</label>
                        <input id="profession" name="profession" type="text" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="dob" className="block text-zinc-900 text-sm font-semibold mb-1.5">Date of Birth</label>
                        <input id="dob" name="dob" type="date" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal" />
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        <label htmlFor="gender" className="block text-zinc-900 text-sm font-semibold mb-1.5">Gender</label>
                        <select name="gender" id="gender" className="focus:outline-none focus:border-zinc-300 w-full border border-zinc-200 rounded-lg py-3.5 px-3 text-zinc-400 text-sm font-normal">
                            <option value="">What is your gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>
                    <div className="mt-10 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-zinc-900">Section visibility</h3>
                        <p className="text-base text-zinc-500 font-normal">Select which sections and content should show on your profile page.</p>
                        <div className="mt-6 p-6 bg-zinc-50 rounded-2xl flex self-stretch items-start flex-col">
                            <div className="flex justify-between self-stretch items-center w-full">
                                <div className="flex flex-col self-stretch items-start justify-center">
                                    <span className="block text-base font-bold text-zinc-900">Followers and following</span>
                                    <span className="text-sm font-normal text-zinc-500">Shows your followers and the users you follow on codedamn</span>
                                </div>
                                <div className="switch-container w-11 h-6 relative">
                                    <input type="checkbox" className="checkbox" id="followersV" name="followersV" />
                                    <label className="switch" htmlFor="followersV"> <span className="slider"></span></label>
                                </div>
                            </div>
                            <div className="flex justify-between self-stretch items-center w-full mt-4">
                                <div className="flex flex-col self-stretch items-start justify-center">
                                    <span className="block text-base font-bold text-zinc-900">XP</span>
                                    <span className="text-sm font-normal text-zinc-500">Shows the XP you have earned</span>
                                </div>
                                <div className="switch-container w-11 h-6 relative">
                                    <input type="checkbox" className="checkbox" id="xpV" name="xpV" />
                                    <label className="switch" htmlFor="xpV"> <span className="slider"></span></label>
                                </div>
                            </div>
                            <div className="flex justify-between self-stretch items-center w-full mt-4">
                                <div className="flex flex-col self-stretch items-start justify-center">
                                    <span className="block text-base font-bold text-zinc-900">Achievement badges</span>
                                    <span className="text-sm font-normal text-zinc-500">Shows your relative percentile and proficiency</span>
                                </div>
                                <div className="switch-container w-11 h-6 relative">
                                    <input type="checkbox" className="checkbox" id="badgesV" name="badgesV" />
                                    <label className="switch" htmlFor="badgesV"><span className="slider"></span></label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-10 pb-10 flex justify-end items-start self-stretch"> 
                        <button className='bg-gray-100 px-4 py-2 h-10 rounded-lg mr-3 text-zinc-900 font-semibold text-sm'>Cancel</button>
                        <button className='bg-indigo-600 py-2 h-10 font-semibold px-4 rounded-lg text-white text-sm'>Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;