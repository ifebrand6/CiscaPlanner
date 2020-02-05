import React from "react";
// import { NavLink } from "react-router-dom";
import moment from 'moment'

const Notifications = (props) => {
        const {notifications} = props
        const notify = notifications && notifications.map((item) => {
            return (
                <ul className="notifications">
                    <li key={item.id}>
                        <span className="pink-text">{item.user} </span>
                        <span> {item.content} </span>
                        <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()} </div>
                    </li>    
                </ul>
            )          
        })
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                       Notifications
                    </span>
                        {notify}
                </div>
            </div>
        </div>
    )
}
export default Notifications;