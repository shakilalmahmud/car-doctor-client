import { Link, useLoaderData } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png';
import { useContext } from 'react';
import { UserContext } from '../../Providers';
import { Helmet } from 'react-helmet-async';

const CheckOut = () => {
    const data = useLoaderData()
    const { user } = useContext(UserContext)

    const handleOrder = (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        var order = {};
        var quantity = 1;
        var newOrderList = [];

        var oldOrderList = JSON.parse(localStorage.getItem('orders'));

        const emailcheck = oldOrderList?.find((order) => order.email === email);

        const idCheck = oldOrderList?.find((order) => order._id === data._id);

        order = { _id: data._id, name: (firstName + ' ' + lastName), phone, email, message, quantity }
        //console.log(emailcheck)


        try {
            if (oldOrderList) {
                {
                    if (idCheck && emailcheck) {
                        emailcheck.quantity++
                        newOrderList = [...oldOrderList]
                    }
                    else {
                        newOrderList = [...oldOrderList, order]
                    }
                }

            }
            else {
                newOrderList = [order]
            }


            const orders = JSON.stringify(newOrderList)
            localStorage.setItem('orders', orders)
        }
        catch (error) {
            console.error(error)
        }
        finally {

            event.target.firstName.value = '';
            event.target.lastName.value = '';
            event.target.phone.value = '';
            event.target.email.value = '';
            event.target.message.value = ''
        }



    }


    return (
        <section className='space-y-8'>
            <Helmet>
                <title>car-doctor/checkout</title>
            </Helmet>
            {/* chechout banner */}
            <div className='relative rounded-xl'>
                <img src={checkout} className='w-full' alt="" />

                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full top-0 flex items-center'>
                    <h1 className='font-bold text-5xl text-white text-left pl-16 '>Check Out</h1>
                    <div className='trapezium flex justify-center items-center'>
                        <Link className='text-white font-bold text-2xl'>Home/Check Out</Link>
                    </div>
                </div>

            </div>
            {/* form */}
            <form className='bg-[#F3F3F3] w-full space-y-8 p-4' onSubmit={handleOrder}>
                <div className='grid grid-cols-2 gap-4'>
                    <input type="text" name="firstName" id="" placeholder='First Name' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' required />
                    <input type="text" name="lastName" id="" placeholder='Last Name' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' required />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <input type="number" name="phone" id="" placeholder='Your Phone' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' required />
                    <input type="email" name="email" id="" placeholder='Your Email' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' defaultValue={user?.email} required />
                </div>
                <textarea name="message" className='w-full h-40 p-4 text-slate-600 font-semibold' placeholder='Your Message' ></textarea>
                <button type='submit' className='bg-[#FF3811] text-white font-bold text-2xl px-8 py-4 w-full rounded-lg '>Confirm Order</button>

            </form>

        </section>
    );
};

export default CheckOut;