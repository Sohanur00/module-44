import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const Navber = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/contact', name: 'Contact', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/products/:id', name: 'Product Detail', id: 5 },
    ];



    return (
        <nav className="text-black bg-yellow-200 ">
            <div  className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : 
                     <AiOutlineMenu className=""></AiOutlineMenu>

                }

               


            </div>
            <ul className={`md:flex ml-5 gap-10 shadow-lg md:static justify-center
            
            ${open? '' : 'hidden'}
            
            absolute font-medium p-8`}>
                {
                    routes.map(route => <Link key={route.id} route={route}>

                    </Link>)

                }

            </ul>
        </nav>
    );
};

export default Navber;