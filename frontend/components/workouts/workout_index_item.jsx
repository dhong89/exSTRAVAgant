import React from 'react';
import { Link } from 'react-router-dom';

class WorkoutIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { workout } = this.props
        const workoutArr = workout.values
// debugger
        // const workoutLi = workout.map((ele) => (
        //     <li>ele</li>
        // ))
        return (

            <>
                <th>{workout.workout_name}</th>
                <th>{workout.date}</th>
                <th>{workout.time}</th>
                <th>{workout.sport}</th>
                <th>{workout.title}</th>
                <th>{workout.distance}</th>
            </>
         
          
        )
    }
}

export default WorkoutIndexItem;