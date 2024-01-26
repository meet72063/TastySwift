import React from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { MdEmail, MdLock } from 'react-icons/md'

const SignUpForm = () => {
    return (
        <form action="" className='flex flex-col gap-5 '>
            {/* Name */}
            <div className='py-1'>
                <div className='py-2  px-4 flex items-center gap-2  rounded-md border '>
                    <FaCircleUser color='gray' size={30} />

                    <input type="text" name="name" id="name" className='border-none outline-none  p-2  flex-grow '
                        placeholder='Enter your Name' />



                </div>
                <small className='text-red-400'>Name should be atleast 3 char log</small>

            </div>
            {/* Email */}
            <div className='py-1'>
                <div className='py-2  px-4 flex items-center gap-2  rounded-md border'>
                    <MdEmail color='gray' size={30} />

                    <input type="email" name="email" id="email" className='p-2 border-none outline-none  flex-grow'
                        placeholder='Enter your Email' />


                </div>
                <small className='text-red-400'>Invalid Email</small>

            </div>
            {/*Password  */}
            <div className='py-1'>
                <div className='py-2  px-4 flex items-center gap-2  rounded-md border'>
                    <MdLock color='gray' size={30} />

                    <input type="password" name="password" id="password" className='p-2 border-none outline-none  flex-grow'
                        placeholder='Enter a strong Password' />
                </div>
                <small className='text-red-400'>password should contain one special chracter</small>

            </div>


            {/* Submit Btn */}
            <button type='submit' className='border py-2 px-10  mt-4 rounded-md w-full bg-teal-400  '>Submit</button>

        </form>
    )
}

export default SignUpForm
