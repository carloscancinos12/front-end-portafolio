interface Achievement {
    title: string;
    place: string;
    recognitionDate: Date;
    descripcion: string;
}

const achievements: Achievement[] = [
    {
        title: "Desarrollador de software",
        place: "Freelancer",
        recognitionDate: new Date("2020-01-01"),
        descripcion: "Desarrollo de aplicaciones web y móviles"
    },
    {
        title: "Desarrollador de software",
        place: "Freelancer",
        recognitionDate: new Date("2020-01-01"),
        descripcion: "Desarrollo de aplicaciones web y móviles"
    },
    {
        title: "Desarrollador de software",
        place: "Freelancer",
        recognitionDate: new Date("2020-01-01"),
        descripcion: "Desarrollo de aplicaciones web y móviles"
    },
    {
        title: "Desarrollador de software",
        place: "Freelancer",
        recognitionDate: new Date("2020-01-01"),
        descripcion: "Desarrollo de aplicaciones web y móviles"
    },
]

export default function TimeLine(){
    return(
        <div className=" flex flex-col justify-center divide-y divide-slate-200">
            <div className=" w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
                <div className=" -my-6">
                    {achievements.map((achievement) => {
                        const id = crypto.randomUUID();
                        return(
                            <div key={id} className=" relative py-6 pl-8 sm:pl-32 group:">
                                <h3 className=" mb-1 text-2xl font-bold sm:mb-0">{achievement.title}</h3>
                                <div className=" flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"></div>
                                <time className=" sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{achievement.recognitionDate.toLocaleDateString()}</time>
                                <p className=" text-xl font-bold text-gray-400">{achievement.place}</p>
                                <p className=" text-slate-400 max-w-md">{achievement.descripcion}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}