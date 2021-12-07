import React,{useState} from 'react';

import './ExpensesFilter.css'

const ExpensesFilter = (props) =>{
    const [selectedDate,setSelectedDate] = useState('2021');

    const selectedDateHandler = (event) =>{
        setSelectedDate(event.target.value);
        props.onSaveExpeseYear(event.target.value);
    };

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectedDateHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020' selected >2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;