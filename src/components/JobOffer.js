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
        <div className={`jobOffer flex-col my-16 mx-10 flex bg-white shadow-lg p-6 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'} sm:flex-row`}>
            <div className="jobOffer__logo">
                <img className="-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0" src={job.logo} alt="company-logo" />
            </div>
            <div className="jobOffer__description flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}
                    {job.isNew && <span className="bg-teal-500 text-teal-100 rounded-full m-2 px-2 py-1 text-xs uppercase">New</span>}
                    {job.featured && <span className="bg-gray-800 text-white rounded-full m-2 px-2 py-1 text-xs uppercase">Featured</span>}
                </h3>
                <h2 className="font-bold text-xl my-2 sm:my-0">{job.position}</h2>
                <p className="text-gray-700">{job.postedAt} · {job.contract} · {job.location}</p>
            </div>
            <div className="jobOffer__stack flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
                {
                    tags ? 
                    (tags.map((item) => (
                    <span className="text-teal-500 bg-teal-100 text-xs mr-4 mb-4 p-2 rounded sm:mb-0">{item}</span>))) : ('')
                }
                
            </div>
        </div>
    )
}

export default JobOffer
