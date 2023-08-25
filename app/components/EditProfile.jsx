import profilePic from "@/public/profile-pic.png"
import Image from "next/image";

const EditProfile = () => {
    return (
        <div className="container">
            <div className="flex items-center">
                <div className="md:h-18 md:w-18 w-24 h-24 md:ml-6 ml-4 shrink-0 border-slate-50 border-2 rounded-full">
                    <Image src={profilePic} alt='profile image' />
                </div>
            </div>
        </div>
    )
}

export default EditProfile;