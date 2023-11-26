import React, { useContext, useState} from 'react';
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { TransactionContext } from '../context/TransactionContext';
import logo from '../../images/logo.png'

const NavbarItem = ({title, classprops}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classprops}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const {connectWallet, currentAccount} = useContext(TransactionContext);
    
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">            
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer"/>
            </div>
                    {!currentAccount && (<button type="button" 
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>)}                                           
        </nav>
    );
}

export default Navbar;