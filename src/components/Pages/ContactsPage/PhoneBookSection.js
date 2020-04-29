import React, {useState} from 'react';
import NavigationContact from "./NavigationContactPages";

import {componentActive} from "./statics";

const PhoneBookSection = ({searchArr,searchValue, toggleStart, updateContactValue, changeNavActiveElem, navActiveElem}) => {
    const [toolTip, toggleToolTip] = useState()
    const [favoriteItem, toggleFavorite] = useState([0, 1, 5, 16]);

    const valueProps = {
        toggleToolTip,
        toolTip,
        searchValue,
        toggleStart,
        navActiveElem,
        favoriteItem,
        toggleFavorite,
        searchArr,
        updateContactValue,
    };

    return (
        <>
            <NavigationContact
                changeNavActiveElem={changeNavActiveElem}
                navActiveElem={navActiveElem}
            />
            {componentActive(valueProps, navActiveElem)}
        </>
    );

};

export default PhoneBookSection;
