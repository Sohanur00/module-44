

import { LineChart, Line } from 'recharts';


const LineCharts = () => {

    const studentData = [
        { id: 1, name: 'John Doe', mathMarks: 85 },
        { id: 2, name: 'Jane Doe', mathMarks: 72 },
        { id: 3, name: 'Bob Smith', mathMarks: 90 },
        { id: 4, name: 'Alice Johnson', mathMarks: 65 },
        { id: 5, name: 'Charlie Brown', mathMarks: 78 },
        { id: 6, name: 'Eve Green', mathMarks: 88 },
        { id: 7, name: 'Frank Davis', mathMarks: 70 },
        { id: 8, name: 'Grace Wilson', mathMarks: 95 },
        { id: 9, name: 'Harry Lee', mathMarks: 60 },
        { id: 10, name: 'Ivy Turner', mathMarks: 75 },
    ];


    return (
        <div>
            <LineChart data={studentData} width={400} height={400}>
                <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>









    );
};

export default LineCharts;