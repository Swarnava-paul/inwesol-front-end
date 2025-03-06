import { Button , Flex} from "@chakra-ui/react"

const Searchbar:React.FC = () => {
  return (
    <Flex mt={10} w={['90%','80%','80%','60%']} h='8vh'>
       <input type="search" style={{
       outline:"none",
       borderTopLeftRadius:"5px",
       borderBottomLeftRadius:"5px",
       width:"90%",height:"100%",
       padding:"10px"
       }} 
       placeholder="Search Articles , Blogs , Stories..."/>
       <Button 
       bg='rgb(93, 0, 255)' 
       borderTopLeftRadius='none'
       borderBottomLeftRadius='none' 
       height='100%'
       >Search</Button>
    </Flex>
  )
}

export default Searchbar
