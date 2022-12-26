import React from "react"
import ReactDOM from "react-dom"

import Navbar from "./Components/Navbar"
import Card from "./Components/card"

import Data from "./data"

console.log(Data)

export default function App(){
    const cards = Data.map(item => {
        return(
            <Card
                key={item.id}
                item={item}
             />
        )
    })
    
    return(
        <div>
            <Navbar />
            <section className="card--list">
            {cards}
            </section>
        </div>
        
    )
}