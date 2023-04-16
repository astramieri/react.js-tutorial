import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"; // webpack use a sort of "style loader"
import MyApp from './MyApp'; // WARN: do not use /App (it already exists!)

ReactDOM.render(<MyApp />, document.getElementById("root"));