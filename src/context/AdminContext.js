import React, { createContext, useState } from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from '../config/firebase'
import { toast } from 'react-hot-toast'



// creating adminContext
export const adminContext = createContext({})
const AdminContext = ({ children }) => {
    // declaring variable
    const [twoPhase, setTwoPhase] = useState(false)

    // adding project to the database
    const addProject = async (projectTitle, projectDescription, projectCategory, liveDemo, sourceCode, developmentTools) => {

        const timestamp = serverTimestamp()
        await addDoc(collection(db, "projects"), {
            projectTitle,
            projectCategory,
            createdAt: timestamp,
            projectDescription,
            liveDemo,
            sourceCode,
            developmentTools
        }).then((response) => {
            console.log(response.id)
            toast.success("added a project successfully")
        }).catch((error) => {
            console.log("error while creating project")
            toast.error("error occurred while adding project")
        })



    }
    return (
        <adminContext.Provider value={{ twoPhase, setTwoPhase, addProject }}>
            {children}
        </adminContext.Provider>
    )
}

export default AdminContext