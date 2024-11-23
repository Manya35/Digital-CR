import React, { useState } from 'react';
import './styles/ClassroomModule.css';

const ClassroomModule = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [bookedRooms, setBookedRooms] = useState([]);

    const classrooms = [
        { id: 'room101', name: 'Room 101', capacity: 30 },
        { id: 'room102', name: 'Room 102', capacity: 40 },
        { id: 'room103', name: 'Room 103', capacity: 20 },
        { id: 'room104', name: 'Room 104', capacity: 50 },
    ];

    const handleRoomSelection = (roomId) => {
        setSelectedRoom(roomId);
    };

    const handleRoomBooking = () => {
        if (selectedRoom) {
            setBookedRooms([...bookedRooms, selectedRoom]);
            setSelectedRoom(null); // Reset after booking
        }
    };

    return (
        <div className="classroom-module">
            <h2>Classroom Availability</h2>
            <div className="room-selection">
                <h3>Select a Room</h3>
                {classrooms.map((room) => (
                    <button
                        key={room.id}
                        onClick={() => handleRoomSelection(room.id)}
                        disabled={bookedRooms.includes(room.id)}
                    >
                        {room.name} - Capacity: {room.capacity}
                    </button>
                ))}
            </div>

            {selectedRoom && (
                <div className="room-booking">
                    <h3>Book {classrooms.find(r => r.id === selectedRoom).name}</h3>
                    <button onClick={handleRoomBooking}>Book Room</button>
                </div>
            )}

            <div className="booked-rooms">
                <h3>Booked Rooms</h3>
                <ul>
                    {bookedRooms.map((room, index) => (
                        <li key={index}>{classrooms.find(r => r.id === room).name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ClassroomModule;
