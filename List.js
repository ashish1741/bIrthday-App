import React from 'react'
import "./List.css";

function List( {people}) {
    return (
        <>
          <div className = "conatiner">
              <div className = "contain">
               {people.map((person) =>{
                   const {name , id , age ,image } = person;
                   return (
                         <div className = "person">
                           <img src = {image} alt = {name} />
                           <div className = "info">
                             <h4>{name}</h4>
                             <p>{age} years </p>
                           </div>


                        </div>
                   )
               })}
                  

              </div>
          </div>
        </>
        
            
     
    )
}

export default List
