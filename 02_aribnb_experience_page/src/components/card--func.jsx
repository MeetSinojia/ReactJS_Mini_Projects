import React from "react"
import star from "../assets/star.png"

export default function Cardfun(prop) {

    let badgeText
    if (prop.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (prop.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={prop.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{prop.item.stats.rating}</span>
                <span className="gray">({prop.item.stats.reviewCount}) </span>&nbsp;&nbsp;
                <span>•</span>
                <span className="gray">{prop.item.location}</span>
            </div>
            <p className="card--title">{prop.item.title}</p>
            <p className="card--price"><span className="bold">From ${prop.item.price}</span> / person</p>
        </div>
    )
}