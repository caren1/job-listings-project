import React from 'react'

const JobOffer = ({ job }) => {

    const languagesAndTools = []

    if (job.languages) {
        languagesAndTools.push(...job.languages)
    }

    if (job.tools) {
        languagesAndTools.push(...job.tools)
    }

    return (
        <div className="jobOffer flex bg-white shadow-lg m-4 p-6">
            <div className="jobOffer__logo">
                <img src={job.logo} alt="company-logo" />
            </div>
            <div className="jobOffer__description flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">{job.company}</h3>
                <h2 className="font-bold text-xl">{job.position}</h2>
                <p className="text-gray-700">{job.postedAt} · {job.contract} · {job.location}</p>
            </div>
            <div className="jobOffer__stack flex items-center ml-auto">
                {
                    languagesAndTools ? 
                    (languagesAndTools.map((item) => (
                    <span className="text-teal-500 bg-teal-100 text-xs m-2 p-2 rounded">{item}</span>))) : ('')
                }
                
            </div>
        </div>
    )
}

export default JobOffer
