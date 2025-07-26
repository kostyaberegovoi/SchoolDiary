import { useState, useEffect } from "react"
import AddStudent from "../Student/AddStudent"
import StudentsList from "../Student/StudentsList"
import { LocalStorageService } from "../utils/localStorageService"
import Context from "../context"

const HomePage = () => {
    const [students, setStudents] = useState([]);

    const pageInit = () => {
        fetch('http://localhost:4000/api/students')
        .then((response) => response.json())
        .then((studentsResponce) => {
            setStudents(studentsResponce);
        })
    };

    useEffect(() => {
        pageInit();
    }, []);

    const createStudent = (fullname) => {
        const subjects = [];
        const newStudent = { subjects, fullname };

        fetch('http://localhost:4000/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        })
        .then((response) => response.json())
        .then((studentResponce) => {
            console.log(1, studentResponce);
            const updatedStudents = [...students, studentResponce];
            setStudents(updatedStudents);
            LocalStorageService.saveData('students', updatedStudents);
        })
    };

    const removeStudent = (id) => {
        fetch(`http://localhost:4000/api/students/${id}`, {
            method: 'DELETE',
        })
        setStudents(students => students.filter(student => student.id !== id));
        LocalStorageService.saveData('students', students.filter(student => student.id !== id));
    };

    return(
        <Context.Provider value={{ removeStudent }}>  
            <div className="main-div">
                <h1 id="home-page-title">SCHOOL DIARY</h1>
                <AddStudent onCreate={createStudent} />
                <StudentsList students={students} />
            </div>
        </Context.Provider>
    )
}

export default HomePage