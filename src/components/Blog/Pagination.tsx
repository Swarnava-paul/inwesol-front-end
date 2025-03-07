import { HStack } from "@chakra-ui/react"
import { useAppSelector , useAppDispatch} from "../../redux/hook";
import { PaginationItems,
    PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
 } from "../ui/pagination";

import { setBlogsContainer } from "../../redux/slice";

const Pagination = () => {


  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state)=>state.app.blogs);
  const vlogsCount = blogs.length
  type Event = {page:number}

  function paginate(e:Event)  {
    window.scrollTo({top:0,behavior:"smooth"})
    const skip = Math.floor(10*e.page-10)
    if(skip <= 0) {
       //const limitPost = blogs.filter((i)=> i.id >= 1 && i.id <= 10);
       const limitPost = blogs.slice(1,10);
       dispatch(setBlogsContainer(limitPost))
    }else {
      //const limitPost = blogs.filter((i)=>i.id >= skip+1 && i.id <= skip*2);
      const limitPost = blogs.slice(skip+1,skip*2);
      dispatch(setBlogsContainer(limitPost))
    }
    
  }

  return (
    <PaginationRoot count={vlogsCount} pageSize={10}
    siblingCount={0} 
    defaultPage={1}
    onPageChange={(e)=>{
      paginate(e);
    }}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  )
};

export default Pagination;
