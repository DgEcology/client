'use client'

import React from 'react'
import classes from './eventCard.module.css'
import IEvent from "@/types/event.interface"
import { FaHeart } from "react-icons/fa";
import {LuHeart} from "react-icons/lu"
import Image from "next/image"


const EventCard = ({event}: { event: IEvent }) => {
    return (
        <div
            className={classes.container}
        >
            <div className={classes.imageContainer}>
                <Image
                    src={event.image}
                    alt={'Изображение события'}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </div>
            <div className={classes.info}>
                <p className={classes.title}> {event.title}</p>
                <p className={classes.description}>{event.description.length > 150 ? event.description.slice(0, 150) + '...' : event.description}</p>

                <div className={classes.time}>
                    <span >{event.startTime} - {event.endTime}</span>
                    <span>{event.geolocation}</span>
                </div>
                <div className={classes.bottom}>
                    <button className={classes.participateBtn}>
                        Учавствовать
                    </button>
                    <button className={classes.likeBtn}>
                        {false ? <FaHeart/> : <LuHeart/>}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default EventCard