import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl}/>
            <div className="desc">
            
                <div className="card--info">
                    <i className="location--img fas fa-map-marker-alt fa-2xs"></i>
                    <p className="card--location">{props.item.location.toUpperCase()}</p>
                    <p className="card--maps"><a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></p>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                
                
                <h3 className="card--date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card--desc">{props.item.description}</p>
                
            </div>
           
            {props.title !== "Geirangerfjord" && <hr />}
        </div>
        
        
    )
}