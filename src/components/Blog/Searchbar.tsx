import { Button , Flex} from "@chakra-ui/react"
import { useState } from "react"
import useFetchBlogs from "../../hooks/FetchBlogs";
const Searchbar:React.FC = () => {
 
     const [searchTerm,setSearchTerm] = useState<string>('');
     const {fetchPosts} = useFetchBlogs();
     
     function helperOfSettingFetchPost(){
         const uri = import.meta.env.VITE_BLOG_BASE_URI;
         fetchPosts(`${uri}/search?q=${searchTerm}`); 
     }

  return (
    <Flex mt={10} w={['90%','80%','80%','60%']} h='6vh'>
       <input type="search" className="search-bar-input" style={{
       outline:"none",
       borderTopLeftRadius:"5px",
       borderBottomLeftRadius:"5px",
       width:"90%",height:"100%",
       padding:"10px"
       }} 
       placeholder="Search Articles , Blogs , Stories..."
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}
       />
       <Button 
       bg='rgb(93, 0, 255)' 
       borderTopLeftRadius='none'
       borderBottomLeftRadius='none' 
       height='100%'
       onClick={()=>{
        helperOfSettingFetchPost();
       }}
       >Search</Button>
    </Flex>
  )
}

export default Searchbar
