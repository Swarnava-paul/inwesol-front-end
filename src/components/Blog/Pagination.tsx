import { HStack } from "@chakra-ui/react"
import { useAppSelector , useAppDispatch} from "../../redux/hook";
import { PaginationItems,
    PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
 } from "../ui/pagination";
 import { setCurrentPageNumber } from "../../redux/slice";

const Pagination = () => {

  const vlogsCount = useAppSelector((state)=>state.app.blogsTotalLength);
  const dispatch = useAppDispatch(); // set current page for pagination


  return (
    <PaginationRoot count={vlogsCount} pageSize={10}
    siblingCount={0} 
    defaultPage={1}
    onPageChange={(e)=>dispatch(setCurrentPageNumber(e.page))}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  )
};

export default Pagination;
