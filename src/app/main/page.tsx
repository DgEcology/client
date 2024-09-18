import React from 'react'
import classes from './main.module.css'
import EventList from "@/components/eventList/eventList"
import Header from "@/components/header/header"

const Page = () => {

    return (
        <div>
            <Header />
            <div style={{marginTop: '80px'}}></div>
            <EventList/>
        </div>
    )
}

export default Page