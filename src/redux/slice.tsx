import { createSlice , PayloadAction} from "@reduxjs/toolkit";

 
export type BlogsType = {
    id : number,
    title : string,
    body : string,
    tags : string[],
    reactions : {
        likes : number,
        dislikes : number
    },
    views : number,
    userId : number,
}; // blogs type that come from api 

interface appStateType {
    blogsTotalLength : number,
    blogs : BlogsType[],
    filter : string,
    currentPageNumber:number,
};

const initialState : appStateType =  {
    blogsTotalLength : 0,
    blogs:[],
    filter : 'love',
    currentPageNumber : 0
};

const appSlice = createSlice({
    name : 'appSlice',
    initialState,
    reducers : {

         setCurrentPageNumber : (state,action:PayloadAction<number>) => {
              state.currentPageNumber = action.payload;
         },
         setFilter:(state,action:PayloadAction<string>) => {
              state.filter = action.payload;
         },
         setBlogsLength : (state,action:PayloadAction<number>) => {
              state.blogsTotalLength = action.payload;
         },
         setBlogs : (state,action:PayloadAction<BlogsType[]>) => {
              state.blogs = action.payload;
         },
    }
});

export const {setCurrentPageNumber,setFilter,setBlogsLength,setBlogs} = appSlice.actions;
export default appSlice.reducer;
