import React from "react";
import data from "../data/data.json";
import { OverViewCard } from "./OverViewCard";
//console.log(data.overview)

export const OverviewContainer = () => {
  return (
    <section className="border-2 border-red-600 absolute top-[191px] left-0 right-0 mx-auto">
      {
        
      data.overview.map(object =>  

      //<div key={object.id}>Tarjeta</div>
      <OverViewCard 
        key={object.id} 
        user={object.user} 
        audienceType={object.audienceType} 
        audience={object.audience}
        network={object.network}
        isUp={object.isUp}
        today={object.today}

       />

      )
        
      
      }
    </section>
  )
}
