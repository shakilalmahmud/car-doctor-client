import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png'
import Facility from './Facility';
import { useContext } from 'react';
import { UserContext } from '../../Providers';
import ServiceTitle from './Servicetitle';
import Downloadpart from './Downloadpart';
import CarDoctorHelpline from './CarDoctorhelpline';

const ServiceDetails = () => {

    const service = useLoaderData()
    const navigate = useNavigate()
    const { services } = useContext(UserContext)
    const { img, price, title, description, facility, _id } = service
    const handleCheckout = (_id) => {
        navigate(`/services/checkout/${_id}`)
    }


    return (
        <section className='space-y-8'>
            {/* poster part of individual service details */}
            <div className='relative rounded-xl'>
                <img src={checkout} className='w-full' alt="" />

                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full top-0 flex items-center'>
                    <h1 className='font-bold text-5xl text-white text-left pl-16 '>Service Details</h1>
                    <div className='trapezium flex justify-center items-center'>
                        <Link className='text-white font-bold text-2xl'>Home/Service Details</Link>
                    </div>
                </div>

            </div>
            {/* body part 2 fraction */}
            <div className='grid grid-cols-3 gap-4'>
                {/* 1st column part */}
                <div className='col-span-2 space-y-8 '>
                    <img src={img} className='rounded-xl h-96 w-full' alt="" />
                    <div className='text-left space-y-4'>
                        <h1 className='font-bold text-5xl '>{title}</h1>
                        <p className='font-medium text-lg'>{description}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            facility.map(fac => <Facility facility={fac} key={fac.name}></Facility>)
                        }
                    </div>
                    <div className='text-left space-y-4'>
                        <h1 className='font-bold text-3xl'>3 Simple Steps To Process</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text</p>
                        <div className='grid grid-cols-3 gap-2'>
                            <div className='tex-center space-x-4 border-2 p-4 rounded-lg w-40'>
                                <div className='w-16 h-16 rounded-full bg-[#FF3811] flex justify-center items-center border-8 border-[#F3F3F3] mx-auto'>
                                    <h1 className='font-semibold text-white'>01</h1>
                                </div>
                                <h1 className='font-bold text-center'>STEP ONE</h1>
                                <p className='text-center'>It uses a dictionary of over 200 .</p>
                            </div>
                            <div className='tex-center space-x-4 border-2 p-4 rounded-lg w-40'>
                                <div className='w-16 h-16 rounded-full bg-[#FF3811] flex justify-center items-center border-8 border-[#F3F3F3] mx-auto'>
                                    <h1 className='font-semibold text-white'>02</h1>
                                </div>
                                <h1 className='font-bold text-center'>STEP TWO</h1>
                                <p className='text-center'>It uses a dictionary of over 200 .</p>
                            </div>
                            <div className='tex-center space-x-4 border-2 p-4 rounded-lg w-40'>
                                <div className='w-16 h-16 rounded-full bg-[#FF3811] flex justify-center items-center border-8 border-[#F3F3F3] mx-auto'>
                                    <h1 className='font-semibold text-white'>03</h1>
                                </div>
                                <h1 className='font-bold text-center'>STEP THREE</h1>
                                <p className='text-center'>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd column part */}
                <div className='space-y-4'>
                    {/* service titles */}
                    <div className='bg-[#F3F3F3] p-4 rounded'>
                        <h1 className='text-slate-950 font-bold text-lg text-left'>Services</h1>
                        <ul className='space-y-4'>
                            {
                                services.map(service => <ServiceTitle title={service.title} id={service._id} key={service._id}></ServiceTitle>)
                            }
                        </ul>

                    </div>
                    {/* Download */}
                    <Downloadpart></Downloadpart>
                    <CarDoctorHelpline></CarDoctorHelpline>
                    <div className='space-y-6'>
                        <h1 className='font-bold text-5xl text-slate-700'>Price ${price}</h1>
                        <button className='bg-[#FF3811] text-white font-bold text-2xl w-full px-8 py-4 rounded' onClick={() => handleCheckout(_id)}>Proceed Checkout</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceDetails;