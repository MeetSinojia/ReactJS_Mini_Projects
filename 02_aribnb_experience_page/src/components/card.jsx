import React from "react"
import star from "../assets/star.png"

import Cardfun from './card--func'
import data from '../data'


export default function Card() {

    const cards = data.map(item => {
        return (
            <Cardfun
                item={item}
            // {...item}
            // It will pass all components that data has
            />
        )
    })

    return (
        <div>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )

}