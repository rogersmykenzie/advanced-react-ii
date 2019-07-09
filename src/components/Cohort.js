import React, {useState, useEffect} from 'react';
import axios from 'axios';
import useCounter from '../hooks/useCounter';

function Cohort(props) {

    //bedroomNum
    //diningRoomNum
    //numLivingRoom
    //numBathrooms

    


    // const [students, updateStudents] = useState([]);
    // const [inputText, updateText] = useState('');

    // useEffect(() => {
    //     axios.get('https://swapi.co/api/people').then(response => {
    //         let arr = response.data.results.map(val => {
    //             return <h1>{val.name}</h1>
    //         })
    //         updateStudents(arr);
    //     })

    // }, []);
    const [count, increment, decrement] = useCounter()
    return (
        <div>
            <h1 onClick={increment}>{count}</h1>
            {/* {students}
            <input onChange={e => updateText(e.target.value)} />
            <button onClick={() => updateStudents([...students, inputText])}>Add to Cohort</button> */}
        </div>
    )
}

export default Cohort;