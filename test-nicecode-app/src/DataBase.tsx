interface dataNote {
    date : string;
    text : string;
    img : string;
}

export const dataNotes : dataNote[] = [
    {
        date: "20.12.2019",
        text: `Физические упражнения способствуют активизации мышечных сокращений, 
        кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. 
        Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических 
        дефектов в самих мышцах, костной ткани, связках и сухожилиях.`,
        img: "",
    },
    {
        date: "20.12.2019",
        text: `Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических 
        дефектов в самих мышцах, костной ткани, связках и сухожилиях.`,
        img: require("./assets/images/notes/7c229622bcbe6884f7be41a0fd6d814f.png"),
    },
];

interface dataConsultation {
    titleConsultation: string,
    dateConsultation: string,
    timeStart: string,
    timeEnd: string,
    statusConsultation : 'activeOnline' | 'waitOnline' | 'waitMeet',
}

export const dataConsultations: dataConsultation[] = [
    {
        titleConsultation: "Online консультация",
        dateConsultation: "15.01.2019",
        timeStart: "12:30",
        timeEnd: "13:00",
        statusConsultation: 'activeOnline',
    },
    {
        titleConsultation: "Online консультация",
        dateConsultation: "15.01.2019",
        timeStart: "12:30",
        timeEnd: "13:00",
        statusConsultation: 'waitOnline',
    },
    {
        titleConsultation: "Личный приём",
        dateConsultation: "15.01.2019",
        timeStart: "12:30",
        timeEnd: "13:00",
        statusConsultation: 'waitMeet',
    },

]

interface Event {
    title: string,
    type: string,
    date: string,
    time: string,
    img: string,
}

export const dataEvents: Event[] = [
    {
        title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
        type: "Вебинар",
        date: "9 марта 2021",
        time: "17:00",
        img: require("./assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
    },
    {
        title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
        type: "Вебинар",
        date: "9 марта 2021",
        time: "17:00",
        img: require("./assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
    },
    {
        title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
        type: "Вебинар",
        date: "9 марта 2021",
        time: "17:00",
        img: require("./assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
    },
    {
        title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
        type: "Вебинар",
        date: "9 марта 2021",
        time: "17:00",
        img: require("./assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
    },
]

interface dataVidoe {
    title: string,
    autor: string,
    dateStart: string,
    dateEnd: string,
    img: string,
}

export const dataVideos: dataVidoe[] = [
    {
        title: "Крабик, ходьба в бок в приседе с двумя резинкамиКрабик, ходьба в бок в приседе с двумя резинками",
        autor: "Астахова Е.В.",
        dateStart: "",
        dateEnd: "",
        img: require("./assets/images/videos/d41f8b8fb98c96042cfe24bc97c143f1.png"),
    },
    {
        title: "Разминка для локтевого сустава",
        autor: "Астахова Е.В.",
        dateStart: "15.01.2019",
        dateEnd: "15.01.2019",
        img: require("./assets/images/videos/43d4a62bad455bd3151994b9290926c9.png"),
    },
    {
        title: "Разминка для локтевого суставаРазминка для локтевого сустава",
        autor: "Астахова Е.В.",
        dateStart: "15.01.2019",
        dateEnd: "15.01.2019",
        img: require("./assets/images/videos/5c4758cbb5556daa616abb963b297836.png"),
    },
]

interface Contact {
    id: number,
    name: string,
    status: 'New' | 'Warning' | '',
    active: boolean,
    img: string,
    age: number,
    male : 'муж' | 'жен' | '',
}

export const dataContacts: Contact[] = [
    {
        id: 1,
        name: "Кравцова Александра",
        status: 'New',
        active: false,
        img: require("./assets/images/contacts/one.png"),
        age: 34,
        male: 'жен',
    },
    {
        id: 2,
        name: "Рожков Денис ",
        status: '',
        active: true,
        img: require("./assets/images/contacts/two.png"),
        age: 33,
        male: 'муж',
    },
    {
        id: 3,
        name: "Кравцова Александра",
        status: 'Warning',
        active: false,
        img: require("./assets/images/contacts/one.png"),
        age: 34,
        male: 'жен',
    },
    {
        id: 4,
        name: "Диброва Алевтина",
        status: '',
        active: false,
        img: require("./assets/images/contacts/three.png"),
        age: 28,
        male: 'жен',
    },
    {
        id: 5,
        name: "Иванов Дмитрий",
        status: '',
        active: false,
        img: require("./assets/images/contacts/4.png"),
        age: 38,
        male: 'муж',
    },
    {
        id: 6,
        name: "nosikov@list.ru",
        status: '',
        active: false,
        img: null,
        age: 19,
        male: 'жен',
    },
    {
        id: 7,
        name: "Форс Александр",
        status: '',
        active: false,
        img: require("./assets/images/contacts/5.png"),
        age: 45,
        male: 'муж',
    },
    {
        id: 8,
        name: "Ахмедов Артур",
        status: '',
        active: false,
        img: require("./assets/images/contacts/6.png"),
        age: 27,
        male: 'муж',
    },
    {
        id: 9,
        name: "Блажевич Игорь",
        status: '',
        active: false,
        img: require("./assets/images/contacts/7.png"),
        age: 34,
        male: 'муж',
    },
    {
        id: 10,
        name: "Валиева Руфина",
        status: '',
        active: false,
        img: require("./assets/images/contacts/8.png"),
        age: 28,
        male: 'жен',
    },
    {
        id: 11,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
        age: 26,
        male: 'жен',
    },
    {
        id: 12,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
        age: 26,
        male: 'жен',
    },
    {
        id: 13,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
        age: 26,
        male: 'жен',
    },
    {
        id: 14,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
        age: 26,
        male: 'жен',
    },
]