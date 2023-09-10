import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';
function Card({Name,github,Live,img,intro}) {
    return (
        <>
        <div className ="card_box">
            <div>
            <h2 className="card_top">{Name}</h2>
            <p>{intro}</p>
            <div>
            <a className="button" href={Live} target="_blank" rel="noopener noreferrer">
             Link
             </a>
            </div>
            </div>
            <div className = "img-box">
                <img src={img} className= "card-img"/>
            </div>
        </div>
        </>
    )
}
export default Card;