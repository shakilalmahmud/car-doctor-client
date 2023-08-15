import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Servicetitle = (props) => {

    const navigate = useNavigate()

    const handleServiceDetails = (_id) => {
        navigate(`/services/${_id}`)
    }

    return (
        <li className="flex justify-between items-center bg-white p-2 rounded hover:bg-[#FF3811]">
            <h1 className="text-black font-bold hover:text-white">{props.title}</h1>
            <AiOutlineArrowRight onClick={() => handleServiceDetails(props.id)} className='text-[#FF3811]  hover:text-white'>
            </AiOutlineArrowRight>
        </li>
    );
};

export default Servicetitle;