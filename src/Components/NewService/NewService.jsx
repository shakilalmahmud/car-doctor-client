import { Link } from 'react-router-dom';
import checkout from '../../assets/images/checkout/checkout.png';
import { useContext } from 'react';
import { UserContext } from '../../Providers';
import { Helmet } from 'react-helmet-async';

const NewService = () => {

    const { services, setLoading } = useContext(UserContext)

    const handleNewService = async (event) => {


        setLoading(true)
        event.preventDefault()
        const title = event.target.title.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        //const type = event.target.type.value;
        const img = event.target.img.value;
        const service_id = services.length + 1;
        //console.log(services[1])
        const newService = { service_id, title, price, img, facility: JSON.stringify(services[1].facility), description }

        try {
            await fetch("http://localhost:3000/addnewservice", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newService),
            })
                .then((res) => {
                    const result = res.json();
                    console.log("Success:", result);

                })

        }
        catch (error) {
            console.error("Error:", error);
        }
        finally {
            setLoading(false)
        }
    }



    return (
        <section className='space-y-8'>
            <Helmet>
                <title>car-doctor/newservice</title>
            </Helmet>
            {/* chechout banner */}
            <div className='relative rounded-xl'>
                <img src={checkout} className='w-full' alt="" />

                <div className=' bg-gradient-to-r from-slate-800 to-transparent absolute w-full h-full top-0 flex items-center'>
                    <h1 className='font-bold text-5xl text-white text-left pl-16 '>Add New Service</h1>
                    <div className='trapezium flex justify-center items-center'>
                        <Link className='text-white font-bold text-2xl'>Home/Service</Link>
                    </div>
                </div>

            </div>
            {/* form */}
            <form className='bg-[#F3F3F3] w-full space-y-8 p-4'
                onSubmit={handleNewService}
            >
                <div className='grid grid-cols-2 gap-4'>
                    <input type="text" name="title" id="" placeholder='Service Name' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' required />
                    <input type="number" name="price" id="" placeholder='Service Price' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' required />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <input type="text" name="img" id="" placeholder='Picture URl' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' required />
                    <input type="text" name="type" id="" placeholder='Service Type' className='w-full h-12 px-4 rounded-lg text-slate-600 font-semibold' required />
                </div>
                <textarea name="description" className='w-full h-40 p-4 text-slate-600 font-semibold' placeholder='Product Description' ></textarea>
                <button type='submit' className='bg-[#FF3811] text-white font-bold text-2xl px-8 py-4 w-full rounded-lg'>Submit</button>

            </form>

        </section>
    );
};

export default NewService;