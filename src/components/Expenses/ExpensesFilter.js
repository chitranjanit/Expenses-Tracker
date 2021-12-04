import React,{useState} from 'react';

import './ExpensesFilter.css'

const ExpensesFilter = (props) =>{
    const [selectedDate,setSelectedDate] = useState('');

    const selectedDateHandler = (event) =>{
        setSelectedDate(event.target.value);
    };

    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectedDateHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
            <div className='expenses-filter__list'>
                <ul>
                {props.items.filter(item => (new Date(item.date).getFullYear()) == selectedDate).map(filteredItem => (
                    <li>
                    {filteredItem.title}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpensesFilter;