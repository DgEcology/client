'use client'

import React, {useState} from 'react'
import classes from './eventCard.module.css'
import IEvent from "@/types/event.interface"
import {FaHeart} from "react-icons/fa"
import {LuHeart} from "react-icons/lu"
import Image from "next/image"
import {useRouter} from "next/navigation"


const EventCard = ({event}: { event: IEvent }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [isParticipate, setIsParticipate] = useState(false)
    const router = useRouter()
    return (
        <div
            className={classes.container}
            onClick={e => router.push('/event/' + event.id)
        }

        >
            <div className={classes.imageContainer}>
                <Image
                    src={event.image}
                    alt={'Изображение события'}
                    layout={'fill'}
                    loading={'lazy'}
                    objectFit={'cover'}
                />
            </div>
            <div className={classes.info}>
                <p className={classes.title}> {event.title}</p>
                <p className={classes.description}>{event.description.length > 70 ? event.description.slice(0, 70) + '...' : event.description}</p>

                <div className={classes.time}>
                    <span>{event.startTime} - {event.endTime}</span>
                    <span>{event.geolocation}</span>
                </div>
                <div className={classes.bottom}>
                    <button
                        className={classes.participateBtn}
                        onClick={e => {
                            e.stopPropagation()
                            setIsParticipate(true)
                        }}
                        disabled={isParticipate}
                        style={isParticipate ? {background: '#e1e1e1', color: '#9f9f9f'} : {}}
                    >
                        {isParticipate ? 'Вы уже участвуете' : 'Участвовать'}
                    </button>
                    <button className={classes.likeBtn} onClick={e => {
                        e.stopPropagation()
                        setIsLiked(!isLiked)
                    }}>
                        {isLiked ? <FaHeart/> : <LuHeart/>}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default EventCard