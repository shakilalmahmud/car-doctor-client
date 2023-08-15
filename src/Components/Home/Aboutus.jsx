import parts from '../../assets/images/about_us/parts.jpg';
import person from '../../assets/images/about_us/person.jpg'

const Aboutus = () => {
    return (
        <section className='mt-10 grid grid-cols-2'>
            <div className='p-4'>
                <div className='p-4 relative top-auto'>
                    <img src={person} alt="" className='w-2/3' />
                    <img src={parts} className='w-72 relative -top-32 left-1/3 z-10 border-8 border-white rounded' alt="" />
                </div>
            </div>
            <div className='text-left space-y-4'>
                <h1 className='font-semibold text-xl text-[#FF3811]'>About Us</h1>
                <h1 className='font-bold text-5xl text-black'>We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn bg-[#FF3811] text-white">Get MOre Info</button>
            </div>

        </section>
    );
};

export default Aboutus;