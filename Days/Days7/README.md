- Two types of routing:
1. client side routing
2. server side routing

- server side routing : you make a network call , and the page that about us page html is coming from server.

- client side server: you dont making any external api call while routing in the application ,the code is always there we just route on different page eg, react application .



1. Waht are the various ways to add images into our App? Explain with code example?
Ans. There arec four ways of adding images into our code 
  a. ES6 Modules 
    import image from "./myImage.jpg;

    function App(){
        return(
            <div>
            <img src={image} alt="">
            </div>
        )
    }
    
    b. Remote source
    function header(){
        const image= `http://...."
        return(
            <div>
            <img src={image}>
        )
    }
    c. BackgroundImage

    function Header(){
        return(
            <div className="background-image>
            </div>
        )
    }
    .background-image{
        background:url(`/myImage.jpg);
        height:200px;
        width:300px;
    }

    d. Public folder
    import myImage from //public/myImage.jpg;

    function App(){
        return(
            <div>
            <img arc={myImage}>
            </div>
        )
    }



2. Waht would happen if we consoel.log(useState())?
Ans.
useState() in the console gives two value in an array first is the initial value of the state and second is updating function.

const[count,setcount] = useState(0);
consoele.log(useState(0)) => [0,setCount] 

3. How will useEffect behave if we dont add a dependency array?
Ans. useEffect(()=>{

})
if we dont add a dependency array the component will render initially and after every re-render.

The behavior is useful but its essential to be cxautious bcz its lead to performance issues.

4. What is SPA?
Ans. SPA is single page application . It is a type of web application or website that interact with the iuser by dynamically re-writing the current web page rather than reloading the entire page.


5. What is SSR and CSR?
Ans. SSR: 
   How it works: 1. Every time, you click a link, your browser sends a request to the server.
   2. The server pricessse it, runs any backened logic and retiurns a full HTML page.
   3. The browser reloads completely.

   Eg-1. You visit/about.
   2 . Browser sends requets to a server.
   3.server returns entire HTML for ?about page.
   4.page relaods in the browser.

   Pros: 1. Better for SEO.
        2. Works even if javascript is disbaled.
        3. Easier to seciure sensitive data(done on server)
   Cons: 1. slower-page relaods on every navigation.
    2. More loads on the server.


  CSR:   
  How it works: 1. The server sends the HTNL+CSS (usually indes.html).
    2. After that, naviigation happens inside the browser , using javascript(eg. REACT Router)
    3. Only the necessary data (JSON,API calls ) is fetched - no full page relaods.

    Eg: 1. You visit/about for the first time  -> server sends index.html+js

    2. You click "conatct" -> recat router changes the URL to /contact without relaoding .
    3.It loads the contact component instantly in the browser.

    Pros: 1. Faster page navigation after first load.
       2. Less server load.
       3. Smooth user experience.


 key difference in SSP & CSR:
   SSR: Every route is handled by the erver, full page relaods.
   CSR: Routes are handled by the browser , no full relad after first page.
         