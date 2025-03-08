import { Grid , Image , Text , Flex , Box} from '@chakra-ui/react';
import dummyimage from '../../assets/dummyimage.jpeg'
import { BlogsType } from '../../redux/slice';

interface BlogCart {
  // Define the item prop with the type BlogsType
  item: BlogsType
}

const BlogCart:React.FC<BlogCart> = ({item}) => {
  const {title,body,reactions,views} = item;
  const totalReactions = reactions.likes + reactions.dislikes;
  return (
    <Grid  
    bg='rgb(41, 41, 41)' 
    borderRadius={10} p={1} rowGap={2}
    _hover={{scale:1.04,transition:'0.2s'}}
    >
        <Image src={dummyimage} w='100%' borderRadius={6}/>
        <Flex gap={3} ml={3} fontSize='sm' fontFamily='sans-serif'>
            <Flex align='center' gap={2}>
            <i className="fa-solid fa-thumbs-up"></i>
            <Text>{totalReactions}</Text>
            </Flex>
            <Flex align='center' gap={2}>
            <i className="fa-solid fa-eye"></i>
            <Text>{views}</Text>
            </Flex>
        </Flex>
        <Box ml={3}>
        <Text fontSize={['sm','xl','1xl','1xl']} fontFamily='serif' letterSpacing='1px'>{title}</Text>
        <Text mt={2} color='rgb(181, 181, 181)'>{body.split('').slice(0,200).join('')}...</Text>
        </Box>
    </Grid>
  )
}

export default BlogCart
