import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props);
  return(
    <div className="timeline-event">
      <div className="event-person">
        {props.events.person}
      </div>
      <div className="event-status">
        {props.events.status}
      </div>
      <div className="event-time">
        <Timestamp time ={props.events.timeStamp}>
      </div>
    </div>
  );
}

export default TimelineEvent;