import CheckOut from "../../assets/images/checkout/checkout.png";


const Orderlist = () => {
    const orders = JSON.parse(sessionStorage.getItem('orders'))
    console.log(orders)

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



            {/* orderlist */}


        </section>
    );
};

export default Orderlist;