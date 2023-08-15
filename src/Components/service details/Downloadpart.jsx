import { BsFileEarmarkText } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Downloadpart = () => {
    return (
        <div className='bg-slate-950 p-4 rounded'>
            <ul className='space-y-4'>
                <li className='flex items-center justify-between'>
                    <BsFileEarmarkText className='text-white' size={25}></BsFileEarmarkText>
                    <h1 className='text-white'>Our Brochure</h1>
                    <button className='bg-[#FF3811] flex justify-center items-center p-2'>
                        <AiOutlineArrowRight className='text-white'></AiOutlineArrowRight>
                    </button>

                </li>
                <li className='flex items-center justify-between'>
                    <BsFileEarmarkText className='text-white' size={25}></BsFileEarmarkText>
                    <h1 className='text-white'>Company Details</h1>
                    <button className='bg-[#FF3811] flex justify-center items-center p-2'>
                        <AiOutlineArrowRight className='text-white'></AiOutlineArrowRight>
                    </button>

                </li>
            </ul>
        </div>
    );
};

export default Downloadpart;