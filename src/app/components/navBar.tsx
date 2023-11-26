import Image from "next/image";
import Logo from "../../../public/next.svg"
const NavBar = () => {
  return (
    <header className="bg-slate-900 grid grid-cols-3 w-full text-white content-center h-10 px-10">
        <div>
            
        </div>
        <div className="text-center">
            Bem vindo, fulano
        </div>
        <div className="text-end">
            User
        </div>
    </header>
  )
};

export default NavBar;
