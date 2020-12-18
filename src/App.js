import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

const data = timelineData;


function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{data.person}'s Social Media Feed</h1>
      </header>
      <main className="App-main"> 
      {/* create  a timeline component and give it the timelinevents */}
      <Timeline events={data.events} />
      </main>
    </div>
  );
}

export default App;
