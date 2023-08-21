import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

import "./Dropdown.css"
const Dropdown = ({ setSelect }) => {
    return (
        <div>
            <ul className="nested-dropdowns">
                <li>
                    <div className="nested-dropdowns__item">
                        <span><HiAdjustmentsHorizontal /></span>
                        Display
                        <div className="nested-dropdowns__arrow"></div>
                    </div>
                    <ul>
                        <li className='dropdown_box'>
                            <div className="nested-dropdowns__items">
                                Grouping
                                <div className="nested-dropdowns__arrow"></div>
                            </div>
                            <ul className='target'>
                                <li onClick={e => setSelect("status")}>Status</li>
                                <li onClick={e => setSelect("user")}>User</li>

                            </ul>
                        </li>

                        <li>
                            <div className="nested-dropdowns__items">
                                Order
                                <div className="nested-dropdowns__arrow"></div>
                            </div>
                            <ul className='target'>
                                <li onClick={e => setSelect("priority")}>Priority</li>

                            </ul>
                        </li>

                    </ul>
                </li>

            </ul>
        </div>
    )
}

export default Dropdown