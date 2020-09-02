import React from 'react'

const JobOffer = ({ job }) => {

    const tags = [job.role, job.level]

    if (job.languages) {
        tags.push(...job.languages)
    }

    if (job.tools) {
        tags.push(...job.tools)
    }

    return (
        <div className={`jobOffer flex bg-white shadow-lg m-4 p-6 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'}`}>
            <div className="jobOffer__logo">
                <img src={job.logo} alt="company-logo" />
            </div>
            <div className="jobOffer__description flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}
                    {job.isNew && <span className="bg-teal-500 text-teal-100 rounded-full m-2 px-2 py-1 text-xs">New</span>}
                    {job.featured && <span className="bg-gray-800 text-white rounded-full m-2 px-2 py-1 text-xs">Featured</span>}
                </h3>
                <h2 className="font-bold text-xl">{job.position}</h2>
                <p className="text-gray-700">{job.postedAt} · {job.contract} · {job.location}</p>
            </div>
            <div className="jobOffer__stack flex items-center ml-auto">
                {
                    tags ? 
                    (tags.map((item) => (
                    <span className="text-teal-500 bg-teal-100 text-xs m-2 p-2 rounded">{item}</span>))) : ('')
                }
                
            </div>
        </div>
    )
}

export default JobOffer
