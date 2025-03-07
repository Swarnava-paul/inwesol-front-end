import {Button , Text , Box } from "@chakra-ui/react";
import { setFilter ,setBlogsContainer,setBlogsLength,setCurrentPageNumber} from "../../redux/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useState } from "react";
 
const Filter:React.FC = () => {
    
     const categories = ['All','love','magic','american','history','life'];
     const filter = useAppSelector((state)=>state.app.filter);
     const dispatch = useAppDispatch();
     const blogs = useAppSelector((state)=>state.app.blogs);
     const blogsLength = useAppSelector((state)=>state.app.blogsLengthContainer);

     function filterPosts(category:string) {
         if(category === 'All') {
            dispatch(setBlogsContainer(blogs));
            dispatch(setBlogsLength(blogsLength));
            dispatch(setCurrentPageNumber(0))
            return;
         }
         const filteredPosts = blogs.filter((post)=>post.tags.includes(category));
         dispatch(setBlogsLength(filteredPosts.length))
         dispatch(setCurrentPageNumber(0))
         dispatch(setBlogsContainer(filteredPosts));
     }

  return (
    <>
     <Text color='white' fontSize='xl' mt={12}>All Categories</Text>
    <Box mt={4} w='100%' display={['grid','grid','grid','grid']} 
    gridTemplateColumns={['repeat(3,100px)','repeat(3,100px)','repeat(5,120px)','repeat(5,120px)']}
    justifyContent='center' alignItems='center'>
        {categories.map((category,index) => (
            <Button
            key={index}
            colorScheme='teal'
            variant='outline'
            m={2}
            color='white'
            bg={filter === category ? 'rgb(93, 0, 255)' : 'rgb(54, 53, 55)'}
            border='none'
            borderRadius={30}
            onClick={()=> {
              dispatch(setFilter(category));
              filterPosts(category);
            }}>
            {category}
            </Button>
        ))}
    </Box>
    </>
  )
}

export default Filter
