"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
const carts = () => {
    const router = useRouter();
    return (
        <>
            <div>carts</div>
            <button className="bg-cyan-500 hover:bg-cyan-600 " onClick={() => router.back('/dashboard')}>Go back</button>
            <ul className="w-full bg-indigo-500 flex justify-end">
                <li>
                    <Link href={`/dashboard/anything`}>See your customers</Link>
                </li>

            </ul>
        </>
    )
}

export default carts