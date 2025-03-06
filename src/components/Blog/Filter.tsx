import { Flex , Button } from "@chakra-ui/react";
import { useState } from "react";

const Filter:React.FC = () => {
    
     const categories = ['love','magic','american','history','life'];
     const [defaultFilter,setDefaultFilter] = useState<string>('love');

  return (
    <Flex mt={10} w='100%' justify='center'>
        {categories.map((category,index) => (
            <Button
            key={index}
            colorScheme='teal'
            variant='outline'
            m={2}
            color='white'
            bg={defaultFilter === category ? 'rgb(93, 0, 255)' : 'rgb(54, 53, 55)'}
            border='none'
            w='120px'
            borderRadius={30}
            onClick={()=> setDefaultFilter(category)}>
            {category}
            </Button>
        ))}
    </Flex>
  )
}

export default Filter
