import { Grid , Text , Box} from "@chakra-ui/react"

const Header = () => {
  return (
    <>
    <span style={{display:'flex',gap:'10px',marginTop:"80px",fontFamily:"sans-serif",fontWeight:'400'}}>
    <Text fontSize={'4xl'} color='white'>Explore Our</Text>
    <Text fontSize={'4xl'} color='rgb(93, 0, 255)'>Blogs</Text>
    </span>
    <Box w='320px' h='0.5vh' bg='rgb(87, 0, 187)' borderRadius='80%'></Box>
    <Text color='white' fontSize={['10px','10px','14px','18px']} mt={6} fontFamily='sans-serif'>Discover insightful articles , tutorials and stories created by and for curious minds</Text>
    </>
  )
}

export default Header
