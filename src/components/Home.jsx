import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {callToAPI} from './homeSlice'
import Cards from './Cards'

function Home(){
    const [selectCategory,setSelectCategory]=useState("")
    const [flowerList, setFlowerList]=useState([]);
    const [filteredFlowerList, setFilteredFlowerList]=useState([]);
    //const[isLoading,setIsLoading]=useState(true)
    const dispatch=useDispatch()
    const data= useSelector((state)=>state.flowers)
   
    useEffect(()=>{
        dispatch(callToAPI())
        setFlowerList(data)
        setFilteredFlowerList(data)
       
    },[])
    console.log(data,'data')

    useEffect(()=>{
        let list=flowerList.filter(flower=>selectCategory
            ===flower.category || selectCategory===""|| selectCategory==="All")
        setFilteredFlowerList(list)
      },[selectCategory])

      let catList=["All",...new Set(flowerList.map(item =>item.category))]
        return(
                 <>
              
                 {
        catList.map(category=><button className='category'
        key={category}
        onClick={()=>setSelectCategory(category)}
        >{category}</button>)
      } 
      
           {  
            filteredFlowerList.map(flower=>(
    
              <Cards key={flower.id} flower={flower}/>  
        
            ))
      
          }
         </>
            
        )

}
export default Home