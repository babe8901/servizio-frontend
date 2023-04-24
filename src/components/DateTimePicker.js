import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-medium mb-2">Delivery Date and Time</h2>
      <div className="flex space-x-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="bg-white border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Time</label>
          <TimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            className="bg-white border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
