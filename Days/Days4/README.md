1. Is JSX mandatory for React?
Ans. Jsx is a way of writing React but it doesnt mean that we cant write react code without jsx , it can be written by using cdn links and react.createElement.

2. Is ES6 mandatory for React?
Ans.  ES6 is a modern version of javascript that introduces powerful features like let and const , arrow function ,map(),destructing.

No, but it is highly recommended because react code is much easier and cleaner with it. because react uses arrow function , map(), destructiong.

3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
Ans. const Titlecomponenet=()=><h1>hello</h1> , youre referring to a component as a variable.

<TitleComponent/> ->common way to render a functional component in jSX.

<TitleComponent></TitleComponent> =>same as <TitleComponent/> but uses when we want to pass children.

4. How can i write comments in JSX?
Ans. Inside Jsx=> You must use curly braces {} and then use /*.

Outside JSX=> Use regualr JS comment style // or use/*.

5. What is <React.Fragment></React.Fragment> and <></>?
Ans. <React.Fragmnent>=> returns two sibling elements without adding an extra dom node like a <div>

<></> =>short syntax for React.Fragment.

6. Virtual Dom?
Ans. VirtualDom is a lightweight javascript object tahat is a copy of real dom . It is used by react to improve the performance of UI updates.

7. Waht is Reconcillation?
Ans. Process React uses to compare the new virtual Dom with thw previous virtual dom and efficiently updates the reacl dom with the minimum number of changes.

8. React Fiber=> New Reconcillation engine in React. It os the core algorithm used by react to render UI efficiently.
React Fiber made the process fastyer, interruptible, smarter.

9. Why we needs Keys? When we do need it?
Ans. Keys in react are special string attribute You must include when creating lists of elements(usually in map() loops).

They help react identify which items changes, were added or removed - making rendering more efficient.

10. Can we use index as keys?
Ans. Yes, but it is not recommended in all. cases. you can use index when:
   a.The list never changes(no add, delete).
   b.The data is simple and static.
   c.You dont have a unique id available.

11. Whats are Props in React ? Ways to?
Ans. Props are the properties. They are used to pass data  from one component to another, usually from  parent to child.

  a. Read only-> Props cannnot be changed inside the child.
  b.One-way -> Data flows from parent to child only.

 12. What is config Driven UI?
 Ans. It is a user interface taht is built and configured using a declaration configuration files or data structure rather than being hardCoded.

 Config is the data coming from the api which keeps on changing according to different factors like user, location etc. 




 


