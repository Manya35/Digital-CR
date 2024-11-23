import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TimetableModule from './components/TimetableModule';
import ClassroomModule from './components/ClassroomModule';
import SocietyModule from './components/SocietyModule';
import RankingModule from './components/RankingModule';
import ResultPage from './components/ResultPage';
import StudentProfilePage from './components/StudentProfilePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/timetable" element={<TimetableModule />} />
                <Route path="/classroom" element={<ClassroomModule />} />
                <Route path="/society" element={<SocietyModule />} />
                <Route path="/ranking" element={<RankingModule />} />
                <Route path="/ranking/result" element={<ResultPage />} />
                <Route path="/ranking/student-profile" element={<StudentProfilePage />} />
            </Routes>
        </Router>
    );
}

export default App;
