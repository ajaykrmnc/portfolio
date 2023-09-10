import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';
function Card({Name,Live,date,intro}) {
    return (
        <>
        <div className ="blog_card_box">
            <div className = "blog-top">
            <h2 className="card_top">{Name}&nbsp;&nbsp;
            <span><a className="button-notion" href={Live} target="_blank" rel="noopener noreferrer">

             <img src = "share.png" />
             </a></span>
             </h2>
            
            <div>
            <p>{date}</p>
            <p>{intro}</p>

            </div>
            </div>
        </div>
        <hr className = "blog-hr"></hr>
        </>
    )
}
export default Card;