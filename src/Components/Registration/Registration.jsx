import { useContext } from 'react';
import signup from '../../assets/images/login/login.svg'
import { AiFillGoogleSquare, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { UserContext } from '../../Providers';
import { Helmet } from 'react-helmet-async';


const Registration = () => {

    const { isLogin, setLogin, handleSignup, handleSignIn } = useContext(UserContext)

    const handleRegistration = async(event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        try{
            if (!isLogin) {
                await handleSignup(email, password)
                console.log('sign up successfully')
            } else {
               await handleSignIn(email, password)
                console.log('login successfully')
            }
        }
        catch(error){
                console.log(error)
        }
        finally{
            event.target.email.value =''
            event.target.password.value = ''
            event.target.name.value = ''
        }
    }

    return (
        <section className='flex justify-around items-center my-12'>
            <Helmet>
                <title>car-Doctor/Registration</title>
            </Helmet>
            {/* registration page left side image */}
            <div>
                <img src={signup} className='' alt="" />
            </div>
            {/* registration page left side image*/}

            {/* login or sign up form */}
            <form className='border-2 rounded-lg pt-20 pb-8 space-y-8' onSubmit={handleRegistration}>
                <h1 className='font-bold text-3xl text-slate-950'>{isLogin ? 'Log In' : 'Sign Up'}</h1>
                {
                    !isLogin ?
                        <div className='flex flex-col px-8 space-y-2'>
                            <label htmlFor="" className='font-bold text-left text-lg'>Name</label>
                            <input type="text" className='h-10 w-96 p-4 text-slate-600 border-2 rounded' name='name' placeholder='Your Name' required />
                        </div> :
                        ''
                }
                <div className='flex flex-col px-8 space-y-2'>
                    <label htmlFor="" className='font-bold text-left text-lg'>Email</label>
                    <input type="email" className='h-10 w-96 p-4 text-slate-600 border-2 rounded' name='email' placeholder='Your Email' required />
                </div>
                <div className='flex flex-col px-8 space-y-2'>
                    <label htmlFor="" className='font-bold text-left text-lg'>Password</label>
                    <input type="password" className='h-10 w-96 p-4 text-slate-600 border-2 rounded' name='password' placeholder={isLogin ? 'Your Password' : 'Create A Password'} required />
                </div>
                <button type='submit' className='bg-[#FF3811] text-white font-bold text-xl px-8 py-2 w-96 rounded-lg '>{!isLogin ? 'Sign Up' : 'Log In'}</button>
                <div className='space-y-4'>
                    <h1>{isLogin ? 'or sign in' : 'or sign up with'}</h1>
                    <div className='flex gap-4 justify-center'>
                        <AiFillGoogleSquare className='text-[#FF3811] rounded w-10 h-10' size={30}></AiFillGoogleSquare>
                        <AiFillFacebook className='text-[#FF3811] rounded w-10 h-10' size={30}></AiFillFacebook>
                        <FaLinkedin className='text-[#FF3811] rounded w-10 h-10' size={30} ></FaLinkedin>
                    </div>
                    {!isLogin ?
                        <p>already have an account ? <button className='btn-link' onClick={() => setLogin(true)}>log in</button> </p>
                        :
                        <p>No account ? <button className='btn-link' onClick={() => setLogin(false)}>Sign Up</button> </p>
                    }
                </div>

            </form>
        </section>
    );
};

export default Registration;