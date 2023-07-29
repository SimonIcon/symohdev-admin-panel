import React from 'react'
import styles from "../styles/loginpage.module.css"
import { mypic } from '../config/images'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'




const LoginPage = () => {
    const navigate = useNavigate()
    // using formik
    function isValidEmail(e) {
        const re = /\S+@\S+\.\S+/;
        return re.test(e);
    }
    // formik handle
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: async (values) => {
            const error = {}
            if (!values.email) {
                error.email = toast.error('email required')
            } else if (!isValidEmail(values.email)) {
                error.email = toast.error('invalid email')
            } else if (values.password.length < 6) {
                error.password = toast.error('weak password')
            } else if (values.email !== process.env.REACT_APP_ADMIN_EMAIL) {
                error.email = toast.error('incorrect email')
            } else if (values.password !== process.env.REACT_APP_ADMIN_PASSWORD) {
                error.password = toast.error('incorrect password')
            }
            return error
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async () => {
            toast.success('you login successfully')
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000);
        }
    })
    return (
        <div className={`${styles.body} w-full h-full flex justify-center items-center`} >
            <div className={`${styles.loginComponent} w-[35%] h-[65%]`}>
                <Toaster position='top-center' reverseOrder={false}></Toaster>
                <div className='flex flex-col items-center py-7'>
                    <h4 className='font-bold text-xl text-black underline font-sans capitalize'>symohdev projects</h4>
                    <div className='flex flex-row w-full px-6 py-5 items-center h-[70%]'>
                        <img src={mypic} alt='mypic' className=' w-[50%] h-[30%] rounded-3xl' />
                        <form onSubmit={formik.handleSubmit} className='flex flex-col px-4'>
                            <input
                                id="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder='admin email'
                                required="true"
                                className='py-2 mt-4 px-3 bg-white rounded-md font-semibold text-sm border-2'
                            />
                            <input
                                id="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                placeholder='admin password'
                                required="true"
                                className='py-2 mt-4 px-3 bg-white rounded-md font-semibold text-sm border-2'
                            />
                            <button type="submit"
                                className='py-2 mt-4 bg-cyan-600 font-semibold text-sm capitalize rounded-md 
                                hover:bg-cyan-300'
                            >login</button>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage