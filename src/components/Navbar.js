import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-[60px] bg-[#37474f] text-white px-10 '>
            <div className='flex flex-row justify-between h-[60px] items-center'>
                <div className='w-[50%]'>
                    <h4 onClick={() => navigate('/dashboard')}
                        className="font-bold text-xl capitalize hover:text-pink-500"
                    >symohdev projects</h4>
                </div>
                <div className='w-[35%]'>
                    <ul className='w-full px-10 flex flex-row justify-between items-center'>
                        <li className='text-sm font-semibold capitalize hover:text-pink-500'>
                            <Link to="/dashboard/addProject">Add Project</Link>
                        </li>
                        <li className='text-sm font-semibold capitalize hover:text-pink-500'>
                            <Link to="/dashboard/members">my members</Link>
                        </li>
                        <li className='text-sm font-semibold capitalize  hover:text-pink-500'>
                            <Link to="/dashboard/gifts">gifts</Link>
                        </li>
                        <li className='text-sm font-semibold capitalize  hover:text-pink-500'>
                            <Link to="/dashboard/chats">chats</Link>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Navbar