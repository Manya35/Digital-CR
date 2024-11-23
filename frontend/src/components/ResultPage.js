import React, { useState } from 'react';
import './styles/ResultPage.css';

const ResultPage = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [resultsData, setResultsData] = useState([]);
    const [message, setMessage] = useState('');

    const courses = [
        { id: "uni", name: "University" },
        { id: "cse", name: "CSE" },
        { id: "cse-ai", name: "CSE-AI" },
        { id: "it", name: "IT" },
        { id: "aiml", name: "AIML" },
        { id: "mae", name: "MAE" },
        { id: "dmam", name: "DMAM" },
    ];

    const handleYearSelection = (year) => {
        setSelectedYear(year);
        setSelectedCourse(null);
        setMessage('');
        setResultsData([]);
    };

    const handleCourseSelection = (courseId) => {
        setSelectedCourse(courseId);
        if (selectedYear === "2028") {
            setMessage("Results Coming Soon!!!");
            setResultsData([]);
        } else {
            fetchResults(courseId);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const fetchResults = async (courseId) => {
        const url = `https://script.google.com/macros/s/AKfycbyCbHlxYIZsYSUfOiZa0rznRMWUrFXNrwPxZAs2IfKPU2VGKrMP-CJosPVWLKmslOAJ/exec?course=${courseId}`;
        console.log(`Fetching results from: ${url}`);
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.message) {
                setMessage(data.message);
                setResultsData([]);
            } else {
                setMessage('');
                const updatedData = data.map((student) => {
                    const semValues = [
                        student.sem1 || 0,
                        student.sem2 || 0,
                        student.sem3 || 0,
                        student.sem4 || 0,
                        student.sem5 || 0,
                        student.sem6 || 0,
                        student.sem7 || 0,
                        student.sem8 || 0,
                    ];
                    const presentValues = semValues.filter((value) => value > 0);
                    const total =
                        presentValues.length > 0
                            ? presentValues.reduce((a, b) => a + b, 0) /
                              presentValues.length
                            : 0;

                    return { ...student, total };
                });
                updatedData.sort((a, b) => b.total - a.total);
                updatedData.forEach((student, index) => {
                    student.rank = index + 1;
                });
                setResultsData(updatedData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setMessage("Error fetching results. Please try again later.");
        }
    };

    const filteredResults = resultsData.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="result-page">
            <h2>Graduation Year Results</h2>
            <div className="year-selection">
                <button onClick={() => handleYearSelection("2027")}>2027</button>
                <button onClick={() => handleYearSelection("2028")}>2028</button>
            </div>

            {selectedYear && (
                <div className="course-selection">
                    {courses.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => handleCourseSelection(course.id)}
                        >
                            {course.name}
                        </button>
                    ))}
                </div>
            )}

            {message ? (
                <div className="no-results">{message}</div>
            ) : (
                selectedCourse && (
                    <div className="results-table">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search by Name"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Enrollment</th>
                                        <th>SEM1</th>
                                        <th>SEM2</th>
                                        <th>SEM3</th>
                                        <th>SEM4</th>
                                        <th>SEM5</th>
                                        <th>SEM6</th>
                                        <th>SEM7</th>
                                        <th>SEM8</th>
                                        <th className="sticky-total">TOTAL (CGPA)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map((student, index) => (
                                            <tr key={index}>
                                                <td>{student.rank}</td>
                                                <td>{student.name}</td>
                                                <td>{student.enrollment}</td>
                                                <td>{student.sem1 || 0}</td>
                                                <td>{student.sem2 || 0}</td>
                                                <td>{student.sem3 || 0}</td>
                                                <td>{student.sem4 || 0}</td>
                                                <td>{student.sem5 || 0}</td>
                                                <td>{student.sem6 || 0}</td>
                                                <td>{student.sem7 || 0}</td>
                                                <td>{student.sem8 || 0}</td>
                                                <td className="sticky-total">
                                                    {student.total.toFixed(2)}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="12" className="no-data">
                                                No results found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ResultPage;
