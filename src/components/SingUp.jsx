import React, { useState } from 'react'
import Img from '@/assets/Img.png'
import Google from '@/assets/google.jpg'

function SingUp() {
    const [singup, setSingup] = useState(true)

    function handleEvent(){
        if(singup){
            setSingup(!singup)
        } else{
            setSingup(!singup)
        }
    }

    return (
        <>
            <div className='flex justify-center items-center gap-32 font-poppins'>
                <div className='flex flex-col gap-6'>
                    <div className='text-[32px]'>
                        {singup ?
                            (<h1>Get Started Now</h1>) :
                            (
                                <><h1>Welcome back !</h1>
                                    <p className='text-[16px]'>Enter your Credentials to access your account</p>
                                </>
                            )}
                    </div>
                    <div>
                        {singup ? (<>
                            <label className='text-[14px]' htmlFor="name">Name</label> <br />
                            <input className='w-[380px] border rounded-[10px] text-10px p-2 border-lightGray text-gray' type="text" placeholder='Enter Your Name' />
                        </>) : ""
                        }
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label> <br />
                        <input className='w-[380px] border rounded-[10px] text-10px p-2 border-lightGray text-gray' type="email" placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><span className='ml-52 cursor-pointer text-darkBlue text-[10px]'>forgot password?</span> <br />
                        <input className='w-[380px] border rounded-[10px] text-10px p-2 border-lightGray text-gray' type="password" placeholder='Enter Your Password' />
                    </div>
                    <div>
                        <input type="checkbox" name="checkbox" id="checkbox" /> &nbsp;
                        {singup?
                        <label htmlFor="checkbox" className='cursor-pointer'><span>I agree to the <span className="underline">terms & policy</span></span></label>:
                        <label htmlFor="checkbox" className='font-[9px] cursor-pointer'>Remember for 30 days</label>
                    }
                    </div>
                    <div>
                        {singup?
                        <button className='w-[380px] bg-darkGreen text-white font-bold rounded-[10px] p-2'>Singup</button>:
                        <button className='w-[380px] bg-darkGreen text-white font-bold rounded-[10px] p-2'>Login</button>
                    }
                    </div>
                    <div>
                        <p className='flex justify-center'>or</p>
                    </div>
                    <div>
                        <span className='font-[12px] border mr-2 p-2 rounded-[10px]'><button><img src={Google} className='w-4 inline' alt="" />Sing in with Google</button></span>
                        <button className='font-[12px] border ml-2 p-2 rounded-[10px]'><i className="ri-apple-fill"></i>Sing in with Apple</button>
                    </div>
                    <div className='flex justify-center'>
                        {singup?
                        <p onClick={handleEvent} className='cursor-pointer'>Have an account? <span className='text-darkBlue' >Sing In</span></p>:
                        <p onClick={handleEvent} className='cursor-pointer'>Don&apos;t have an account? <span className='text-darkBlue'>Sing Up</span></p>
                    }
                    </div>
                </div>
                <div>
                    <img src={Img} className='w-[42rem] mt-6' alt="" />
                </div>
            </div>
        </>
    )
}

export default SingUp