"use client"

import { useState } from "react"
import Link from 'next/link'
import './home.css'
import Recipe from './Components/Recipe/Recipe'

function randomNoRepeats(array:any) {
  let copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    let index = Math.floor(Math.random() * copy.length);
    let item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}


export default function Home() {
  const [button_state, update_button_state] = useState(false)
  const [days, update_days] = useState([
    {name : "Måndag",  recipe : ""}, 
    {name : "Tisdag",  recipe : ""}, 
    {name : "Onsdag",  recipe : ""}, 
    {name : "Torsdag", recipe : ""}, 
    {name : "Fredag",  recipe : ""}, 
    {name : "Lördag",  recipe : ""}, 
    {name : "Söndag",  recipe : ""}
  ])

  const handleEvent = ()=>{
    update_button_state(!button_state)
    if(button_state === false){
      
    } 

  }

  return (
    <>
      <button className="root-edit"><Link href="/edit"><img src="/menu.svg" alt=""  className="root-edit-img"/>Ändra Recept</Link></button>
      <div className="root-container">
        <button className="root-button" onClick={handleEvent}><img className="root-button-svg"src="/fork-and-spoon.svg"/></button>    
          {button_state === true ? <div className="root-recipes-container">{days.map((index, key)=><Recipe className="root-recipe-item" key={key} props={index}/>)}</div> : <div></div>}
       </div>
    </>
  
  )
}
