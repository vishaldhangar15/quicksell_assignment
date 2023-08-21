import React from 'react'
import { useState, useEffect } from 'react';
import UserCard from "./UserCard"
import "./Body.css"
import { BiAdjust } from "react-icons/bi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { RiCalendarTodoFill } from "react-icons/ri";
import { MdPadding } from "react-icons/md";
import { FcLowPriority } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { PiCellSignalNoneFill } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { MdNotificationImportant } from "react-icons/md";

const Body = ({ select }) => {
    const [ticket, setTicket] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');

            if (!response.ok) {
                alert("Failed to fetch data");
            }

            const jsonData = await response.json();
            setTicket(jsonData.tickets)
            let userData = jsonData?.users;
            userData.sort((a, b) => a.name-b.name);
            setUser(userData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // seperate the data according to status
    const Todo = ticket.filter(obj => obj.status === 'Todo')
    const Done = ticket.filter(obj => obj.status === 'Done')
    const Backlog = ticket.filter(obj => obj.status === "Backlog")
    const In_progress = ticket.filter(obj => obj.status === 'In progress')
    const Cancellled = ticket.filter(obj => obj.status === 'Cancelled')

    // seperate the data according to priority
    const Not_urgent = ticket.filter(obj => obj.priority === 0)
    const low = ticket.filter(obj => obj.priority === 1)
    const medium = ticket.filter(obj => obj.priority === 2)
    const high = ticket.filter(obj => obj.priority === 3)
    const urgent = ticket.filter(obj => obj.priority === 4)

    // seperate the data according to user
    const user1 = ticket.filter(user => user.userId === "usr-1")
    const user2 = ticket.filter(user => user.userId === "usr-2")
    const user3 = ticket.filter(user => user.userId === "usr-3")
    const user4 = ticket.filter(user => user.userId === "usr-4")
    const user5 = ticket.filter(user => user.userId === "usr-5")

    return (
        <div>
            <div className='container'>

                {
                    select == "status" && (
                        <>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span>
                                        <RiCalendarTodoFill />
                                    </span>
                                    ToDo</div>
                                <div className="user-card">
                                    {
                                        Todo.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span>
                                        <MdPadding />
                                    </span>
                                    Backlog</div>
                                <div className="user-card">
                                    {
                                        Backlog.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span><BiAdjust /></span>  Progress</div>
                                <div className="user-card">
                                    {
                                        In_progress.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span>
                                        <IoCheckmarkDoneCircleSharp />
                                    </span>
                                    Done</div>
                                <div className="user-card">
                                    {
                                        Done.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span>
                                        <FcCancel />
                                    </span>
                                    Cancelled</div>
                                {
                                    <div className="user-card">
                                        {
                                            Cancellled.map(user => <UserCard item={user} />)
                                        }
                                    </div>
                                }
                            </div></>
                    )
                }

                {
                    select == "user" && (
                        <>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span>
                                        <RxAvatar/>
                                    </span>
                                    {user[0].name}</div>
                                <div className="user-card">
                                    {
                                        user1.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                <span>
                                        <RxAvatar/>
                                    </span>
                                    {user[1].name}</div>
                                <div className="user-card">
                                    {
                                        user2.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                <span>
                                        <RxAvatar/>
                                    </span>
                                    {user[2].name}</div>
                                <div className="user-card">
                                    {
                                        user3.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                <span>
                                        <RxAvatar/>
                                    </span>
                                    {user[3].name}</div>
                                <div className="user-card">
                                    {
                                        user4.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                <span>
                                        <RxAvatar/>
                                    </span>
                                    {user[4].name}</div>
                                {
                                    <div className="user-card">
                                        {
                                            user5.map(user => <UserCard item={user} />)
                                        }
                                    </div>
                                }
                            </div></>
                    )
                }



                {
                    select == "priority" && (
                        <>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span>
                                        <PiCellSignalNoneFill/>
                                    </span>
                                    No Priority</div>
                                <div className="user-card">
                                    {
                                        Not_urgent.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span><MdNotificationImportant/></span>
                                    Urgent
                                    </div>
                                <div className="user-card">
                                    {
                                        urgent.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                
                                <div className='heading'>
                                <span>
                                    <FcHighPriority/>
                                </span>
                                    High</div>
                                <div className="user-card">
                                    {
                                        high.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span><FcMediumPriority/></span>
                                    Medium</div>
                                <div className="user-card">
                                    {
                                        medium.map(user => <UserCard item={user} />)
                                    }
                                </div>
                            </div>
                            <div className="sub_container">
                                <div className='heading'>
                                    <span>
                                        <FcLowPriority/>
                                    </span>
                                    Low</div>
                                {
                                    <div className="user-card">
                                        {
                                            low.map(user => <UserCard item={user} />)
                                        }
                                    </div>
                                }
                            </div></>
                    )
                }

            </div>
        </div>
    )
}

export default Body