import logo from '../../assets/logo.png'

const CarDoctorhelpline = () => {
    return (
        <div className='bg-slate-950 p-4 space-y-4'>
            <img src={logo} className='mx-auto' alt="" />
            <h1 className='font-bold text-2xl text-white'>Need Help?We Are Here To Help You</h1>
            <div className='mx-auto'>
                <div className='bg-white flex flex-col items-center p-4 mx-8'>
                    <h1 className='font-bold text-2xl text-slate-700'><span className='text-[#FF3811]'>Car Doctor</span> Special</h1>
                    <h1 className='text-slate-700 font-bold'>Save up to <span className='text-[#FF3811]'>60% off</span></h1>

                </div>
                <button className='bg-[#FF3811] text-white font-bold text-2xl px-8 py-4 relative -top-4'>Get A Quote</button>
            </div>
        </div>
    );
};

export default CarDoctorhelpline;