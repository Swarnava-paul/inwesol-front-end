import React from 'react'
import { Grid , Text} from '@chakra-ui/react';
import BlogCart from './BlogCart';
import { useEffect} from 'react';
import { useAppSelector } from '../../redux/hook';
import useFetchBlogs from '../../hooks/FetchBlogs';


const BlogSection:React.FC = () => {

    const blogs = useAppSelector((state)=>state.app.blogsContainer);
    const mainBlogsContainer = useAppSelector((state)=>state.app.blogs);
    const {loading,fetchPosts} = useFetchBlogs(); // custom hook for fetching posts

    // useEffect hook to fetch posts and scroll to top on component mount
    useEffect(()=>{
       fetchPosts(); // Fetch posts when the component mounts
       window.scrollTo({top:0,behavior:'smooth'}) // Smooth scroll to top
    },[]);


  return (
    loading == true ? (
      <Text color='white' mt={2} fontSize='xl'>Blogs are Loading...</Text>
    ) : (
      blogs.length == 0 ? (
        <Text color='white' mt={20} fontSize='xl'>No Results found</Text>
      ) : (
        <>
        <Text color='white'fontSize='sm' textDecor='underline'>{mainBlogsContainer.length} results found</Text>
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
        </>
      )
    )
  )
}

export default BlogSection;
