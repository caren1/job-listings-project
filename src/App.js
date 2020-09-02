import React, { useState, useEffect } from 'react';
import data from './assets/data.json'
import JobOffer from './components/JobOffer'

function App() {

  const [ jobs, setJobs ] = useState([]);

    // for the api call
    // useEffect(() => {
    //     fetch('API_URL')
    //     .then((response) => response.json())
    //     .then((data) => setJobs(data))
    // }, []);

    useEffect(() => {
        setJobs(data);
    }, [])

  return (
    <div className="app">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="header-background" />
      </header>
      {
        jobs.length === 0 ? (
          <p>jobs are fetching</p>
        ) : (
          // <JobBoard />
        jobs.map(job => (
          <JobOffer job={job} key={job.id}/>
        ))
        )
      }
    </div>
  );
}

export default App;


// What's the plan?
// 1 - Studied the design & json ; structure for JSX
// 2 - Create Job board Component
// 3 - Retrieving the data from json
// 4 - Passing down the data to the above component
// 5 - Styling + mobile
// 6 - Filtering -> Filter component