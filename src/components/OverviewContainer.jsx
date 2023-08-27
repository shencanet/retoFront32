import React from "react";
import data from "../data/data.json";
//console.log(data.overview)

export const OverviewContainer = () => {
  return (
    <section>
      {
      data.overview.map(object => ( 
        
      <div>Tarjeta</div>

      )
        
      )
      }
    </section>
  )
}
