import { UserContext } from '../../Providers';
import Servicethambnail from './Servicethambnail';
import { useContext } from 'react';

const Services = () => {

    const { services } = useContext(UserContext)

    return (
        <div className='space-y-4 '>
            <div className='text-center space-y-2'>
                <h1 className='font-semibold text-xl text-[#FF3811]'>services</h1>
                <h1 className='font-bold text-5xl text-black'>Our Service Area</h1>
                <p className='w-2/3 text-center mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className='mt-10 grid grid-cols-3 gap-4'>
                {
                    services.map(service => <Servicethambnail service={service} key={service._id} ></Servicethambnail>)
                }

            </div>

            <button className="btn bg-[#FF3811] text-white">More Services</button>
        </div>
    );
};

export default Services;