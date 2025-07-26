import { useState, useEffect } from "react";
import AddSubject from "../Subject/AddSubject";
import SubjectsList from "../Subject/SubjectsList";

const SubjectsPage = ({ initialStudentId }) => {
    const [allSubjects, setSubjects] = useState([]);
    const studentId = initialStudentId || 1;

    useEffect(() => {
        const fetchSubjectsWithMarks = async () => {
            const response = await fetch(`http://localhost:4000/api/subjects/${studentId}`);
            const data = await response.json();
            setSubjects(data);
        };
        fetchSubjectsWithMarks();
        
    }, [studentId]);

    const createSubject = (subject) => {

        fetch ('http://localhost:4000/api/subjects', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(subject),
        })
        
        .then((response) => response.json())
        .then((subjectResponce) => {
            const updatedSubjects = [...allSubjects, subjectResponce];
            setSubjects(updatedSubjects);
        })
    };

    return (
      <div id="subjects-main-div">
            <AddSubject onCreate={createSubject} />
            <SubjectsList
              allSubjects={allSubjects}
            />
      </div>
    );  
};

export default SubjectsPage;