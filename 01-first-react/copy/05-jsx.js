// React JSX (declarative)

const element = <h1 className="header">React JSX</h1>; // JSX returns objects

console.log(element);

/*
    {
        $$typeof: Symbol(react.element), 
        type: 'h1', 
        key: null, 
        ref: null, 
        props: {
            className: 'header', 
            children: 'React JSX'
        }
    }
*/

ReactDOM.render(element, document.getElementById("root"));
