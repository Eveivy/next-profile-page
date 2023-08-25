import { Inter } from 'next/font/google'
import Navtabs from './Navtab'
const inter = Inter({ subsets: ['latin'] })

export const metadatas = {
    title: 'Codedamn Profile',
    description: 'Generated by create next app',
}

export const menu = [
    { id: 1, title: "Profile", pathname: "update-profile" },
    { id: 2, title: "Socials", pathname: "update-socials" },
    { id: 3, title: "Portfolio", pathname: "update-portfolio" },
    { id: 4, title: "Resume", pathname: "update-resume" }
]

const layout = ({ children }) => {

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 m-11">
                    <div className="bg-zinc-50 py-6 rounded-2xl border border-zinc-100">
                        <ul className="flex items-start flex-col justify-center self-stretch">
                            {
                                menu.map((el) => { 
                                    return <li key={el.id} className="h-12 pr-4 rounded-xl text-start font-semibold text-base leading-6 relative">
                                        <Navtabs title={el.title} path={el.pathname}/>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-span-4"> {children} </div>
                </div>
            </body>
        </html>
    )
}

export default layout;