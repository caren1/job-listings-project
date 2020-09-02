import React, { useState, useEffect } from 'react';
import data from './assets/data.json'
import JobOffer from './components/JobOffer'

function App() {

  const [ jobs, setJobs ] = useState([]);
  const [ filters, setFilters ] = useState([])

    // for the api call
    // useEffect(() => {
    //     fetch('API_URL')
    //     .then((response) => response.json())
    //     .then((data) => setJobs(data))
    // }, []);

    useEffect(() => {
        setJobs(data);
    }, [])

    const filterFunction = ({ role, level, tools, languages }) => {
      if (filters.length === 0) return true
      const tags = [role, level]
      if(tools) tags.push(...tools)
      if(languages) tags.push(...languages)
      
      
      return filters.every((filter) => tags.includes(filter));
    }

    const handeTagClick = (tag) => {
      if(filters.includes(tag)) return;
      setFilters([...filters, tag])
    }
    
    const handleFilterClick = (filterToBeRemoved) => {
      setFilters(filters.filter(f => f !== filterToBeRemoved))
    }

    const clearFilters = () => {
      setFilters([])
    }

    const filteredJobs = jobs.filter(filterFunction)

  return (

    <div className="app">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="header-background" />
      </header>

      {filters.length > 0 && (

        <div className="flex bg-white shadow-md my-16 mx-10 p-6 rounded">
          {filters.map((filter) => (     
              <span className="text-teal-500 bg-teal-100 text-xs font-bold uppercase rounded sm:mb-0 p-2 cursor-pointer mr-4 mb-4" 
              onClick={() => handleFilterClick(filter)}>✕ {filter}</span>
          ))}
        <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto">Clear</button>
        </div>

      )}
      
      {jobs.length === 0 ? ( <p>jobs are fetching</p> ) : (filteredJobs.map(job => (<JobOffer job={job} key={job.id} handleTagClick={handeTagClick}/>)))}
    </div>
  )
}

export default App;

// What's the plan?
// 1 - Studied the design & json ; structure for JSX
// 2 - Create Job board Component
// 3 - Retrieving the data from json
// 4 - Passing down the data to the above component
// 5 - Styling + mobile
// 6 - Filtering -> Filter component