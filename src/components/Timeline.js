import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((timelineEvent, i)) => {
    return(
      <TimelineEvent fullName={student.fullName} email={student.email}
    )
  }
  return;
}

export default Timeline;