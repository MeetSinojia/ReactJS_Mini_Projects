import React from 'react'
import pgrid from "../assets/photo-grid.png"

export default function Hero() {
    return (
        <div className='hero'>
            <img className='grid' src={pgrid} />
            <h1 className='online'>Online Experiences</h1>
            <p className='para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}