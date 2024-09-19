'use client'

import classes from './Page.module.css'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend, PointElement, LineElement,
} from 'chart.js'

import {ChartData, ChartOptions} from 'chart.js'
import {useEffect, useState} from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Page = () => {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.innerWidth < 350 ?
            350 :
            (window.innerWidth <= 768 ?
                    window.innerWidth - 20 :
                    (window.innerWidth <= 1080 ?
                        750 :
                        900)
            ))
    })
    // @ts-ignore
    const data1: ChartData<'line'> = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                data: [0.3142, 0.6408, 0.9827, 1.3648, 1.5683, 1.8759],
                label: 'тон мукулатуры',
                type: 'line',
                pointBackgroundColor: 'rgb(5 150 105)',
                pointBorderColor: 'rgb(5 150 105)',
                pointRadius: 5,
                borderColor: 'rgb(5 150 105)'

            }
        ],

    }

    const options1: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Переработка мукулатуры в Москве',
            },
        },
    }

    // @ts-ignore
    const data2: ChartData<'line'> = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                data: [0.3142, 0.4383, 1.5234, 1.1070, 2.4658, 1.9178],
                label: 'тест',
                type: 'line',
                pointBackgroundColor: 'rgb(5 150 105)',
                pointBorderColor: 'rgb(5 150 105)',
                pointRadius: 5,
                borderColor: 'rgb(5 150 105)'

            }
        ],

    }

    const options2: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'тест',
            },
        },
    }

    return (
        <div>
            <div style={{
                width: width + 'px', margin: '50px auto'}}>
                <Line data={data1} options={options1}/>
            </div>
            <div style={{
                width: width + 'px', margin: '50px auto'}}>
                <Line data={data2} options={options2}/>
            </div>
        </div>

    )
}

export default Page