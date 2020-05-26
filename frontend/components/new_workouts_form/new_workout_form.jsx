import React from 'react';
import { Link } from 'react-router-dom';

class NewWorkoutForm extends React.Component{
    constructor(props){
        super(props)

        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.monthStr = `${this.month}`;



        if (this.month < 10) {
            this.monthStr = "0" + this.monthStr;
        }
        
        this.day = this.date.getDate();
        this.dayStr = `${this.day}`;
        
        if (this.day < 10) {
            this.dayStr = "0" + this.dayStr;
        }
        this.dateStr = `${this.year}-${this.monthStr}-${this.dayStr}`

        this.hours = this.date.getHours();
        this.hoursStr = `${this.hours}`;
        
        if (this.hours % 12 === 0) {
            this.hoursStr = "12";
        } else {
            this.hoursStr = `${this.hours % 12}`;
        }

        this.minutes = this.date.getMinutes() + 1;
        this.minutesStr = `${this.minutes}`;
        
        if (this.minutes < 10) {
            this.minutesStr = "0" + this.minutesStr;
        }

        this.timeOfDay = "";
        if (this.hours < 12) {
            this.timeOfDay = "AM";
        } else if (this.hours >= 12) {
            this.timeOfDay = "PM";
        }

        this.timeStr = `${this.hoursStr}:${this.minutesStr} ${this.timeOfDay}`;

        this.dHour = "01";
        this.dMin = "00";
        this.dSec = "00";

        this.state = {
            title: "",
            date: this.dateStr,
            time: this.timeStr,
            sport: "Run",
            description: "",
            distance: ''         
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
            this.props.createWorkout({
                title: this.state.title,
                date: this.state.date,
                time: this.state.time,
                sport: "Run",
                description: this.state.description,
                distance: this.state.distance,
                user_id: this.props.session.id
            }).then( (result) => this.props.history.push("/workouts"));
    }

    render () {

        return (
            <div>

                <div className='navbar'>
                    <div className='main-logo-div'>
                        <img className='main-logo' src={window.main_logo_orange} alt="main-logo" />
                    </div>


                    <div className='link-backs'>
                        <div className='dashboard-link'>
                            <Link to={'/dashboard'}>Dashboard</Link>
                        </div>

                        <div className='dashboard-link'>
                            <Link to={'/routes'}>Routes</Link>
                        </div>

                        <div className='workout-link'>
                            <Link to={'/workouts'}>Workouts</Link>
                        </div>
                    </div>

                    <button className='log-out-btn' onClick={() => this.props.logout()}>Log Out</button>
                </div>

               <h1 className='workout-header'>New Workout</h1>

                <div></div>

                <form className='form-container' onSubmit={this.handleSubmit}>
                   <div className='first-section'>
                    <div className='distance-container'>
                        <label>
                            Distance
                            <br />
                             
                            <input
                                className='workout-input'
                                type='text'
                                value={this.state.distance}
                                onChange={this.update('distance')}
                            />

                            <input
                                className="place-holders"
                                type="text"
                                value="Miles"
                                readOnly>
                            </input>

                        </label>

                    </div>
           

                    <div className="duration-container">
                        <label>Duration
                                <br />
                                <div className='divider'></div>
                        <div className='duration-flex'>
                            
                            <div className="duration-hour-container">
                                <input
                                    className="duration-hour"
                                    onChange={this.update("dHour")}
                                    type="text"
                                    placeholder='hr'
                                    value={this.state.dHour || ''}
                                    />
   
                            </div>

                            <div className="duration-min-container">
                                <input
                                    className="duration-min"
                                    onChange={this.update("dMin")}
                                    type="text"
                                    placeholder='min'
                                    value={this.state.dMin || ''}
                                />

                            </div>

                            <div className="duration-sec-container">
                                <input
                                    className="duration-sec"
                                    onChange={this.update("dSec")}
                                    type="text"
                                    placeholder='sec'
                                    value={this.state.dSec || ""}
                                />

                            </div>
                        </div>

                        </label>
                    </div>


                    <div className='elevation-container'>
                        <label>Elevation
                            <div className="elevation-div" >
                                <input
                                    className='workout-input'
                                    onChange={this.update("elevation")}
                                    type="text"
                                    value={this.state.elevation || ''}
                                />

                                <input
                                    className="place-holders"
                                    type="text"
                                    value="feet"
                                    readOnly>
                                </input>
                            </div>
                        </label>
                    </div>
                    </div>

                    <hr />

                    <div className='second-section'>

                       
                        <div className="workout-sport-container">
                            
                            <label>Sport</label>
                            <br />
                            <input
                                className="workout-input-sport"
                                onChange={this.update('sport')}
                                type="text"
                                value={this.state.sport}>
                            </input>
                        </div>

                        <div className="workout-date-time-container">
                            <label>Date & Time</label>
                            <br />
                            <input
                                className="workout-input"
                                onChange={this.update('dateStr')}
                                type="date"
                                value={this.state.dateStr|| ''}>
                            </input>
                            <input
                                className="workout-input"
                                onChange={this.update('timeStr')}
                                type="text"
                                placeholder={this.timeStr}
                                value={this.state.timeStr}>
                            </input>
                        </div>
                    </div>


                    <div>
                        <div className="title-container">
                            <label>Title</label>
                            <br />
                            <input
                                className="workout-input-sport"
                                onChange={this.update('title')}
                                type="text"
                                placeholder="My Run"
                                value={this.state.title}>
                            </input>
                        </div>
                    </div>

                 

                    <hr />

                    <div>
                        <div className="description-container">
                            <label>Description</label>
                            <br />
                            <textarea
                                className="description-text"
                                onChange={this.update('description')}
                                value={this.state.description ||''}
                                placeholder="How did it go? Were you tired or rested? How was the weather?"></textarea>
                        </div>
                    </div>

                    <div>
                        <button className="workout-btn-save">Create</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default NewWorkoutForm;