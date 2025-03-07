import {Button , Text , Box } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setFilter } from "../../redux/slice";
import useFetchBlogs from "../../hooks/FetchBlogs";
 
const Filter:React.FC = () => {
    
     const categories = ['All','love','magic','american','history','life'];
     const filter = useAppSelector((state)=>state.app.filter);
     const dispatch = useAppDispatch();
     const {loading,error,fetchPosts} = useFetchBlogs();
     const uri = import.meta.env.VITE_BLOG_BASE_URI;

     function categoryWiseFetchPosts (category:string) {
         if (category === 'All'){
          fetchPosts(uri);
          return;
         }
         fetchPosts(`${uri}/tag/${category}`);
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
              categoryWiseFetchPosts(category);
            }}>
            {category}
            </Button>
        ))}
    </Box>
    </>
  )
}

export default Filter
