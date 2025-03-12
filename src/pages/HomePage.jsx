import React, { useState, useEffect } from "react"
import AddStudent from "../Student/AddStudent"
import StudentsList from "../Student/StudentsList"
import { LocalStorageService } from "../utils/localStorageService"
import Context from "../context"

const HomePage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const items = LocalStorageService.getData('students');

        if (items) {
          setStudents(items);
        }
    }, []);

    const handleCreate = (fullname) => {
        const subjects = [];
        const updatedStudents = [ ...students, { subjects, fullname, id: Math.random() }];
        setStudents(updatedStudents);
        LocalStorageService.saveData('students', updatedStudents)
    }

    const removeStudent = (id) => {
        const filteredStudents = students.filter( student => student.id !== id);
        setStudents(filteredStudents);
        LocalStorageService.saveData('students', filteredStudents)
    }

    return(
        <Context.Provider value={{ removeStudent }}>  
            <div className="main-div">
                <h1 id="home-page-title">SCHOOL DIARY</h1>
                <AddStudent onCreate={handleCreate} />
                <StudentsList students={students} />
            </div>
        </Context.Provider>
    )
}

export default HomePage