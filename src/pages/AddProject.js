import React, { useContext } from 'react'
import { Switch } from "@material-tailwind/react"
import { useFormik } from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import { adminContext } from '../context/AdminContext'

const AddProject = () => {
    // changing project type using switch
    const { twoPhase, setTwoPhase, addProject } = useContext(adminContext)
    const handleTwoPhase = () => {
        twoPhase === false ? setTwoPhase(true) : setTwoPhase(false)
    }
    const formik = useFormik({
        initialValues: {
            projectTitle: "",
            projectCategory: "",
            projectDescription: "",
            frontendTool: "",
            github: "",
            liveDemo: "",
            developmentTool: "",
            backendTool: "",
            backendGithub: "",
            frontendCode: ""
        },
        validate: async (values) => {
            const error = {}
            if (values.projectCategory === "") {
                error.projectCategory = toast.error('category required')
            } else if (values.projectTitle.length < 1) {
                error.projectTitle = toast.error('project title required')
            } else if (values.projectTitle.length < 15) {
                error.projectTitle = toast.error('too short project title')
            } else if (values.projectTitle.length > 50) {
                error.projectTitle = toast.error('too long project title')
            } else if (values.projectDescription.length < 1) {
                error.projectDescription = toast.error('project description required')
            } else if (values.projectDescription.length < 40) {
                error.projectDescription = toast.error('too short description')
            } else if (twoPhase === false && values.developmentTool === "") {
                error.developmentTool = toast.error('select development tool')
            } else if (twoPhase === false && values.github === "") {
                error.github = toast.error("provide source code link")
            } else if (twoPhase === false && values.liveDemo === "") {
                error.liveDemo = toast.error("provide live website link")
            } else if (twoPhase === true && values.frontendCode === "") {
                error.frontendCode = toast.error("provide frontend source code")
            } else if (twoPhase === true && values.frontendTool === "") {
                error.frontendTool = toast.error("your have not selected frontend tool")
            } else if (twoPhase === true && values.backendTool === "") {
                error.backendTool = toast.error('select backend technology')
            } else if (twoPhase === true && values.backendGithub === "") {
                error.backendGithub = toast.error("provide backend source code")
            } else if (twoPhase === true && values.liveDemo === "") {
                error.liveDemo = toast.error("provide live website link")
            }
            return error
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {

            const sourceCode = []
            const developmentTools = []
            if (twoPhase === true) {
                sourceCode.push({ "frontend": values.frontendCode })
                sourceCode.push({ "backend": values.backendGithub })
                developmentTools.push({ "frontend": values.frontendTool })
                developmentTools.push({ "backend": values.backendTool })
            } else {
                sourceCode.push(values.github)
                developmentTools.push(values.developmentTool)
            }
            addProject(values.projectTitle, values.projectDescription, values.projectCategory, values.liveDemo,
                sourceCode, developmentTools)
        }
    })
    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <Toaster position='top-center' reverseOrder={false}></Toaster>
                <form className='w-[50%] flex flex-col mt-6' onSubmit={formik.handleSubmit}>
                    <div className="flex flex-row justify-between items-center px-7">
                        <input type='text' id="projectTitle" placeholder='project title'
                            value={formik.values.projectTitle}
                            onChange={formik.handleChange}
                            className="w-[55%] px-5 py-2 border-2 rounded-md font-semibold text-sm"
                        />
                        <select id='projectCategory' value={formik.values.projectCategory}
                            onChange={formik.handleChange}
                            className='w-[35%] px-5 py-2 border-2 rounded-md font-semibold text-sm'
                        >
                            <option value="">project category</option>
                            <option value="basics">basics</option>
                            <option value="advance">advance</option>
                            <option value="client">client</option>

                        </select>
                    </div>
                    <div className='w-full flex flex-col px-7 mt-5'>
                        <label htmlFor='projectDescription'
                            className='font-semibold text-xs text-center capitalize'
                        >project description</label>
                        <textarea id="projectDescription" value={formik.values.projectDescription}
                            onChange={formik.handleChange} rows={5}
                            placeholder='create short description concerning your project'
                            className='w-[90% px-4 py-3 rounded-lg font-semibold text-sm indent-[25px] border-2 border-black'
                        > </textarea>

                    </div>
                    <div className='flex flex-row mt-5 w-full justify-evenly items-center px-10'>
                        <h4 className='font-semibold text-sm capitalize'>project type</h4>
                        <Switch label={twoPhase === true ? "two phase" : "one phase"}
                            onChange={handleTwoPhase} defaultValue={twoPhase} defaultChecked="true"
                            labelProps={{
                                className: "font-semibold text-sm text-black capitalize"
                            }}
                            className="h-full w-full checked:bg-[#2ec946]"
                            containerProps={{
                                className: "w-11 h-6",
                            }}
                        />
                    </div>
                    <div className='w-full'>
                        <div className={`${twoPhase === false ? "block" : "hidden"} w-full flex flex-col justify-center items-center`}>
                            <div className='w-[65%]'>
                                <select id='developmentTool' value={formik.values.developmentTool}
                                    onChange={formik.handleChange}
                                    className='w-full mt-4 px-5 py-2 border-2 capitalize rounded-md font-semibold text-sm'
                                >
                                    <option value="">development tool</option>
                                    <option value="html">html and css</option>
                                    <option value="reactjs">reactjs</option>
                                    <option value="angular">angular</option>
                                    <option value="nextjs">nextjs</option>
                                    <option value="nodejs">nodejs</option>
                                    <option value="django">django</option>
                                    <option value="laravel">laravel</option>
                                </select>
                                <input type='text' id='github' value={formik.values.github}
                                    onChange={formik.handleChange} placeholder='link to github'
                                    className='w-full mt-4 px-5 py-2 border-2  rounded-md font-semibold text-sm'
                                />
                                <input type='text' id='liveDemo' value={formik.values.liveDemo}
                                    onChange={formik.handleChange} placeholder='live website'
                                    className='w-full mt-4 px-5 py-2 border-2  rounded-md font-semibold text-sm'
                                />

                            </div>
                        </div>
                        <div className={`${twoPhase === true ? "block" : "hidden"} w-full flex justify-center items-center`}>
                            <div className='w-[85%] flex flex-col'>
                                {/* tools */}
                                <div className='w-full flex flex-row justify-between items-center'>
                                    <select id='frontendTool' value={formik.values.frontendTool}
                                        onChange={formik.handleChange}
                                        className='w-[45%] mt-4 px-5 py-2 border-2 capitalize rounded-md font-semibold text-sm'
                                    >
                                        <option value="">frontend tool</option>
                                        <option value="html">html and css</option>
                                        <option value="reactjs">reactjs</option>
                                        <option value="angular">angular</option>
                                        <option value="nextjs">nextjs</option>
                                    </select>
                                    <select id='backendTool' value={formik.values.backendTool}
                                        onChange={formik.handleChange}
                                        className='w-[45%] mt-4 px-5 py-2 border-2 capitalize rounded-md font-semibold text-sm'
                                    >
                                        <option value="">backend tools</option>
                                        <option value="nodejs">nodejs</option>
                                        <option value="django">django</option>
                                        <option value="laravel">laravel</option>
                                        <option value="nextjs">nextjs</option>
                                    </select>
                                </div>
                                {/* links */}
                                <div className='flex flex-col justify-center items-center'>
                                    <input type='text' id='frontendCode' value={formik.values.frontendCode}
                                        onChange={formik.handleChange} placeholder='frontend source code'
                                        className='w-full mt-4 px-5 py-2 border-2  rounded-md font-semibold text-sm'
                                    />
                                    <input type='text' id='backendGithub' value={formik.values.backendGithub}
                                        onChange={formik.handleChange} placeholder='backend source code'
                                        className='w-full mt-4 px-5 py-2 border-2  rounded-md font-semibold text-sm'
                                    />
                                    <input type='text' id='liveDemo' value={formik.values.liveDemo}
                                        onChange={formik.handleChange} placeholder='live website'
                                        className='w-full mt-4 px-5 py-2 border-2  rounded-md font-semibold text-sm'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-[full] flex justify-center items-center mt-4'>
                        <div className="w-[70%] flex flex-row justify-between items-center">
                            <h4 className='text-green-600 font-semibold text-sm capitalize'>keep coding</h4>
                            <button type='submit'
                                className='capitalize px-7 py-2 font-semibold text-sm rounded-md bg-cyan-700
                            hover:bg-cyan-300'
                            >create project</button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddProject