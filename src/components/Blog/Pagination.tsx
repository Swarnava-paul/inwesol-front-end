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

  /** Handles pagination by scrolling to the top of the page and updating the displayed blogs
    
    The function calculates the number of items to skip based on the current page number.
    If the skip value is less than or equal to 0, it slices the first 10 items from the blogs array.
    Otherwise, it slices the next set of 10 items starting from the calculated skip value.
    The sliced items are then dispatched to update the blogs container.
   */
  function paginate(e:Event)  {
    window.scrollTo({top:0,behavior:"smooth"})
    const skip = Math.floor(10*e.page-10)
    
    if(skip <= 0) {

       const limitPost = blogs.slice(1,10);
       dispatch(setBlogsContainer(limitPost))
    }else {

      const limitPost = blogs.slice(skip+1,skip+10);
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
