import React from 'react'
import "./UserCard.css"
import { FaUserTie } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";
const UserCard = ({ item }) => {
    return (
        <>
           

            <div className="user_card">
                <div className="box">
                    <div className="id">{item.id}</div>
                    <div className="avatar"><FaUserTie/></div>
                </div>
                <div className="title">{item.title}</div>
              {
                item.tag[0]&&
                (
                   <span>
                     <BiCircle className='circle' />
                   </span>
                )
              }
                <div className="feature">
                    {item.tag[0]}</div>
            
           </div>

        </>
    )
}

export default UserCard