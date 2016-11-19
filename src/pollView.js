import React from 'react';
import ReactDOM from "react-dom";
import PollPage from "../views/Components/PollPage.js";

let poll = document.querySelector('#poll');

ReactDOM.render(
    <PollPage/>, 
    poll
);
