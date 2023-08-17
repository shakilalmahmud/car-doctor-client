import { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
//import { HiMiniArrowPathRoundedSquare } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Providers';

const NavBar = () => {
    const navigate = useNavigate()
    const { user, handleSignOut, setLogin } = useContext(UserContext)
    const [isSearch, setSearch] = useState(false)


    /** to create user for the portal*/
    const handleSignUp = () => {
        setLogin(false)
        navigate('/signup')
    }
    /** to handle log in for a user */

    const handleLogin = () => {
        setLogin(true)
        navigate('/signup')
    }



    return (
        <div className="navbar bg-base-100 flex justify-around">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="form-control">
                <ul className='flex gap-4 text-slate-900 font-semibold'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/services'><li>Services</li></Link>
                    <Link to='/addnewservice'><li>Add Service</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>

            </div>
            <div className='flex gap-4'>
                {/* <HiMiniArrowPathRoundedSquare></HiMiniArrowPathRoundedSquare> */}
                <AiOutlineShopping size={30} onClick={() => navigate('/orderlist')}></AiOutlineShopping>
                {
                    isSearch ? <input type="text" name="text" onMouseLeave={() => setSearch(false)} className='border-2 rounded w-36 h-8 text-center' placeholder='Search here' /> :
                        <AiOutlineSearch size={30} onClick={() => { setSearch(true) }} ></AiOutlineSearch>
                }


            </div>
            <div className='btn-group'>
                {
                    !user ?
                        <button className="btn btn-outline btn-warning hover:bg-[#FF3811] hover:text-white" onClick={handleLogin}>Log In</button> :
                        <button className="btn btn-outline btn-warning hover:bg-[#FF3811] hover:text-white" onClick={handleSignOut}>Sign Out</button>
                }
                {
                    !user ?
                        <button className="btn btn-outline btn-warning hover:bg-[#FF3811] hover:text-white" onClick={handleSignUp}>Sign Up</button> :
                        <button className="btn btn-outline btn-warning hover:bg-[#FF3811] hover:text-white" >Appointment</button>
                }
            </div>

        </div>
    );
};

export default NavBar;