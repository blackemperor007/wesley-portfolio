import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";


const Works = () => {
    const worksData = [
        {
            image: "./img/pro01.png",
            name: "Cash.Track App",
            category: "Web App with NextJs",
            path: "#",
            linkGit: "https://github.com/blackemperor007/finance_app_nextjs"
        },
        {
            image: "./img/pro02.png",
            name: "SchoolLama",
            category: "Web App with NextJs",
            path: "#",
            linkGit: "https://github.com/blackemperor007/next-dashboard-ui"
        }
    ]

    return (
        <div className="w-full z-20 h-full flex justify-center items-center">
            <div className="w-11/12 gap-4 h-full pt-20 pb-56 flex flex-col justify-center items-center">
                <div className="w-full">
                    <h3 className="font-bold text-center text-2xl">Works & Projects</h3>
                </div>
                <div className="w-full grid gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {worksData.map((works, index) => {
                        return (
                            <div key={index} className="glass2 w-full border border-gray-600/[0.5] p-3 rounded-xl">
                                <div className="w-full rounded-xl overflow-hidden">
                                    <img src={works.image} alt={works.name} className="w-full h-full object-cover rounded-sm" />
                                </div>
                                <div className="w-full flex py-2 items-center justify-between">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-xl"> {works.name} </h3>
                                        <p className="text-sm text-gray-400"> {works.category} </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">

                                    <a href={works.path} target="_blank" rel="noopener noreferrer"
                                        className="linear flex flex-row items-center rounded-xl bg-amber-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-amber-600 active:bg-amber-700"
                                        data-ripple-light
                                    >
                                        <FaLink className="mr-2 fill-white" height="16" width="16" />

                                        Visiter le site
                                    </a>
                                    <a href={works.linkGit} target="_blank" rel="noopener noreferrer"
                                        className="linear flex flex-row items-center rounded-xl bg-navy-700 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
                                        data-ripple-light
                                    >
                                        <FaGithub className="mr-2 fill-white" height="16" width="16" />
                                        Dépôt GitHub
                                    </a>

                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
};

export default Works;
