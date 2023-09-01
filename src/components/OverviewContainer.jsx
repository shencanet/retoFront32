import React from "react";
import data from "../data/data.json";
import { OverViewCard } from "./OverViewCard";
import { OverViewTodayCard } from "./OverViewCard";
//console.log(data.overview)

export const OverviewContainer = () => {
const convertNumber = (Number) => {
  if(Number >= 10000){
    return `${Number/1000}K`
  }else{
    return Number
  }
}

  return (
    <section className=" w-full absolute top-[191px] left-0 right-0 mx-auto">
      {
        
      data.overview.map(object =>  

      //<div key={object.id}>Tarjeta</div>
      <OverViewCard 
        key={object.id} 
        user={object.user} 
        audienceType={object.audienceType} 
        audience={convertNumber(object.audience)}
        network={object.network}
        isUp={object.isUp}
        today={object.today}

       />

      )
        
      
      }
    </section>
  )
}

export const OverViewToday = () => {
  return (
    <div>OverViewTodayContainer</div>
  )
}