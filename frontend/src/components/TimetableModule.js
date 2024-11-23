import React, { useState } from 'react';
import './styles/TimetableModule.css';

const TimetableModule = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Hardcoded timetable data for demonstration
    const timetableData = {
        CSE: {
            Monday: [
                { time: '9:00 AM - 10:00 AM', subject: 'Mathematics' },
                { time: '10:00 AM - 11:00 AM', subject: 'Physics' },
                { time: '11:00 AM - 12:00 PM', subject: 'Computer Science' },
            ],
            Tuesday: [
                { time: '9:00 AM - 10:00 AM', subject: 'Data Structures' },
                { time: '10:00 AM - 11:00 AM', subject: 'Algorithms' },
            ],
        },
        IT: {
            Monday: [
                { time: '9:00 AM - 10:00 AM', subject: 'Mathematics' },
                { time: '10:00 AM - 11:00 AM', subject: 'Database Systems' },
                { time: '11:00 AM - 12:00 PM', subject: 'Computer Networks' },
            ],
            Tuesday: [
                { time: '9:00 AM - 10:00 AM', subject: 'Operating Systems' },
                { time: '10:00 AM - 11:00 AM', subject: 'Software Engineering' },
            ],
        },
        AIML: {
            Monday: [
                { time: '9:00 AM - 10:00 AM', subject: 'Linear Algebra' },
                { time: '10:00 AM - 11:00 AM', subject: 'Artificial Intelligence' },
            ],
            Tuesday: [
                { time: '9:00 AM - 10:00 AM', subject: 'Machine Learning' },
                { time: '10:00 AM - 11:00 AM', subject: 'Data Science' },
            ],
        },
    };

    const courses = ['CSE', 'IT', 'AIML'];

    const handleDaySelection = (day) => {
        setSelectedDay(day);
    };

    const handleCourseSelection = (event) => {
        setSelectedCourse(event.target.value);
        setSelectedDay(null); // Reset day when course changes
    };

    const availableDays = selectedCourse ? Object.keys(timetableData[selectedCourse]) : [];

    return (
        <div className="timetable-module">
            <h2>Timetable</h2>
            
            {/* Course Selection Dropdown */}
            <div className="course-selection">
                <select onChange={handleCourseSelection} value={selectedCourse}>
                    <option value="" disabled>Select Course</option>
                    {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                    ))}
                </select>
            </div>

            {/* Day Selection */}
            {selectedCourse && (
                <div className="day-selection">
                    {availableDays.map((day) => (
                        <button key={day} onClick={() => handleDaySelection(day)}>
                            {day}
                        </button>
                    ))}
                </div>
            )}

            {/* Timetable for the selected course and day */}
            {selectedDay && selectedCourse && (
                <div className="timetable-details">
                    <h3>{selectedCourse} - {selectedDay} Timetable</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetableData[selectedCourse][selectedDay].map((classInfo, index) => (
                                <tr key={index}>
                                    <td>{classInfo.time}</td>
                                    <td>{classInfo.subject}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TimetableModule;
