const element = 
(
  <div>
    <h1 className="header">React JSX</h1>
    <p>A paragraph</p>
  </div>
);

console.log(element);

ReactDOM.render(
  // WARN: you must return only one parent element for rendering (e.g. DIV)
  element,
  document.getElementById("root")
);
