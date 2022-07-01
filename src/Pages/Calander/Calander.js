import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calander = () => {
    const [date, setDate] = useState(new Date())

    const formatDate = format(date, 'PPP');

    return (
        <div className='flex items-center justify-center min-h-0 w-full'>
            <div>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
                <p className='text-info'> You have selected : {formatDate}</p>
            </div>
        </div>

    );
};

export default Calander;