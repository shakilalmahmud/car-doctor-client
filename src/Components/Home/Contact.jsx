import { MdSchedule, MdCall, MdLocationOn } from 'react-icons/md';
import { FaRegMap } from 'react-icons/fa';
import { AiOutlineSchedule, AiOutlineMessage } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="bg-slate-950 flex justify-around items-center p-8 mt-8" >
            <div className='flex gap-4'>
                <div className=''>
                    <AiOutlineSchedule size={45} className='text-white'></AiOutlineSchedule>
                    <MdSchedule size={30} className='text-[#FF3811] relative -top-6 left-6' ></MdSchedule>
                </div>
                <div className='text-left'>
                    <h1 className='text-white font-medium'>we are open monday-friday</h1>
                    <h1 className='text-white font-semibold'>7:00 am - 9:00 pm</h1>
                </div>

            </div>
            <div className='flex gap-4'>
                <div className=''>
                    <MdCall size={45} className='text-white'></MdCall>
                    <AiOutlineMessage size={30} className='text-[#FF3811] relative -top-12 left-5' ></AiOutlineMessage>
                </div>
                <div className='text-left'>
                    <h1 className='text-white font-medium'>Have a question ?</h1>
                    <h1 className='text-white font-semibold'>+2546 251 2658</h1>
                </div>

            </div>
            <div className='flex gap-4'>
                <div className=''>
                    <FaRegMap size={45} className='text-white'></FaRegMap>
                    <MdLocationOn size={30} className='text-[#FF3811] relative -top-6 left-6' ></MdLocationOn>
                </div>
                <div className='text-left'>
                    <h1 className='text-white font-medium'>Need A repair? Our address</h1>
                    <h1 className='text-white font-semibold'>Liza Street, New York</h1>
                </div>

            </div>


        </div>
    );
};

export default Contact;