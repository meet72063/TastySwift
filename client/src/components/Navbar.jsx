import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";
import { HiUser } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import AuthModal from '../modals/AuthModal';



const Navbar = () => {
    const [showModal, setShowModal] = useState(false)



    return (
        <div className='border-b shadow-gray-200'>
            <div className=' flex w-[80%] mx-auto justify-between items-center py-4 '>
                {/* logo */}
                <div className='text-3xl text-red-500'>
                    <h2>TastySwift</h2>
                </div>

                <div className='flex gap-6'>
                    <div className='bg-gray-100 py-3 px-6 border rounded-lg  min-w-[40vw] flex  items-center '>

                        <input type="text" className='border-none outline-none  bg-transparent text-lg font-thin flex-grow'
                            placeholder='Search for Foods and Dishes'


                        />
                        <GoSearch size={20} />
                    </div>


                    <button onClick={() => setShowModal(true)} className='w-14  h-14 rounded-full bg-zinc-900 flex justify-center items-center p-2 cursor-pointer'>
                        <HiUser color='white' size={30} />
                    </button>


                    <button title='Logout'
                        className='bg-teal-500  flex rounded-full  h-14 w-14 justify-center items-center cursor-pointer p-3'
                    >
                        <div className='border-4 border-white rounded-full p-3'><AiOutlineLogout size={20} /></div>
                    </button>

                    {showModal && <AuthModal setShowModal={setShowModal} />}


                </div>




            </div>
        </div>
    )
}

export default Navbar

