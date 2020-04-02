import React from "react"
import CommonPhoneBook from "./contactSwitchGroup/CommonPhoneBook";
import FavoritesPhoneBook from "./contactSwitchGroup/FavoritesPhoneBook";
import GroupPhoneBook from "./contactSwitchGroup/GroupPhoneBook";

export const contactBook = [
    {
        name: "Салтыков Юрий",
        number: "+38 097 567 43 55",

    },
    {
        name: "Светлана",
        number: "044 574 33 21",

    },
    {
        name: "Светлогорская Мария Игнатьевна",
        number: "+38 066 546 33 12",
        time: `<i class="fas fa-mobile-alt/i>`
    },
    {
        name: "Кирил Смирнрв",
        number: "+3 098 574 66 45",

    },
    {
        name: "Иванов",
        number: "+38 093 647 88 65 ",

    },
    {
        name: "Smirnova Natalia",
        number: "+38 073 576 66 58",
        time: `<i class="fas fa-mobile-alt/i>`
    },
    {
        name: "Petrov",
        number: "+467 987 02 11",

    },
    {
        name: "Smorodinov Taras",
        number: "044 765 43 32",

    },
    {
        name: "Комарницкий Алексей",
        number: "+38 094 567 88 54",

    },
    {
        name: "",
        number: "+7 934 567 84 55",

    },
    {
        name: "Taras Inturist",
        number: "+38 099 756 44 32",

    },
    {
        name: "Наш Бєкєндер",
        number: "+38 097 453 66 78",
    },
    {
        name: "Ipatko Igor",
        number: "+38 050 876 45 32",

    },
    {
        name: "Кирил Смирнрв",
        number: "+3 098 574 66 45",

    },
    {
        name: "Иванов",
        number: "+38 093 647 88 65 ",

    },
    {
        name: "Smirnova Natalia",
        number: "+38 073 576 66 58",

    },
    {
        name: "Petrov",
        number: "+467 987 02 11",

    },
    {
        name: "Smorodinov Taras",
        number: "044 765 43 32",

    },
    {
        name: "Комарницкий Алексей",
        number: "+38 094 567 88 54",

    },
    {
        name: "",
        number: "+7 934 567 84 55",

    },
    {
        name: "Taras Inturist",
        number: "+38 099 756 44 32",

    },
    {
        name: "Наш Бєкєндер",
        number: "+38 097 453 66 78",

    },
    {
        name: "Ipatko Igor",
        number: "+38 050 876 45 32",
    }
];

export const componentActive = (valueProps, index) => {
    switch (true) {
        case index === 0:
            return <CommonPhoneBook {...valueProps}/>;
        case index === 1:
            return <GroupPhoneBook {...valueProps}/>;
        case index === 2:
            return <FavoritesPhoneBook {...valueProps}/>;
    }
};


export const  deerGroup = [1,3,5,6,8,0,11,13];
export const  beavers = [4,7,9,10,14,15,17,21];
