"use client"

import { usePathname } from "next/navigation";
import EditProfile from "@/app/components/EditProfile";
import EditSocials from "@/app/components/EditSocials";
import EditResume from "@/app/components/EditResume";
import EditPortfolio from "@/app/components/EditPortfolio";
import { useState } from "react";

const editPages = () => {
    const path = usePathname();  

  return (
    <div className="xl:w-110 w-full xl:mr-28 xl:ml-14">
        {
            path === "/settings/resume" ? <EditResume /> 
            : path === "/settings/socials" ?  <EditSocials /> 
            : path === "/settings/portfolio" ? <EditPortfolio />
            : path === "/settings" ? <EditProfile /> : <EditProfile /> 
        }
    </div>
  )
}

export default editPages;