import React from 'react';
import {Link} from  'react-router-dom'

import "./index.scss"



const NavGroup = () => {

        return (
               <ul className="navigation d-flex flex-nowrap justify-content-between align-items-center">
                   <li className="navigation-item active d-flex flex-nowrap justify-content-between align-items-center">
                       <Link className="navigation-call-info-link active" to='/'>Набор</Link>
                   </li>
                   <li className="navigation-item d-flex flex-nowrap justify-content-between align-items-center">
                       <Link className="navigation-call-info-link" to='/LastCall'>Последние</Link>
                   </li>
                   <li className="navigation-item d-flex flex-nowrap justify-content-between align-items-center">
                       <Link className="navigation-call-info-link" to='/ContactPage'>Контакты</Link>
                   </li>
                </ul>
                   );
        };

        export default NavGroup;