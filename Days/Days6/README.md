1. What is MicroServices?
Ans. Microservices is an architectural style where a large application is built as a collection of small,independent services.
  - Each services focuses on a specific business capability(eg, Payment services, Order services, Notification services).
  - They run and deployes independently.
  - They communicate with each other via APIs and messaging queues.
  - Changing or upting one services doesnt require redeploying the whole application.
   
  - Benefits: easier scalabilty, faster deployment, fault isolation.

 2. What is Monolith Architecture?
 Ans. Monolithic Architecture is a traditional software design where the entire application is built as a single, unified test.
 - Any change requires rebuilding and redeploying the whole application.
 -  Scaling is done for the entire application even if only one feature require scaling.
 - This can slow down the developnment and make maintenance harder.

 3. Whart is the difference between Monolithic and Microservices?
 Ans. 1. In Monolithic , the entire application is built as a single and unified codebase, while in microservices , entire application is broken into smaller, independent services.

    2. In Monolithic , one change requires redeploying the whole application, in microservices , each setvices can be redployes independently.


4. Why do we need a useEffect hook?
Ans. The useEffect hook lets us perform side effects in functional components. A side effect is anything that affects something outside the components scope or needs to happen after the compoenent renders.

5. What is Optional Chaining?
Ans. Optional chaining is a way to check if something exists before trying to use it , without writing a lot of if condition.

6. What is shimmer UI?
Ans. Shimmer UI is a loading placeholder technique that shows a greyed-out or animated placeholder(often with a shimmering effect ) while real data is being fetched  or rendered.

7. What is difference between JS expression and JS statement?
Ans. JS expression  produces a value acn go inside {} in jsx eg, {2+2}, {user.name}.
   JS statement that performs an action, and cannot go directly inside jsx , eg if(LoggedIn){
    consoel.log("user is logged in")
   }

8. What is Conditional rendering?
Ans. It means showing different UI based on a condition. React check a condition- if its true, it render one thing, if its false, it renders something else.

9. What is CORS?
Ans. CORS  is a browser security poilcy that restricts cross-origin HTTP requests unless the server explicitly allows them using special headers.

10. What is async and await?
Ans. Async and await  make working with promises easier and more readable.
async marks a funtiona as a asychronous - it will always return a promis. 
await pause the execution inside an async function until the promise is resolved or rejected.
its lets you write asynchronous codecin a sychronous manner .


11. What is the user of const json= await data.json()?
Ans. data.json() is used to parse the JOSN  string returned by an apii into a javascript object so we can make with it directly in code.

