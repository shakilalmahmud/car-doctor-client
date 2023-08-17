import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers";
import CheckOut from "../../assets/images/checkout/checkout.png";
import Singlebooking from "./Singlebooking";

const Confirmedorders = () => {

    const { user } = useContext(UserContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:3000/orders?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))

    }, [user])


    return (
        <section className="">
            {/* banner */}
            <div className="relative">
                <img src={CheckOut} className='mx-auto' alt="" />
                <div className="absolute bg-gradient-to-r from-slate-800 to-transparent top-0 rounded-lg mx-6 w-full h-full items-start ps-20 justify-center flex flex-col">
                    <h1 className="text-white font-bolder text-3xl ">Cart Details</h1>
                    <h1 className="text-[#FF3811] font-medium text-lg">Home - Product Details</h1>
                </div>
            </div>
            {/* banner */}


            {/* orderlist */}

            <table className="table gap-6 my-10 ">
                {
                    bookings?.map((booking) => <Singlebooking booking={booking} key={Math.random()} > </Singlebooking>)
                }
            </table>

            {/* orderlist */}


        </section>
    );
};

export default Confirmedorders;