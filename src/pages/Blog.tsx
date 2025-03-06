import { Grid , Text } from "@chakra-ui/react"

import Header from "../components/Blog/Header"
import Searchbar from "../components/Blog/Searchbar"
import Filter from "../components/Blog/Filter"

const Blog:React.FC = () => {
  return (
    <Grid bg='rgb(32, 32, 32)'
    placeItems='center' p={2}>
       <Header/>
       <Searchbar/>
       <Filter/>
    </Grid>
  )
}

export default Blog
