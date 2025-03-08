import { useState } from "react"
import { setBlogs , setBlogsLength , setCurrentPageNumber, 
setBlogsContainer,
} from "../redux/slice";
import { useAppDispatch } from "../redux/hook";

const useFetchBlogs = () => {
     
     type Error = {error:string,er:unknown}
     const [loading,setLoading] = useState<boolean>(false);
     const [error,setError] = useState<Error>();
     const dispatch = useAppDispatch();
     const [isDataFetched,setIsDataFetched] = useState<boolean>(false)

     async function fetchPosts (uri='https://dummyjson.com/posts') {
        
        setLoading(true);
        try{
            const response1 = await fetch(uri);
            const response2 = await response1.json();
            dispatch(setBlogsLength(response2.total));
            dispatch(setBlogsContainer(response2.posts.slice(1,11)));
            dispatch(setBlogs(response2.posts));
            dispatch(setCurrentPageNumber(0));
            setIsDataFetched(true)
        }catch(er) {
          setError({error:'Error',er});
        }finally{
          setLoading(false);
        }
     };

     return {loading,error,fetchPosts,isDataFetched}
}

export default useFetchBlogs;