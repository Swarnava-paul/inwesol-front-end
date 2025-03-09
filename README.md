# Blog listing assignment

# Tech Stack

  1. React
  2. TypeScript
  3. Redux

# Reason Behind choose Typescript with React

 -> React is a very good Javascript Library but react is struggled with typing in component props
 or state props or even data comes from api .
 so with the help of Typescript + React (tsx) we are able to acheive the static / strict type in our application

# Reason Behind choose Redux

 -> react state and also context api gives us the power of state to use any component but for contralized
 data container system we need to use Redux that gives us a central container of our all important states
 and as well as gives us the power to update the states by using actions functions.


# Major Performance Optimizations technique used

-> i use React code splitting concept to ensure application performance and improve the website loading time

   with the help of react lazy loading and suspense hook this is possible. if we setup our application pages
   without lazy loading all pages and all components related to those pages are download in client side 
   this increase loading time of our application as well as waste the client bandwidth.

   with the help of lazy loading pages are only download in client side when client request that page
   this is calls (demand paging).

