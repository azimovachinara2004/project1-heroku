import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {callToAPI} from './homeSlice'
import Cards from './Cards'
import Pagination from './Pagination'
//import { useParams } from 'react-router-dom'
function Home(){
    const [selectCategory,setSelectCategory]=useState("")
    const [flowerList, setFlowerList]=useState([]);
    const [filteredFlowerList, setFilteredFlowerList]=useState([]);
    const[howManyPages,setHowManyPages]=useState(0)
    const[pageNow,setPageNow]=useState(0)
     const howManyElementsPerPage=3; 
    const dispatch=useDispatch()
    const data= useSelector((state)=>state.flowers)
   
    useEffect(()=>{
        dispatch(callToAPI())
        setFlowerList(data)
        setFilteredFlowerList(data)
       
    },[dispatch])
    console.log(data,'data')
    console.log(howManyPages)
    useEffect(()=>{
        let list=flowerList.filter(flower=>selectCategory ===flower.category || selectCategory===""|| selectCategory==="All")
        setFilteredFlowerList(list)
      },[selectCategory])
     let catList=["All",...new Set(flowerList.map(item =>item.category))]
     useEffect(()=>{
      setHowManyPages(Math.ceil(filteredFlowerList.length /howManyElementsPerPage))
  },[filteredFlowerList])
  const start=pageNow * howManyElementsPerPage
  const end = start + howManyElementsPerPage
  const flowersToShow=filteredFlowerList.slice(start,end)
        return(
                 <>
                 
                 {
        catList.map(category=><button className='category'
        key={category}
        onClick={()=>setSelectCategory(category)}
        >{category}</button>)
                } 
      
               {  
               flowersToShow.map(flower=>(
              <Cards key={flower.id} flower={flower}/>  

               ))
           
               }
         
         <Pagination howManyPages={howManyPages} setPageNow={setPageNow} pageNow={pageNow}/>
        
         </>
            
        )

}
export default Home