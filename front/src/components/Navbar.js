
import {
    SiGnuprivacyguard
} from "react-icons/si"
import{
    AiOutlineLogin,
    AiFillHome
} from "react-icons/ai"

import NavItem from "./NavItem"
function Navbar() {
  return (
    <>
        <nav className="px-0 pb-10">
            <div className="flex justify-between items-center w-full overflow-x-auto px-1">
                <NavItem title="Signin" Icon={AiOutlineLogin} />
                <NavItem title="Home" Icon={AiFillHome} />
                <NavItem title="Signup" Icon={SiGnuprivacyguard} />
            </div>
        </nav>
    </>
  )
}

export default Navbar