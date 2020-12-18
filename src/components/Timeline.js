import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((timelineEvent, i) => {
    return(
      <TimelineEvent key={i} person={timelineEvent.person} status={timelineEvent.status} timeStamp={timelineEvent.timeStamp} />
    );
  });
  return (
    <div className="timeline">{eventComponents}</div>
  );
};

export default Timeline;