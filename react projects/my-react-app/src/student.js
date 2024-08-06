import React, { useState } from 'react';

const StudentDetails = ({ student }) => {
  if (!student || !student.marks) {
    return <div>No marks available</div>;
  }
  const { name, marks } = student;
  const totalMarks = marks.reduce((total, mark) => total + mark, 0);
  return (
    <div>
      <h2>{name}'s mark details</h2>
      {marks.map((mark, index) => (
        <ul key={index}>
          <li>subject {index + 1}: {mark}</li>
        </ul>
      ))}
      <p>total marks: {totalMarks}</p>
    </div>
  );
};

const Student = () => {
  const [student, setStudent] = useState({});

  const handleAddStudent = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const marks = [
      parseInt(event.target.mark1.value),
      parseInt(event.target.mark2.value),
      parseInt(event.target.mark3.value)
    ];
    const newStudent = { name, marks };
    setStudent(newStudent);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleAddStudent}>
        <label htmlFor="name">name:</label>
        <input type='text' id='name' />
        <label htmlFor="mark1">mark1</label>
        <input type='number' id='mark1' />
        <label htmlFor="mark2">mark2</label>
        <input type='number' id='mark2' />
        <label htmlFor="mark3">mark3</label>
        <input type='number' id='mark3' />
        <button type='submit'>add</button>
      </form>
      <StudentDetails student={student} />
    </div>
  );
};

export default Student;
