import { Grid} from "@chakra-ui/react"
// components
import Header from "../components/Blog/Header"
import Searchbar from "../components/Blog/Searchbar"
import Filter from "../components/Blog/Filter"
import Pagination from "../components/Blog/Pagination"
import BlogSection from "../components/Blog/BlogSection"

const Blog:React.FC = () => {
  return (
    <Grid bg='rgb(32, 32, 32)'
    placeItems='center'
    p={2}>
       <Header/>
       <Searchbar/>
       <Filter/>
       <BlogSection/>
       <br />
       <br />
       <Pagination/>
    </Grid>
  )
}

export default Blog
