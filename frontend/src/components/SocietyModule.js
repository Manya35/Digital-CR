import React, { useState } from 'react';
import './styles/SocietyModule.css';

const SocietyModule = () => {
    const [selectedSociety, setSelectedSociety] = useState(null);

    const societies = [
        { id: 'coding-society', name: 'Coding Society' },
        { id: 'music-society', name: 'Music Society' },
        { id: 'sports-club', name: 'Sports Club' },
        { id: 'drama-society', name: 'Drama Society' },
    ];

    const events = {
        'coding-society': [
            { title: 'Hackathon', date: '2024-12-01', time: '10:00 AM' },
            { title: 'Workshop on Algorithms', date: '2024-12-10', time: '2:00 PM' },
        ],
        'music-society': [
            { title: 'Live Concert', date: '2024-12-05', time: '6:00 PM' },
            { title: 'Music Jam', date: '2024-12-15', time: '4:00 PM' },
        ],
        'sports-club': [
            { title: 'Football Tournament', date: '2024-12-08', time: '8:00 AM' },
            { title: 'Basketball Championship', date: '2024-12-12', time: '9:00 AM' },
        ],
        'drama-society': [
            { title: 'Drama Play', date: '2024-12-07', time: '7:00 PM' },
            { title: 'Comedy Night', date: '2024-12-14', time: '5:00 PM' },
        ],
    };

    const handleSocietySelection = (societyId) => {
        setSelectedSociety(societyId);
    };

    return (
        <div className="society-module">
            <h2>Society Events</h2>
            <div className="society-selection">
                {societies.map((society) => (
                    <button key={society.id} onClick={() => handleSocietySelection(society.id)}>
                        {society.name}
                    </button>
                ))}
            </div>

            {selectedSociety && (
                <div className="events-list">
                    <h3>{societies.find(s => s.id === selectedSociety).name} - Upcoming Events</h3>
                    <ul>
                        {events[selectedSociety].map((event, index) => (
                            <li key={index}>
                                <strong>{event.title}</strong> <br />
                                Date: {event.date} <br />
                                Time: {event.time}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SocietyModule;
