import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Servicethambnail = ({ service }) => {

    const { _id, img, price, title } = service
    const navigate = useNavigate()

    const url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fphotos%2F3TLl_97HNJo&psig=AOvVaw0nhaepi6IQONdJjIAClLIj&ust=1687263157436000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj835qnz_8CFQAAAAAdAAAAABAE'

    const handleServiceDetails = (_id) => {
        navigate(`/services/${_id}`)
    }

    return (
        <div className=" p-4 w-72 rounded-xl border-2">

            {
                img ?
                    <img src={img} alt='No image' className="rounded-xl" />
                    :
                    <img src={url} className='rounded-xl' />

            }

            <div className="card-body text-left">
                <h2 className="tex-xl font-bold">{title}</h2>
                <div className="card-actions flex justify-between items-center ">
                    <h1 className="text-[#ff3811] font-semibold">price : ${price ? price : 'N/A'}</h1>
                    <AiOutlineArrowRight onClick={() => handleServiceDetails(_id)} className='text-[#FF3811]' ></AiOutlineArrowRight>

                </div>
            </div>
        </div>
    );
};

export default Servicethambnail;