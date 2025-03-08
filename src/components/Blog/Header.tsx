import {Text , Box} from "@chakra-ui/react"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <>
    <Text color='white' ml='70%'><Link to='/contact'>Contact Us</Link></Text>
    {/* Container for the header text */}
    <span style={{
    display:'flex',
    gap:'10px',
    marginTop:"80px",
    fontFamily:"sans-serif",
    fontWeight:'400',
    alignItems:'center'
    }}>
    {/* Main header text */}
    <Text fontSize={'4xl'} color='white'>Explore Our</Text>
    {/* Highlighted header text */}
    <Text fontSize={'4xl'} color='rgb(93, 0, 255)'>Blogs</Text>
    </span>
    <Box w='320px' 
    h='0.5vh' bg='rgb(87, 0, 187)' 
    borderRadius='80%'>
    </Box>
    <Text color='white' 
     textAlign='center'
     fontSize={['10px','10px','14px','18px']}
     mt={6}
     fontFamily='sans-serif'
     >Discover insightful articles , tutorials and stories created by and for curious minds
     </Text>
    </>
  )
}

export default Header
