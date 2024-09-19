import React from 'react'
import classes from './eventList.module.css'
import EventService from "@/services/event.service"
import EventCard from "@/components/eventCard/eventCard"

const EventList = async () => {
    const events = await EventService.getAll()
    return (
        <div className={classes.container}>
            {
                events.map(e => (
                    <EventCard event={e} key={e.id} />
                ))
            }
        </div>
    )
}

export default EventList