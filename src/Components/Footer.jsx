import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AiFillGoogleCircle, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-slate-950 flex justify-around items-center p-8 mt-8'>
            <div className='w-80 space-y-4'>
                <img src={logo} className='text-white' alt="" />
                <p className='text-justify text-white'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <div className='flex gap-2 items-center'>
                    <AiFillGoogleCircle size={30} className='text-[#FF3811]'></AiFillGoogleCircle>
                    <AiFillTwitterCircle size={30} className='text-[#FF3811]'></AiFillTwitterCircle>
                    <AiFillInstagram size={30} className='text-[#FF3811]'></AiFillInstagram>
                    <AiFillLinkedin size={30} className='text-[#FF3811]'></AiFillLinkedin>
                </div>
            </div>
            <div className='space-y-4'>
                <h1 className='font-semibold text-white'>About</h1>
                <ul className='text-white'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/services'><li>Service</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <div className='space-y-4'>
                <h1 className='font-semibold text-white'>Support</h1>
                <ul className='text-white'>
                    <Link to='/support'><li>Support Center</li></Link>
                    <Link to='/feedback'><li>Feedback</li></Link>
                    <Link to='/accesbility'><li>Accesbility</li></Link>
                </ul>
            </div>
        </div>

    );
};

export default Footer;