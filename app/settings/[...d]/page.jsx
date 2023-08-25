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
    <div>
        {
            path === "/settings/update-resume" ? <EditResume /> 
            : path === "/settings/update-socials" ?  <EditSocials /> 
            : path === "/settings/update-portfolio" ? <EditPortfolio />
            : <EditProfile />
        }
    </div>
  )
}

export default editPages;