import React, { useState } from 'react'
import { Grid} from '@chakra-ui/react';
import BlogCart from './BlogCart';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setBlogsLength , setBlogs } from '../../redux/slice';


const BlogSection:React.FC = () => {

    const blogs = useAppSelector((state)=>state.app.blogs);
    const currentPageNumber = useAppSelector((state)=>state.app.currentPageNumber);
    const filter = useAppSelector((state)=>state.app.filter);
    const [loading,setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const Uri = import.meta.env.VITE_BLOG_BASE_URI;
 
    async function fetchBlogs() {
       setLoading(true);
      try {
         let skip = (10*currentPageNumber-10)
         if(skip < 0) {
          skip = 0
         }
         const response1 = await fetch(`${Uri}?limit=10&skip=${skip}`);
         const response2 = await response1.json();
         dispatch(setBlogsLength(response2.total))
         dispatch(setBlogs(response2.posts))
      }catch(err) {
        //
        console.log(err)
      }finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
       fetchBlogs();
       window.scrollTo({top:50,behavior:'smooth'})
    },[currentPageNumber, filter]);

  return (
   <Grid mt='20' 
   gridTemplateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)']}
   rowGap={10}
   columnGap={10}
   w='100%'
   justifyContent='center'
   color='white'
   >
   {
    blogs.map((item,index)=>(
        <BlogCart key={index} item={item} />
    ))
   }
   </Grid>
  )
}

export default BlogSection;
