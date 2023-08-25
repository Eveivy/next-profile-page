"use client"

import { usePathname } from "next/navigation";

const editpages = () => {
    const path = usePathname();
    
    console.log(path)
  return (
    <div>edit pages</div>
  )
}

export default editpages;