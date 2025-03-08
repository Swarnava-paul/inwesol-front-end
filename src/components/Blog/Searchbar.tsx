import { Button , Flex} from "@chakra-ui/react"
import { useState } from "react"
import useFetchBlogs from "../../hooks/FetchBlogs";
const Searchbar:React.FC = () => {
 
     const [searchTerm,setSearchTerm] = useState<string>('');
     const [loadingState,setLoadingState] = useState<boolean>(false);
     const {fetchPosts} = useFetchBlogs();
     
     async function helperOfSettingFetchPost(){
         setLoadingState(true); // for search bar loading spinner indication state
         const uri = import.meta.env.VITE_BLOG_BASE_URI;
         await fetchPosts(`${uri}/search?q=${searchTerm}`); 
         setLoadingState(false)
     }

  return (
    <Flex mt={10} w={['90%','80%','80%','60%']} h={['6vh','6vh','8vh','8vh']}>
       {/* Search input field */}
       <input 
       type="search" 
       className="search-bar-input" 
       style={{
         outline:"none",
         borderTopLeftRadius:"5px",
         borderBottomLeftRadius:"5px",
         width:"90%",
         height:"100%",
         padding:"10px"
       }} 
       placeholder="Search Articles , Blogs , Stories..."
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}
       />
       {/* Search button */}
       <Button 
       bg='rgb(93, 0, 255)' 
       borderTopLeftRadius='none'
       borderBottomLeftRadius='none' 
       height='100%'
       onClick={helperOfSettingFetchPost}
       >
       {
         loadingState ? (
         <i style={{fontSize:"31px"}} className="fa-solid fa-compass fa-spin"></i>
         ) : ('Search')
       }
       </Button>
    </Flex>
  )
}

export default Searchbar
