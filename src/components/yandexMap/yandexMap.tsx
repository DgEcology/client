'use client'
import React from 'react'
import classes from './YandexMap.module.css'
import {YMaps, Map} from "@pbe/react-yandex-maps"


const YandexMap = () => {

    return (
        <div>
            <YMaps>
                <Map
                    defaultState={{ center: [55.751574, 37.573856], zoom: 13 }}
                    width={'870px'}
                    height={'500px'}
                />
            </YMaps>
        </div>

    )
}

export default YandexMap