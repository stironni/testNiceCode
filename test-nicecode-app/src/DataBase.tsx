interface dataConsultation {
    titleConsultation: string;
    dateConsultation: string;
    timeStart: string;
    timeEnd: string;
    statusConsultation: string;
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
    title: string;
    type: string;
    date: string;
    time: string;
    img: string;
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
    title: string;
    autor: string;
    dateStart: string;
    dateEnd: string;
    img: string;
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
    id: number;
    name: string;
    status: 'New' | 'Warning' | '';
    active: boolean;
    img: string;
}

export const dataContacts: Contact[] = [
    {
        id: 1,
        name: "Кравцова Александра",
        status: 'New',
        active: false,
        img: require("./assets/images/contacts/one.png"),
    },
    {
        id: 2,
        name: "Рожков Денис ",
        status: '',
        active: true,
        img: require("./assets/images/contacts/two.png"),
    },
    {
        id: 3,
        name: "Кравцова Александра",
        status: 'Warning',
        active: false,
        img: require("./assets/images/contacts/one.png"),
    },
    {
        id: 4,
        name: "Диброва Алевтина",
        status: '',
        active: false,
        img: require("./assets/images/contacts/three.png"),
    },
    {
        id: 5,
        name: "Иванов Дмитрий",
        status: '',
        active: false,
        img: require("./assets/images/contacts/4.png"),
    },
    {
        id: 6,
        name: "nosikov@list.ru",
        status: '',
        active: false,
        img: null,
    },
    {
        id: 7,
        name: "Форс Александр",
        status: '',
        active: false,
        img: require("./assets/images/contacts/5.png"),
    },
    {
        id: 8,
        name: "Ахмедов Артур",
        status: '',
        active: false,
        img: require("./assets/images/contacts/6.png"),
    },
    {
        id: 9,
        name: "Блажевич Игорь",
        status: '',
        active: false,
        img: require("./assets/images/contacts/7.png"),
    },
    {
        id: 10,
        name: "Валиева Руфина",
        status: '',
        active: false,
        img: require("./assets/images/contacts/8.png"),
    },
    {
        id: 11,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
    },
    {
        id: 12,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
    },
    {
        id: 13,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
    },
    {
        id: 14,
        name: "Волошина Виктория",
        status: '',
        active: false,
        img: require("./assets/images/contacts/9.png"),
    },
]