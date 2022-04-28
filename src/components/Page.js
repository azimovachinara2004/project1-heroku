import React from 'react'
import {Link,useParams} from 'react-router-dom'


function Page({howManyPages,setPageNow,pageNow}) {
    const currentPage=pageNow+1
    const pages= new Array(howManyPages).fill("page")
    return (
      <div className='pagi-container'>
          {
              pages.map((page,index)=>{
                  return(
               <Link to={`/${page}/${currentPage}`}><button key={`${page}${index}`}
                  onClick={()=>setPageNow(index)} className="pagin-btn">
                      {index+ 1}</button></Link> 
                     
                      )
              })
          }
      </div>
    )
}

export default Page