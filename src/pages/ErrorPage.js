import React from 'react'
import { Link } from 'react-router-dom'
// import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className='text-center pt-10'>
            <p className='flex flex-row text-center items-center justify-center'>
                <span className='text-black font-semibold capitalize text-lg mr-5'>something went wrong</span>
                <Link href="/" className=' py-2 px-4 bg-red-600 rounded-lg capitalize hover:bg-slate-200 text-black'>home</Link>
            </p>




        </div>
    )
}

export default ErrorPage