import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TimetableNotificationsModule from './components/TimetableNotificationsModule';
import ClassroomModule from './components/ClassroomModule';
import SocietyModule from './components/SocietyModule';
import RankingModule from './components/RankingModule';
import ResultPage from './components/ResultPage';
import StudentProfilePage from './components/StudentProfilePage';
import Timetable from './components/Timetable';
import AttendanceTracker from './components/AttendanceTracker';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/timetable" element={<TimetableNotificationsModule />} />
                <Route path="/classroom" element={<ClassroomModule />} />
                <Route path="/society" element={<SocietyModule />} />
                <Route path="/ranking" element={<RankingModule />} />
                <Route path="/ranking/result" element={<ResultPage />} />
                <Route path="/ranking/student-profile" element={<StudentProfilePage />} />
                <Route path="/timetable/timetable-display" element={<Timetable />} />
                <Route path="/timetable/attendance-tracker" element={<AttendanceTracker />} />
            </Routes>
        </Router>
    );
}

export default App;
