import { links } from ".";
import logo from "../../assets/images/Group 26.png"
import search from "../../assets/images/search(2) 1.png"
import { CiMenuFries } from "react-icons/ci";



export default function Nav() {
  return (
    <header className="w-full  flex justify-between items-center max-sm:px-3  py-10 inter">
        <div>

        <img src={logo} alt="items-logo"  />
        </div>
        <div className="w-1/2 text-[28px] hidden lg:flex items-center">
        <ul className="w-full flex gap-10  text-white">
            {links.map((item,index)=>(
                <nav className="w-full flex items-center" key={index}>
                    <li><a href={item.path}>{item.name}</a></li>
                </nav>
            ))}
        </ul>
        <img src={search} alt="search" className="w-[30px] h-[30px] rounded-full object-cover"  />
        </div>
        
        <CiMenuFries  size={30} className="text-white cursor-pointer "/>
    </header>
  )
}
