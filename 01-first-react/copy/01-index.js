ReactDOM.render(
  <h1>Hello, React.js! (document)</h1>,
  document.getElementById("root")
);
ReactDOM.render(
  <h1>Hello, React.js! (query selector)</h1>,
  document.querySelector("#root")
);

const content = (
  <ul>
    <li>A line</li>
    <li>Another line</li>
  </ul>
);

ReactDOM.render(content, document.querySelector("#root"));
