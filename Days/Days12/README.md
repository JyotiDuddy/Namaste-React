1. What is Prop drilling?
Ans. Prop Drilling means passing data (prop) from a top-level (parent) component down through multiple layers of intermediatye child components-even if those middle components don't actually need the data themselves- just so that deeply nested component can access oit .

2. What is lifting the state up?
Ans. It means moving state from a child component into a common parent component, so taht multiple children can share and sync that state.


3. What is Context Provider and Context Consumer?
Ans. Context Provider - A provider is a special component taht comes from React.createContext().
It makes a value (state, function, object ) etc available to the child component without having to pass prop manually at every level.

Context Consumer- A consumer is a component that uses the value from the nearest matching Provider by using React.useContext() hook.

4. If you dont pass a value to the provider does it take the default value?
Ans.If you dont pass value to the provider -> it will still use the defau;t value given in createContext(defaultvalue).
If you dont provide a default in createContext()=> then the default is undefined.
If the provider does not need to have state, it can accept any value you give (a string, object, funtion, state etc).
