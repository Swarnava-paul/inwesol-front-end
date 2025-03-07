import React from 'react'
import { Grid} from '@chakra-ui/react';
import BlogCart from './BlogCart';
import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hook';
import useFetchBlogs from '../../hooks/FetchBlogs';


const BlogSection:React.FC = () => {

    const blogs = useAppSelector((state)=>state.app.blogsContainer);
    const {loading,error,fetchPosts} = useFetchBlogs(); // custom hook for fetching posts

    useEffect(()=>{
       fetchPosts();
       window.scrollTo({top:0,behavior:'smooth'})
    },[]);

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
