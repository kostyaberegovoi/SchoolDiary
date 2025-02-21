import React, {useState, useEffect} from "react";
import AddSubject from "../Subject/AddSubject";
import SubjectsList from "../Subject/SubjectsList";
import { LocalStorageService } from "../utils/localStorageService";
import { useParams } from "react-router-dom";

const StudentPage = () => {
    const [allSubjects, setSubjects] = useState([]);

    const { id } = useParams();

    useEffect((subjects) => {
        const students = LocalStorageService.getData('students');
        const filteredStudents = students.filter((student => `${student.id}` === id));
        const currentStudent = filteredStudents[0];
        subjects = currentStudent.subjects
        setSubjects(subjects);
    }, [id]);

    const addSubject = (subject) => {
        const updatedSubjects = [ ...allSubjects, subject];
        setSubjects(updatedSubjects);
        addSubjectsToStudent(subject);
    }

    const addSubjectsToStudent = (subject) => {
        const students = LocalStorageService.getData('students');
        const filteredStudents = students.filter((student => `${student.id}` === id));
        const currentStudent = filteredStudents[0];
        currentStudent.subjects.push(subject);
        let arrayWithoutCurrentStudent = students.filter((student => `${student.id}` !== id));
        arrayWithoutCurrentStudent.push(currentStudent);

        LocalStorageService.saveData('students', students); 
    }

    return (
        <div id="subjects-main-div">
            <AddSubject onCreate={addSubject}></AddSubject>
            <SubjectsList allSubjects={allSubjects}></SubjectsList>
        </div>
    )
}

export default StudentPage