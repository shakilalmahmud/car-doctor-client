import { useState } from "react";
import CheckOut from "../../assets/images/checkout/checkout.png";
import SingleOrder from "./SingleOrder";
import { AiOutlineDelete, AiOutlineRollback } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";


const Orderlist = () => {
    const primaryOrders = JSON.parse(localStorage.getItem('orders'))
    const [orders, setOrders] = useState(primaryOrders)
    const navigate = useNavigate()
    //console.log(orders)

    /** handle order cancel */

    const handleOrderCancel = (_id) => {
        const orderToShow = orders.filter((order) => order._id !== _id)
        setOrders(orderToShow)
        localStorage.setItem('orders', JSON.stringify(orderToShow))
    }

    /** handle order cancel */

    /** handle order confirmed */

    const handleOrderConfirm = (order) => {
        const orderToShow = orders.find((ord) => ord === order)
        orderToShow.confirmation = true
        localStorage.setItem('orders', JSON.stringify(orders))
    }

    /** handle order confirmed */

    /** clear cart */

    const clearCart = () => {
        localStorage.removeItem('orders')
        setOrders([])
    }

    /** clear cart */

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
                    orders?.map((order) => <SingleOrder order={order} key={Math.random()} handleOrderCancel={handleOrderCancel} handleOrderConfirm={handleOrderConfirm}  > </SingleOrder>)
                }
            </table>

            {/* orderlist */}

            {/* clear local storage and return to shopping */}

            <div className="flex justify-between mx-auto">
                <button onClick={() => navigate('/services')} className="btn bg-transparent border-0 no-animation"><AiOutlineRollback></AiOutlineRollback> <span>Continue Shopping</span></button>
                <button onClick={clearCart} className="btn bg-transparent border-0 no-animation"><AiOutlineDelete></AiOutlineDelete>  <span>Clear the cart</span></button>
            </div>
            {/* clear local storage and return to shopping */}


        </section>
    );
};

export default Orderlist;