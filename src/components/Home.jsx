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
     const howManyElementsPerPage=6; 
    const dispatch=useDispatch()
    const data= useSelector((state)=>state.flowers)
   
    useEffect(()=>{
        dispatch(callToAPI())   
    },[])
    useEffect(()=>{
        setFlowerList(data)
        setFilteredFlowerList(data)  
    },[data])
    console.log(data,'data')
    console.log(howManyPages)
    useEffect(()=>{
        let list=flowerList.filter(flower=>selectCategory ===flower.category || selectCategory===""|| selectCategory==="All")
        setFilteredFlowerList(list)
      },[filteredFlowerList])
      let catList=["All",...new Set(flowerList.map(item =>item.category))]
     useEffect(()=>{
      setHowManyPages(Math.ceil(filteredFlowerList.length /howManyElementsPerPage))
  },[filteredFlowerList])
  const start=pageNow * howManyElementsPerPage
  const end = start + howManyElementsPerPage
  const flowersToShow=filteredFlowerList.slice(start,end)
        return(
                 <>
               <div className='cat-container'>
                 {
        catList.map(category=><button className='category'
        key={category}
        onClick={()=>setSelectCategory(category)}
        >{category}</button>)
                } 
                </div>
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