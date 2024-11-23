import React, { useState } from 'react';
import './styles/StudentProfilePage.css';

const StudentProfile = () => {
    const [enrollmentNumber, setEnrollmentNumber] = useState('');
    const [studentData, setStudentData] = useState(null);

    // Hardcoded student data for demonstration
    const studentProfiles = [
        {
            enrollment: '20270001',
            name: 'John Doe',
            universityRank: 10,
            batchRank: 2,
            cgpa: 8.5,
            semesters: [
                { semester: 1, subjects: { Math: 'A', English: 'B+', Science: 'A' } },
                { semester: 2, subjects: { Math: 'A+', English: 'A', Science: 'B' } },
                { semester: 3, subjects: { Math: 'B+', English: 'A', Science: 'A+' } },
                { semester: 4, subjects: { Math: 'A', English: 'B', Science: 'A' } },
            ]
        },
        {
            enrollment: '20270002',
            name: 'Jane Smith',
            universityRank: 20,
            batchRank: 5,
            cgpa: 7.9,
            semesters: [
                { semester: 1, subjects: { Math: 'B+', English: 'B', Science: 'C' } },
                { semester: 2, subjects: { Math: 'A', English: 'A-', Science: 'B+' } },
                { semester: 3, subjects: { Math: 'B', English: 'C', Science: 'A' } },
                { semester: 4, subjects: { Math: 'A-', English: 'B', Science: 'B' } },
            ]
        },
    ];

    const handleEnrollmentChange = (event) => {
        setEnrollmentNumber(event.target.value);
    };

    const fetchStudentProfile = () => {
        const profile = studentProfiles.find(student => student.enrollment === enrollmentNumber);
        setStudentData(profile || null);
    };

    return (
        <div className="student-profile-page">
            <h2>Student Profile</h2>
            <div className="enrollment-input">
                <input
                    type="text"
                    placeholder="Enter Enrollment Number"
                    value={enrollmentNumber}
                    onChange={handleEnrollmentChange}
                />
                <button onClick={fetchStudentProfile}>Search</button>
            </div>

            {studentData ? (
                <div className="student-details">
                    <h3>{studentData.name}</h3>
                    <p><strong>Enrollment Number:</strong> {studentData.enrollment}</p>
                    <p><strong>University Rank:</strong> {studentData.universityRank}</p>
                    <p><strong>Batch Rank:</strong> {studentData.batchRank}</p>
                    <p><strong>CGPA:</strong> {studentData.cgpa}</p>

                    <h4>Semester-wise Results:</h4>
                    {studentData.semesters.map((semester, index) => (
                        <div key={index} className="semester-result">
                            <h5>Semester {semester.semester}</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(semester.subjects).map(([subject, grade], i) => (
                                        <tr key={i}>
                                            <td>{subject}</td>
                                            <td>{grade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            ) : (
                enrollmentNumber && <p>No student found with this enrollment number.</p>
            )}
        </div>
    );
};

export default StudentProfile;
