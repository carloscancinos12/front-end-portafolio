interface Achievement {
    title: string;
    place: string;
    recognitionDate: Date;
    descripcion: string;
}

const achievements: Achievement[] = [
    {
        title: "Primer lugar Concurso de matemáticas",
        place: "USAC",
        recognitionDate: new Date("2016-08-07"),
        descripcion: "Ganador del primer lugar en la XXIX edición el concurso de matemáticas de la Universidad de San Carlos de Guatemala"
    },
    {
        title: "Cuarto Lugar Concurso de Fisica",
        place: "USAC",
        recognitionDate: new Date("2017-10-06"),
        descripcion: "Ganador del cuarto lugar en la XXX edición el concurso de física de la Universidad de San Carlos de Guatemala"
    },
    {
        title: "Primer Lugar Concurso de Quimica",
        place: "Instituto Werner Ovalle Lopez",
        recognitionDate: new Date("2019-10-03"),
        descripcion: "Ganador del primer lugar en el concurso inter-instituos de química del departamento de Quetzaltenango"
    },
    {
        title: "Estudiante Ingenieria en Informatica y Sistemas",
        place: "Universidad Rafael Landivar",
        recognitionDate: new Date("2020-01-01"),
        descripcion: "Estudiante de 5to año de la carrera de Ingenieria en Informatica y Sistemas en la Universidad Rafael Landivar"
    },
    {
        title: "Cuarto Lugar Concurso de Hackathon",
        place: "Universidad Rafael Landivar",
        recognitionDate: new Date("2023-10-05"),
        descripcion: "Cuarto lugar en el concurso de Hackathon 10 organizado por la facultad de Ingenieria en Informatica y Sistemas de la Universidad Rafael Landivar"
    },
    {
        title: "Participacion en la Olimpiada de Informatica",
        place: "ICPC",
        recognitionDate: new Date("2023-01-06"),
        descripcion: "Participacion en competencia de programacion a nivel internacional organizada por la ICPC"
    },
    {
        title: "Participacion en la Olimpiada de Informatica",
        place: "ICPC",
        recognitionDate: new Date("2024-14-04"),
        descripcion: "Segunda Participacion en competencia de programacion a nivel internacional organizada por la ICPC"
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