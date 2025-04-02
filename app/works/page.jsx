import React from "react";

const Works = () => {
    const worksData = [
        {
            image : "./img/pro01.png",
            name: "Cash.Track App",
            date: "18 Aug,2025",
            category: "NextJs App"
        },
        {
            image : "./img/pro02.png",
            name: "Electricals Shop",
            date: "18 Aug,2025",
            category: "Website"
        },
        {
            image : "./img/pro03.png",
            name: "Pj Coconuts",
            date: "18 Aug,2025",
            category: "Web App"
        },
        {
            image : "./img/pro04.png",
            name: "Technofolio",
            date: "18 Aug,2025",
            category: "Web App"
        },
        {
            image : "./img/pro05.png",
            name: "Portfolio Emily",
            date: "18 Aug,2025",
            category: "Web App"
        },
        {
            image : "./img/pro06.png",
            name: "Dictionary App",
            date: "18 Aug,2025",
            category: "Web App"
        },
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
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-right"> {works.date} </p>
                                    </div>
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
