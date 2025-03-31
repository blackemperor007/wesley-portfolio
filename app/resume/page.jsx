import React from 'react'

const Resume = () => {

    const experienceData = [
        {
            company: 'Tech Solutions Inc',
            title: 'Web Developper',
            year: '2021 - present',
        },
        {
            company: 'Creative Web Studio',
            title: 'Junio Web Developper',
            year: '2020 - 2021',
        },
        {
            company: 'Web Innovate Technologie',
            title: 'Web Developper Intern',
            year: '2019 - 2020',
        },
    ]

    const educationData = [
        {
            institut: "Institu Universitaire de l'estuaire et Stratégique",
            title: 'Licence Pro en Génie Logiciel',
            year: '2022 - 2023'
        },
        {
            institut: "Institu Universitaire de l'estuaire et Stratégique",
            title: 'BTS en Génie Logiciel',
            year: '2019 - 2021'
        },
    ]

    const skillData = ["HTML","CSS","JavaScript","React JS","Nextjs","MySQL","PHP","GitHub"]


    return (
        <div className='w-full z-20 h-full flex justify-center items-center'>
            <div className='w-11/12 gap-4 h-full pt-20 md:pb-0 pb-5 flex flex-col justify-center items-center'>
                <div className="w-full gap-5 flex md:flex-row flex-col justify-center items-center">
                    <div className="md:1/2 w-full">
                        <div className='rounded-xl p-6 overflow-hidden primary-glass2 w-full border border-gray-600/[0.5]'>
                            <div className='w-full z-30 relative'>
                                <h3 className='text-4xl font-bold'>Experience</h3>
                            </div>
                            <div className="py-5 z-30 w-10/12 mx-auto relative">
                                <ol className="relative border-s m-8 border-gray-200 dark:border-gray-700">
                                    {experienceData.map((experience, index) => {
                                        return (
                                            <li className="mb-10 ms-6" key={index}>
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                    </svg>
                                                </span>
                                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.year}</time>
                                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.company}</p>
                                            </li>
                                        )
                                    })

                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="md:1/2 w-full flex flex-col gap-4">
                        <div className='rounded-xl p-6 overflow-hidden primary-glass w-full border border-gray-600/[0.5]'>
                            <div className='w-full z-30 relative'>
                                <h3 className='text-4xl font-bold'>Education</h3>
                            </div>
                            <div className="py-5 z-30 max-w-10/12 mx-auto relative">
                                <ol className="relative border-s m-8 border-gray-200 dark:border-gray-700">
                                    {educationData.map((education, index) => {
                                        return (
                                            <li className="mb-10 ms-6" key={index}>
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                                    </svg>
                                                </span>
                                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{education.institut}</h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{education.year}</time>
                                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{education.title}</p>
                                            </li>
                                        )
                                    })

                                    }
                                </ol>
                            </div>
                        </div>
                        <div className='rounded-xl p-4 overflow-hidden glass2 w-full border border-gray-600/[0.5]'>
                            <div className='w-full z-30 relative'>
                                <h3 className='text-2xl font-bold'>Skills</h3>
                            </div>
                            <div className="py-5 z-30 max-w-10/12 mx-auto relative">
                                    <ul className='relative flex gap-3 flex-wrap'>
                                    {skillData.map((skill, index) => {
                                        return (
                                            <li className="glass cursor-default text-sm px-3 py-2 rounded-xl overflow-hidden" key={index}>
                                                {skill}
                                            </li>
                                        )
                                    })}
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Resume