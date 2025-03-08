import React from "react";
import { Suspense } from "react";
import { Routes , Route  } from "react-router-dom";
//pages lazy loaded for better loading performance
const Blog = React.lazy(()=> import('../pages/Blog'));
const Contact = React.lazy(()=>import('../pages/Contact'));

const AllRoutes = () => {

    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path='/'>
                    <Route index element={<Blog/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
};

export default AllRoutes;