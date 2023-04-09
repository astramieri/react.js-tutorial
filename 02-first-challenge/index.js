// WARN: remember: only one parent element!
const page = (
  <div>
    <img src="./react-logo.png" className="logo" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is mantained by Facebook</li>
      <li>Power thousands of enterprire app, including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
