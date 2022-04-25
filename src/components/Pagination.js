import React from 'react'
import {Link} from 'react-router-dom'


function Pagination({howManyPages,setPageNow,pageNow}) {
    
    const pages= new Array(howManyPages).fill("page")
    return (
      <div className='pagi-container'>
          {
              pages.map((page,index)=>{
                  return(
                <button key={`${page}${index}`}
                  onClick={()=>setPageNow(index)} className="pagin-btn">
                      {index+ 1}</button>
                      )
              })
          }
      </div>
    )
}

export default Pagination