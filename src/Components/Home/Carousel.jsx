import carousel1 from '../../assets/images/banner/1.jpg';
import carousel2 from '../../assets/images/banner/2.jpg';
import carousel3 from '../../assets/images/banner/3.jpg';
import carousel4 from '../../assets/images/banner/4.jpg';
import carousel5 from '../../assets/images/banner/5.jpg';
import carousel6 from '../../assets/images/banner/6.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full rounded-md">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={carousel1} className="w-full h-screen" />
                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full grid grid-cols-2'>
                    <div className='text-white p-8 space-y-6 my-auto'>
                        <h1 className='font-bold text-7xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-outline hover:bg-[#FF3811] text-white w-48">Discover Me</button>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811] w-48">Latest Projects</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 left-auto right-10 bottom-5">
                    <a href="#slide6" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={carousel2} className="w-full h-screen" />
                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full grid grid-cols-2'>
                    <div className='text-white p-8 space-y-6 my-auto'>
                        <h1 className='font-bold text-7xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-outline hover:bg-[#FF3811] text-white w-48">Discover Me</button>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811] w-48">Latest Projects</button>
                        </div>
                    </div>


                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 left-auto right-10 bottom-5">
                    <a href="#slide1" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❯</a>
                </div>

            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src={carousel3} className="w-full h-screen" />
                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full grid grid-cols-2'>
                    <div className='text-white p-8 space-y-6 my-auto'>
                        <h1 className='font-bold text-7xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-outline hover:bg-[#FF3811] text-white w-48">Discover Me</button>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811] w-48">Latest Projects</button>
                        </div>
                    </div>


                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 left-auto right-10 bottom-5">
                    <a href="#slide2" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❯</a>
                </div>

            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img src={carousel4} className="w-full h-screen" />
                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full grid grid-cols-2'>
                    <div className='text-white p-8 space-y-6 my-auto'>
                        <h1 className='font-bold text-7xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-outline hover:bg-[#FF3811] text-white w-48">Discover Me</button>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811] w-48">Latest Projects</button>
                        </div>
                    </div>


                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 left-auto right-10 bottom-5">
                    <a href="#slide3" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❮</a>
                    <a href="#slide5" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❯</a>
                </div>

            </div>
            <div id="slide5" className="carousel-item relative w-full ">
                <img src={carousel5} className="w-full h-screen" />
                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full grid grid-cols-2'>
                    <div className='text-white p-8 space-y-6 my-auto'>
                        <h1 className='font-bold text-7xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-outline hover:bg-[#FF3811] text-white w-48">Discover Me</button>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811] w-48">Latest Projects</button>
                        </div>
                    </div>


                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 left-auto right-10 bottom-5">
                    <a href="#slide4" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❮</a>
                    <a href="#slide6" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❯</a>
                </div>

            </div>
            <div id="slide6" className="carousel-item relative w-full ">
                <img src={carousel6} className="w-full h-screen" />
                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full grid grid-cols-2'>
                    <div className='text-white p-8 space-y-6 my-auto'>
                        <h1 className='font-bold text-7xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-outline hover:bg-[#FF3811] text-white w-48">Discover Me</button>
                            <button className="btn btn-outline text-white hover:bg-[#FF3811] w-48">Latest Projects</button>
                        </div>
                    </div>


                </div>
                <div className="absolute flex gap-4 transform -translate-y-1/2 left-auto right-10 bottom-5">
                    <a href="#slide5" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle border-transparent hover:bg-[#FF3811] hover:text-white">❯</a>
                </div>

            </div>

        </div>
    );
};

export default Carousel;