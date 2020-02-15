import React from "react";
// import { NavLink } from "react-router-dom";
import moment from 'moment'

const Notifications = (props) => {
        const {notifications} = props
        const notify = notifications && notifications.map((item) => {
            return (
                <div className="media chat-item" key={item.id}>
                <img alt="Claire" src="assets/img/avatar-female-1.jpg" className="avatar"/>
            <div className="media-body">
                <div className="chat-item-title">
                    <span className="chat-item-author SPAN-filter-by-text" data-filter-by="text">{item.user}</span>
                    <span data-filter-by="text" className="SPAN-filter-by-text">{moment(item.time.toDate()).fromNow()}</span>
                </div>
                <div className="chat-item-body DIV-filter-by-text" data-filter-by="text">
                    <p>{item.content} </p>
                </div>
            </div>
            </div>
            )          
        })
    return (
        <div className="sidebar-floating collapse" id="floating-chat" >
        <div className="sidebar-content">
            <div className="chat-module" data-filter-list="chat-module-body">
            <div className="chat-module-top">
                <b>Notifications</b>
                <div className="chat-module-body filter-list-1581100610120">
                        {notify}
                </div>
                <div className="chat-module-bottom">
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Notifications;